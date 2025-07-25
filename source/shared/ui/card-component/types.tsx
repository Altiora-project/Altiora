import { UrlObject } from 'node:url'
import { ReactNode } from 'react'

export type CardComponentProps = {
  children: ReactNode
  radius: 'md' | 'lg' // 20px и 40px
  background: 'light-grey' | 'grey' | 'black' // #353735, #2F2F2F4D, #111111
  tag: 'default' | 'link' // div, link
  href?: UrlObject | string
  className?: string
}
