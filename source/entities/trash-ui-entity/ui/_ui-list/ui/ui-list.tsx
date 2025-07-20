import { UIButton } from '../../button'
import { UICardComponent } from '../../card-component/card-component'
import { UIIcons } from '../../icons'
import { UIMainBlock } from '../../main-block'
import { UIMarquee } from '../../marquee'
import { UICheckbox } from '../../checkbox'
import classes from '../styles/styles.module.scss'
import { UIFormSubmitModal } from '../../form-submit-modal'

export const UIList: React.FC = () => {
  return (
    <div className={classes.container}>
      <UIMainBlock />
      <UIButton />

      <UIMarquee />
      <UICardComponent />
      <UIIcons />
      <UICheckbox />
      <UIFormSubmitModal />
      {/* Добавляем компоненты ниже */}
    </div>
  )
}
