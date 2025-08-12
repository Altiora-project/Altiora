import { OrderForm, OrderFormSchema } from './schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

const useOrderForm = (onSubmit: (data: OrderForm) => Promise<void>) => {
  const formMethods = useForm<OrderForm>({
    resolver: zodResolver(OrderFormSchema),
    mode: 'onChange'
  })

  const { handleSubmit, reset, formState } = formMethods

  const submitForm = async (data: OrderForm) => {
    try {
      await onSubmit(data)
      reset()
    } catch (error) {
      console.error('Ошибка отправки формы:', error)
    }
  }

  return {
    ...formMethods,
    handleSubmit: handleSubmit(submitForm),
    isSubmitting: formState.isSubmitting
  }
}

export default useOrderForm
