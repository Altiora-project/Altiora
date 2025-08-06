import classes from '../styles/main-menu-desktop.module.scss'
import type { typeMainMenuProps } from '../types/types'
import clsx from 'clsx'
import Link from 'next/link'
import { HeaderMenuDesktop } from '@shared/ui/header-menu-desktop'

export const MainMenuDesktop: React.FC<typeMainMenuProps> = ({ menuList, className, ...otherProps }) => (
  <div className={clsx(classes.desktopMenuContainer, className)} {...otherProps}>
    {menuList.map(item =>
      item.children && item.children.length ? (
        <HeaderMenuDesktop
          key={item.label}
          label={item.label}
          children={item.children
            .filter(child => child.url)
            .map(child => ({ url: child.url as string, label: child.label }))}
        />
      ) : (
        <Link href={item.url!} key={item.label} prefetch={false}>
          {item.label}
        </Link>
      )
    )}
  </div>
)
