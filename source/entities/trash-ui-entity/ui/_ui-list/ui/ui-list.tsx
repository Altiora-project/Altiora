import { UIBadge } from '../../badge'
import { UIButton } from '../../button'
import { UICardComponent } from '../../card-component/card-component'
import { UICheckbox } from '../../checkbox'
import { UIHeaderMenuDesktop } from '../../header-menu-desktop'
import { UIIcons } from '../../icons'
import { UIMainBlock } from '../../main-block'
import { UIMarquee } from '../../marquee'
import classes from '../styles/styles.module.scss'

export const UIList: React.FC = () => {
  return (
    <div className={classes.container}>
      <UIMainBlock />

      <UIButton />

      <UIMarquee />
      <UICardComponent />

      <UIIcons />

      <UIBadge />
      <UIHeaderMenuDesktop />

      {/* Добавляем компоненты ниже */}
      <UICheckbox />
    </div>
  )
}
