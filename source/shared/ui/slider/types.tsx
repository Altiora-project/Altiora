import { ComponentPropsWithRef, ReactNode } from 'react'
import { EmblaOptionsType } from 'embla-carousel'

export type typeArrowProps = {
  disabled: boolean
  left?: boolean
  onClick: (e: any) => void
}

export type typeSliderProps = {
  data: ReactNode[]
  options?: EmblaOptionsType
}

export type UsePrevNextButtonsType = {
  prevBtnDisabled: boolean
  nextBtnDisabled: boolean
  onPrevButtonClick: () => void
  onNextButtonClick: () => void
}

export type PropType = ComponentPropsWithRef<'button'>
