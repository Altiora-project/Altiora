import React, { ComponentPropsWithRef, useCallback, useEffect, useState } from 'react'
import { EmblaCarouselType } from 'embla-carousel'
import clsx from 'clsx'
import classes from '../styles/styles.module.scss'
import { Icon } from '@shared/ui/icon'
import { PropType, UsePrevNextButtonsType } from '../types'

export const usePrevNextButtons = (
  emblaApi: EmblaCarouselType | undefined,
  onButtonClick?: (emblaApi: EmblaCarouselType) => void
): UsePrevNextButtonsType => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true)

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollPrev()
    if (onButtonClick) onButtonClick(emblaApi)
  }, [emblaApi])

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollNext()
    if (onButtonClick) onButtonClick(emblaApi)
  }, [emblaApi])

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev())
    setNextBtnDisabled(!emblaApi.canScrollNext())
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    onSelect(emblaApi)
    emblaApi.on('reInit', onSelect).on('select', onSelect)
  }, [emblaApi, onSelect])

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  }
}

export const PrevButton: React.FC<PropType> = props => {
  const { children, ...otherProps } = props

  return (
    <button className={clsx(classes.embla__button, classes.embla__button__prev)} type="button" {...otherProps}>
      <Icon size={'sm'} icon="chevronLeft" className={classes.embla__button__svg} />
    </button>
  )
}

export const NextButton: React.FC<PropType> = props => {
  const { children, ...otherProps } = props

  return (
    <button className={clsx(classes.embla__button, classes.embla__button__next)} type="button" {...otherProps}>
      <Icon size={'sm'} icon="chevronRight" className={classes.embla__button__svg} />
    </button>
  )
}
