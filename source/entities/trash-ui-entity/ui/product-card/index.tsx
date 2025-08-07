import { UIContainer } from '../ui-container'

import { ProductCard } from '@shared/ui/product-card'

export const UIProductCard: React.FC = () => {
  return (
    <UIContainer
      title="Product Card"
      description="Карточка услуги со всеми стандартными props и дополнительными:"
      props={[
        { key: 'title', value: '(string) - заголовок карточки' },
        { key: 'description', value: '(string) - описание карточки' },
        { key: 'actionLink', value: '(string) - ссылка на страницу услуги' },
        {
          key: 'tagList',
          value: '(string[]) - массив тегов'
        },
        {
          key: 'text',
          value:
            '(string) - необязательный props, отвечающий за текст блока действия в нижней части карточки. Значение по умолчанию: "Узнать больше" }'
        }
      ]}
      components={
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}>
          <ProductCard
            title="Разработка мобильных приложений"
            actionLink={'#'}
            description="Разрабатываем нативные и кроссплатформенные мобильные приложения под iOS и Android. Упор на интуитивный интерфейс, производительность и адаптацию под цели бизнеса."
            tagList={[
              { id: 1, name: 'UI/UX дизайн' },
              { id: 1, name: 'Backend/API' },
              { id: 1, name: 'публикация в сторах' },
              { id: 1, name: 'Тестирование' }
            ]}
          />
        </div>
      }
      style={{ backgroundColor: 'var(--color-background1)' }}
    />
  )
}
