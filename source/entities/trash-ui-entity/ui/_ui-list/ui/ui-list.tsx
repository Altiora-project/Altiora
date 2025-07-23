'use client'

import { UIButton } from '../../button'
import { UICardComponent } from '../../card-component/card-component'
import { UICheckbox } from '../../checkbox'
import { UIFooterInfoBlock } from '../../footer-info-block'
import { UIIcons } from '../../icons'
import { UIInput } from '../../input'
import { UILogo } from '../../logo'
import { UIMainBlock } from '../../main-block'
import { MainMenuMobileTest } from '../../main-menu-mobile-test'
import { UIMarquee } from '../../marquee'
import { UISliderCard } from '../../slider-card'
import { UIVideoFeature } from '../../video-feature'
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
      <MainMenuMobileTest />
      <UILogo />
      <UIVideoFeature />
      <UIFooterInfoBlock />
    </div>
  )
}
