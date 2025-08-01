import { FC, HTMLAttributes } from 'react'

import Image from 'next/image'

type typeHeroBlockImage = {
  imgUrl: string
} & HTMLAttributes<HTMLDivElement>

export const HeroBlockImage: FC<typeHeroBlockImage> = ({ imgUrl, className, ...props }) => {
  return (
    <div className={className} {...props}>
      {imgUrl && <Image src={imgUrl} width={941} height={700} style={{ maxWidth: '100%', height: 'auto' }} alt={''} />}
    </div>
  )
}
