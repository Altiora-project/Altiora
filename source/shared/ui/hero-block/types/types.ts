import { HTMLAttributes, JSX } from 'react'

export type typeHeroProps = {
  title: string
  link: string
  imgUrl: string
} & HTMLAttributes<HTMLDivElement>
