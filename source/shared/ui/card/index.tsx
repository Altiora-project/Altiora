import { FC, ReactNode } from 'react'

import styles from './styles.module.scss'

interface CardProps {
  icon?: ReactNode
  title?: ReactNode
  text?: ReactNode
}

const Card: FC<CardProps> = ({ icon, title, text }) => {
  return (
    <div className={styles.card}>
      {icon && <div className={styles.icon}>{icon}</div>}
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.text}>{text}</div>
      </div>
    </div>
  )
}

export default Card
