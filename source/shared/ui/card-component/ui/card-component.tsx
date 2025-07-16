import { FC } from 'react'
import classes from '../styles/styles.module.scss'
import { CardComponentProps } from '../types'
import clsx from 'clsx'
import Link from 'next/link'

export const CardComponent: FC<CardComponentProps> = ({ radius, background, tag, href, children, ...otherProps }) => {
  if (tag === 'link') {
    return (
      <Link
        href={href ? href : '/'}
        className={clsx(classes.container, classes[radius], classes[background])}
        {...otherProps}
      >
        {children}
      </Link>
    )
  }

  return (
    <div className={clsx(classes.container, classes[radius], classes[background])} {...otherProps}>
      {children}
    </div>
  )
}
