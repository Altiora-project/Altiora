import React from 'react'
import styles from './styles.module.scss'
import { Button } from '@shared/ui/button'
import { CardComponent } from '../card-component'

type DivProps = Omit<React.HTMLAttributes<HTMLDivElement>, 'children' | 'onClick'>

interface ErrorCardBaseProps extends DivProps {
  text: string
  field?: string
}

interface ErrorCardLinkProps extends ErrorCardBaseProps {
  link: string
  onClick?: never
}

interface ErrorCardButtonProps extends ErrorCardBaseProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>
  link?: never
}

interface ErrorCardNoButtonProps extends ErrorCardBaseProps {
  link?: undefined
  onClick?: undefined
}

type ErrorCardProps = ErrorCardLinkProps | ErrorCardButtonProps | ErrorCardNoButtonProps

export const ErrorCard: React.FC<ErrorCardProps> = ({ text, field, link, onClick, ...divProps }) => {
  return (
    <div className={styles.errorCard} {...divProps}>
      {field && <div className={styles.field}>{field}</div>}
      <div className={styles.text}>{text}</div>
      {link ? (
        <a href={link} className={styles.button} tabIndex={0}></a>
      ) : onClick ? (
        <Button style={{ zIndex: '1' }} onClick={onClick}>
          Перезагрузить страницу
        </Button>
      ) : null}
    </div>
  )
}
