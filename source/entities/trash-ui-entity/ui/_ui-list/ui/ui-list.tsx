import { UIButton } from '../../button'
import { UICardComponent } from '../../card-component/card-component'
import { UICheckbox } from '../../checkbox'
import { UIIcons } from '../../icons'
import { UIMainBlock } from '../../main-block'
import { UIMarquee } from '../../marquee'
import classes from '../styles/styles.module.scss'

import { UIHeroBlock } from '@entities/trash-ui-entity/ui/hero-block'

export const UIList: React.FC = () => {
  return (
    <div className={classes.container}>
      {/* Добавляем компоненты ниже */}
      <UIMainBlock />
      <UIButton />
      <UIMarquee />
      <UICardComponent />
      <UIIcons />
      <UIHeroBlock />
      <UICheckbox />
    </div>
  )
}
