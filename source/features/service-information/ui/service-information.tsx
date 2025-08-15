import classes from '../styles/styles.module.scss'
import clsx from 'clsx'
import { MarkdownRenderer } from '@shared/lib/markdown'
import { FC } from 'react'
import { typeServiceInformationProps } from '@features/service-information/types/types'

export const ServiceInformation: FC<typeServiceInformationProps> = ({ content, className, ...otherProps }) => {
  return (
    <div className={clsx(classes.content, className)} {...otherProps}>
      <MarkdownRenderer content={content} />
    </div>
  )
}
