import React from 'react'
import clsx from 'clsx'
import classes from '../styles/styles.module.scss'
import { typeButtonProps } from '../types/types'

export const Button: React.FC<typeButtonProps> = ({
  variant = 'primary',
  leftIcon,
  rightIcon,
  children,
  disabled,
  onClick,
  ...otherProps
}) => (
  <button className={clsx(classes.button, classes[variant])} disabled={disabled} onClick={onClick} {...otherProps}>
    {leftIcon && <span className={classes.leftIcon}>{leftIcon}</span>}
    {children}
    {rightIcon && <span className={classes.rightIcon}>{rightIcon}</span>}
  </button>
)
