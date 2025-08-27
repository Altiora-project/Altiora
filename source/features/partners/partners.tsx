import { FC } from 'react'

import classes from './styles.module.scss'

import { Partners } from '@shared/ui/partners'
import { typePartnersProps } from '@shared/ui/partners/types'

export const GetPartners: FC<typePartnersProps & { header?: string }> = ({ partners, header }) => {
  return (
    <div className={classes.wrapper} id="partners">
      <div className={'container'}>
        <h2>{header}</h2>
      </div>
      <Partners partners={partners} />
    </div>
  )
}
