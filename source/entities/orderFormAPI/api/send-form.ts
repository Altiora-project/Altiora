import { OrderForm } from '../model/schema'

import { fetchWrapper } from '@shared/lib/api'

const sendForm = async (data: OrderForm): Promise<void> => {
  await fetchWrapper('/project-request/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
}

export default sendForm
