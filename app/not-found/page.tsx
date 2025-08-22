'use client'

import { ErrorCard } from '@shared/ui/error'

const NotFoundPage: React.FC = () => (
  <ErrorCard
    field="404 Not Found"
    text="Страница не найдена. Давайте попробуем еще раз"
    onClick={() => window.location.reload()}
  />
)

export default NotFoundPage
