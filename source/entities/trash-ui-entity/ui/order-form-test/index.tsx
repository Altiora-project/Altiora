'use client'

import React from 'react'
import { OrderForm, type OrderFormData } from '@shared/ui/order-form'
import { UIContainer } from '../ui-container'

export const OrderFormTest: React.FC = () => {
  const handleSubmit = async (data: OrderFormData) => {
    // Имитация отправки данных на сервер
    console.log('Отправленные данные формы:', data)

    // Имитация задержки сети
    await new Promise(resolve => setTimeout(resolve, 2000))

    // Здесь можно добавить реальную отправку данных
    // await fetch('/api/order', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(data)
    // })

    alert('Форма успешно отправлена!')
  }

  return (
    <UIContainer
      title="Форма заказа проекта"
      description="Форма заказа проекта"
      style={{
        width: '100%'
      }}
      props={[
        { key: 'title: string', value: 'Заголовок формы' },
        { key: 'callback: (data: OrderFormData) => void', value: 'функция, выполняемая при успешной отправке формы' },
        { key: 'agreementLink?: string', value: 'ссылка на страницу с описанием правил обработки персональных данных' }
      ]}
      components={<OrderForm title="/заказать проект" callback={handleSubmit} agreementLink="/privacy-policy" />}
    />
  )
}
