import classes from './styles.module.scss'
import clsx from 'clsx'
import type { FC, HTMLAttributes } from 'react'

import { Footer } from '@widgets/footer'
import { HeroBlock } from '@widgets/hero-block'

import { MarqueeComponent } from '@shared/ui/marquee-component'

//TODO: убрать моки
const phrases = [
  'Разработка сайтов',
  'Работа с ИИ',
  'Разработка мобильных приложений',
  'UX/UI',
  'Разработка клиентских веб-сервисов',
  'Тестирование',
  'Разработка приложений в telegram',
  'Техническая поддержка продуктов'
]

export const MainPage: FC<HTMLAttributes<HTMLDivElement>> = ({ className, ...otherProps }) => {
  return (
    <div className={clsx(classes.wrapper, className)} {...otherProps}>
      <div className={classes.container}>
        <HeroBlock url={''} />
      </div>
      <MarqueeComponent phrases={phrases} />
      <div className={clsx(classes.content, classes.container)}>MAIN-PAGE CONTENT</div>
      <div className={classes.container}>
        <Footer />
      </div>
    </div>
  )
}
