import { FC } from 'react'

import { ServiceDetails } from '@pages/service-page'

type typeServicePageProps = {
  params: Promise<{ slug: string }>
}

const ServicesPage: FC<typeServicePageProps> = async ({ params }) => {
  const { slug } = await params
  return <ServiceDetails className="container" slug={slug} />
}

export default ServicesPage
