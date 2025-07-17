import React from 'react'
import { MainMenuMobile } from '../../../../shared/ui/main-menu'
import type { typeMainMenuItem } from '../../../../shared/ui/main-menu/types/types'

const testMenuList: typeMainMenuItem[] = [
  {
    label: 'Кто мы',
    url: '/'
  },
  {
    label: 'Наши услуги',
    url: '/services'
  },
  {
    label: 'Комплексные решения',
    url: '/complex-solutions'
  },
  {
    label: 'Партнеры',
    url: '/partners'
  },
  {
    label: 'Контакты',
    url: '/contacts'
  },

]

export const MainMenuMobileTest: React.FC = () => {
  return (
    <div style={{
      height: '500px',
      border: '1px solid #ccc',
      maxWidth: '400px',
      padding: '20px',
      display: 'flex',

      gap: '20px',
      margin: '10px 0',
      backgroundColor: 'var(--color-grey2)'
    }}>
      <h3 style={{ marginBottom: '15px', fontSize: '16px', color: 'white', maxWidth: '100px' }}>
        Тест компонента MainMenuMobile: чтобы отразился ☰, нужно чтобы ширина экрана была таблетной или мобильной
      </h3>
      <div style={{
        display: 'flex',
        justifyContent: 'flex-end',
        width: '100%'
      }}>
        <MainMenuMobile menuList={testMenuList} />
      </div>
    </div>
  )
} 