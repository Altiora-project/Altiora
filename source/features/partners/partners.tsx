import { Partners } from '@shared/ui/partners'
import { typePartnersProps } from '@shared/ui/partners/types'
import { FC } from 'react'

export const GetPartners: FC<typePartnersProps & { header: string }> = ({ partners, header }) => {
  return (
    <>
      <h2>{header}</h2>
      <Partners partners={partners} />
    </>
  )
}
