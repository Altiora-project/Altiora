import { typeIconProps } from '../../types'

export const CloseIcon: React.FC<typeIconProps> = ({ size, ...otherProps }) => {
  if (size === 'sm') {
    return (
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        stroke="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        {...otherProps}
      >
        <path d="M15 3 3 15M3 3l12 12" strokeWidth="3" strokeLinecap="square" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 18 18" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg" {...otherProps}>
      <path d="M15 3 3 15M3 3l12 12" strokeWidth="3" strokeLinecap="square" />
    </svg>
  )
}
