'use client'

import { useEffect, useState } from 'react'

import styles from './styles.module.scss'
import clsx from 'clsx'

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [isRotated, setIsRotated] = useState(false)

  const toggleVisibility = () => {
    if (window.scrollY > window.innerHeight) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
    setIsRotated(true)
    setTimeout(() => setIsRotated(false), 600)
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  return (
    <button className={clsx(styles.button, { [styles.visible]: isVisible })} onClick={scrollToTop}>
      <svg
        className={clsx(styles.icon, { [styles.rotated]: isRotated })}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="2"
      >
        <polyline points="18 15 12 9 6 15" />
      </svg>
    </button>
  )
}

export default ScrollToTop
