'use client'

import { ErrorCard } from '@shared/ui/error'

export default function ErrorSlugPage({ params }: { params: { slug: string } }) {
  return (
    <ErrorCard
      field="Что-то пошло не так"
      text={`Ошибка: ${params.slug}. Давайте попробуем еще раз`}
      onClick={() => window.location.reload()}
    />
  )
}
