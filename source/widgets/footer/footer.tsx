import classes from './styles.module.scss'

import { FooterInfoBlock } from '@shared/ui/footer-info-block'

type typeFooterProps = {
  addressData: string[]
  linkList: Array<{
    url: string
    title: string
  }>
}
export const Footer: React.FC<typeFooterProps> = ({ addressData, linkList }) => {
  return <FooterInfoBlock className={classes.footer} addressData={addressData} linkList={linkList} />
}
