import classes from '../styles/styles.module.scss'
import { typeButtonProps } from '../types/types'
import clsx from 'clsx'

export const Button: React.FC<typeButtonProps> = props => {
  const { className, variant = 'default', ...otherProps } = props

  return (
    <button className={clsx(classes.button, classes[variant], className)} {...otherProps}>
      {props.children}
    </button>
  )
}
