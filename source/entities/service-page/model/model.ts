export interface ServicePage {
  services: Array<Service>
  case_studies: Array<CaseStudy>
}

export interface Tag {
  id: number
  name: string
}

export interface Service {
  id: number
  number: number
  name: string
  info: string
  tags: Array<Tag>
}

export interface CaseStudy {
  id: number
  name: string
  info: string
  tags: Array<Tag>
}

export interface Postscriptum {
  id: number
  name: string
  info: string
  item1: string
  item2: string
  item3: string
  item4: string
}

export interface ServiceDelails {
  id: number
  number: number
  name: string
  info: string
  content: string
  tags: Array<Tag>
  postscriptum: Postscriptum
  case_studies: Array<CaseStudy>
  meta_title: string
  meta_description: string
}
