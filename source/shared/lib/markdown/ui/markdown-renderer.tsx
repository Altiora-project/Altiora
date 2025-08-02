import { FC } from 'react'

import classes from '../styles/styles.module.scss'
import { TMarkdownRendererProps } from '../types'
import clsx from 'clsx'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'

export const MarkdownRenderer: FC<TMarkdownRendererProps> = ({ content, className, ...props }) => {
  return (
    <div className={clsx(classes.markdownBody, className)} {...props}>
      <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
        {content}
      </ReactMarkdown>
    </div>
  )
}
