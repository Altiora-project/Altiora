'use client'
import { useEffect, useState } from 'react'
import type { typeSliderProps } from '../types'
import classes from '../styles/styles.module.scss'
import { FC } from 'react'
import { NextButton, PrevButton } from './arrow-buttons'
import { useSwipeable } from 'react-swipeable'
import clsx from 'clsx'

export const Slider: FC<typeSliderProps> = ({ data, options, ...otherProps }) => {
  const cardsStack = data.length
  const [movedInStackCount, setMovedInStackCount] = useState(0)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    setOffset(window.innerWidth)

    const handleResize = () => {
      setOffset(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  let count = 15
  const onRightMove = () => {
    if (movedInStackCount > 0) {
      count += 15
      setMovedInStackCount(v => v - 1)
    }
  }

  const onLeftMove = () => {
    if (movedInStackCount < cardsStack - 1) {
      count -= 15
      setMovedInStackCount(v => v + 1)
    }
  }
  const handleSwipe = useSwipeable({
    onSwipedLeft: onLeftMove,
    onSwipedRight: onRightMove,
    trackMouse: true
  })

  return (
    <div className={classes.wrapper} {...otherProps}>
      <div className={classes.stackContainer} id="stack" {...handleSwipe}>
        {data.map((slide, index) => {
          const isInStack = index < movedInStackCount
          let offsetX

          if (offset >= 1920) {
            offsetX = (index - movedInStackCount) * 780
          } else {
            offsetX = (index - movedInStackCount) * 340
          }

          const offsetDeg = (index - movedInStackCount) * cardsStack

          return (
            <div
              id={index.toString()}
              className={clsx(classes.card, classes.slide)}
              key={index}
              style={!isInStack ? { transform: `translateX(${offsetX + count}px)` } : { rotate: `${offsetDeg}deg` }}
            >
              {slide}
            </div>
          )
        })}
      </div>

      <div className={classes.controls}>
        <div className={classes.buttons}>
          <PrevButton onClick={onRightMove} disabled={movedInStackCount === 0} />
          <NextButton onClick={onLeftMove} disabled={movedInStackCount === cardsStack - 1} />
        </div>
      </div>
    </div>
  )
}
