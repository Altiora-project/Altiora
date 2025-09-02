import classes from '../styles/main-menu-mobile.module.scss'
import type { typeMainMenuProps } from '../types/types'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import Link from 'next/link'
import { NavIcon } from './navicon'
import clsx from 'clsx'

export const MainMenuMobile: React.FC<typeMainMenuProps> = ({ menuList }) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className={classes.mobileMenuContainer}>
        <NavIcon />
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className={classes.menuContainer} align="end" side="bottom">
          {menuList
            .filter(item => item.url)
            .map((item, cnt) =>
              item.children ? (
                item.children.map((item, index) => (
                  <DropdownMenu.Item className={classes.link} key={index}>
                    <Link href={item.url as string}>{item.label}</Link>
                  </DropdownMenu.Item>
                ))
              ) : (
                <DropdownMenu.Item className={classes.link} key={cnt} asChild>
                  <Link href={item.url as string}>{item.label}</Link>
                </DropdownMenu.Item>
              )
            )}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
