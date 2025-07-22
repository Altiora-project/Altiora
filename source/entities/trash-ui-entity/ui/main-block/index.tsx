'use client'

import React from 'react'

import { UIContainer } from '../ui-container'

import { MainBlock } from '@shared/ui/_main-block'

export const UIMainBlock: React.FC = () => {
  return (
    <UIContainer
      title="MainBlock"
      description="Блок, использующийся для отображения контента секций (требуется доработка под макет и добавить отображение для всех брейкпоинтов). Добавлен в качестве примера создания обтекаемых форм для внутренних и внешних углов."
      props={[
        { key: 'topContent', value: '(ReactNode) - отображается в верхней части блока' },
        { key: 'children', value: '(ReactNode) - отображается в центральной части блока' },
        { key: 'bottomContent', value: '(ReactNode) - отображается в нижней части блока' }
      ]}
      components={
        <>
          <MainBlock topContent={'Top content'} bottomContent={'Bottom content'}>
            Block content
          </MainBlock>
        </>
      }
    />
  )
}
