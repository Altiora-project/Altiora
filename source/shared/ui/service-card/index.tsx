import { FC, ReactNode } from 'react'

import styles from './styles.module.scss'

interface ServiceCardProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: ReactNode
  title?: string
  text?: ReactNode
}

const ServiceCard: FC<ServiceCardProps> = ({ icon, title, text, ...other }) => {
  return (
    <div className={styles.card} {...other}>
      {icon && <div className={styles.icon}>{icon}</div>}
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.text}>{text}</div>
      </div>
    </div>
  )
}

export default ServiceCard
