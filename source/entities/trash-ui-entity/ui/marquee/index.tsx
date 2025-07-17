'use client'

import React from 'react'

import { UIContainer } from '../ui-container'

import { MarqueeComponent } from '@shared/ui/marquee-component/ui/marquee'

export const UIMarquee: React.FC = () => {
  // TODO: исправить на фичу, когда появится эндпоинт
  const phrases = [
    'Разработка сайтов',
    'Работа с ИИ',
    'Разработка мобильных приложений',
    'UX/UI',
    'Разработка клиентских веб-сервисов',
    'Тестирование',
    'Разработка приложений в telegram',
    'Техническая поддержка продуктов'
  ]

  return (
    <UIContainer
      title="Marquee"
      description="Блок бегущей строки."
      props={[{ key: 'phrases', value: '(string[]) - фразы для бегущей строки' }]}
      components={
        <>
          <MarqueeComponent phrases={phrases} />
        </>
      }
    />
  )
}
