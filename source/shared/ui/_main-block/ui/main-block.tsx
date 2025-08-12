import classes from '../styles/styles.module.scss'
import type { typeMainBlockProps } from '../types/types'
import clsx from 'clsx'

export const MainBlock: React.FC<typeMainBlockProps> = ({
  topContent,
  children,
  bottomContent,
  className,
  ...otherProps
}) => {
  return (
    <div className={clsx(classes.container, classes.noise, className)} {...otherProps}>
      {topContent && (
        <div className={classes.topContainer}>
          <div className={classes.topContent}>{topContent}</div>
          <div className={classes.space}></div>
        </div>
      )}

      <div className={classes.content}>{children}</div>

      {bottomContent && (
        <div className={classes.bottomContainer}>
          <div className={classes.space}></div>
          <div className={classes.bottomContent}>{bottomContent}</div>
        </div>
      )}
    </div>
  )
}
