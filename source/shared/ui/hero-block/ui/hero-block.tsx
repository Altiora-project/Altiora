import { FC } from 'react'

import classes from '../styles/styles.module.scss'
import clsx from 'clsx'
import Link from 'next/link'

import { typeHeroProps } from '@shared/ui/hero-block/types/types'
import { HeroBlockImage } from '@shared/ui/hero-block-image/ui/hero-block-image'

export const HeroBlock: FC<typeHeroProps> = ({ url, className, ...otherProps }) => {
  return (
    <div className={clsx(classes.wrapper, className)} {...otherProps}>
      <div className={classes.content}>
        <h1>
          умные и&nbsp;<span>надежные IT&nbsp;решения</span> для&nbsp;вашей <span>компании</span>
        </h1>
        <HeroBlockImage className={classes.image}></HeroBlockImage>
      </div>
      <Link href={url} className={classes.link}>
        Связаться с нами
      </Link>
    </div>
  )
}
