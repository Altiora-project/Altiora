'use client'

import { ErrorCard } from '@shared/ui/error'

export default function ErrorPage() {
  return (
    <ErrorCard field="Что-то пошло не так" text="Давайте попробуем еще раз" onClick={() => window.location.reload()} />
  )
}
