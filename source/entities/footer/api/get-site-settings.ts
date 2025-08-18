'use server'

import { endpoints, fetchWrapper } from '@shared/lib/api'
import { SiteSettings, typeSiteSettingsResponse } from '@entities/footer/model/model'

export const getSiteSettingsAction = async (): Promise<typeSiteSettingsResponse> => {
  return await fetchWrapper<{ data: SiteSettings }>(endpoints.siteSettings)
}
