'use server'

import { getDefaultApiHeaders } from './configs/default-headers.config'
import type { typeApiResponse, typeResponseType } from './types/types'

import { backendDomain } from '@shared/lib/environment/private'

const getErrorMessage = (response: Response, responseData: unknown) => {
  if (typeof responseData === 'object' && responseData !== null) {
    if ('message' in responseData) {
      return String(responseData.message)
    }

    if ('errors' in responseData && Array.isArray(responseData.errors)) {
      return responseData.errors.join('\n')
    }
  }

  return response.statusText ? `${response.status}: ${response.statusText}` : 'Unknown error occurred'
}

export const fetchWrapper = async <T>(
  endpoint: string,
  options: RequestInit & { responseType?: typeResponseType } = {},
  mode?: { withDebug?: boolean }
): Promise<typeApiResponse<T>> => {
  try {
    const { responseType = 'json', ...fetchOptions } = options

    const defaultApiHeaders = await getDefaultApiHeaders()

    const backendUrl = `${backendDomain()}${endpoint}`

    if (mode?.withDebug) console.log('[ DEBUG ]', { info: 'backendUrl', data: backendUrl })

    const response = await fetch(backendUrl, {
      ...fetchOptions,
      headers: {
        ...defaultApiHeaders,
        ...fetchOptions.headers
      }
    })

    let responseData: unknown

    try {
      switch (responseType) {
        case 'text':
          responseData = await response.text()
          break
        case 'blob':
          responseData = await response.blob()
          break
        case 'arrayBuffer':
          responseData = await response.arrayBuffer()
          break
        default:
          responseData = await response.json()
      }

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (_) {
      responseData = undefined
    }

    if (mode?.withDebug) console.log('[ DEBUG ]', { info: 'response data', data: responseData })

    if (!response.ok) {
      const errorMessage = getErrorMessage(response, responseData)

      console.log('[ ERROR ]', { info: 'Fetch error', endpoint: backendUrl, errorMessage })

      return {
        error: {
          status: response.status,
          statusText: response.statusText,
          message: errorMessage,
          details: responseData
        }
      }
    }

    return {
      data: responseData as T
    }
  } catch (error) {
    return {
      error: {
        status: 0,
        statusText: 'Network Error',
        message: error instanceof Error ? error.message : 'Unknown error occurred',
        details: error
      }
    }
  }
}
