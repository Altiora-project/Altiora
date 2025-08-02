import { z } from 'zod'

export const OrderFormSchema = z.object({
  name: z.string().min(1, 'Имя обязательно'),
  company: z.string().min(1, 'Название компании обязательно'),
  projectDetails: z.string().min(1, 'Подробности о проекте обязательны'),
  phone: z
    .string()
    .min(1, 'Телефон обязателен')
    .regex(/^\+?[0-9\s-]+$/, 'Неверный формат телефона'),
  email: z.string().regex(/^\S+@\S+\.\S+$/, 'Неверный формат электронной почты'),
  agreement: z.boolean().refine(val => val, {
    message: 'Необходимо согласие с условиями обработки персональных данных'
  })
})

export type OrderForm = z.infer<typeof OrderFormSchema>
