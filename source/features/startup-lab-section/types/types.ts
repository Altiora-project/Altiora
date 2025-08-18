// import { typeTechnologiesResponse } from '@entities/technologies'
// import { typeApiResponse } from '@shared/lib/api/types/types'

export interface StartupLabCard {
  imageLink: string
  title: string
  info: string
}

interface LabCard {
  id: number
  title: string
  image: string
  description: string
}

export interface StartupLabProps {
  info1: string
  cards: LabCard[] //StartupLabCard[]
  cardCount: number
  info2: string
  contactURL: string
}
