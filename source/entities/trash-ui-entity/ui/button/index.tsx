'use client'

import React from 'react'

import { UIContainer } from '../ui-container'

import { Button } from '@shared/ui/button'
import { ArrowLeftIcon } from '@shared/ui/icon/ui/icons/arrow-left'
import { ArrowRightIcon } from '@shared/ui/icon/ui/icons/arrow-right'

export const UIButton: React.FC = () => {
  return (
    <UIContainer
      title="Button"
      description="Кнопка со всеми стандартными props и дополнительными:"
      props={[
        { key: 'variant', value: '("primary" | "secondary") вариант отображения' },
        { key: 'leftIcon', value: 'Иконка слева' },
        { key: 'rightIcon', value: 'Иконка справа' },
        { key: 'children', value: 'Содержимое кнопки (текст, HTML-элементы и т.д.)' }
      ]}
      components={
        <>
          <Button leftIcon={<ArrowLeftIcon size="lg" />} rightIcon={<ArrowRightIcon size="lg" />}>
            Button Primary
          </Button>

          <Button disabled>Button Primary Disabled</Button>

          <Button variant="secondary" onClick={() => alert('fill')}>
            Button Secondary
          </Button>

          <Button variant="secondary" disabled>
            Button Secondary Disabled
          </Button>
        </>
      }
    />
  )
}
