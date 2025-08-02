import { HTMLAttributes } from 'react'

export type TMarkdownRendererProps = HTMLAttributes<HTMLDivElement> & {
  content: string
}
