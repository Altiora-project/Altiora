import classes from './styles.module.scss'

import { FooterSection } from '@features/footer-section'

export const Footer = () => {
  const title = 'Контакты'
  return (
    <>
      <h1 className={classes.title} id="contacts">
        {`/${title}`}
      </h1>
      <FooterSection />
    </>
  )
}
