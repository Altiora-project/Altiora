import classes from './styles.module.scss'
import type { typeHeaderProps } from './types'

import { siteName } from '@shared/lib/environment/public'
import { MainMenuDesktop, MainMenuMobile } from '@shared/ui/main-menu'

export const Header: React.FC<typeHeaderProps> = ({ menuList }) => {
  return (
    <header className={classes.header}>
      <span className={classes.logo}>{siteName}</span>

      <div className={classes.middleSection}>
        {menuList && <MainMenuDesktop menuList={menuList} />}
        {menuList && <MainMenuMobile menuList={menuList} />}
      </div>
    </header>
  )
}
