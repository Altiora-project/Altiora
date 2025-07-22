'use client'

import { UIButton } from '../../button'
import { UICard } from '../../card'
import { UIInput } from '../../input'
import { UICardComponent } from '../../card-component/card-component'
import { UICheckbox } from '../../checkbox'
import { UIFooterInfoBlock } from '../../footer-info-block'
import { UIIcons } from '../../icons'
import { UILogo } from '../../logo'
import { UIMainBlock } from '../../main-block'
import { UIMarquee } from '../../marquee'
import { UISliderCard } from '../../slider-card'
import { MainMenuMobileTest } from '../../main-menu-mobile-test'

import classes from '../styles/styles.module.scss'

export const UIList: React.FC = () => {
  return (
    <div className={classes.container}>
      <UIMainBlock />

      <UIButton />
      <UIInput />
      <UIMarquee />
      <UICardComponent />
      <UIIcons />
      <UISliderCard />
      {/* Добавляем компоненты ниже */}
      <UICheckbox />
      <UICard />
      <MainMenuMobileTest />
      <UILogo />
      <UIFooterInfoBlock />
    </div>
  )
}
