import { z } from 'zod'

export const OrderFormSchema = z.object({
  name: z.string().min(1, 'Имя обязательно').max(50, 'Имя не должно превышать 50 символов'),
  company: z
    .string()
    .min(1, 'Название компании обязательно')
    .max(100, 'Название компании не должно превышать 100 символов'),
  project_details: z
    .string()
    .min(1, 'Подробности о проекте обязательны')
    .max(1000, 'Описание не должно превышать 1000 символов'),
  phone_number: z
    .string()
    .min(1, 'Телефон обязателен')
    .regex(
      /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/,
      'Неверный формат телефона'
    ),
  email: z.string().regex(/^\S+@\S+\.\S+$/, 'Неверный формат электронной почты'),
  agreed_to_terms: z.boolean().refine((val: any) => val, {
    message: 'Необходимо согласие с условиями обработки персональных данных'
  })
})

export type OrderForm = z.infer<typeof OrderFormSchema>
