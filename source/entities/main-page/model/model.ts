interface Tag {
  id: number
  name: string
}

interface Service {
  id: number
  number: number
  name: string
  slug: string
  info: string
  tags: Array<Tag>
}

interface Partner {
  id: number
  name: string
  logo: string
  website: string
}

interface Studies {
  id: number
  name: string
  info: string
  tags: Array<Tag>
}

interface LabCart {
  id: number
  title: string
  image: string
  description: string
}

export interface MainPage {
  meta_title: string
  meta_description: string
  hero_title: string
  hero_subtitle: string
  hero_image: string
  about_title: string
  about_text: string
  highlight_1: string
  highlight_2: string
  services_section_title: string
  lab_title: string
  lab_description: string
  lab_description_ps: string
  labcart_data: Array<LabCart>
  dig_title: string
  dig_description: string
  tokenization_title: string
  tokenization_description: string
  tokenization_video_url: string
  tokenization_links: string
  partners_section_title: string
  partners_data: Array<Partner>
  services_data: Array<Service>
  order_section_title: string
  case_studies_data: Array<Studies>
  contacts_title: string
  contact_address: string
  contact_phone: string
  contact_email: string
}

// {
//   // Hero Block
//   hero_title: string
//   hero_subtitle: string
//   hero_image: string | null

//   // About Block
//   about_title: string
//   about_text: string
//   highlight_1: string
//   highlight_2: string

//   // Services Block
//   services_section_title: string

//   // Startup Lab Block
//   lab_title: string
//   lab_description: string

//   // Digital Marketing Block
//   dig_title: string
//   dig_description: string

//   // Tokenization Block
//   tokenization_title: string
//   tokenization_description: string
//   tokenization_video_url: string | null
//   tokenization_links: string

//   // Partners Block
//   partners_section_title: string

//   // Order Project Block
//   order_section_title: string

//   // Contacts Block
//   contacts_title: string
//   contact_address: string | null
//   contact_phone: string | null
//   contact_email: string | null
// }
