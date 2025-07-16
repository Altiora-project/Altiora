import { typeIconProps } from '../../types'

export const MegaphoneIcon: React.FC<typeIconProps> = ({ size, ...otherProps }) => {
  if (size === 'sm') {
    return (
      <svg
        width="20"
        height="16"
        viewBox="0 0 20 16"
        fill="none"
        stroke="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        {...otherProps}
      >
        <path
          d="M9.6 12.227a3.008 3.008 0 1 1-5.8-1.6M1 6.427l18-5v12l-18-4z"
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
        width="41"
        height="31"
        viewBox="0 0 41 31"
        fill="none"
        stroke="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        {...otherProps}
      >
        <path
          d="M19.963 24.253A5.956 5.956 0 0 1 8.48 21.086m-5.543-8.314L38.57 2.874v23.754L2.938 18.71z"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  }

  if (size === 'lg' || size === undefined)
    return (
      <svg
        width="50"
        height="38"
        viewBox="0 0 50 38"
        fill="none"
        stroke="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        {...otherProps}
      >
        <path
          d="M24 29.898a7.7 7.7 0 0 1-1.317 2.66 7.6 7.6 0 0 1-2.22 1.947 7.42 7.42 0 0 1-5.712.72 7.5 7.5 0 0 1-2.623-1.336 7.6 7.6 0 0 1-1.919-2.254 7.74 7.74 0 0 1-.71-5.797M2.501 15.185 47.5 2.5v30.442l-45-10.147z"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )

  if (size === 'auto')
    return (
      <svg fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg" {...otherProps}>
        <path
          d="M24 29.898a7.7 7.7 0 0 1-1.317 2.66 7.6 7.6 0 0 1-2.22 1.947 7.42 7.42 0 0 1-5.712.72 7.5 7.5 0 0 1-2.623-1.336 7.6 7.6 0 0 1-1.919-2.254 7.74 7.74 0 0 1-.71-5.797M2.501 15.185 47.5 2.5v30.442l-45-10.147z"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
}
