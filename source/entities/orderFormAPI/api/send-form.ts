import { OrderForm } from '../model/schema'

import { fetchWrapper } from '@shared/lib/api'

const sendFrom = async (data: OrderForm): Promise<void> => {
  await fetchWrapper('/order', { method: 'POST', body: JSON.stringify(data) })
}

export default sendFrom
