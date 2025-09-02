import { typeIconProps } from '../../types'
import React from 'react'

export const chevronDownIcon: React.FC<typeIconProps> = ({ size, ...otherProps }) => {
  const commonProps = {
    fill: 'currentColor',
    xmlns: 'http://www.w3.org/2000/svg',
    style: { transform: 'rotate(90deg)', transformOrigin: 'center' }, // Поворот вправо → вниз
    ...otherProps
  }

  if (size === 'sm')
    return (
      <svg width="8" height="16" viewBox="0 0 8 16" {...commonProps}>
        <path d="M0 1.3 5.765 8 0 14.7 1.118 16 8 8 1.118 0z" />
      </svg>
    )

  if (size === 'md')
    return (
      <svg width="16" height="28" viewBox="0 0 16 28" {...commonProps}>
        <path d="M2 3.949 10.647 14 2 24.051 3.677 26 14 14 3.677 2z" strokeWidth="2" />
      </svg>
    )

  if (size === 'auto')
    return (
      <svg viewBox="0 0 26 48" {...commonProps}>
        <path d="M2 5.573 17.853 24 2 42.427 5.074 46 24 24 5.074 2z" strokeWidth="2" />
      </svg>
    )

  if (size === 'lg')
    return (
      <svg width="26" height="48" viewBox="0 0 26 48" {...commonProps}>
        <path d="M2 5.573 17.853 24 2 42.427 5.074 46 24 24 5.074 2z" strokeWidth="2" />
      </svg>
    )

  return null
}
