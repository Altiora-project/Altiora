export type OrderFormData = {
    name: string
    company: string
    projectDetails: string
    phone: string
    email: string
    agreement: boolean
}

export type OrderFormProps = {
    title: string
    callback: (data: OrderFormData) => void
    agreementLink?: string
} 