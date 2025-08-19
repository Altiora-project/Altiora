'use client'

import { useEffect, useState } from 'react'

import * as text from './data'
import styles from './styles.module.scss'
import clsx from 'clsx'

// import getServiceCardsDataAction from '@entities/service-cards/api/server-actions'
import { typeServiceCard } from '@entities/service-cards/types'

import { MainBlock } from '@shared/ui/_main-block'
import { Button } from '@shared/ui/button'
import ServiceCard from '@shared/ui/service-card'

interface serviceCardsProps {
  title: string
  description: string
  cards: {
    id: number
    title: string
    image: string
    description: string
  }[]
}

const ServiceCards: React.FC<serviceCardsProps> = ({ title, description, cards }) => {
  const [data, setData] = useState<typeServiceCard[]>([])
  const [isTablet, setIsTablet] = useState(false)
  const handleClick = () => {
    document.getElementById('form')?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    setIsTablet(744 <= window.innerWidth && window.innerWidth < 1920)
    setData(
      cards.splice(0, 6).map(item => ({
        id: item.id.toString(),
        title: item.title,
        text: item.description,
        icon: 'http://' + process.env.NEXT_PUBLIC_IMAGE_HOST + item.image
      }))
    )
  }, [cards])

  return (
    <div className={styles.container} id="services">
      <MainBlock
        topContent={<h2 id="digital">{title}</h2>}
        bottomContent={
          !isTablet && (
            <Button className={clsx(styles.button, styles.notTablet)} onClick={handleClick}>
              {
                <>
                  <span className={styles.long}>{text.button[1]}</span>
                  <span className={styles.short}>{text.button[0]}</span>
                </>
              }
            </Button>
          )
        }
        className={styles.block}
      >
        <div className={styles.description}>{description}</div>
        <h3 className={styles.title}>{text.subTitle}</h3>
        <div className={styles.cards}>
          {data?.map(item => (
            <ServiceCard key={item.id} {...item} />
          ))}
          {isTablet && <div className={styles.subtext}>{text.subText}</div>}
          {isTablet && (
            <Button className={clsx(styles.button, styles.notTablet)}>
              <span className={styles.long}>{text.button[1]}</span>
            </Button>
          )}
        </div>
      </MainBlock>
    </div>
  )
}

export default ServiceCards
