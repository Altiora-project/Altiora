import { typeIconProps } from '../../types'

export const ArrowLeftIcon: React.FC<typeIconProps> = ({ size, ...otherProps }) => {
  if (size === 'lg' || size === undefined)
    return (
      <svg
        width="19"
        height="20"
        viewBox="0 0 19 20"
        fill="none"
        stroke="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        {...otherProps}
      >
        <path d="m10 17-7-7m0 0 7-7m-7 7h14" strokeWidth="3" strokeLinecap="square" />
      </svg>
    )

  if (size === 'auto')
    return (
      <svg fill="none" viewBox="0 0 19 20" stroke="currentColor" xmlns="http://www.w3.org/2000/svg" {...otherProps}>
        <path d="m10 17-7-7m0 0 7-7m-7 7h14" strokeWidth="3" strokeLinecap="square" />
      </svg>
    )
}
