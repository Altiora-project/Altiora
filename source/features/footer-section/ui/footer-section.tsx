import classes from '../styles/styles.module.scss'

import { typeContact, typeDocument } from '@widgets/footer/types'

import { getSiteSettingsAction } from '@entities/footer'

import { Contacts } from '@shared/ui/contacts-list/ui/contacts-list'
import { FooterInfoBlock } from '@shared/ui/footer-info-block'

export const FooterSection = async () => {
  const response = await getSiteSettingsAction()

  if (!response || 'error' in response) {
    return null
  }

  const { requisites, email, phone, address } = response.data.data

  const contacts: Array<typeContact> = [
    {
      type: 'phone',
      title: phone
    },
    {
      type: 'email',
      title: email
    }
  ]

  const documents: typeDocument[] = [
    {
      url: '',
      title: 'Политика конфиденциальности'
    },
    {
      url: '',
      title: 'Согласие на обработку персональных данных'
    }
  ]

  return (
    <div className={classes.wrapper}>
      <Contacts contacts={contacts} />
      <div className={classes.separator} />
      <FooterInfoBlock className={classes.footer} addressDetails={[address, requisites]} linkList={documents} />
    </div>
  )
}
