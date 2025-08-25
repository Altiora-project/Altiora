'use server'

import { typePoliciesApi, typePoliciesSlugApi } from '../model/types'

import { endpoints, fetchWrapper } from '@shared/lib/api'

export const getPoliciesApi = async (): Promise<typePoliciesApi> => {
  const response = await fetchWrapper<typePoliciesApi>(endpoints.policies)

  if (!response || 'error' in response || response.data.success === false) {
    console.error('API Error:', response)
    throw new Error('Failed to fetch policies or invalid response format')
  }

  return response.data
}

export const getPoliciesBySlugApi = async (slug: string): Promise<typePoliciesSlugApi> => {
  const response = await fetchWrapper<typePoliciesSlugApi>(endpoints.policiesBySlug(slug))

  if (!response || 'error' in response || response.data.success === false) {
    console.error('API Error:', response)
    throw new Error('Failed to fetch policies or invalid response format')
  }

  return response.data
}
