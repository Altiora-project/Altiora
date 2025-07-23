'use client'

import React from 'react'
import { Input } from '@shared/ui/input'
import { UIContainer } from '../ui-container'

export const UIInput: React.FC = () => {
  return (
    <UIContainer
      title="Input"
      description="Инпут со всеми стандартными props и дополнительными: error, supportingText, onClear, label, type, value, onChange, name, placeholder"
      props={[
        { key: 'error', value: '(boolean) состояние ошибки' },
        { key: 'supportingText', value: '(string) вспомогательный текст под инпутом' },
        { key: 'onClear', value: '(function) обработчик очистки поля' },
        { key: 'label', value: '(string) заголовок поля' },
        { key: 'type', value: '(string) тип инпута' },
        { key: 'value', value: '(string) значение инпута' },
        { key: 'onChange', value: '(function) обработчик изменения значения' },
        { key: 'name', value: '(string) имя инпута' },
        { key: 'placeholder', value: '(string) placeholder инпута' }
      ]}
      components={
        <>
          <Input label="" supportingText="инпут" value="" onClear={() => {}} />
          <Input label="" supportingText="инпут с ошибкой" value="" error onClear={() => {}} />
        </>
      }
    />
  )
}
