'use server'

import { typePostListResponse, typePostResponse } from '../types'
import { endpoints, fetchWrapper, typeApiResponse } from '@shared/lib/api'

// Серверный экшен получения списка постов
export const getPostListAction = async (): Promise<typeApiResponse<typePostListResponse>> => {
  // const url = backendUrls.post.list
  const url = endpoints.postList

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
  // const url = createRoute(backendUrls.post.postDetails, { id })
  const url = endpoints.postDetails(id)

  return fetchWrapper<typePostResponse>(url, {
    responseType: 'json',
    method: 'GET',
    next: {
      revalidate: 60
    }
  })
}
