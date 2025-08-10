'use client'

import styles from '../styles/styles.module.scss'
import { SliderCardProps } from '../types'
import Link from 'next/link'

export const SliderCard: React.FC<SliderCardProps> = ({ title, description, tags }) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
      <div className={styles.tags}>
        {tags?.map(tag => (
          <p key={tag.id} className={styles.tag}>
            {`#${tag.name}`}
          </p>
        ))}
      </div>
    </div>
  )
}
