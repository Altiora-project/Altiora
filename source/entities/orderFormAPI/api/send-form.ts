import { OrderForm } from '../model/schema'

import { fetchWrapper } from '@shared/lib/api'

const sendFrom = async (data: OrderForm): Promise<void> => {
  await fetchWrapper(
    '/project-request/',
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    },
    { withDebug: true }
  )
}

export default sendFrom
