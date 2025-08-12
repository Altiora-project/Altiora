type videoData<T = string> = {
  title: T
  description?: T
  video: T
  more?: T
  links?: {
    [key: string]: T[]
  }
}

type typeVideoFeatureResponse = {
  success: boolean
  message: string
  data: videoData
}

export default typeVideoFeatureResponse
