import classes from '../styles/styles.module.scss'
import { typeButtonProps } from '../types/types'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  onMouseEnter?: React.MouseEventHandler<HTMLButtonElement>
  onMouseLeave?: React.MouseEventHandler<HTMLButtonElement>
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  className?: string
  style?: React.CSSProperties
  children?: React.ReactNode
  id?: string
}
import clsx from 'clsx'

export const Button: React.FC<ButtonProps> = props => {
  const {
    onClick,
    onMouseEnter,
    onMouseLeave,
    disabled,
    type,
    className,
    style,
    children,
    id,
    variant = 'primary',
    leftIcon,
    rightIcon,
    ...otherProps
  } = props

  return (
    <button
      className={clsx(classes.button, classes[variant], className)}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      disabled={disabled}
      type={type}
      style={style}
      id={id}
      {...otherProps}
    >
      {leftIcon && <span className={classes.leftIcon}>{leftIcon}</span>}
      {children}
      {rightIcon && <span className={classes.rightIcon}>{rightIcon}</span>}
    </button>
  )
}
