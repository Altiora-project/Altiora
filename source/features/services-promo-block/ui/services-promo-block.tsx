import classes from '../styles/styles.module.scss'
import { FC } from 'react'
import { typeServicesPromoBlockProps } from '@features/services-promo-block/types/types'
import Link from 'next/link'
import { SliderCard } from '@shared/ui/slider-card'
import { Slider } from '@shared/ui/slider'
import { ProductCard } from '@shared/ui/product-card'
import { routes } from '@shared/configs/routes'

export const ServicesPromoBlock: FC<typeServicesPromoBlockProps> = ({ title, slides, services }) => {
  const sliderCards = slides?.map((card, index) => {
    return <SliderCard key={index} title={card.name} description={card.info} tags={card.tags} />
  })

  const serviceCards = services.map((service, index) => {
    return (
      <ProductCard
        key={index}
        title={service.title}
        description={service.description}
        actionLink={`${routes.services}/${service.slug}`}
        tagList={service.tagList}
        className={classes.productCard}
      />
    )
  })

  return (
    <div className={classes.wrapper}>
      <div className={classes.header}>
        <div className={classes.headerTitle}>
          <h2>{title}</h2>
          <h3>под ваши цифровые задачи</h3>
          <Link href={'/'} className={classes.link}>
            СМОТРЕТЬ ВСЕ ПРОЕКТЫ
          </Link>
        </div>
        <Slider cards={sliderCards} />
      </div>
      <div className={classes.content}>{serviceCards}</div>
    </div>
  )
}
