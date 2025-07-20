import { FC, HTMLAttributes } from 'react'

import Image from 'next/image'

export const HeroBlockImage: FC<HTMLAttributes<HTMLDivElement>> = ({ className, ...props }) => {
  return (
    <div className={className} {...props}>
      <Image
        src={'/image/hero-logo-dt.png'}
        width={941}
        height={660}
        style={{ maxWidth: '100%', height: 'auto' }}
        alt={''}
      />
    </div>
  )
}
