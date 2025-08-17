import { FC } from 'react'

import { About } from '@shared/ui/about'
import { typeAboutDataProps } from '@shared/ui/about/types'

export const GetAbout: FC<typeAboutDataProps> = ({ data }) => {
  return <About data={data} />
}
