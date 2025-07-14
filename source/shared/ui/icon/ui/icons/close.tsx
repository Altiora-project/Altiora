import { typeIconProps } from '../../types'

export const CloseIcon: React.FC<typeIconProps> = props => {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M15 3 3 15M3 3l12 12" stroke="#111" stroke-width="3" stroke-linecap="square" />
    </svg>
  )
}
