import { typeIconProps } from '../../types'

export const ArrowRightIcon: React.FC<typeIconProps> = ({ size, ...otherProps }) => {
  if (size === 'auto')
    return (
      <svg fill="none" xmlns="http://www.w3.org/2000/svg" {...otherProps}>
        <path d="M2 10h14m0 0L9 3m7 7-7 7" stroke="#111" strokeWidth="3" strokeLinecap="square" />
      </svg>
    )

  if (size === 'lg')
    return (
      <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...otherProps}>
        <path d="M2 10h14m0 0L9 3m7 7-7 7" stroke="#111" strokeWidth="3" strokeLinecap="square" />
      </svg>
    )
}
