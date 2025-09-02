export type typeButtonProps = {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'secondary-black'
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  children?: React.ReactNode
} & React.ButtonHTMLAttributes<HTMLButtonElement>
