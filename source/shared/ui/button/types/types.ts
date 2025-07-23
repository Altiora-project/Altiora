export type typeButtonProps = {
  variant?: 'primary' | 'secondary'
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  children?: React.ReactNode
} & React.ButtonHTMLAttributes<HTMLButtonElement>
