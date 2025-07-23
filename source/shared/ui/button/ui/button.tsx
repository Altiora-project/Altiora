import React from 'react'
import clsx from 'clsx'
import classes from '../styles/styles.module.scss'

export interface ButtonProps {
  variant?: 'primary' | 'secondary'
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  children?: React.ReactNode
  disabled?: boolean
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  leftIcon,
  rightIcon,
  children,
  disabled,
  onClick
}) => (
  <button className={clsx(classes.button, classes[variant])} disabled={disabled} onClick={onClick}>
    {leftIcon && <span className={classes.leftIcon}>{leftIcon}</span>}
    {children}
    {rightIcon && <span className={classes.rightIcon}>{rightIcon}</span>}
  </button>
)
