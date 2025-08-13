'use client'

import React from 'react'

import { UIContainer } from '../ui-container'
import { About } from '@shared/ui/about/ui/about'
import { typeAboutData } from '@shared/ui/about/types'

export const UIAbout: React.FC = () => {
  const data: typeAboutData = {
    about:
      'Будущее технологий — для вашего бизнеса сегодня  Altiora — ваш надежный партнер в разработке, техническом и маркетинговом сопровождении продуктов.',
    years: '5+ лет',
    products:
      'Мы создаем технологичные продукты, объединяя экспертизу в разработке, аналитике и продвижении. Наша мультидисциплинарная команда реализует проекты любой сложности &mdash; от первых прототипов до масштабируемых digital-решений.',
    projects:
      'Каждый проект мы ведем от концепции до масштабирования, используя гибкие методологии  и проверенные технологические решения, чтобы достичь результата в согласованные сроки с гарантией',
    percent: '100%',
    offer:
      'Специальное предложение для новых клиентов: Первая консультация с аудитом проекта — бесплатно Оставьте заявку до 30 сентября — получите тариф «Старт» с 15% скидкой'
  }
  return (
    <UIContainer
      title="About"
      description="Универсальная карточка со всеми стандартными props и дополнительными для радиуса скругления, фона и ссылки:"
      props={[
        {
          key: 'data',
          value: '{  about: string, years: string, products: string, projects: string, percent: string, offer: string}'
        }
      ]}
      components={
        <div>
          <About data={[data.about, data.products, data.years]} />
        </div>
      }
    />
  )
}
