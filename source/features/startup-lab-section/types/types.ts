import { typeTechnologiesResponse } from '@entities/technologies'
import { typeApiResponse } from '@shared/lib/api/types/types'

export interface StartupLabCard {
  imageLink: string
  title: string
  info: string
}

export interface StartupLabProps {
  info1: string
  cards: StartupLabCard[]
  info2: string
  contactURL: string
}
