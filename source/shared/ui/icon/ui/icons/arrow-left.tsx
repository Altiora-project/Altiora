import { typeIconProps } from '../../types'

type SVGPropsData = [string, 'className']

export const ArrowLeftIcon: React.FC<typeIconProps> = props => {
  return (
    <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="m10 17-7-7m0 0 7-7m-7 7h14" stroke="#111" stroke-width="3" stroke-linecap="square" />
    </svg>
  )
}
