'use client'

import { CardComponent } from '@shared/ui/card-component'
import { FC, useEffect, useState } from 'react'
import classes from '../styles/styles.module.scss'
import clsx from 'clsx'
import { Button } from '@shared/ui/button'
import { typeAboutDataProps } from '../types'
import Image from 'next/image'
import { MarkdownRenderer } from '@shared/lib/markdown'

export const About: FC<typeAboutDataProps> = ({ data }) => {
  //   const { about, years, products, projects, percent, offer } = data
  const [title, text, hightlight1, hightlight2] = data

  const [offset, setOffset] = useState(0)

  useEffect(() => {
    setOffset(window.innerWidth)

    const handleResize = () => {
      setOffset(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div className={classes.container}>
      <CardComponent
        radius={'lg'}
        background={'grey'}
        tag={'default'}
        className={clsx(classes.card, classes.firstCard)}
      >
        <MarkdownRenderer content={title} />
        {/* <div>{about}</div> */}
        <div className={classes.logoContainer}>
          <Image src="/logo.svg" width={131} height={131} alt="Логотип" className={classes.logo} />
        </div>
        Altiora — ваш надежный партнер в разработке, техническом и маркетинговом сопровождении продуктов.
      </CardComponent>

      <CardComponent
        radius={'lg'}
        background={'primary'}
        tag={'default'}
        className={clsx(classes.card, classes.secondCard)}
      >
        <MarkdownRenderer content={hightlight1} className={classes.markdown} />
      </CardComponent>

      <CardComponent
        radius={'lg'}
        background={'grey'}
        tag={'default'}
        className={clsx(classes.card, classes.thirdCard)}
      >
        <MarkdownRenderer content={text} />
        {/* {products} */}
      </CardComponent>

      <CardComponent
        radius={'lg'}
        background={'grey'}
        tag={'default'}
        className={clsx(classes.card, classes.fourthCard)}
      >
        <MarkdownRenderer content={text} />
        {/* {projects} */}
      </CardComponent>

      <CardComponent
        radius={'lg'}
        background={'primary'}
        tag={'default'}
        className={clsx(classes.card, classes.fifthCard)}
      >
        {/* <MarkdownRenderer content={hightlight2} /> */}
        100 %
      </CardComponent>

      <div className={clsx(classes.container_radius, classes.sixthCard)}>
        <div className={classes.content}>
          <CardComponent radius={'lg'} background={'grey'} tag={'default'} className={clsx(classes.card)}>
            <MarkdownRenderer content={text} />
            {/* {offer} */}
          </CardComponent>
        </div>
        <div className={classes.bottomContainer}>
          <div className={classes.space}></div>
          <div className={classes.bottomContent}>
            <div>
              <Button disabled={false} onClick={() => {}} className={classes.button}>
                {offset < 1920 ? 'связаться' : 'связаться с нами'}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
