import { HeroBlock } from '@shared/ui/hero-block'
import { MarqueeComponent } from '@shared/ui/marquee-component'
import { FC } from 'react'
import classes from '../styles/styles.module.scss'

type typeHeroSectionProps = {
  title: string
  imgUrl: string
  phrases: Array<string>
}

export const HeroSection: FC<typeHeroSectionProps> = ({ title, imgUrl, phrases, ...otherProps }) => {
  return (
    <>
      <div className={classes.container} {...otherProps}>
        <HeroBlock link={''} title={title} imgUrl={imgUrl} />
      </div>
      <MarqueeComponent phrases={phrases} />
    </>
  )
}
