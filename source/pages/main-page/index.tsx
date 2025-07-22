import { siteName } from '@shared/lib/environment/public'
import type { HTMLAttributes } from 'react'
import classes from './styles.module.scss'
import clsx from 'clsx'

export const MainPage: React.FC<HTMLAttributes<HTMLDivElement>> = ({ className, ...otherProps }) => {
  return (
    <div className={clsx(classes.container, className)} {...otherProps}>
      <h1>
        Welcome to
        <br />
        {siteName}
      </h1>
    </div>
  )
}
