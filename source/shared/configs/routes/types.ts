import type { routes } from './routes.config'

// Тип для объекта роутов
export type typeRouts = { [K in keyof typeof routes]: string }

// Тип для извлечения параметров динамических роутов
export type ExtractRouteParams<T extends string> = T extends `${infer _Start}:${infer Param}/${infer Rest}`
  ? { [K in Param | keyof ExtractRouteParams<`/${Rest}`>]: string }
  : T extends `${infer _Start}:${infer Param}`
    ? { [K in Param]: string }
    : Record<never, never>
