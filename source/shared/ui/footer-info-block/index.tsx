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
        {addressDetails?.map((item, index) => {
          if (item.includes('ИНН') || item.includes('ОГРН') || item.includes('ОКВЭД2')) {
            // Разбиваем строку по пробелам на блоки
            const parts = item.split(/(?=ИНН|ОГРН|ОКВЭД2)/g)

            return (
              <div key={index} className={styles.details}>
                {parts.map((part, i) => (
                  <p key={i} className={styles.text}>
                    {part.trim()}
                  </p>
                ))}
              </div>
            )
          }

          return (
            <p key={index} className={styles.text}>
              {item}
            </p>
          )
        })}
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
