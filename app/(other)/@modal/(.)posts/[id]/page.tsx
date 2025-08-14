'use client'

import { useParams } from 'next/navigation'
import { useRouter } from 'nextjs-toploader/app'

import { useGetPost } from '@entities/post/hooks/use-get-post'

import { Loader } from '@shared/ui/loader'
import { Modal } from '@shared/ui/modal'

const PostPage: React.FC = () => {
  const params = useParams<{ id: string }>()
  const router = useRouter()

  const handleGoBack = () => {
    router.back()
  }

  const id = params.id

  if (process.env.NODE_ENV === 'development') console.log('Post id from client', id)

  const { data, isLoading, error } = useGetPost(id)

  return (
    <Modal title={data?.title ?? ' '} isOpen={true} setIsOpen={handleGoBack} withCloseButton={true}>
      {data && <p>{data.body}</p>}

      {isLoading && <Loader />}

      {!!error && <p>Request failed</p>}
    </Modal>
  )
}

export default PostPage
