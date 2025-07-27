import { HTMLAttributes } from 'react'

export interface LinkMenuItem {
  label: string
  url: string
}

export interface LinkMenuProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  title: string
  list: LinkMenuItem[]
}
