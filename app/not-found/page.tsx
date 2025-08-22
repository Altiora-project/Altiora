'use client'

import { ErrorCard } from '@shared/ui/error'

export default function NotFoundPage() {
  return (
    <ErrorCard
      field="404 Not Found"
      text="Страница не найдена. Давайте попробуем еще раз"
      onClick={() => window.location.reload()}
    />
  )
}
