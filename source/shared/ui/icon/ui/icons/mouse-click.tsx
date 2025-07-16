import { typeIconProps } from '../../types'

export const MouseClickIcon: React.FC<typeIconProps> = ({ size, ...otherProps }) => {
  if (size === 'sm') {
    return (
      <svg
        width="21"
        height="22"
        viewBox="0 0 21 22"
        fill="none"
        stroke="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        {...otherProps}
      >
        <path
          d="m13 3.527-2 1.9m-6.9 2-2.9-.8m3.8 4.8-1.9 2m3.1-11.8.8 2.9m1.036 4.59a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z"
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
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        stroke="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        {...otherProps}
      >
        <path
          d="m24.748 6.037-3.75 3.562M8.061 13.35l-5.438-1.5m7.125 9L6.186 24.6m5.812-22.125 1.5 5.438m1.944 8.606a.934.934 0 0 1 1.225-1.225l20.625 8.438a.937.937 0 0 1-.139 1.78l-8.154 1.951a1.88 1.88 0 0 0-1.388 1.386l-1.95 8.156a.938.938 0 0 1-1.781.139z"
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
        width="42"
        height="42"
        viewBox="0 0 42 42"
        fill="none"
        stroke="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        {...otherProps}
      >
        <path
          d="m25.713 5.998-3.96 3.76m-13.659 3.96-5.74-1.584m7.522 9.502-3.761 3.96m6.136-23.36 1.584 5.741m2.053 9.086a.986.986 0 0 1 1.293-1.292l21.775 8.908a.99.99 0 0 1-.147 1.879l-8.609 2.06a1.98 1.98 0 0 0-1.465 1.463l-2.058 8.611a.99.99 0 0 1-1.88.147z"
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
          d="m24.748 6.037-3.75 3.562M8.061 13.35l-5.438-1.5m7.125 9L6.186 24.6m5.812-22.125 1.5 5.438m1.944 8.606a.934.934 0 0 1 1.225-1.225l20.625 8.438a.937.937 0 0 1-.139 1.78l-8.154 1.951a1.88 1.88 0 0 0-1.388 1.386l-1.95 8.156a.938.938 0 0 1-1.781.139z"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
}
