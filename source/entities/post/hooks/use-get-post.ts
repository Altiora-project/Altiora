'use client'

import { useEffect, useState } from 'react'

import { getPostAction } from '../api/server-actions'
import { UserModel } from '../model'

export const useGetPost = (id: string) => {
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState<UserModel | null>(null)
  const [error, setError] = useState<unknown | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true)

        const response = await getPostAction(id)

        if ('error' in response) {
          throw response.error
        }

        setData(response.data)
      } catch (error) {
        setError(error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [id])

  return {
    isLoading,
    data,
    error
  }
}
