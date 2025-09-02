import { FC } from 'react'

import classes from '../styles/styles.module.scss'
import { CardComponentProps } from '../types'
import clsx from 'clsx'
import Link from 'next/link'

export const CardComponent: FC<CardComponentProps> = ({
  radius,
  background,
  tag,
  href = '',
  children,
  className,
  ...otherProps
}) => {
  const cardClasses = clsx(classes.container, classes[radius], classes[background], classes.noiseEffect, className)

  if (tag === 'link') {
    return (
      <div className={cardClasses} {...otherProps}>
        <Link href={href ? href : '/'} {...otherProps}>
          {children}
        </Link>
      </div>
    )
  }

  return (
    <div className={cardClasses} {...otherProps}>
      {children}
    </div>
  )
}
