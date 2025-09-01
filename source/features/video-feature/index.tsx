'use client'

import { FC, HTMLAttributes, useEffect, useState } from 'react'

import data from './data'
import moreIcon from './moreIcon.svg'
import classes from './styles.module.scss'
import clsx from 'clsx'
import Image from 'next/image'

export type videoData<T = string> = {
  title: T
  description?: T
  video: T
  more?: T
  links?: {
    [key: string]: T[]
  }
} & HTMLAttributes<HTMLDivElement>

const VideoFeature: FC<videoData> = ({ title, description, video, className, ...otherProps }) => {
  const [isFile, setIsFile] = useState(false)

  useEffect(() => {
    setIsFile(/\.(mp4|webm|ogg|mkv|flv|m4v|mov|wmv|mpg|mpeg)$/i.test(video))
  }, [video])

  const Tag = isFile ? 'video' : 'iframe'

  if (!data) return null

  return (
    <div id="tokenization" className={clsx(classes.container, className)} {...otherProps}>
      <h2 className={classes.title}>{title}</h2>
      <p className={classes.description}>{description}</p>
      <div className={classes.video}>
        <div className={classes.video__wrapper}>
          <span className={classes.video__title}>
            <p>видео</p>
          </span>
        </div>
        <Tag
          className={classes.video__player}
          src={video}
          {...(!isFile && {
            allow: 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          })}
          {...(!isFile && { allowFullScreen: true })}
          {...(isFile && { controls: true })}
        />
      </div>
      <div className={classes.more}>
        <div className={classes.more__title}>
          <p>{data.more}</p>
          <Image className={classes.more__icon} src={moreIcon} alt="more" />
        </div>
        {data.links &&
          Object.values(data.links).map(link => (
            <p className={classes.more__link} key={link[0]}>
              <a target="_blank" href={link[1]}>
                {link[0]}
              </a>
            </p>
          ))}
      </div>
    </div>
  )
}

export default VideoFeature
