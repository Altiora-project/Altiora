'use client'

import { createRoute, routes } from '@shared/configs/routes'
import styles from './styles.module.scss'
import { FooterInfoBlockProps } from './types'
import clsx from 'clsx'
import Link from 'next/link'

export const FooterInfoBlock: React.FC<FooterInfoBlockProps> = ({ addressDetails, linkList }) => {
  const currentYear = new Date().getFullYear()

  return (
    <div className={styles.container}>
      <div className={styles.addressBlock}>
        {addressDetails?.map((item, index) => (
          <p key={index} className={styles.text}>
            {item}
          </p>
        ))}
      </div>
      <div className={styles.linkBlock}>
        {linkList?.map((link, index) => (
          <Link
            href={createRoute(routes.policiesBySlug, { slug: link.slug })}
            key={index}
            className={styles.text}
            target="_blank"
          >
            {link.title}
          </Link>
        ))}
      </div>
      <div className={clsx(styles.year, styles.text)}>{currentYear}</div>
    </div>
  )
}
