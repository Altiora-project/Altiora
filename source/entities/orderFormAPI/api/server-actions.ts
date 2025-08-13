'use server'

import { OrderForm } from '../model/schema'
import { typeRequestResponse } from '../types'
import { fetchWrapper } from '@shared/lib/api'
import { endpoints } from '@shared/lib/api/configs/backend-urls'

const sendFormDataAction = async (data: OrderForm): Promise<void> => {
  await fetchWrapper<typeRequestResponse>(endpoints.sendRequest, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
}

export default sendFormDataAction
