'use client'

import { ErrorBlock } from '@shared/ui/error-block'
import { usePathname } from 'next/navigation'
import { useRouter } from 'nextjs-toploader/app'

export const ServerResponseError: React.FC = () => {
  const router = useRouter()
  const pathname = usePathname()

  const refreshPage = () => {
    router.replace(pathname)
  }

  return <ErrorBlock onReset={refreshPage} />
}
