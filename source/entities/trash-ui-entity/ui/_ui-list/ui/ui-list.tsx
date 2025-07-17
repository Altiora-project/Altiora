import { UIButton } from '../../button'
import { UICardComponent } from '../../card-componet/card-component'
import { UIMainBlock } from '../../main-block'
import classes from '../styles/styles.module.scss'

export const UIList: React.FC = () => {
  return (
    <div className={classes.container}>
      <UIMainBlock />

      <UIButton />

      <UICardComponent />

      {/* Добавляем компоненты ниже */}
    </div>
  )
}
