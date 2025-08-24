import { HTMLAttributes, ReactNode } from 'react'

export type typeServiceCard = {
  id: string
  icon?: ReactNode
  title?: string
  text?: ReactNode
}

interface LabCard {
  id: number
  title: string
  image: string
  description: string
}

export type typeServiceCardsResponse = {
  success: boolean
  message: string
  cards: typeServiceCard[]
}

export type typeDigitalMarketingProps = {
  cards: LabCard[]
  description: string
} & HTMLAttributes<HTMLDivElement>
