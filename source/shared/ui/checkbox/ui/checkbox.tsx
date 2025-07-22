import React from 'react'
import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import clsx from 'clsx'
import classes from '../styles/styles.module.scss'
import type { CheckboxProps } from '../types/types'
import { CheckIcon } from './check-icon'

export const Checkbox: React.FC<CheckboxProps> = ({ size = 'auto', className, ...props }) => {
  return (
    <CheckboxPrimitive.Root className={clsx(classes.checkbox, classes[`size-${size}`], className)} {...props}>
      <CheckboxPrimitive.Indicator>
        <CheckIcon />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}
