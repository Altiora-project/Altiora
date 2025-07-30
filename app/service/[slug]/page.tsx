import { ServiceDetails } from '@pages/service-page'
import { FC } from 'react'

type typeServicePageProps = {
  params: Promise<{ slug: string }>
}

const ServicesPage: FC<typeServicePageProps> = async ({ params }) => {
  const { slug } = await params
  return <ServiceDetails className="container" slug={slug} />
}

export default ServicesPage
