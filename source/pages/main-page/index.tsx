import classes from './styles.module.scss'
import clsx from 'clsx'
import { notFound } from 'next/navigation'
import type { FC, HTMLAttributes } from 'react'

import { Footer } from '@widgets/footer'

import { GetAbout } from '@features/about'
import { HeroSection } from '@features/hero-section'
import { GetPartners } from '@features/partners/partners'
import { ServicesPromoBlock } from '@features/services-promo-block'
import { StartupLab } from '@features/startup-lab-section'
import VideoFeature from '@features/video-feature'

import DigitalMarketing from '@entities/digital-marketing'
import { getPageDataAction } from '@entities/main-page/api/server-actions'

import { OrderForm } from '@shared/ui/order-form'

export const MainPage: FC<HTMLAttributes<HTMLDivElement>> = async ({ className, ...otherProps }) => {
  const response = await getPageDataAction()

  if (!response || 'error' in response) throw new Error(response.error.message)

  if (!response.data?.data) return notFound()

  const pageData = response.data.data
  // if (!pageData?.services_data || !pageData.hero_title || !pageData.hero_image || !pageData.case_studies_data) {
  //   return <NotFound />
  // }
  const labCards = Array.isArray(pageData?.labcart_data) ? pageData?.labcart_data : []

  const slides = Array.isArray(pageData.case_studies_data) ? pageData?.case_studies_data : []

  const aboutData = [pageData.about_title, pageData.about_text, pageData.highlight_1, pageData.highlight_2]

  const phrases = Array.isArray(pageData.services_running_line) ? pageData.services_running_line : []

  const services = pageData.services_data.map(service => {
    return {
      id: service.id,
      slug: service.slug,
      title: service.name,
      description: service.info,
      actionLink: 'string',
      tagList: service.tags
    }
  })

  return (
    <div className={clsx(classes.wrapper, className)} {...otherProps}>
      <HeroSection title={pageData.hero_title} imgUrl={pageData.hero_image} phrases={phrases} />

      <div className={'container'}>
        <GetAbout data={aboutData} />

        <ServicesPromoBlock
          title={pageData.services_section_title}
          slides={slides}
          services={services}
          id={'services'}
        />

        <StartupLab
          cardCount={3}
          cards={labCards}
          info1={pageData?.lab_description}
          info2={pageData?.lab_description_ps}
          contactURL="#form"
        />

        <DigitalMarketing cards={pageData?.labcart_data} />

        <VideoFeature
          title={pageData.tokenization_title}
          description={pageData.tokenization_description}
          video={pageData.tokenization_video_url}
          more={pageData.tokenization_links}
        />
      </div>

      <GetPartners header={pageData.partners_section_title} partners={pageData.partners_data} />

      <div className={'container'}>
        <OrderForm />

        <Footer title={pageData.contacts_title} />
      </div>
    </div>
  )
}
