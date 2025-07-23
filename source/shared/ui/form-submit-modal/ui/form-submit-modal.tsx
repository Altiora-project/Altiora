import { CardComponent } from '@shared/ui/card-component'
import { FC } from 'react'
import { typeFormSubmitModalProps } from '../types'
import Link from 'next/link'
import classes from '../styles/styles.module.scss'
import Image from 'next/image'

export const FormSubmitModal: FC<typeFormSubmitModalProps> = ({ buttonLink, ...otherProps }) => {
  return (
    <>
      <CardComponent radius="lg" background="black" tag="default" className={classes.card} {...otherProps}>
        <div className={classes.container}>
          <p className={classes.textInfo}>Ваша заявка принята!</p>
          <p className={classes.textInfo}>
            С вами свяжутся в течение двух рабочих дней для более детального обсуждения проекта.
          </p>
          <Link className={classes.link} href={buttonLink}>
            вернуться к сайту
          </Link>
        </div>
        <div className={classes.logoContainer}>
          <Image src="/logo.svg" width={225} height={300} alt="Логотип" className={classes.logo} />
        </div>
      </CardComponent>
    </>
  )
}
