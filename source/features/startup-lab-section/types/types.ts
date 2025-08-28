// import { typeTechnologiesResponse } from '@entities/technologies'
// import { typeApiResponse } from '@shared/lib/api/types/types'

import { HTMLAttributes } from 'react'

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

export interface StartupLabProps extends HTMLAttributes<HTMLDivElement> {
  title: string
  info1: string
  cards: LabCard[]
  info2: string
  contactURL: string
}
