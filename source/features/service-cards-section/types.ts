import { ReactNode } from 'react'

export type typeServiceCard = {
  id: string
  icon?: string
  title: string
  text?: ReactNode
}

export type typeServiceCardsResponse = {
  success: boolean
  message: string
  cards: typeServiceCard[]
}
