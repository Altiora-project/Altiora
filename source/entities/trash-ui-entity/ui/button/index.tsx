'use client'

import React from 'react'
import { Button } from '@shared/ui/button'
import { UIContainer } from '../ui-container'

export const UIButton: React.FC = () => {
  return (
    <UIContainer
      title="Button"
      description="Кнопка со всеми стандартными props и дополнительными:"
      props={[
        { key: 'variant', value: '("default" | "fill") вариант отображения: default - по умолчанию; fill - заливка' },
        { key: 'disabled', value: '(boolean) отключение кнопки' }
      ]}
      components={
        <>
          <Button>Button Default</Button>

          <Button disabled>Button Default Disabled</Button>

          <Button variant="fill" onClick={() => alert('fill')}>
            Button Fill
          </Button>

          <Button variant="fill" disabled>
            Button Fill Disabled
          </Button>
        </>
      }
    />
  )
}
