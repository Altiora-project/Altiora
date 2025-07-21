import React from 'react'

import { ICONS } from '../icons'
import { IconProps } from '../types'

export const Icon: React.FC<IconProps> = ({ icon, ...props }) => {
  const IconComponent = ICONS[icon]
  if (!IconComponent) return null
  return <IconComponent {...props} />
}
