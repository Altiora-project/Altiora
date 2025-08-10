import classes from '../styles/styles.module.scss'
import { Footer } from '@widgets/footer'
import { FC } from 'react'
import { Contacts } from '@shared/ui/contacts-list/ui/contacts-list'

type contact = {
  type: 'address' | 'email' | 'phone'
  title: string
}

type document = {
  url: string
  title: string
}

type typeFooterSectionProps = {
  title: string
  contacts: contact[]
  documents: document[]
  requisites: string[]
}

export const FooterSection: FC<typeFooterSectionProps> = props => {
  const { title, contacts, documents, requisites } = props
  return (
    <>
      <h1 className={classes.title}>{title}</h1>
      <div className={classes.wrapper}>
        <Contacts contacts={contacts} />
        <div className={classes.separator} />
        <Footer addressData={requisites} linkList={documents} />
      </div>
    </>
  )
}
