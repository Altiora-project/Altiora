'use client'

import { CardComponent } from '@shared/ui/card-component'
import { FC, useEffect, useState } from 'react'
import classes from '../styles/styles.module.scss'
import clsx from 'clsx'
import { Button } from '@shared/ui/button'
import { typeAboutDataProps } from '../types'
import Image from 'next/image'
// import { MarkdownRenderer } from '@shared/lib/markdown'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'

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
        radius={'md'}
        background={'grey'}
        tag={'default'}
        className={clsx(classes.card, classes.firstCard)}
      >
        <div className={classes.cardContent}>
          <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
            {title}
          </ReactMarkdown>
        </div>
        <div className={classes.logoContainer}>
          <Image src="/logo.svg" width={131} height={131} alt="Логотип" className={classes.logo} />
        </div>
        Altiora — ваш надежный партнер в разработке, техническом и маркетинговом сопровождении продуктов.
      </CardComponent>

      <CardComponent
        radius={'md'}
        background={'primary'}
        tag={'default'}
        className={clsx(classes.card, classes.secondCard)}
      >
        5+ лет
      </CardComponent>

      <CardComponent
        radius={'md'}
        background={'grey'}
        tag={'default'}
        className={clsx(classes.card, classes.thirdCard)}
      >
        <div className={classes.cardContent}>
          <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
            {text}
          </ReactMarkdown>
        </div>

        {/* {products} */}
      </CardComponent>

      <CardComponent
        radius={'md'}
        background={'grey'}
        tag={'default'}
        className={clsx(classes.card, classes.fourthCard)}
      >
        <div className={classes.cardContent}>
          <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
            {text}
          </ReactMarkdown>
        </div>
        {/* {projects} */}
      </CardComponent>

      <CardComponent
        radius={'md'}
        background={'primary'}
        tag={'default'}
        className={clsx(classes.card, classes.fifthCard)}
      >
        100 %
      </CardComponent>

      <div className={clsx(classes.container_radius, classes.sixthCard)}>
        <div className={classes.content}>
          <CardComponent radius={'md'} background={'grey'} tag={'default'} className={clsx(classes.card)}>
            <div className={classes.cardContent}>
              <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
                {text}
              </ReactMarkdown>
            </div>
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
