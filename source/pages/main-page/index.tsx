import classes from './styles.module.scss'
import clsx from 'clsx'
import type { FC, HTMLAttributes } from 'react'
import { getPageDataAction } from '@entities/main-page/api/server-actions'
import { NotFound } from '@shared/ui/not-found'
import { HeroSection } from '@features/hero-section'
import { FooterSection } from '@features/footer-section'
import { GetPartners } from '@features/partners/partners'
import { ServicesPromoBlock } from '@features/services-promo-block'

export const MainPage: FC<HTMLAttributes<HTMLDivElement>> = async ({ className, ...otherProps }) => {
  const response = await getPageDataAction()

  if (!response) return <NotFound />
  if ('error' in response) return <NotFound />

  const pageData = response.data.data

  const phrases = pageData.services_data.map(service => service.name)
  const services = pageData.services_data.map((service, index) => {
    return {
      title: service.name,
      description: service.info,
      actionLink: 'string',
      tagList: service.tags
    }
  })

  //TODO: убрать моки когда будут данные с бека
  const contacts: {
    type: 'address' | 'email' | 'phone'
    title: string
  }[] = [
    {
      type: 'email',
      title: pageData.contact_email
    },
    {
      type: 'phone',
      title: pageData.contact_phone
    },
    {
      type: 'address',
      title: pageData.contact_address
    }
  ]
  const documents = [
    {
      url: '',
      title: 'Политика конфиденциальности'
    },
    {
      url: '',
      title: 'Согласие на обработку персональных данных'
    }
  ]
  const requisites = ['г Ростов-на-Дону Будённовский пр-т 33', 'ИНН 6164143256', 'ОГРН 1236100034708', 'ОКВЭД2 62.02']

  console.log(pageData.services_data)

  return (
    <div className={clsx(classes.wrapper, className)} {...otherProps}>
      <HeroSection title={pageData.hero_title} imgUrl={pageData.hero_image} phrases={phrases} />

      <div className={clsx(classes.content, classes.container)}>
        <ServicesPromoBlock
          title={pageData.services_section_title}
          slides={pageData.case_studies_data}
          services={services}
        />
      </div>
      <div className={classes.partnersSection}>
        <GetPartners header={pageData.partners_section_title} partners={pageData.partners_data} />
      </div>
      <div className={classes.container}>
        <FooterSection
          title={pageData.contacts_title}
          contacts={contacts}
          requisites={requisites}
          documents={documents}
        />
      </div>
    </div>
  )
}
