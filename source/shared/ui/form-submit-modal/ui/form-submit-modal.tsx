import { CardComponent } from '@shared/ui/card-component'
import { FC } from 'react'
import { typeFormSubmitModalProps } from '../types'
import Link from 'next/link'
import classes from '../styles/styles.module.scss'
import { Icon } from '@shared/ui/icon'

export const FormSubmitModal: FC<typeFormSubmitModalProps> = ({ buttonLink, ...otherProps }) => {
  return (
    <>
      <CardComponent radius="lg" background="black" tag="default" className={classes.card} {...otherProps}>
        <div className={classes.container}>
          <p className={classes.textInfo}>Ваша заявка принята!</p>
          <p className={classes.textInfo}>
            С вами свяжутся в течение двух рабочих дней для более детального обсуждения проекта.
          </p>
          {/*  TODO: поменять на компонент кнопки */}
          <Link className={classes.link} href={buttonLink}>
            вернуться к сайту
          </Link>
        </div>
        {/* TODO: изменить, когда появится компонент <Logo size='md'/> */}
        <div className={classes.iconContainer}>
          <Icon size={'auto'} icon="lineLogo" style={{ height: '300px', width: '225px' }} />
        </div>
      </CardComponent>
    </>
  )
}
