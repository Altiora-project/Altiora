import { HTMLAttributes, ReactNode } from 'react'

type typeSliderTag = { id: number; name: string }

type typeSliderCard = {
  name?: string
  info?: string
  tags?: typeSliderTag[]
}

type typeProductCard = {
  title: string
  description: string
  actionLink: string
  tagList?: Array<typeSliderTag>
  text?: string
}

export type typeServicesPromoBlockProps = {
  title: string
  slides: Array<typeSliderCard>
  services: Array<typeProductCard>
} & HTMLAttributes<HTMLDivElement>
