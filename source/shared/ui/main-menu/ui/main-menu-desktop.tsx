import classes from '../styles/main-menu-desktop.module.scss'
import type { typeMainMenuProps } from '../types/types'
import clsx from 'clsx'
import Link from 'next/link'

export const MainMenuDesktop: React.FC<typeMainMenuProps> = ({ menuList, className, ...otherProps }) => {
  return (
    <div className={clsx(classes.desktopMenuContainer, className)} {...otherProps}>
      {menuList.map(item => (
        <Link href={item.url} key={item.label} prefetch={false}>
          {item.label}
        </Link>
      ))}
    </div>
  )
}
