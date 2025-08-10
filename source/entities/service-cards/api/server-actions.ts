import { typeServiceCardsResponse } from '../types'

import { fetchWrapper, typeApiResponse } from '@shared/lib/api'
import { endpoints } from '@shared/lib/api/configs/backend-urls'

const getServiceCardsDataAction = async (): Promise<typeApiResponse<typeServiceCardsResponse>> => {
  return await fetchWrapper<typeServiceCardsResponse>(endpoints.serviceCards)
}

export default getServiceCardsDataAction
