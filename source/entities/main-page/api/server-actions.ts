'use server'

import { fetchWrapper, typeApiResponse } from '@shared/lib/api'
import { endpoints } from '@shared/lib/api/configs/backend-urls'
import { typeMainPageResponse } from '../types'

export const getPageDataAction = async (): Promise<typeApiResponse<typeMainPageResponse>> => {
  const url = endpoints.mainPromo
  return await fetchWrapper<typeMainPageResponse>(url, {}, { withDebug: true })
}
