'use client'

import React from 'react'

import { UIContainer } from '../ui-container'

import { OrderForm } from '@shared/ui/order-form'

export const OrderFormTest: React.FC = () => {
  return <UIContainer title="Форма заказа проекта" components={<OrderForm />} />
}
