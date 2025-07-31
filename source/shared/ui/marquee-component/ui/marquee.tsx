'use client'

import { FC } from 'react'

import classes from '../styles/styles.module.scss'
import { typeMarqueeProps } from '../types'
import Marquee from 'react-fast-marquee'

import { Icon } from '@shared/ui/icon'
import clsx from 'clsx'

export const MarqueeComponent: FC<typeMarqueeProps> = ({ phrases, ...otherProps }) => {
  return (
    <>
      {/* TODO: изменить параметр speed по необходимости */}
      <Marquee className={clsx(classes.marquee, otherProps.className)}>
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
