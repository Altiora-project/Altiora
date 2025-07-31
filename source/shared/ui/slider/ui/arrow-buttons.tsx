import React from 'react'
import clsx from 'clsx'
import classes from '../styles/styles.module.scss'
import { Icon } from '@shared/ui/icon'
import { PropType } from '../types'

export const PrevButton: React.FC<PropType> = props => {
  const { children, ...otherProps } = props

  return (
    <button className={clsx(classes.button, classes.button__prev)} type="button" {...otherProps}>
      <Icon size={'sm'} icon="chevronLeft" className={classes.button__svg} />
    </button>
  )
}

export const NextButton: React.FC<PropType> = props => {
  const { children, ...otherProps } = props

  return (
    <button className={clsx(classes.button, classes.button__next)} type="button" {...otherProps}>
      <Icon size={'sm'} icon="chevronRight" className={classes.button__svg} />
    </button>
  )
}
