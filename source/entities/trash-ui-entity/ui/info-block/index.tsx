'use client'

import React from 'react'

import { UIContainer } from '../ui-container'

import { InfoBlock } from '@shared/ui/info-block'

export const UIInfoBlock: React.FC = () => {
  return (
    <UIContainer
      title="Info Block"
      description="Блок с информацией"
      props={[
        { key: 'title', value: '(string) заголовок блока' },
        { key: 'data', value: '(array) массив данных для отображения' }
      ]}
      components={
        <InfoBlock
          title="/почему выбирают нас"
          data={[
            'Мы не просто создаём приложения. Мы превращаем идеи в продукты, которые хочется открывать снова и снова. Для нас важно не только, как это работает, но и что чувствует пользователь. Мы верим в силу хорошего дизайна и точной инженерии. И всегда стремимся сделать лучше, чем вчера',
            'Прозрачный процесс  и чёткие сроки',
            'Команда, которая действительно вовлечена в результат',
            'Глубокий UX-фокус и внимание к деталям',
            'Опыт в fintech, healthtech, e-commerce и других отраслях'
          ]}
        />
      }
    />
  )
}
