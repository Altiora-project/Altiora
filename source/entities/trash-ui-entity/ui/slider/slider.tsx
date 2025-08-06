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

  return (
    <UIContainer
      title="Slider"
      description="Карточка слайдера со всеми стандартными props и дополнительными:"
      props={[{ key: 'data', value: '(ReactNode[]) - принимает массив карточек для карусели' }]}
      components={
        <>
          <Slider cards={cardData} />
        </>
      }
    />
  )
}
