import { MarkdownRenderer } from '@shared/lib/markdown'
import { typePoliciesProps } from '../types'
import { FC } from 'react'
import classes from '../styles/styles.module.scss'

export const Policies: FC<typePoliciesProps> = ({ text }) => {
  return (
    <section className={classes.container}>
      <MarkdownRenderer content={text} />
    </section>
  )
}
