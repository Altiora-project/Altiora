'use server'

import { typeVideoFeatureResponse } from '../types'

import { endpoints, fetchWrapper, typeApiResponse } from '@shared/lib/api'

const getVideoDataAction = async (): Promise<typeApiResponse<typeVideoFeatureResponse>> => {
  return await fetchWrapper(endpoints.videoFeature)
}

export default getVideoDataAction
