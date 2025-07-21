import { typeIconProps } from '../../types'

export const ChevronRightIcon: React.FC<typeIconProps> = ({ size, ...otherProps }) => {
  if (size === 'sm')
    return (
      <svg
        width="8"
        height="16"
        viewBox="0 0 8 16"
        fill="none"
        stroke="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        {...otherProps}
      >
        <path d="M0 1.3 5.765 8 0 14.7 1.118 16 8 8 1.118 0z" fill="currentColor" />
      </svg>
    )
  if (size === 'md')
    return (
      <svg
        width="16"
        height="28"
        viewBox="0 0 16 28"
        fill="none"
        stroke="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        {...otherProps}
      >
        <path d="M2 3.949 10.647 14 2 24.051 3.677 26 14 14 3.677 2z" fill="currentColor" strokeWidth="2" />
      </svg>
    )

  if (size === 'lg' || size === undefined)
    return (
      <svg
        width="26"
        height="48"
        viewBox="0 0 26 48"
        fill="none"
        stroke="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        {...otherProps}
      >
        <path d="M2 5.573 17.853 24 2 42.427 5.074 46 24 24 5.074 2z" fill="currentColor" strokeWidth="2" />
      </svg>
    )

  if (size === 'auto')
    return (
      <svg fill="none" viewBox="0 0 26 48" stroke="currentColor" xmlns="http://www.w3.org/2000/svg" {...otherProps}>
        <path d="M2 5.573 17.853 24 2 42.427 5.074 46 24 24 5.074 2z" fill="currentColor" strokeWidth="2" />
      </svg>
    )
}
