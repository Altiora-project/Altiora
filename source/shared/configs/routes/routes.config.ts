import { createRoute } from './create-rout.utils'

export const routes = {
  mainPage: '/',
  ui: '/ui',
  services: '/services',
  complexRout: '/complex-rout/:id/slug/:value',
  company: '/company',
  partners: '/partners',
  contacs: '/contacts',
  digital: '/digital',
  tokenization: '/tokenization',
  laboratory: '/laboratory',
  policies: '/policies/',
  policiesBySlug: '/policies/:slug/'
} as const
