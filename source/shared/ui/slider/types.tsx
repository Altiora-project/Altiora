import { ComponentPropsWithRef, HTMLAttributes, ReactNode } from 'react'

export type typeSliderProps = {
  cards: ReactNode[]
} & HTMLAttributes<HTMLDivElement>

export type PropType = ComponentPropsWithRef<'button'>
