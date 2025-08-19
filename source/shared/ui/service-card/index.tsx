import { FC, ReactNode } from 'react'

import styles from './styles.module.scss'
import Image from 'next/image'

interface ServiceCardProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: string
  title: string
  text?: ReactNode
}

const ServiceCard: FC<ServiceCardProps> = ({ icon, title, text, ...otherProps }) => {
  return (
    <div className={styles.card} {...otherProps}>
      {icon && (
        <div className={styles.icon}>
          <Image src={icon} alt={title} fill sizes="100%" />
        </div>
      )}
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.text}>{text}</div>
      </div>
    </div>
  )
}

export default ServiceCard
