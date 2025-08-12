'use client'

import { ErrorCard } from '@shared/ui/error'

const ErrorPage: React.FC = () => {
  return (
    <ErrorCard field="Что-то пошло не так" text="Давайте попробуем еще раз" onClick={() => window.location.reload()} />
  )
}

export default ErrorPage
