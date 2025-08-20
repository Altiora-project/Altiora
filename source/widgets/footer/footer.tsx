import { FC } from 'react'

import classes from './styles.module.scss'

import { typeFooterProps } from '@pages/main-page/types'

import { FooterSection } from '@features/footer-section'

export const Footer: FC<typeFooterProps> = ({ title, className, ...otherProps }) => {
  return (
    <div className={className} {...otherProps}>
      <h2 className={classes.title} id="contacts">
        {title}
      </h2>
      <FooterSection />
    </div>
  )
}
