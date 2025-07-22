type TagsProps = { link: string; title: string }

export interface SliderCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string
  tags?: TagsProps[]
  description?: string
}
