import { PostPage as PostPageComponent } from '@pages/post-page'

import { isDevMode } from '@shared/lib/environment/public'

type typeProps = { params: Promise<{ id: string }> }

const PostPage: React.FC<typeProps> = async ({ params }) => {
  const paramsData = await params

  if (isDevMode) console.log('[ DEBUG ] PostPage', paramsData)

  return <PostPageComponent postId={paramsData.id} className="container" />
}

export default PostPage
