import classes from './styles.module.scss'
import clsx from 'clsx'
import type { HTMLAttributes } from 'react'

export const MainPage: React.FC<HTMLAttributes<HTMLDivElement>> = ({ className, ...otherProps }) => {
  return (
    <div className={clsx(classes.container, className)} {...otherProps}>
      <h1>Main page</h1>
    </div>
  )
}
