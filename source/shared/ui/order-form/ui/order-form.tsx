'use client'

import { FC, use, useEffect, useState } from 'react'

import classes from '../styles/styles.module.scss'
import type { OrderFormData } from '../types/types'
import clsx from 'clsx'
import Link from 'next/link'
import { Controller } from 'react-hook-form'

import sendFormDataAction from '@entities/orderFormAPI/api/server-actions'
import useOrderForm from '@entities/orderFormAPI/model/use-form'

import { MainBlock } from '@shared/ui/_main-block'
import { Button } from '@shared/ui/button'
import { Checkbox } from '@shared/ui/checkbox'
import { FormSubmitModal } from '@shared/ui/form-submit-modal'
import { Input } from '@shared/ui/input'
import { getPoliciesApi } from '@entities/policies/api/get-policies'
import { createRoute, routes } from '@shared/configs/routes'

export const OrderForm: FC = () => {
  const [isModalOpen, setModalOpen] = useState(false)
  const [slug, setSlug] = useState('')

  useEffect(() => {
    const getPolicies = async () => {
      const res = await getPoliciesApi()

      if (!res.success) return

      const documents = res.data
      setSlug(documents[0].slug)
    }

    getPolicies()
  }, [])

  const onSubmit = async (data: OrderFormData) => {
    await sendFormDataAction(data).then(() => setModalOpen(true))
  }

  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors, isValid, isSubmitting }
  } = useOrderForm(onSubmit)

  const FormButton: FC = () => (
    <Button type="submit" variant="primary" disabled={!isValid /* || isSubmitting*/} className={classes.button}>
      <span className={classes.buttonText}>{/*isSubmitting ? 'Отправка...' : */}Отправить заявку</span>
    </Button>
  )

  return (
    <div className={classes.container} id="form">
      <form onSubmit={handleSubmit} className={classes.form}>
        <MainBlock
          topContent={
            <h2 className={classes.title} id="form">
              {'/заказать проект'}
            </h2>
          }
          bottomStyles={classes.bottomStyles}
          bottomContent={
            <div className={classes.buttonDesktop}>
              <FormButton />
            </div>
          }
        >
          <section className={classes.formSection}>
            <Input
              label="Меня зовут"
              id="name"
              type="text"
              placeholder="имя"
              supportingText="ваше имя"
              error={!!errors.name}
              onClear={() => setValue('name', '', { shouldValidate: true })}
              {...register('name')}
            />
            <Input
              label="Я из компании"
              id="company"
              type="text"
              placeholder="компания"
              supportingText="название компании"
              error={!!errors.company}
              onClear={() => setValue('company', '', { shouldValidate: true })}
              {...register('company')}
            />
            <Input
              label="Детали проекта"
              id="projectDetails"
              placeholder="описание проекта"
              supportingText="опишите детали проекта"
              error={!!errors.project_details}
              onClear={() => setValue('project_details', '', { shouldValidate: true })}
              {...register('project_details')}
            />

            <Input
              label="Телефон"
              id="phone"
              type="tel"
              placeholder="+7 "
              supportingText="ваш номер телефона"
              error={!!errors.phone_number}
              onClear={() => setValue('phone_number', '', { shouldValidate: true })}
              {...register('phone_number')}
            />

            <Input
              label="E-mail адрес"
              id="email"
              type="email"
              placeholder="name@example.ru"
              supportingText="ваша электронная почта"
              error={!!errors.email}
              onClear={() => setValue('email', '', { shouldValidate: true })}
              {...register('email')}
            />
          </section>
          <div className={classes.checkboxGroup}>
            <Controller
              name="agreed_to_terms"
              control={control}
              render={({ field }) => (
                <Checkbox id="agreement" checked={!!field.value} onCheckedChange={field.onChange} />
              )}
            />
            <label
              htmlFor="agreement"
              className={clsx(
                classes.checkboxLabel,
                !!isValid ? classes.checkboxLabelActive : classes.checkboxLabelDisabled
              )}
            >
              <Link href={createRoute(routes.policiesBySlug, { slug })} target="_blank" rel="noopener noreferrer">
                Согласен с политикой обработки персональных данных
              </Link>
            </label>
          </div>
          <div className={classes.buttonMobileTablet}>
            <FormButton />
          </div>
        </MainBlock>
      </form>
      <FormSubmitModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </div>
  )
}
