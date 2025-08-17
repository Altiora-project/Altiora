import { typeApiResponse } from '@shared/lib/api'

export interface SiteSettings {
  logo_url: string
  phone: string
  email: string
  address: string
  requisites: string
}

export type typeSiteSettingsResponse = typeApiResponse<{ data: SiteSettings }>
