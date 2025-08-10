'use client'

import React from 'react'

import { UIContainer } from '../ui-container'

import { FormSubmitModal } from '@shared/ui/form-submit-modal/ui/form-submit-modal'
import { useRouter } from 'next/navigation'

export const UIFormSubmitModal: React.FC = () => {
  let rout = useRouter()
  return (
    <UIContainer
      title="Form Submit Modal"
      description="Компонент подтверждения успешной отправки формы, универсальный. Предусмотренно два поведения, Link из пакета Next - переход по ссылке, и Button, кнопка, принимающая функцию пропсом для обработки действия по нажатию"
      props={[
        {
          key: 'buttonLink?',
          value: '("string")  передается роут для перехода, а компонент кнопки формируется через Link'
        },
        {
          key: 'onClose?',
          value: '(() => void))  передается функция для кнопки, компонент кнопки формируется через Button '
        }
      ]}
      components={
        <div
          style={{
            backgroundColor: '#ffffff4b',
            padding: '10px',
            display: 'flex',
            gap: '20px',
            flexWrap: 'wrap'
          }}
        >
          <FormSubmitModal
            onClose={() => {
              rout.push('/')
            }}
          />

          {/* <FormSubmitModal buttonLink="/ui" /> */}
        </div>
      }
    />
  )
}
