import React from 'react'

import styles from '../styles/header-menu-desktop.module.scss'
import { HeaderMenuDesktopProps } from '../types/types'
import clsx from 'clsx'
import Link from 'next/link'
import { DropdownMenu } from 'radix-ui'

import { Icon } from '@shared/ui/icon'

export const HeaderMenuDesktop: React.FC<HeaderMenuDesktopProps> = ({ children, label }) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className={clsx(styles.trigger)}>
        <div className={clsx(styles.triggerContainer)}>
          {label}
          <Icon size="sm" icon="chevronDown" className={clsx(styles.icon)} />
        </div>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content className={clsx(styles.content)}>
        {children.map(item => (
          <DropdownMenu.Item key={item.label} className={clsx(styles.menuItemContainer)} asChild>
            <Link href={item.url} className={clsx(styles.menuItem)}>
              {item.label}
            </Link>
          </DropdownMenu.Item>
        ))}
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  )
}
