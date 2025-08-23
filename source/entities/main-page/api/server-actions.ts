'use server'

import { typeMainPageResponse } from '../types'

import { fetchWrapper, typeApiResponse } from '@shared/lib/api'
import { endpoints } from '@shared/lib/api/configs/backend-urls'

export const getPageDataAction = async (): Promise<typeApiResponse<typeMainPageResponse>> => {
  return await fetchWrapper<typeMainPageResponse>(endpoints.homePageContent, {
    next: {
      revalidate: 60
    }
  })
}
