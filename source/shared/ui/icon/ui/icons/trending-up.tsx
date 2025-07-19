import { typeIconProps } from '../../types'

export const TrendingUpIcon: React.FC<typeIconProps> = ({ size, ...otherProps }) => {
  if (size === 'sm') {
    return (
      <svg
        width="22"
        height="13"
        viewBox="0 0 22 13"
        fill="none"
        stroke="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        {...otherProps}
      >
        <path
          d="M15 1.427h6m0 0v6m0-6-8.5 8.5-5-5-6.5 6.5"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  }

  if (size === 'md') {
    return (
      <svg
        width="44"
        height="24"
        viewBox="0 0 44 24"
        fill="none"
        stroke="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M29.92 2.102h11.877m0 0V13.98m0-11.878L24.97 18.93l-9.898-9.9L2.205 21.898"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  }

  if (size === 'lg')
    return (
      <svg
        width="45"
        height="25"
        viewBox="0 0 45 25"
        fill="none"
        stroke="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        {...otherProps}
      >
        <path
          d="M30.673 2.347h11.878m0 0v11.878m0-11.878L25.724 19.174l-9.898-9.898L2.96 22.143"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )

  if (size === 'auto')
    return (
      <svg fill="none" viewBox="0 0 45 25" stroke="currentColor" xmlns="http://www.w3.org/2000/svg" {...otherProps}>
        <path
          d="M30.673 2.347h11.878m0 0v11.878m0-11.878L25.724 19.174l-9.898-9.898L2.96 22.143"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
}
