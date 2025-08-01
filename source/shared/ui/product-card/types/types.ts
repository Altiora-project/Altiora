export interface ProductCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  description: string
  actionLink: string
  tagList?: string[]
  text?: string
}
