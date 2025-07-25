import { FC } from 'react'
import { UIContainer } from '../ui-container'

import { Slider } from '@shared/ui/slider/ui/slider'
import { SliderCard } from '@shared/ui/slider-card'
import { EmblaOptionsType } from 'embla-carousel'

export const UISlider: FC = () => {
  const cardData = [
    <SliderCard
      className={'embla__slide__number'}
      title={'Кейс'}
      tags={[{ link: '/', title: 'tag' }]}
      description={'КейсКейсКей сКейсКейсКе йсКейсК ейсКейсКе йсКе йсКейсКейс'}
    />,
    <SliderCard
      className={'embla__slide__number'}
      title={'Кейс'}
      tags={[{ link: '/', title: 'tag' }]}
      description={'КейсКейсКей сКейсКейсКе йсКейсК ейсКейсКе йсКе йсКейсКейс'}
    />,
    <SliderCard
      className={'embla__slide__number'}
      title={'Кейс'}
      tags={[{ link: '/', title: 'tag' }]}
      description={'КейсКейсКей сКейсКейсКе йсКейсК ейсКейсКе йсКе йсКейсКейс'}
    />,
    <SliderCard
      className={'embla__slide__number'}
      title={'Кейс'}
      tags={[{ link: '/', title: 'tag' }]}
      description={'КейсКейсКей сКейсКейсКе йсКейсК ейсКейсКе йсКе йсКейсКейс'}
    />,
    <SliderCard
      className={'embla__slide__number'}
      title={'Кейс'}
      tags={[{ link: '/', title: 'tag' }]}
      description={'КейсКейсКей сКейсКейсКе йсКейсК ейсКейсКе йсКе йсКейсКейс'}
    />
  ]

  const options: EmblaOptionsType = { align: 'start', dragFree: true, loop: false }
  return (
    <UIContainer
      title="Slider"
      description="Карточка слайдера со всеми стандартными props и дополнительными:"
      props={[
        { key: 'data', value: '(ReactNode[]) - принимает массив карточек для карусели' },
        { key: 'slides', value: '(number) - количество слайдов в массиве для корректной работы библиотеки' },
        {
          key: 'options',
          value:
            '(ReactNode[]) - опции для карусели например  align: "start / center / end" - как карточки будут расположены относительно viewport,, dragFree: true / false - свободное пролистывание без фиксации контента, loop: true / false - бесконечная карусель; все опции есть по ссылке https://www.embla-carousel.com/api/options/'
        }
      ]}
      components={
        <>
          <Slider data={cardData} options={options} />
        </>
      }
    />
  )
}
