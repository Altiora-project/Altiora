import { FC } from 'react'

import classes from '../styles/styles.module.scss'
import clsx from 'clsx'
import Link from 'next/link'

import { MarkdownRenderer } from '@shared/lib/markdown'
import { typeHeroProps } from '@shared/ui/hero-block/types/types'
import { HeroBlockImage } from '@shared/ui/hero-block/ui/hero-block-image'

export const HeroBlock: FC<typeHeroProps> = ({ contactLink, imgUrl, title, className, ...otherProps }) => {
  return (
    <div className={clsx(classes.wrapper, className)} {...otherProps}>
      <div className={classes.content}>
        <MarkdownRenderer content={title} />
        <HeroBlockImage className={classes.image} imgUrl={imgUrl} />
      </div>
      <Link href={contactLink} className={classes.link}>
        Связаться с нами
      </Link>
    </div>
  )
}
