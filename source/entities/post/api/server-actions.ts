'use server'

import { backendUrls, fetchWrapper, typeApiResponse } from '@shared/lib/api'
import { typePostListResponse, typePostResponse } from '../types'
import { createRoute } from '@shared/configs/routes'

// Серверный экшен получения списка постов
export const getPostListAction = async (): Promise<typeApiResponse<typePostListResponse>> => {
  const url = backendUrls.post.list

  return fetchWrapper<typePostListResponse>(url, {
    responseType: 'json',
    method: 'GET',
    next: {
      revalidate: 60
    }
  })
}

// Серверный экшен получения поста по id
export const getPostAction = async (id: string): Promise<typeApiResponse<typePostResponse>> => {
  const url = createRoute(backendUrls.post.postDetails, { id })

  return fetchWrapper<typePostResponse>(url, {
    responseType: 'json',
    method: 'GET',
    next: {
      revalidate: 60
    }
  })
}
