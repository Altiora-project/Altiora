'use client'

import type { typeSliderProps } from '../types'
import classes from '../styles/styles.module.scss'
// import { EmblaCarouselType, EmblaEventType } from 'embla-carousel'
import { FC } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { NextButton, PrevButton, usePrevNextButtons } from './arrow-buttons'
import clsx from 'clsx'

export const Slider: FC<typeSliderProps> = ({ data, options, ...otherProps }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options)
  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi)

  // TODO: до- или пере-работать слайдер с учетом анимации колоды

  // const [rotationStates, setRotationStates] = useState<number[]>(data.map(() => 0))
  // const [currentIndex, setCurrentIndex] = useState(0)

  // // Обновляем текущий индекс при изменении слайда
  // useEffect((): any => {
  //   if (!emblaApi) return

  //   const updateIndex = () => {
  //     setCurrentIndex(emblaApi.selectedScrollSnap())
  //   }

  //   emblaApi.on('select', updateIndex)
  //   return () => emblaApi.off('select', updateIndex)
  // }, [emblaApi])

  // const handleNextClick = useCallback(() => {
  //   onNextButtonClick()

  //   setRotationStates(prev => {
  //     const newStates = [...prev]
  //     // Увеличиваем поворот текущего слайда на 5°
  //     newStates[currentIndex] += 4
  //     // Следующему слайду задаем базовый поворот 5°
  //     if (currentIndex + 1 < data.length) {
  //       newStates[currentIndex + 1] = Math.max(5, newStates[currentIndex + 1])
  //     }

  //     return newStates
  //   })
  // }, [onNextButtonClick, currentIndex, data.length])

  // const handlePrevClick = useCallback(() => {
  //   onPrevButtonClick()
  //   setRotationStates(prev => {
  //     const newStates = [...prev]
  //     // Уменьшаем поворот текущего слайда на 5°
  //     newStates[currentIndex] = Math.max(0, newStates[currentIndex] - 5)
  //     return newStates
  //   })
  // }, [onPrevButtonClick, currentIndex])

  return (
    <div className={classes.embla_wrapper} {...otherProps}>
      <div className={classes.embla}>
        <div className={classes.emblaViewport} ref={emblaRef}>
          <div className={classes.embla__container}>
            {data.map((slide, index) => (
              <div key={index} className={clsx(classes.embla__slide)}>
                {slide}
              </div>
            ))}
          </div>
        </div>
        <div className={classes.embla__controls}>
          <div className={classes.embla_buttons}>
            <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
            <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
          </div>
        </div>
      </div>
    </div>
  )
}
