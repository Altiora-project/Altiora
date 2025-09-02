import { FC, HTMLAttributes } from 'react'

import data from './data'
import moreIcon from './moreIcon.svg'
import classes from './styles.module.scss'
import Image from 'next/image'

import { MarkdownRenderer } from '@shared/lib/markdown'

export type videoData<T = string> = {
  title: T
  description?: T
  video: T
  more: T
  links?: {
    [key: string]: T[]
  }
} & HTMLAttributes<HTMLDivElement>

const VideoFeature: FC<videoData> = ({ title, description, video, more, className, ...otherProps }) => {
  const isFile = /\.(mp4|webm|ogg|mkv|flv|m4v|mov|wmv|mpg|mpeg)$/i.test(video)
  const Tag = isFile ? 'video' : 'iframe'

  if (!data) return null

  return (
    <div id="tokenization" className={className} {...otherProps}>
      <h2>{title}</h2>
      <div className={classes.container}>
        <p className={classes.description}>{description}</p>
        <div className={classes.video}>
          <p className={classes.videoTitle}>Видео</p>
          <Tag
            className={classes.videoPlayer}
            src={video}
            {...(!isFile && {
              allow: 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture',
              allowFullScreen: true
            })}
            {...(isFile && { controls: true })}
          />
        </div>
        <div className={classes.more}>
          <div className={classes.moreTitle}>
            <p>{data.more}</p>
            <Image src={moreIcon} alt="more" />
          </div>
          <MarkdownRenderer content={more} className={classes.markdownBody} />
        </div>
      </div>
    </div>
  )
}

export default VideoFeature
