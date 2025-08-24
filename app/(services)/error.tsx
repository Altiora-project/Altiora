'use client'

import { FC } from 'react'

import { useRouter } from 'next/navigation'

import { ErrorCard } from '@shared/ui/error'

const ErrorPage: FC<{ error: Error; reset: () => void }> = ({ error, reset }) => {
  const router = useRouter()
  return (
    <ErrorCard
      field={`Что-то пошло не\u00A0так`}
      text={`Ошибка ${error.message}. Давайте попробуем еще раз`}
      onBackClick={() => router.back()}
      onReloadClick={() => reset()}
    />
  )
}

export default ErrorPage
