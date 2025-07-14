import { typeIconProps } from '../../types'

export const WrenchIcon: React.FC<typeIconProps> = ({ size, ...otherProps }) => {
  if (size === 'sm') {
    return (
      <svg width="26" height="27" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg" {...otherProps}>
        <path
          d="M15.777 6.862a1.263 1.263 0 0 0 0 1.768l2.02 2.02a1.263 1.263 0 0 0 1.768 0l4.761-4.76A7.577 7.577 0 0 1 14.3 15.916l-8.726 8.727a2.679 2.679 0 0 1-3.788-3.789l8.726-8.726A7.577 7.577 0 0 1 20.538 2.101z"
          stroke="#111"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  }

  if (size === 'md') {
    return (
      <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" {...otherProps}>
        <path
          d="M30.206 12.69a2.37 2.37 0 0 0 0 3.315l3.789 3.789a2.37 2.37 0 0 0 3.315 0l8.926-8.927a14.206 14.206 0 0 1-18.8 18.8L11.075 46.03a5.023 5.023 0 1 1-7.104-7.104l16.362-16.361a14.208 14.208 0 0 1 18.8-18.8z"
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
      <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg" {...otherProps}>
        <path
          d="M31.253 13.003a2.5 2.5 0 0 0 0 3.5l4 4a2.5 2.5 0 0 0 3.5 0l9.425-9.425a15 15 0 0 1-19.85 19.85L11.053 48.203a5.304 5.304 0 0 1-7.5-7.5l17.275-17.275a15 15 0 0 1 19.85-19.85z"
          stroke="#111"
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
          d="M31.253 13.003a2.5 2.5 0 0 0 0 3.5l4 4a2.5 2.5 0 0 0 3.5 0l9.425-9.425a15 15 0 0 1-19.85 19.85L11.053 48.203a5.304 5.304 0 0 1-7.5-7.5l17.275-17.275a15 15 0 0 1 19.85-19.85z"
          stroke="#111"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
}
