import { UIBadge } from '../../badge'
'use client'

import { UIButton } from '../../button'
import { UIInput } from '../../input'
import { UICardComponent } from '../../card-component/card-component'
import { UICheckbox } from '../../checkbox'
import { UIHeaderMenuDesktop } from '../../header-menu-desktop'
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

      <UIBadge />
      <UIHeaderMenuDesktop />
      <UISliderCard />
      {/* Добавляем компоненты ниже */}
      <UICheckbox />
      <MainMenuMobileTest />
      <UILogo />
      <UIFooterInfoBlock />
    </div>
  )
}
