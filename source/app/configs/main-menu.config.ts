import { routes } from '@shared/configs/routes'
import { createRoute } from '@shared/configs/routes/create-rout.utils'
import type { typeMainMenuItem } from '@shared/ui/main-menu/types/types'

export const mainMenu: typeMainMenuItem[] = [
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
    url: createRoute(routes.complexRout, { id: '1', value: 'value' }),
    children: [
      { label: 'Лаборатория стартапов', url: routes.laboratory },
      { label: 'Токенизация активов', url: routes.tokenization },
      { label: 'Digital маркетинг', url: routes.digital }
    ]
  },
  {
    label: 'Партнеры',
    url: routes.partners
  },
  {
    label: 'Контакты',
    url: routes.contacs
  }
]
