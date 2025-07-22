import type { HTMLAttributes } from 'react'
import classes from './styles.module.scss'
import clsx from 'clsx'
import { UIList } from '@entities/trash-ui-entity'

export const UIPage: React.FC<HTMLAttributes<HTMLDivElement>> = ({ className, ...otherProps }) => {
  return (
    <div className={clsx('container', classes.container, className)} {...otherProps}>
      <h1>UI</h1>

      <UIList />
    </div>
  )
}
