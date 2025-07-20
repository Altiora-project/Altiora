import { UIButton } from '../../button'
import { UICardComponent } from '../../card-component/card-component'
import { UIIcons } from '../../icons'
import { UIMainBlock } from '../../main-block'
import { UIMarquee } from '../../marquee'
import { UICheckbox } from '../../checkbox'
import classes from '../styles/styles.module.scss'

export const UIList: React.FC = () => {
  return (
    <div className={classes.container}>
      <UIMainBlock />

      <UIButton />

      <UIMarquee />
      <UICardComponent />

      <UIIcons />

      {/* Добавляем компоненты ниже */}
      <UICheckbox />
    </div>
  )
}
