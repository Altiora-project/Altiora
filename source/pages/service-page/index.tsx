import { FC, HTMLAttributes } from 'react'

import classes from './styles.module.scss'
import clsx from 'clsx'

export const ServicePage: FC<HTMLAttributes<HTMLDivElement>> = ({ className, ...otherProps }) => {
  return (
    <div className={clsx(classes.wrapper, className)} {...otherProps}>
      <h1>Services page</h1>
    </div>
  )
}
