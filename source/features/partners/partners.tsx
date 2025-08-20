import { Partners } from '@shared/ui/partners'
import { typePartnersProps } from '@shared/ui/partners/types'
import { FC } from 'react'

export const GetPartners: FC<typePartnersProps & { header?: string }> = ({ partners, header }) => {
  return (
    <>
      <div id="partners">
        <h2>{header}</h2>
      </div>

      <Partners partners={partners} />
    </>
  )
}
