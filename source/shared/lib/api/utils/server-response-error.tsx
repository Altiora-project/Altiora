'use client'

import { usePathname } from 'next/navigation'
import { useRouter } from 'nextjs-toploader/app'
import { ErrorCard } from '@shared/ui/error/index'

export const ServerResponseError: React.FC = () => {
  const router = useRouter()
  const pathname = usePathname()

  const refreshPage = () => {
    router.replace(pathname)
  }

  return <ErrorCard field="Что-то пошло не так" text="Давайте попробуем еще раз" onBackClick={refreshPage} />
}
