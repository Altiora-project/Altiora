import { FC, HTMLAttributes } from 'react'

import classes from '../styles/styles.module.scss'
import clsx from 'clsx'

import { ContactListItem } from '@shared/ui/contact-list-item'

type typeContactsProps = {
  contacts: { type: 'address' | 'email' | 'phone'; title: string }[]
} & Omit<HTMLAttributes<HTMLDivElement>, 'children'>

export const Contacts: FC<typeContactsProps> = ({ contacts, className, ...otherProps }) => {
  return (
    <div className={clsx(classes.contacts, className)} {...otherProps}>
      {contacts.map((contact, index) => {
        return <ContactListItem linkType={contact.type} title={contact.title} key={index} />
      })}
    </div>
  )
}
