import classes from './styles.module.scss'
import clsx from 'clsx'
import type { FC, HTMLAttributes } from 'react'

import { Footer } from '@widgets/footer'

import { GetAbout } from '@features/about'
import { HeroSection } from '@features/hero-section'
import { GetPartners } from '@features/partners/partners'
import { ServicesPromoBlock } from '@features/services-promo-block'
import { StartupLab } from '@features/startup-lab-section'
import VideoFeature from '@features/video-feature'

import { getPageDataAction } from '@entities/main-page/api/server-actions'
import ServiceCards from '@entities/service-cards'

import { NotFound } from '@shared/ui/not-found'
import { OrderForm } from '@shared/ui/order-form'

export const MainPage: FC<HTMLAttributes<HTMLDivElement>> = async ({ className, ...otherProps }) => {
  const response = await getPageDataAction()

  if (!response || 'error' in response || !response.data?.data) {
    return <NotFound />
  }

  const pageData = response.data.data
  // if (!pageData?.services_data || !pageData.hero_title || !pageData.hero_image || !pageData.case_studies_data) {
  //   return <NotFound />
  // }

  const phrases = pageData.services_data.map(service => service.name)
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

      <div className={clsx(classes.container)}>
        <GetAbout data={[pageData.about_title, pageData.about_text, pageData.highlight_1, pageData.highlight_2]} />
        <div className={clsx(classes.content)} id="services">
          <ServicesPromoBlock
            title={pageData.services_section_title}
            slides={Array.isArray(pageData.case_studies_data) ? pageData.case_studies_data : []}
            services={services}
          />
        </div>

        <div className={clsx(classes.content)} id="laboratory">
          <StartupLab
            info1={pageData?.lab_description}
            cards={
              Array.isArray(pageData?.labcart_data)
                ? [...pageData.labcart_data]
                  .sort((a, b) => a.id - b.id)
                  .map(card => ({
                    imageLink: 'http://' + process.env.NEXT_PUBLIC_IMAGE_HOST + card.image,
                    title: card.title,
                    info: card.description
                  }))
                : []
            }
            info2={pageData?.lab_description_ps}
            contactURL="#form"
          />
        </div>

        <div className={clsx(classes.content)} id="digital">
          <ServiceCards />
        </div>

        <div className={clsx(classes.content)} id="tokenization">
          <VideoFeature />
        </div>

        <div className={clsx(classes.content, classes.partnersSection)} id="partners">
          <GetPartners header={pageData.partners_section_title} partners={pageData.partners_data} />
        </div>

        <div id="form">
          <OrderForm />
        </div>

        {/* <div className={classes.contentContainer}>  TODO: убрать, если код выше не сломается
        <div className={classes.container}>
          <StartupLab
            info1={pageData.lab_description}
            cards={pageData.labcart_data
              .sort((a, b) => a.id - b.id)
              .map(card => {
                return {
                  imageLink: process.env.NEXT_PUBLIC_IMAGE_HOST + card.image,
                  title: card.title,
                  info: card.description
                }
              })}
            info2={pageData.lab_description_ps}
            contactURL="/contact"
          />
        </div>

        <div className={clsx(classes.content, classes.container)}>
          <ServiceCards />
        </div>
        <div className={clsx(classes.content, classes.container)}>
          <VideoFeature />
        </div>
        <div className={clsx(classes.content, classes.partnersSection)}>
          <GetPartners header={pageData.partners_section_title} partners={pageData.partners_data} />
        </div>
        <div className={classes.container}>
          <OrderForm />
        </div>
      </div> */}

        <div className={classes.container}>
          <Footer />
        </div>
      </div>
    </div>
  )
}
