import styles from '../styles/styles.module.scss'
import { LinkMenuProps } from '../types/types'
import { LinkMenuIcon } from './link-menu-icon'
import clsx from 'clsx'
import Link from 'next/link'

export const LinkMenu = ({ title, list, className, ...props }: LinkMenuProps) => {
  return (
    <div className={clsx(styles.linkMenu, className)} {...props}>
      <div className={styles.header}>
        <h3 className={styles.title}>{title}</h3>
        <LinkMenuIcon className={styles.icon} />
      </div>

      <ul className={styles.linkList}>
        {list.map((item, index) => (
          <li key={index} className={styles.linkItem}>
            <Link href={item.url} className={styles.link}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
