import { About } from '@shared/ui/about'
import { typeAboutDataProps } from '@shared/ui/about/types'
import { FC } from 'react'

export const GetAbout: FC<typeAboutDataProps> = ({ data }) => {
  return <About data={data} />
}
