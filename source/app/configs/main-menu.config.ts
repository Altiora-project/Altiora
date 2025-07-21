import { routes } from '@shared/configs/routes'
import { createRoute } from '@shared/configs/routes/create-rout.utils'
import type { typeMainMenuItem } from '@shared/ui/main-menu/types/types'

export const mainMenu: typeMainMenuItem[] = [
  {
    label: 'Home',
    url: routes.mainPage
  },
  {
    label: 'UI',
    url: routes.ui
  },
  {
    label: 'Posts',
    url: routes.postList
  },
  {
    label: 'Complex',
    url: createRoute(routes.complexRout, { id: '1', value: 'value' })
  }
]
