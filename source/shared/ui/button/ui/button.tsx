import React from 'react'

import classes from '../styles/styles.module.scss'
import { typeButtonProps } from '../types/types'
import clsx from 'clsx'

export const Button: React.FC<typeButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
  variant = 'primary',
  leftIcon,
  rightIcon,
  children,
  disabled,
  onClick,
  className,
  ...otherProps
}) => (
  <button
    className={clsx(classes.button, classes[variant], className)}
    disabled={disabled}
    onClick={onClick}
    {...otherProps}
  >
    {leftIcon && <span className={classes.leftIcon}>{leftIcon}</span>}
    {children}
    {rightIcon && <span className={classes.rightIcon}>{rightIcon}</span>}
  </button>
)
