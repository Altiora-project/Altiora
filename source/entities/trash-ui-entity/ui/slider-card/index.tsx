import { UIContainer } from '../ui-container'

import { SliderCard } from '@shared/ui/slider-card/ui/slider-card'

export const UISliderCard: React.FC = () => {
  return (
    <UIContainer
      title="Slider Card"
      description="Карточка слайдера со всеми стандартными props и дополнительными:"
      props={[
        { key: 'title', value: '(string) - заголовок карточки' },
        {
          key: 'tags',
          value: '({link: string, title: string}[]) - массив тегов, где link: ссылка в теге, title: текст тега'
        }
      ]}
      components={
        <>
          <SliderCard
            title="Заголовок"
            tags={[
              {
                id: 1,
                name: 'тэг'
              }
            ]}
            description="Краткое описание Краткое описание Краткое описание Краткое описание Краткое описание"
          />
        </>
      }
    />
  )
}
