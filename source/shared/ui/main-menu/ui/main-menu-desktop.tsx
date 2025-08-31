import { FC } from 'react'

import classes from '../styles/main-menu-desktop.module.scss'
import type { typeMainMenuProps } from '../types/types'
import clsx from 'clsx'
import Link from 'next/link'

import { HeaderMenuDesktop } from '@shared/ui/header-menu-desktop'

export const MainMenuDesktop: FC<typeMainMenuProps> = ({ menuList, className, ...otherProps }) => {
  return (
    <div className={clsx(classes.desktopMenuContainer, className)} {...otherProps}>
      {menuList.map(item =>
        item.children && item.children.length ? (
          <HeaderMenuDesktop key={item.label} label={item.label}>
            {item.children.filter(child => child.url).map(child => ({ url: child.url as string, label: child.label }))}
          </HeaderMenuDesktop>
        ) : (
          <Link href={item.url!} key={item.label} prefetch={false}>
            {item.label}
          </Link>
        )
      )}
    </div>
  )
}
