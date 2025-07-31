import { FC } from 'react'

import classes from '../styles/styles.module.scss'
import clsx from 'clsx'
import Link from 'next/link'

import { typeHeroProps } from '@shared/ui/hero-block/types/types'
import { HeroBlockImage } from '@shared/ui/hero-block/ui/hero-block-image'
import { MarkdownRenderer } from '@shared/lib/markdown'

export const HeroBlock: FC<typeHeroProps> = ({ url, imgUrl, title, className, ...otherProps }) => {
  return (
    <div className={clsx(classes.wrapper, className)} {...otherProps}>
      <div className={classes.content}>
        <h1>
          <MarkdownRenderer content={title} />
        </h1>
        <HeroBlockImage className={classes.image} imgUrl={imgUrl} />
      </div>
      <Link href={url} className={classes.link}>
        Связаться с нами
      </Link>
    </div>
  )
}
