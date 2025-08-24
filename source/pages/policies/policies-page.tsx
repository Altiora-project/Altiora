'use server'
import { Policies } from '@shared/ui/policies'
import clsx from 'clsx'
import type { FC, HTMLAttributes } from 'react'
import { getPoliciesBySlugApi } from '@entities/policies/api/get-policies'
import { notFound } from 'next/navigation'

export const PoliciesPage: FC<HTMLAttributes<HTMLDivElement> & { params: Promise<{ slug: string }> }> = async ({
  params,
  className,
  ...otherProps
}) => {
  const { slug } = await params

  const response = await getPoliciesBySlugApi(slug)
  if (!response.data) return notFound()

  return (
    <div className={className} {...otherProps}>
      <Policies text={response.data.text} />
    </div>
  )
}
