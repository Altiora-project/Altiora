'use client'
import classes from './styles.module.scss'
import type { typeHeaderProps } from './types'

import { Button } from '@shared/ui/button'
import { Logo } from '@shared/ui/logo'
import { MainMenuDesktop, MainMenuMobile } from '@shared/ui/main-menu'
import { useRouter } from 'next/navigation'

export const Header: React.FC<typeHeaderProps> = ({ menuList, isErrorPage }) => {
  const router = useRouter()

  const handleClick = () => {
    if (isErrorPage) {
      window.location.reload()
      localStorage.setItem('redirectAfterReload', '/#form')
    }
  }

  return (
    <header className={classes.header}>
      <div className={classes.logoSection}>
        <Logo variant="long" className={classes.logo} />
      </div>
      <div className={classes.menuSection}>
        {menuList && (
          <nav className={classes.desktopMenu} aria-label="Главное меню">
            <MainMenuDesktop menuList={menuList} />
          </nav>
        )}
        {menuList && (
          <nav className={classes.mobileMenu} aria-label="Главное меню">
            <MainMenuMobile menuList={menuList} />
          </nav>
        )}
      </div>
      <div className={classes.buttonSection}>
        {isErrorPage ? (
          <Button variant="primary" onClick={handleClick}>
            Связаться с нами
          </Button>
        ) : (
          <a href="#form">
            <Button variant="primary">Связаться с нами</Button>
          </a>
        )}
      </div>
    </header>
  )
}
