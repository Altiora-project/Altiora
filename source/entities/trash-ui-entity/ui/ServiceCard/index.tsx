'use client'

import { UIContainer } from '../ui-container'

import ServiceCard from '@shared/ui/service-card'

export const UIServiceCard: React.FC = () => {
  return (
    <UIContainer
      title="ServiceCard"
      description="Компонент карточки для всех брэйкпоинтов"
      props={[
        { key: 'icon', value: '(ReactNode) - иконка' },
        { key: 'title', value: '(ReactNode) - заголовок' },
        { key: 'text', value: '(ReactNode) - текст' }
      ]}
      components={
        <>
          <div
            style={{
              padding: '10px',
              backgroundColor: '#1D1E1D'
            }}
          >
            <ServiceCard
              icon={''}
              title="Продвижение сайтов"
              text="системное привлечение клиентов через онлайн-каналы"
            />
          </div>
        </>
      }
    />
  )
}
