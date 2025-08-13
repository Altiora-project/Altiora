import { typeTechnologiesResponse } from '../types'

import { fetchWrapper, typeApiResponse } from '@shared/lib/api'
import { endpoints } from '@shared/lib/api/configs/backend-urls'

export const getTechnologiesDataAction = async (): Promise<typeApiResponse<typeTechnologiesResponse>> => {
  const url = endpoints.technologies
  return await fetchWrapper<typeTechnologiesResponse>(url, {}, { withDebug: true })
}
