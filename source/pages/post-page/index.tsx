import { HTMLAttributes } from 'react'

import classes from './styles.module.scss'
import clsx from 'clsx'

import { getPostAction } from '@entities/post'

import { isDevMode } from '@shared/lib/environment/public'
import { NotFoundBlock } from '@shared/ui/not-found'

type typeProps = HTMLAttributes<HTMLDivElement> & {
  postId?: string
}

export const PostPage: React.FC<typeProps> = async ({ postId, className, ...otherProps }) => {
  if (!postId) throw new Error('PostId is required')

  const post = await getPostAction(postId)

  if (isDevMode) console.log('[ DEBUG ] PostPage', post)

  if ('error' in post) return <NotFoundBlock className={classes.notFoundContainer} />

  return (
    <div className={clsx(classes.container, className)} {...otherProps}>
      <h1 className={classes.capitalize}>{post.data?.title}</h1>

      <p className={classes.capitalize}>{post.data?.body}</p>
    </div>
  )
}
