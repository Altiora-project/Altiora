export type typePoliciesData = {
  id: number
  title: string
  text: string
  slug: string
}

export type typePoliciesApi = {
  success: boolean
  message: string
  data: typePoliciesData[]
}

export type typePoliciesSlugApi = {
  success: boolean
  message: string
  data: typePoliciesData
}
