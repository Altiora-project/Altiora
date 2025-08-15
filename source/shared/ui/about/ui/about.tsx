'use client'

import { CardComponent } from '@shared/ui/card-component'
import { FC, useEffect, useState } from 'react'
import classes from '../styles/styles.module.scss'
import clsx from 'clsx'
import { Button } from '@shared/ui/button'
import { typeAboutDataProps } from '../types'
import Image from 'next/image'
// import { MarkdownRenderer } from '@shared/lib/markdown'
// import ReactMarkdown from 'react-markdown'
// import rehypeRaw from 'rehype-raw'
// import remarkGfm from 'remark-gfm'

export const About: FC<typeAboutDataProps> = ({ data }) => {
  //заглушка
  console.log(data)
  // TODO: заменить хардкод на маркдауны(!!!)
  //    <div className={classes.cardContent}>
  //   <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
  //     {text}
  //   </ReactMarkdown>
  // </div>

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
        <div className={classes.firstCardContent} id="company">
          <div className={clsx(classes.whiteText, classes.titleFontMedium)}>
            <span className={clsx(classes.primaryText, classes.bold, classes.titleFontBig, classes.fontSecondary)}>
              Будущее
            </span>{' '}
            технологий — для вашего бизнеса
            <span className={clsx(classes.primaryText, classes.bold, classes.titleFontBig, classes.fontSecondary)}>
              {' '}
              сегодня
            </span>
          </div>
          <div className={classes.logoContainer}>
            <Image src="/logo.svg" width={131} height={131} alt="Логотип" className={classes.logo} />
          </div>
          <div className={clsx(classes.whiteText, classes.subTitle)}>
            <span className={clsx(classes.bold, classes.fontSecondary)}>Altiora</span> — ваш надежный партнер в
            разработке, техническом и маркетинговом сопровождении продуктов.
          </div>
        </div>
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
        <div className={clsx(classes.greyText, classes.titleFontNormal, classes.light)}>
          Мы&nbsp;
          <span className={clsx(classes.whiteText, classes.normal)}>создаем&nbsp;технологичные&nbsp;продукты</span>,
          объединяя экспертизу в разработке, аналитике и продвижении. Наша мультидисциплинарная команда реализует
          проекты <span className={clsx(classes.whiteText, classes.normal)}>любой сложности </span>— от первых
          прототипов до масштабируемых digital-решений.
        </div>
      </CardComponent>

      <CardComponent
        radius={'md'}
        background={'grey'}
        tag={'default'}
        className={clsx(classes.card, classes.fourthCard)}
      >
        <div className={clsx(classes.greyText, classes.titleFontNormal)}>
          <span className={clsx(classes.whiteText, classes.normal)}>Каждый проект</span> мы{' '}
          <span>ведем от концепции до масштабирования</span>, используя гибкие методологии и проверенные технологические
          решения, чтобы достичь результата в согласованные сроки{' '}
          <span className={clsx(classes.whiteText, classes.normal)}>с гарантией</span>
        </div>
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
          <div className={clsx(classes.greyText, classes.titleFontNormal, classes.footerCard, classes.light)}>
            Специальное предложение для новых клиентов:
            <span className={clsx(classes.whiteText, offset <= 740 ? '' : classes.bold)}>
              Первая консультация с аудитом проекта —
              <span className={clsx(classes.primaryText, offset <= 740 ? '' : classes.bold)}> бесплатно</span>
            </span>
            <br />
            <span className={clsx(classes.whiteText, classes.titleFontSmall, classes.normal)}>
              Оставьте заявку до 30 сентября — получите тариф «Старт» c 15% скидкой
            </span>
          </div>
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
