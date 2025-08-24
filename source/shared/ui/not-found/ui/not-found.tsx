import classes from '../styles/not-found.module.scss'
import clsx from 'clsx'
import Link from 'next/link'

import { routes } from '@shared/configs/routes'
import { Button } from '@shared/ui/button'

export const NotFound: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className, ...otherProps }) => {
  return (
    <div className={clsx(classes.notFoundContainer, className)} {...otherProps}>
      <div className={classes.errorCode}>404</div>
      <div className={classes.textSection}>
        <h1 className={classes.title}>Страница не&nbsp;найдена</h1>
        <p className={classes.description}>
          Похоже, страница, которую вы ищете, была перемещена, удалена или не&nbsp;существует. Приносим свои искренние
          извинения за&nbsp;причиненные неудобства!
        </p>
        <Link href={routes.mainPage}>
          <Button>Вернуться на&nbsp;главную</Button>
        </Link>
      </div>
    </div>
  )
}
