'use client'

import { FC } from 'react'
import { typeMarqueeProps } from '../types'
import Marquee from 'react-fast-marquee'
import classes from '../styles/styles.module.scss'
import { Icon } from '@shared/ui/icon'

export const MarqueeComponent: FC<typeMarqueeProps> = ({ phrases }) => {
  return (
    <>
      {/* TODO: изменить параметр speed по необходимости */}
      <Marquee className={classes.marquee}>
        {phrases.map((phrase, index) => {
          return (
            <div className={classes.phraseWrapper} key={index}>
              <div className={classes.logoIconWrapper}>
                <Icon size="auto" className={classes.logoIcon} icon="lineLogo" />
              </div>
              <span>{phrase}</span>
            </div>
          )
        })}
      </Marquee>
    </>
  )
}
