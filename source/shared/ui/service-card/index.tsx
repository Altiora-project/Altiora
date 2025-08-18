import { FC, ReactNode } from 'react'

import styles from './styles.module.scss'
import Image from 'next/image'

interface ServiceCardProps extends React.HTMLAttributes<HTMLDivElement> {
  id?: string
  icon?: string
  title?: string
  text?: ReactNode
}

const ServiceCard: FC<ServiceCardProps> = ({ icon, title, text, ...otherProps }) => {
  return (
    <div className={styles.card} {...otherProps}>
      {icon && <Image className={styles.icon} src={icon} width={100} height={100} alt={title ?? 'alt'} />}
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.text}>{text}</div>
      </div>
    </div>
  )
}

export default ServiceCard
