import styles from '../styles/contact-list-item.module.scss'
import { contactListProps } from '../types/types'
import Link from 'next/link'

import { Icon } from '@shared/ui/icon'

const getLink = (title: string, type?: 'phone' | 'email' | 'address'): string => {
  switch (type) {
    case 'email':
      return `mailto:${title}`
    case 'phone':
      return `tel:${title}`
    default:
      return title
  }
}

export const ContactListItem: React.FC<contactListProps> = ({ title, linkType }) => {
  const link = getLink(title, linkType)

  return (
    <>
      {linkType !== 'address' ? (
        <Link href={link} className={styles.container}>
          <Icon icon={linkType} className={styles.icon} size="auto" />
          <div className={styles.linkText}>{title}</div>
        </Link>
      ) : title ? (
        <div className={styles.linkText}>{title}</div>
      ) : null}
    </>
  )
}
