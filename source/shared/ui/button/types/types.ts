export type typeButtonProps = {
  variant?: 'primary' | 'secondary' | 'tertiary'
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  children?: React.ReactNode
} & React.ButtonHTMLAttributes<HTMLButtonElement>
