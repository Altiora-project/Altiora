import classes from '../styles/styles.module.scss'

import { typeContact, typeDocument } from '@widgets/footer/types'

import { getSiteSettingsAction } from '@entities/footer'

import { Contacts } from '@shared/ui/contacts-list/ui/contacts-list'
import { FooterInfoBlock } from '@shared/ui/footer-info-block'
import { getPoliciesApi } from '@entities/policies/api/get-policies'

export const FooterSection = async () => {
  const response = await getSiteSettingsAction()
  const policies = await getPoliciesApi()

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
      slug: policies.data[1].slug,
      title: policies.data[1].title
    },
    {
      slug: policies.data[0].slug,
      title: policies.data[0].title
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
