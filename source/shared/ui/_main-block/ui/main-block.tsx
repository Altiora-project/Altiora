import classes from '../styles/styles.module.scss'
import type { typeMainBlockProps } from '../types/types'
import clsx from 'clsx'

export const MainBlock: React.FC<typeMainBlockProps> = ({
  topContent,
  children,
  bottomContent,
  className,
  bottomStyles,
  topStyles,
  topSpace,
  botoomSpace,
  ...otherProps
}) => {
  return (
    <div className={clsx(classes.container, classes.noise, className)} {...otherProps}>
      <div className={clsx(classes.topContainer, topStyles)}>
        <div className={classes.topContent}>{topContent}</div>
        <div className={clsx(classes.space, classes.topSpace)}></div>
      </div>

      <div className={classes.content}>{children}</div>

      <div className={clsx(classes.bottomContainer, bottomStyles)}>
        <div className={clsx(classes.space, classes.botoomSpace)}></div>
        <div className={classes.bottomContent}>{bottomContent}</div>
      </div>
    </div>
  )
}
