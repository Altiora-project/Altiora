import { UIButton } from '../../button'
import { UIMainBlock } from '../../main-block'
import { UIMarquee } from '../../marquee'
import classes from '../styles/styles.module.scss'

export const UIList: React.FC = () => {
  return (
    <div className={classes.container}>
      <UIMainBlock />

      <UIButton />

      <UIMarquee />
      {/* Добавляем компоненты ниже */}
    </div>
  )
}
