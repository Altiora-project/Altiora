import React from 'react'
import { MainMenuMobile } from '@shared/ui/main-menu'
import type { typeMainMenuItem } from '@shared/ui/main-menu/types/types'
import { routes } from '@shared/configs/routes'
import { createRoute } from '@shared/configs/routes/create-rout.utils'

const testMenuList: typeMainMenuItem[] = [
  {
    label: 'Кто мы',
    url: routes.company
  },
  {
    label: 'Наши услуги',
    url: routes.services
  },
  {
    label: 'Комплексные решения',
    url: createRoute(routes.complexRout, { id: '1', value: 'value' })
  },
  {
    label: 'Партнеры',
    url: routes.partners
  },
  {
    label: 'Контакты',
    url: routes.contacs
  },
  {
    label: 'Home',
    url: routes.mainPage
  },
  {
    label: 'UI',
    url: routes.ui
  }
]

export const MainMenuMobileTest: React.FC = () => {
  return (
    <div
      style={{
        height: '500px',
        border: '1px solid #ccc',
        maxWidth: '400px',
        padding: '20px',
        display: 'flex',

        gap: '20px',
        margin: '10px 0',
        backgroundColor: 'var(--color-grey2)'
      }}
    >
      <h6 style={{ marginBottom: '15px', fontSize: '16px', color: 'white', maxWidth: '100px' }}>
        Тест компонента MainMenuMobile: чтобы отразился ☰, нужно чтобы ширина экрана была таблетной или мобильной
      </h6>
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          width: '100%'
        }}
      >
        <MainMenuMobile menuList={testMenuList} />
      </div>
    </div>
  )
}
