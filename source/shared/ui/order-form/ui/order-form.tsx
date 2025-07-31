'use client'

import { useState } from 'react'
import Link from 'next/link'
import clsx from 'clsx'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { Input } from '@shared/ui/input'
import { Checkbox } from '@shared/ui/checkbox'
import { MainBlock } from '@shared/ui/_main-block'

import classes from '../styles/styles.module.scss'
import { orderFormSchema } from '../schema/validation-schema'
import type { OrderFormData, OrderFormProps } from '../types/types'
import { Button } from '@shared/ui/button'

export const OrderForm: React.FC<OrderFormProps> = ({ title, callback, agreementLink }) => {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isValid },
    reset,
    watch
  } = useForm<OrderFormData>({
    resolver: yupResolver(orderFormSchema),
    mode: 'onChange'
  })

  const formValues = watch()

  const onSubmit = async (data: OrderFormData) => {
    setIsSubmitting(true)
    try {
      await callback(data)
      reset()
    } catch (error) {
      console.error('Ошибка отправки формы:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className={classes.container}>
      <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
        <MainBlock
          topContent={<h2 className={classes.title}>{title}</h2>}
          bottomContent={
            <Button
              type="submit"
              variant="primary"
              disabled={!isValid || isSubmitting}
            >
              {isSubmitting ? 'Отправка...' : 'Отправить заявку'}
            </Button>
          }
        >
          <Input
            label="Меня зовут"
            id="name"
            type="text"
            placeholder="имя"
            supportingText="ваше имя"
            error={!!errors.name}
            {...register('name')}
          />
          <Input
            label="Я из компании"
            id="company"
            type="text"
            placeholder="компания"
            supportingText="название компании"
            error={!!errors.company}
            {...register('company')}
          />
          <Input
            label="Детали проекта"
            id="projectDetails"
            placeholder="описание проекта"
            supportingText="опишите детали проекта"
            error={!!errors.projectDetails}
            {...register('projectDetails')}
          />

          <Input
            label="Телефон"
            id="phone"
            type="tel"
            placeholder="+7 "
            supportingText="ваш номер телефона"
            error={!!errors.phone}
            {...register('phone')}
          />

          <Input
            label="E-mail адрес"
            id="email"
            type="email"
            placeholder="name@example.com"
            supportingText="ваша электронная почта"
            error={!!errors.email}
            {...register('email')}
          />

          <div className={classes.checkboxGroup}>
            <Controller
              name="agreement"
              control={control}
              render={({ field }) => <Checkbox id="agreement" checked={field.value} onCheckedChange={field.onChange} />}
            />
            <label
              htmlFor="agreement"
              className={clsx(
                classes.checkboxLabel,
                !!isValid ? classes.checkboxLabelActive : classes.checkboxLabelDisabled
              )}
            >
              Согласен с&nbsp;
              {agreementLink ? (
                <Link href={agreementLink} target="_blank" rel="noopener noreferrer">
                  &nbsp;политикой обработки персональных данных
                </Link>
              ) : (
                'политикой обработки персональных данных'
              )}
            </label>
          </div>
        </MainBlock>
      </form>
    </div>
  )
}
