import { FC } from 'react'

import classes from '../styles/styles.module.scss'
import { typeFormSubmitModalProps } from '../types'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@shared/ui/button'
import { CardComponent } from '@shared/ui/card-component'
import Overlay from '@shared/ui/overlay'

export const FormSubmitModal: FC<typeFormSubmitModalProps> = ({ buttonLink, isOpen, onClose, ...otherProps }) => {
  if (buttonLink === '') buttonLink = '/'
  return (
    <>
      <CardComponent
        radius="lg"
        background="black"
        tag="default"
        className={clsx(classes.card, { [classes.card__open]: isOpen })}
        {...otherProps}
      >
        <div className={classes.container}>
          <p className={classes.textInfo}>Ваша заявка принята!</p>
          <p className={classes.textInfo}>
            С вами свяжутся в течение двух рабочих дней для более детального обсуждения проекта.
          </p>
          {onClose && (
            <Button onClick={onClose} className={clsx(classes.button, classes.link)}>
              вернуться к сайту
            </Button>
          )}

          {buttonLink && (
            <Link className={classes.link} href={buttonLink}>
              вернуться к сайту
            </Link>
          )}
        </div>
        <div className={classes.logoContainer}>
          <Image src="/logo.svg" width={225} height={300} alt="Логотип" className={classes.logo} />
        </div>
      </CardComponent>
      <Overlay />
    </>
  )
}
