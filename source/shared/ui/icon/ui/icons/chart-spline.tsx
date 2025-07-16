import { typeIconProps } from '../../types'

export const ChartSplineIcon: React.FC<typeIconProps> = ({ size, ...otherProps }) => {
  if (size === 'sm') {
    return (
      <svg
        width="20"
        height="21"
        viewBox="0 0 20 21"
        fill="none"
        stroke="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        {...otherProps}
      >
        <path
          d="M1 1.427v16a2 2 0 0 0 2 2h16m-14-5c.5-2 1.5-7 4-7 2 0 2 3 4 3 2.5 0 4.5-5 5-7"
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
        width="38"
        height="38"
        viewBox="0 0 38 38"
        fill="none"
        stroke="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        {...otherProps}
      >
        <path
          d="M2.125 2.125v30a3.75 3.75 0 0 0 3.75 3.75h30M9.625 26.5c.938-3.75 2.813-13.125 7.5-13.125 3.75 0 3.75 5.625 7.5 5.625C29.313 19 33.063 9.625 34 5.875"
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
        width="41"
        height="40"
        viewBox="0 0 41 40"
        fill="none"
        stroke="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        {...otherProps}
      >
        <path
          d="M2.94 2.184v31.673a3.96 3.96 0 0 0 3.959 3.96h31.673m-27.714-9.898c.99-3.96 2.97-13.857 7.918-13.857 3.96 0 3.96 5.938 7.919 5.938 4.948 0 8.908-9.898 9.897-13.857"
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
          d="M2.94 2.184v31.673a3.96 3.96 0 0 0 3.959 3.96h31.673m-27.714-9.898c.99-3.96 2.97-13.857 7.918-13.857 3.96 0 3.96 5.938 7.919 5.938 4.948 0 8.908-9.898 9.897-13.857"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
}
