import { UIContainer } from '../ui-container'

import { FooterInfoBlock } from '@shared/ui/footer-info-block'

export const UIFooterInfoBlock: React.FC = () => {
  return (
    <UIContainer
      title="Footer Info Block"
      description="Блок данных футера со всеми стандартными props, кроме children и дополнительными:"
      props={[
        {
          key: 'addressData',
          value: '("string[]") - массив данных для отображения адреса'
        },
        { key: 'linkList', value: '({url: string, title: string}[]) - массив данных для отображения ссылок' }
      ]}
      components={
        <FooterInfoBlock
          addressDetails={[
            'г Ростов-на-Дону Будённовский пр-т 33',
            'ИНН 6164143256',
            'ОГРН 1236100034708',
            'ОКВЭД2 62.02'
          ]}
          linkList={[
            { slug: '#', title: 'Политика конфиденциальности' },
            { slug: '#', title: 'Согласие на обработку персональных данных' }
          ]}
        ></FooterInfoBlock>
      }
    />
  )
}
