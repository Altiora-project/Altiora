import { HTMLAttributes } from 'react'

import classes from './styles.module.scss'
import clsx from 'clsx'

// import { PostList } from '@features/post-list'

export const PostsPage: React.FC<HTMLAttributes<HTMLDivElement>> = ({ className, ...otherProps }) => {
  return (
    <div className={clsx(classes.container, className)} {...otherProps}>
      <h1>Posts</h1>

      {/* <PostList /> */}
    </div>
  )
}
