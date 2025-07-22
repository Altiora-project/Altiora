import { typeIconProps } from '../../types'

export const HandshakeIcon: React.FC<typeIconProps> = ({ size, ...otherProps }) => {
  if (size === 'sm') {
    return (
      <svg
        width="22"
        height="21"
        viewBox="0 0 22 21"
        fill="none"
        stroke="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        {...otherProps}
      >
        <path
          d="m10 15.427 2 2a2.122 2.122 0 0 0 3-3m-2-2 2.5 2.5a2.121 2.121 0 0 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a2.121 2.121 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25l1.74-.35m0-1 1 11h-2m-17-11-1 11 6.5 6.5a2.121 2.121 0 0 0 3-3M2 2.427h8"
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
        width="42"
        height="39"
        viewBox="0 0 42 39"
        fill="none"
        stroke="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        {...otherProps}
      >
        <path
          d="m19.125 28.822 3.75 3.75a3.974 3.974 0 0 0 5.625 0 3.98 3.98 0 0 0 0-5.625m-3.75-3.75 4.688 4.688a3.977 3.977 0 1 0 5.625-5.625l-7.276-7.275a5.625 5.625 0 0 0-7.95 0l-1.65 1.65a3.977 3.977 0 1 1-5.625-5.625l5.27-5.269A10.856 10.856 0 0 1 31.068 4.11l.881.525a3.75 3.75 0 0 0 2.662.468l3.263-.656m0-1.875 1.875 20.625H36M4.125 2.572 2.25 23.197l12.188 12.188a3.977 3.977 0 1 0 5.624-5.625M4.126 4.447h15"
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
        height="41"
        viewBox="0 0 45 41"
        fill="none"
        stroke="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        {...otherProps}
      >
        <path
          d="m20.775 30.084 3.96 3.959a4.2 4.2 0 0 0 5.938-5.939m-3.959-3.959 4.949 4.949a4.2 4.2 0 1 0 5.939-5.939l-7.681-7.68a5.94 5.94 0 0 0-8.393 0l-1.743 1.742a4.199 4.199 0 1 1-5.938-5.94l5.562-5.562a11.46 11.46 0 0 1 13.976-1.722l.93.554a3.96 3.96 0 0 0 2.812.495l3.444-.693m0-1.98 1.98 21.776h-3.96M4.94 2.37 2.96 24.145l12.867 12.867a4.2 4.2 0 0 0 5.939-5.938M4.939 4.349h15.836"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )

  if (size === 'auto')
    return (
      <svg fill="none" viewBox="0 0 45 41" stroke="currentColor" xmlns="http://www.w3.org/2000/svg" {...otherProps}>
        <path
          d="m20.775 30.084 3.96 3.959a4.2 4.2 0 0 0 5.938-5.939m-3.959-3.959 4.949 4.949a4.2 4.2 0 1 0 5.939-5.939l-7.681-7.68a5.94 5.94 0 0 0-8.393 0l-1.743 1.742a4.199 4.199 0 1 1-5.938-5.94l5.562-5.562a11.46 11.46 0 0 1 13.976-1.722l.93.554a3.96 3.96 0 0 0 2.812.495l3.444-.693m0-1.98 1.98 21.776h-3.96M4.94 2.37 2.96 24.145l12.867 12.867a4.2 4.2 0 0 0 5.939-5.938M4.939 4.349h15.836"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
}
