import { routes, createAppRoute } from '@shared/configs/routes'

type AnchorMap = {
  [key: string]: { page?: 'mainPage' | 'other'; anchor?: string; url?: string; useAnchorOnMain?: boolean }
}

// Настраиваем пункты меню
const anchors: AnchorMap = {
  Компания: { page: 'mainPage', anchor: 'company' }, // якорь на главной
  Партнеры: { page: 'mainPage', anchor: 'partners' },
  Контакты: { page: 'mainPage', anchor: 'contacts' },
  Услуги: { page: 'other', url: routes.services, useAnchorOnMain: true, anchor: 'services' },
  'Лаборатория стартапов': { page: 'mainPage', anchor: 'laboratory' },
  'Токенизация активов': { page: 'mainPage', anchor: 'tokenization' },
  'Digital маркетинг': { page: 'mainPage', anchor: 'digital' }
}

export const getMenuUrl = (label: string, defaultUrl: string, isMainPage?: boolean) => {
  const config = anchors[label]
  if (!config) return defaultUrl

  if (config.page === 'mainPage' && config.anchor) {
    return createAppRoute('mainPage', { anchor: config.anchor })
  }

  if (config.page === 'other' && config.useAnchorOnMain && isMainPage && config.anchor) {
    return createAppRoute('mainPage', { anchor: config.anchor })
  }

  return config.url ?? defaultUrl
}
