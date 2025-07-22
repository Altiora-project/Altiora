import { NotFound } from './not-found'
import classes from '../styles/not-found-block.module.scss'
import clsx from 'clsx'

export const NotFoundBlock: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className, ...otherProps }) => {
  return (
    <div className={clsx('container', classes.container, className)} {...otherProps}>
      <NotFound />
    </div>
  )
}
