import { routes } from '@shared/configs/routes'
import { getMenuUrl } from '@shared/configs/routes/menu.utils'
import type { typeMainMenuItem } from '@shared/ui/main-menu/types/types'

const isMainPage = true

export const mainMenu: typeMainMenuItem[] = [
  { label: 'Кто мы', url: getMenuUrl('Компания', routes.company, isMainPage) },
  { label: 'Наши услуги', url: getMenuUrl('Услуги', routes.services, isMainPage) },
  {
    label: 'Комплексные решения',
    url: routes.complexRout,
    children: [
      { label: 'Лаборатория стартапов', url: getMenuUrl('Лаборатория стартапов', routes.laboratory, isMainPage) },
      { label: 'Токенизация активов', url: getMenuUrl('Токенизация активов', routes.tokenization, isMainPage) },
      { label: 'Digital маркетинг', url: getMenuUrl('Digital маркетинг', routes.digital, isMainPage) }
    ]
  },
  { label: 'Партнеры', url: getMenuUrl('Партнеры', routes.partners, isMainPage) },
  { label: 'Контакты', url: getMenuUrl('Контакты', routes.contacs, isMainPage) }
]
