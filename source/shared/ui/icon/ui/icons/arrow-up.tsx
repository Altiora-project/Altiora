import { typeIconProps } from '../../types'

export const ArrowUpIcon: React.FC<typeIconProps> = props => {
  return (
    <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="m3 10 7-7m0 0 7 7m-7-7v14" stroke="#111" stroke-width="3" stroke-linecap="square" />
    </svg>
  )
}
