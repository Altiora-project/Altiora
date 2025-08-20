import { routes } from './routes.config'
import { ExtractRouteParams } from './types'

// базовый хелпер для любых роутов
export const createRoute = <T extends string>(
  url: T,
  params: ExtractRouteParams<T>,
  query?: Record<string, string>
): string => {
  let result: string = url

  for (const key in params) {
    result = result.replace(new RegExp(`:${key}`, 'g'), `${params[key]}`)
  }

  if (query && Object.keys(query).length > 0) {
    const queryString = Object.entries(query)
      .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
      .join('&')

    result += (result.includes('?') ? '&' : '?') + queryString
  }

  return result
}

type AppRoutes = typeof routes

export const createAppRoute = <T extends keyof AppRoutes, U extends AppRoutes[T]>(
  routeKey: T,
  options?: {
    params?: ExtractRouteParams<U>
    query?: Record<string, string>
    anchor?: string
  }
): string => {
  const { params = {} as ExtractRouteParams<U>, query, anchor } = options || {}

  // главная страница с якорем
  if (routeKey === 'mainPage') {
    let result = routes.mainPage

    if (anchor) {
      result += `#${anchor}`
    }

    if (query && Object.keys(query).length > 0) {
      const queryString = Object.entries(query)
        .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
        .join('&')

      result += (result.includes('?') ? '&' : '?') + queryString
    }

    return result
  }

  // для остальных роутов — используем стандартный createRoute
  return createRoute(routes[routeKey], params, query)
}
