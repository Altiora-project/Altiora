import { UIButton } from '../../button'
import { UICard } from '../../card'
import { UICheckbox } from '../../checkbox'
import { UIMainBlock } from '../../main-block'
import classes from '../styles/styles.module.scss'

export const UIList: React.FC = () => {
  return (
    <div className={classes.container}>
      <UIMainBlock />

      <UIButton />

      {/* Добавляем компоненты ниже */}
      <UICheckbox />
      <UICard />
    </div>
  )
}
