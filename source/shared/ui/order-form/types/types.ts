export type OrderFormData = {
  name: string
  company: string
  project_details: string
  phone_number: string
  email: string
  agreed_to_terms: boolean
}

export type OrderFormProps = {
  title: string
  callback: (data: OrderFormData) => void
  agreementLink?: string
}
