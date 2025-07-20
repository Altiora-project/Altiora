import { typeIconProps } from '../../types'

export const StarIcon: React.FC<typeIconProps> = ({ size, ...otherProps }) => {
  if (size === 'sm') {
    return (
      <svg
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        stroke="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        {...otherProps}
      >
        <path
          d="M10.527 1.722a.53.53 0 0 1 .95 0l2.31 4.68a2.12 2.12 0 0 0 1.595 1.16l5.166.755a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0l-4.617 2.428a.53.53 0 0 1-.77-.56l.88-5.139a2.12 2.12 0 0 0-.61-1.879L1.162 9.222a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
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
        height="41"
        viewBox="0 0 42 41"
        fill="none"
        stroke="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        {...otherProps}
      >
        <path
          d="M20.109 2.803a.994.994 0 0 1 1.781 0l4.331 8.773a3.98 3.98 0 0 0 2.991 2.175l9.686 1.418a.993.993 0 0 1 .551 1.695l-7.004 6.821a3.98 3.98 0 0 0-1.146 3.521l1.654 9.638a.993.993 0 0 1-1.446 1.05l-8.659-4.553a3.98 3.98 0 0 0-3.7 0l-8.656 4.553a.994.994 0 0 1-1.444-1.05l1.652-9.636a3.98 3.98 0 0 0-1.146-3.523l-7.005-6.82a.994.994 0 0 1 .552-1.698l9.684-1.416a3.98 3.98 0 0 0 2.995-2.175z"
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
        height="42"
        viewBox="0 0 45 42"
        fill="none"
        stroke="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        {...otherProps}
      >
        <path
          d="M21.814 2.788a1.048 1.048 0 0 1 1.88 0l4.574 9.263a4.2 4.2 0 0 0 3.157 2.296l10.227 1.497a1.049 1.049 0 0 1 .582 1.79l-7.396 7.201a4.2 4.2 0 0 0-1.21 3.718l1.746 10.175a1.049 1.049 0 0 1-1.526 1.108l-9.142-4.806a4.2 4.2 0 0 0-3.905 0l-9.14 4.806a1.05 1.05 0 0 1-1.524-1.108l1.744-10.173a4.2 4.2 0 0 0-1.21-3.72l-7.396-7.2a1.049 1.049 0 0 1 .582-1.793l10.225-1.495a4.2 4.2 0 0 0 3.161-2.296z"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )

  if (size === 'auto')
    return (
      <svg fill="none" viewBox="0 0 45 42" stroke="currentColor" xmlns="http://www.w3.org/2000/svg" {...otherProps}>
        <path
          d="M21.814 2.788a1.048 1.048 0 0 1 1.88 0l4.574 9.263a4.2 4.2 0 0 0 3.157 2.296l10.227 1.497a1.049 1.049 0 0 1 .582 1.79l-7.396 7.201a4.2 4.2 0 0 0-1.21 3.718l1.746 10.175a1.049 1.049 0 0 1-1.526 1.108l-9.142-4.806a4.2 4.2 0 0 0-3.905 0l-9.14 4.806a1.05 1.05 0 0 1-1.524-1.108l1.744-10.173a4.2 4.2 0 0 0-1.21-3.72l-7.396-7.2a1.049 1.049 0 0 1 .582-1.793l10.225-1.495a4.2 4.2 0 0 0 3.161-2.296z"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
}
