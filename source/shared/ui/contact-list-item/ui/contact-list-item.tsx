import styles from '../styles/contact-list-item.module.scss'
import { contactListProps } from '../types/types'
import Link from 'next/link'

import { Icon } from '@shared/ui/icon'

export const ContactListItem: React.FC<contactListProps> = ({ type, title }) => {
  switch (type) {
    case 'phone':
      return (
        <Link href={`tel:${title}`} className={styles.container}>
          <Icon icon="phone" className={styles.icon} size="auto" />
          <div className={styles.linkText}>{title}</div>
        </Link>
      )
    case 'email':
      return (
        <Link href={`mailto:${title}`} className={styles.container}>
          <Icon icon="envelop" className={styles.icon} size="auto" />
          <div className={styles.linkText}>{title}</div>
        </Link>
      )
    case 'address':
      return <div className={styles.linkText}>{title}</div>
  }
}
