'use client'

import React from 'react'

import { UIContainer } from '../ui-container'

import { FormSubmitModal } from '@shared/ui/form-submit-modal/ui/form-submit-modal'

export const UIFormSubmitModal: React.FC = () => {
  return (
    <UIContainer
      title="Form Submit Modal"
      description="Компонент подтверждения успешной отправки формы"
      props={[{ key: 'buttonLink', value: '("string")  ссылка для перехода по клику на кнопке' }]}
      components={
        <div style={{ backgroundColor: '#ffffff', padding: '10px' }}>
          <FormSubmitModal buttonLink="" />
        </div>
      }
    />
  )
}
