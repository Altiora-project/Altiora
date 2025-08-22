'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export const RedirectAfterReload = () => {
  const router = useRouter()

  useEffect(() => {
    const redirect = localStorage.getItem('redirectAfterReload')
    if (redirect) {
      localStorage.removeItem('redirectAfterReload')
      router.push(redirect)
    }
  }, [router])

  return null
}
