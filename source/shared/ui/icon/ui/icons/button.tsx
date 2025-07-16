import { typeIconProps } from '../../types'

export const ButtonIcon: React.FC<typeIconProps> = props => {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      stroke="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M25 3 3 25M3 3l22 22" strokeWidth="3" strokeLinecap="square" />
    </svg>
  )
}
