import { FC, SVGProps } from 'react'

export type typeIconName =
  | 'lineLogo'
  | 'envelop'
  | 'chevronRight'
  | 'chevronLeft'
  | 'button'
  | 'arrowLeft'
  | 'arrowRight'
  | 'arrowUp'
  | 'close'
  | 'phone'
  | 'wrench'
  | 'chartSpline'
  | 'star'
  | 'megaphone'
  | 'support'
  | 'mouseClick'
  | 'chartPie'
  | 'handshake'
  | 'trendingUp'
  | 'checkbox'

export type typeIcon = {
  size?: 'auto' | 'sm' | 'md' | 'lg'
}
export interface IconProps extends SVGProps<SVGSVGElement> {
  icon: typeIconName
  size?: 'auto' | 'sm' | 'md' | 'lg'
}

export type typeIconsType = {
  [key in typeIconName]?: FC<typeIcon>
} & typeIcon

export type typeIconProps = typeIcon & Omit<SVGProps<SVGSVGElement>, 'width' | 'height' | 'size'>
