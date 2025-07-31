'use client'

import styles from '../styles/styles.module.scss'
import { SliderCardProps } from '../types'
import Link from 'next/link'

export const SliderCard: React.FC<SliderCardProps> = ({ title, tags, description }) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
      <div className={styles.tags}>
        {tags?.map(tag => (
          <Link href={tag.link} key={tag.title} className={styles.tag} target="_blank">
            {`#${tag.title}`}
          </Link>
        ))}
      </div>
    </div>
  )
}
