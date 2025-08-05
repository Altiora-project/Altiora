export type typeMainMenuProps = React.HTMLAttributes<HTMLDivElement> & {
  menuList: typeMainMenuItem[]
}

export type typeMainMenuItem = {
  label: string
  url?: string
  children?: typeMainMenuItem[]
}
