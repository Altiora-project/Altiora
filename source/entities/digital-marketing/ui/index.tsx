'use client'

import { FC } from 'react'

import * as text from './data'
import styles from './styles.module.scss'
import clsx from 'clsx'
import Link from 'next/link'

import { typeDigitalMarketingProps } from '@entities/digital-marketing/types'

import { MainBlock } from '@shared/ui/_main-block'
import { Button } from '@shared/ui/button'
import ServiceCard from '@shared/ui/service-card'

const DigitalMarketing: FC<typeDigitalMarketingProps> = ({ cards }) => {
  const labsCards = (cards ?? [])
    .sort((a, b) => a.id - b.id)
    .filter(card => card.id > 3)
    .map(card => ({
      id: card.id,
      imageLink: 'http://' + process.env.NEXT_PUBLIC_IMAGE_HOST + card.image,
      title: card.title,
      info: card.description
    }))

  const bottomContent = () => {
    return (
      <Link href="#form">
        <Button className={styles.button}>
          <span className={styles.long}>{text.button[1]}</span>
          <span className={styles.short}>{text.button[0]}</span>
        </Button>
      </Link>
    )
  }

  return (
    <div className={styles.container} id={'digital'}>
      <MainBlock
        topContent={<h2>{text.title}</h2>}
        bottomContent={bottomContent()}
        bottomStyles={styles.bottomContainer}
      >
        <div className={styles.description}>
          <span className={styles.short}>{text.description}</span>
          <span className={styles.long}>{text.descriptionLong}</span>
        </div>
        <h3 className={styles.title}>{text.subTitle}</h3>
        <div className={styles.cards}>
          {labsCards?.map(item => (
            <ServiceCard key={item.id} icon={item.imageLink} title={item.title} text={item.info} />
          ))}
          <Link href="#form">
            <Button className={clsx(styles.button, styles.hidden)}>
              <span className={styles.long}>{text.button[1]}</span>
            </Button>
          </Link>
        </div>
      </MainBlock>
    </div>
  )
}

export default DigitalMarketing
