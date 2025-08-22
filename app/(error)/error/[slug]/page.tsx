'use client'

import { ErrorCard } from '@shared/ui/error'

type ErrorSlugPageProps = {
  params: {
    slug: string
  }
}

export default function ErrorSlugPage({ params }: ErrorSlugPageProps) {
  return (
    <ErrorCard
      field="Что-то пошло не так"
      text={`Ошибка: ${params.slug}. Давайте попробуем еще раз`}
      onClick={() => window.location.reload()}
    />
  )
}
