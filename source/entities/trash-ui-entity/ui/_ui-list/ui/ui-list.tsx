import { UIButton } from '../../button'
import { UIIcons } from '../../icons'
import { UIMainBlock } from '../../main-block'
import classes from '../styles/styles.module.scss'

export const UIList: React.FC = () => {
  return (
    <div className={classes.container}>
      <UIMainBlock />

      <UIButton />

      <UIIcons />

      {/* Добавляем компоненты ниже */}
    </div>
  )
}
