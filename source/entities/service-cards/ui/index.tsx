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

const ServiceCards = () => {
  const [data, setData] = useState<typeServiceCard[]>([])
  const [isTablet, setIsTablet] = useState(false)

  useEffect(() => {
    //getServiceCardsDataAction().then(res => setData(('data' in res && res.data.cards) || []))
    // TEST
    setIsTablet(744 <= window.innerWidth && window.innerWidth < 1920)

    fetch('https://d3462337-77f3-4977-bb62-55e280a4892a.mock.pstmn.io/service-cards')
      .then(res => res.json())
      .then(res => {
        const data = res.data.map((item: typeServiceCard & { icon: TrustedHTML }) => ({
          ...item,
          icon: <div dangerouslySetInnerHTML={{ __html: item.icon }} />
        }))
        setData(data)
      })
    // TEST
  }, [])

  return (
    <div className={styles.container} id="services">
      <MainBlock
        topContent={<h2>{text.title}</h2>}
        bottomContent={
          !isTablet && (
            <Button className={clsx(styles.button, styles.notTablet)}>
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
        <div className={styles.description}>
          {
            <>
              <span className={styles.short}>{text.description}</span>
              <span className={styles.long}>{text.descriptionLong}</span>
            </>
          }
        </div>
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
