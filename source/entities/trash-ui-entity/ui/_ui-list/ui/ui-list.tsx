import { UIBadge } from '../../badge'
import { UIButton } from '../../button'
import { UICardComponent } from '../../card-component/card-component'
import { UICheckbox } from '../../checkbox'
import { UIFooterInfoBlock } from '../../footer-info-block'
import { UIFormSubmitModal } from '../../form-submit-modal'
import { UIIcons } from '../../icons'
import { UIInput } from '../../input'
import { UILogo } from '../../logo'
import { UIMainBlock } from '../../main-block'
import { MainMenuMobileTest } from '../../main-menu-mobile-test'
import { UIMarquee } from '../../marquee'
import { UIServiceCard } from '../../ServiceCard'
import { UISliderCard } from '../../slider-card'
import { UILinkMenu } from '../../link-menu'
import { UIVideoFeature } from '../../video-feature'
import classes from '../styles/styles.module.scss'

import { UIHeroBlock } from '@entities/trash-ui-entity/ui/hero-block'

export const UIList: React.FC = () => {
  return (
    <div className={classes.container}>
      <UIMainBlock />

      {/* Добавляем компоненты ниже */}
      <UICheckbox />
      <UIMarquee />
      <UICardComponent />

      <UIIcons />

      <UIFormSubmitModal />
      {/* Добавляем компоненты ниже */}

      {/* Добавляем компоненты ниже */}
      <UISliderCard />
      <UIInput />
      <UIButton />
      <UICheckbox />
      <UIMarquee />
      <UICardComponent />
      <UIIcons />
      <UIHeroBlock />
      <UIBadge />
      <UISliderCard />
      <UIInput />
      <UIButton />
      <UICheckbox />
      <UIServiceCard />
      <MainMenuMobileTest />
      <UILogo />
      <UIVideoFeature />
      <UIFooterInfoBlock />

      <UILinkMenu />
    </div>
  )
}
