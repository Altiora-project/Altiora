'use server'

import { getTechnologiesDataAction } from '@entities/technologies'

export const handleTechnologiesClick = async () => {
  const response = await getTechnologiesDataAction()
  return response
}
