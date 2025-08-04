'use client'

import React from 'react'

import { UIContainer } from '../ui-container'

import sendFrom from '@entities/orderFormAPI/api/send-form'

import { OrderForm, type OrderFormData } from '@shared/ui/order-form'

export const OrderFormTest: React.FC = () => {
  const handleSubmit = async (data: OrderFormData) => {
    sendFrom(data)
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
