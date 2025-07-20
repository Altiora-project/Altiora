import classes from './styles.module.scss'
import clsx from 'clsx'
import { HTMLAttributes } from 'react'

export const ServicePage: React.FC<HTMLAttributes<HTMLDivElement>> = ({ className, ...otherProps }) => {
  return (
    <div className={clsx(classes.container, className)} {...otherProps}>
      <h1>Services page</h1>
    </div>
  )
}
