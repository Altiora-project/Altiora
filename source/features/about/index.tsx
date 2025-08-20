import { FC } from 'react'

import { About } from '@shared/ui/about'
import { typeAboutDataProps } from '@shared/ui/about/types'
import { string } from 'zod'

export const GetAbout: FC<typeAboutDataProps & { id: string }> = ({ data }) => {
  return <About data={data} />
}
