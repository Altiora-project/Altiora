import { OrderForm } from '../model/schema'

import { fetchWrapper } from '@shared/lib/api'
import { FormSubmitModal } from '@shared/ui/form-submit-modal'

const sendFrom = async (data: OrderForm): Promise<void> => {
  await fetchWrapper(
    '/project-request/',
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    },
    { withDebug: true }
  ).then(res => {
    console.log('Форма успешно отправлена:', res)
    FormSubmitModal({ buttonLink: '/' })
  })
}

export default sendFrom
