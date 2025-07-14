import { typeIconProps } from '../../types'

export const ChartPieIcon: React.FC<typeIconProps> = ({ size, ...otherProps }) => {
  if (size === 'sm') {
    return (
      <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg" {...otherProps}>
        <path
          d="M20.21 15.317A10 10 0 1 1 7 2.257m13 9.17c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.95c-.55-.056-.998.397-.998.95v8a1 1 0 0 0 1 1z"
          stroke="#000"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  }

  if (size === 'md') {
    return (
      <svg width="42" height="43" viewBox="0 0 42 43" fill="none" xmlns="http://www.w3.org/2000/svg" {...otherProps}>
        <path
          d="M38.27 28.776A18.75 18.75 0 1 1 13.5 4.288m24.376 17.194c1.035 0 1.884-.842 1.781-1.872A18.75 18.75 0 0 0 22.87 2.827C21.84 2.724 21 3.574 21 4.61v15a1.875 1.875 0 0 0 1.875 1.875z"
          stroke="#111"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  }

  if (size === 'lg' || size === undefined)
    return (
      <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg" {...otherProps}>
        <path
          d="M40.988 29.925a19.795 19.795 0 1 1-26.15-25.853m25.734 18.153c1.093 0 1.99-.889 1.88-1.976A19.796 19.796 0 0 0 24.73 2.53c-1.088-.109-1.975.788-1.975 1.88v15.837a1.98 1.98 0 0 0 1.98 1.98z"
          stroke="#000"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )

  if (size === 'auto')
    return (
      <svg fill="none" xmlns="http://www.w3.org/2000/svg" {...otherProps}>
        <path
          d="M40.988 29.925a19.795 19.795 0 1 1-26.15-25.853m25.734 18.153c1.093 0 1.99-.889 1.88-1.976A19.796 19.796 0 0 0 24.73 2.53c-1.088-.109-1.975.788-1.975 1.88v15.837a1.98 1.98 0 0 0 1.98 1.98z"
          stroke="#000"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
}
