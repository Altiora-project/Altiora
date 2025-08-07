type typeProductCardTag = {
  id: number
  name: string
}

export interface ProductCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  description: string
  actionLink: string
  tagList?: typeProductCardTag[]
  text?: string
}
