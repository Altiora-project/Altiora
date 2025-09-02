import React from 'react'

import styles from './styles.module.scss'

import { Button } from '@shared/ui/button'

type DivProps = Omit<React.HTMLAttributes<HTMLDivElement>, 'children' | 'onClick'>

interface ErrorCardBaseProps extends DivProps {
  text?: string
  field: string
}

interface ErrorCardLinkProps extends ErrorCardBaseProps {
  link: string
  onBackClick?: never
  onReloadClick?: never
}

interface ErrorCardButtonProps extends ErrorCardBaseProps {
  onBackClick?: React.MouseEventHandler<HTMLButtonElement>
  onReloadClick?: React.MouseEventHandler<HTMLButtonElement>
  link?: never
}

interface ErrorCardNoButtonProps extends ErrorCardBaseProps {
  link?: undefined
  onBackClick?: undefined
  onReloadClick?: undefined
}

type ErrorCardProps = ErrorCardLinkProps | ErrorCardButtonProps | ErrorCardNoButtonProps

export const ErrorCard: React.FC<ErrorCardProps> = ({ text, field, link, onBackClick, onReloadClick, ...divProps }) => {
  return (
    <div className={styles.errorCard} {...divProps}>
      <div className={styles.field}>{field}</div>
      {text && <div className={styles.text}>{text}</div>}
      {link ? (
        <a href={link} className={styles.button} tabIndex={0}></a>
      ) : (
        <div className={styles.buttons}>
          {onBackClick && <Button onClick={onBackClick}>Назад</Button>}
          {onReloadClick && <Button onClick={onReloadClick}>Перезагрузить страницу</Button>}
        </div>
      )}
    </div>
  )
}
