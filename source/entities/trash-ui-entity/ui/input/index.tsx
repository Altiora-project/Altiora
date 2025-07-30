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
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <Input label="инпут" supportingText="подсказка" value="" onClear={() => {}} />
          <Input label="инпут с ошибкой" supportingText="подсказка" value="" error onClear={() => {}} />
        </div>
      }
    />
  )
}
