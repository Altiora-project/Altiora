'use client'

import { UIButton } from '../../button'
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
import { UIFormSubmitModal } from '../../form-submit-modal'

export const UIList: React.FC = () => {
  return (
    <div className={classes.container}>
      <UIMainBlock />
      <UIButton />
      <UIInput />
      <UIMarquee />
      <UICardComponent />
      <UIIcons />
      <UICheckbox />
      <UIFormSubmitModal />
      {/* Добавляем компоненты ниже */}
      <UISliderCard />
      {/* Добавляем компоненты ниже */}
      <UICheckbox />
      <MainMenuMobileTest />
      <UILogo />
      <UIFooterInfoBlock />
    </div>
  )
}
