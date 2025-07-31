import { HTMLAttributes, JSX } from 'react'

export type typeHeroProps = {
  title: string
  imgUrl: string
  url: string
} & HTMLAttributes<HTMLDivElement>
