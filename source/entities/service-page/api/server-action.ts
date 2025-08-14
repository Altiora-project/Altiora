'use server'

import { typeServiceDetailsResponse, typeServicesResponse } from '../types'

import { fetchWrapper, typeApiResponse } from '@shared/lib/api'
import { endpoints } from '@shared/lib/api/configs/backend-urls'

export const getServicesDataAction = async (): Promise<typeApiResponse<typeServicesResponse>> => {
  const url = endpoints.services
  return await fetchWrapper<typeServicesResponse>(url, {}, { withDebug: true })
}

export const getServiceDetailsAction = async (slug: string): Promise<typeApiResponse<typeServiceDetailsResponse>> => {
  const url = endpoints.serviceDetails(slug)

  return fetchWrapper<typeServiceDetailsResponse>(url, {
    responseType: 'json',
    method: 'GET',
    next: {
      revalidate: 60
    }
  })
}
