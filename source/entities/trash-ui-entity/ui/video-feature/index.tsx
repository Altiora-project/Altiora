'use client'

import { UIContainer } from '../ui-container'
import data from './data'

import VideoFeature from '@features/video-feature'

export const UIVideoFeature: React.FC = () => {
  return (
    <UIContainer title="Video Feature" description="Фича отображения видео" components={<VideoFeature {...data} />} />
  )
}
