import classes from '../styles/styles.module.scss'
import { Contacts } from '@shared/ui/contacts-list/ui/contacts-list'
import { getSiteSettingsAction } from '@entities/footer'
import { FooterInfoBlock } from '@shared/ui/footer-info-block'
import { typeContact, typeDocument } from '@widgets/footer/types'

export const FooterSection = async () => {
  const response = await getSiteSettingsAction()

  if (!response || 'error' in response) {
    return null
  }

  const { requisites, email, phone, address } = response.data.data
  const contacts: Array<typeContact> = [
    {
      type: 'email',
      title: email
    },
    {
      type: 'phone',
      title: phone
    },
    {
      type: 'address',
      title: address
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
