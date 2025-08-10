type TagsProps = { id: number; name: string }

export interface SliderCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string
  tags?: TagsProps[]
  description?: string
}
