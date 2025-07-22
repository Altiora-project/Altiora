import clsx from 'clsx'
import classes from '../styles/not-found.module.scss'

export const NotFound: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className, ...otherProps }) => {
  return (
    <div className={clsx(classes.notFoundContainer, className)} {...otherProps}>
      <h2>404 Not Found</h2>
    </div>
  )
}
