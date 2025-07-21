'use client'

import { UIContainer } from '../ui-container'

import Card from '@shared/ui/card'

export const UICard: React.FC = () => {
  return (
    <UIContainer
      title="Card"
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
              padding: '30px',
              backgroundColor: '#1D1E1D'
            }}
          >
            <Card
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 38" fill="none">
                  <path
                    d="M24 29.8978C23.7374 30.864 23.2898 31.7681 22.6828 32.5587C22.0758 33.3493 21.3213 34.0108 20.4623 34.5055C19.6034 35.0002 18.6568 35.3184 17.6767 35.4418C16.6966 35.5653 15.7021 35.4917 14.75 35.2252C13.7979 34.9587 12.9069 34.5045 12.1278 33.8886C11.3487 33.2726 10.6968 32.507 10.2093 31.6354C9.72175 30.7638 9.4082 29.8033 9.28651 28.8087C9.16481 27.8142 9.23736 26.805 9.5 25.8389M2.5 15.1842L47.5 2.5V32.9421L2.5 22.7947V15.1842Z"
                    stroke="#111111"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              }
              title="Продвижение сайтов"
              text="системное привлечение клиентов через онлайн-каналы"
            />
          </div>
        </>
      }
    />
  )
}
