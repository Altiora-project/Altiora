import React from 'react'

export interface StartupLabMenuItem {
  title: string
  content: React.ReactNode
}

export interface StartupLabMenuProps extends React.HTMLAttributes<HTMLDivElement> {
  data: StartupLabMenuItem[]
  link?: string
}
