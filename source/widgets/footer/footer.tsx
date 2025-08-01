import classes from './styles.module.scss'

import { FooterInfoBlock } from '@shared/ui/footer-info-block'

//TODO: убрать когда будет апи
const mockAddress = ['г Ростов-на-Дону Будённовский пр-т 33', 'ИНН 6164143256', 'ОГРН 1236100034708', 'ОКВЭД2 62.02']
const mockLink = [
  {
    url: '',
    title: 'Политика конфиденциальности'
  },
  {
    url: '',
    title: 'Согласие на обработку персональных данных'
  }
]

export const Footer: React.FC = () => {
  return <FooterInfoBlock className={classes.footer} addressData={mockAddress} linkList={mockLink} />
}
