export interface InfoBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  data: ({ title: string; text: string } | string)[]
}
