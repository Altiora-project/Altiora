import { typeIconProps } from '../../types'

export const ArrowUpIcon: React.FC<typeIconProps> = ({ size, ...otherProps }) => {
  if (size === 'lg' || size === undefined)
    return (
      <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg" {...otherProps}>
        <path d="m3 10 7-7m0 0 7 7m-7-7v14" stroke="#111" strokeWidth="3" strokeLinecap="square" />
      </svg>
    )

  if (size === 'auto')
    return (
      <svg fill="none" xmlns="http://www.w3.org/2000/svg" {...otherProps}>
        <path d="m3 10 7-7m0 0 7 7m-7-7v14" stroke="#111" strokeWidth="3" strokeLinecap="square" />
      </svg>
    )
}
