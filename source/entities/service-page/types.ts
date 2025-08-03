import { ServiceDelails, ServicePage } from './model/model'

export type typeServicesResponse = {
  success: boolean
  message: string
  data: ServicePage
}

export type typeServiceDetailsResponse = {
  success: boolean
  message: string
  data: ServiceDelails
}
