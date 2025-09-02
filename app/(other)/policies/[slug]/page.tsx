import { FC } from 'react'

import { PoliciesPage } from '@pages/policies/policies-page'

type typePoliciesPageProps = {
  params: Promise<{ slug: string }>
}

const Page: FC<typePoliciesPageProps> = async ({ params }) => {
  return <PoliciesPage params={params} />
}

export default Page
