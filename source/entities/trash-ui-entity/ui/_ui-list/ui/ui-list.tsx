import { UIButton } from '../../button'
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
      <UIIcons />

      {/* Добавляем компоненты ниже */}
      <UICheckbox />
    </div>
  )
}
