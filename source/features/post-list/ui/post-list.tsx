import { getPostListAction } from '@entities/post'
import classes from '../styles/styles.module.scss'
import { isDevMode } from '@shared/lib/environment/public'
import Link from 'next/link'
import { createRoute, routes } from '@shared/configs/routes'

export const PostList: React.FC = async () => {
  const posts = await getPostListAction()

  if (isDevMode) {
    console.log('[ DEBUG ] PostList', posts)
  }

  if ('error' in posts) throw posts.error

  return (
    <div className={classes.postList}>
      {posts.data?.map(post => (
        <Link className={classes.link} href={createRoute(routes.post, { id: post.id.toString() })} key={post.id}>
          {post.title}
        </Link>
      ))}
    </div>
  )
}
