'use client'

import { FC, HTMLAttributes, useEffect, useState } from 'react'

import data from './data'
import moreIcon from './moreIcon.svg'
import styles from './styles.module.scss'
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
    <>
      <h2>{title}</h2>
      <div id="tokenization" className={clsx(styles.container, className)} {...otherProps}>
        <p className={styles.description}>{description}</p>
        <div className={styles.video}>
          <div className={styles.video__wrapper}>
            <span className={styles.video__title}>
              <p>Видео</p>
            </span>
          </div>
          <Tag
            className={styles.video__player}
            src={video}
            {...(!isFile && {
              allow: 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture',
              allowFullScreen: true
            })}
            {...(isFile && { controls: true })}
          />
        </div>
        <div className={styles.more}>
          <div className={styles.more__title}>
            <p>{data.more}</p>
            <Image className={styles.more__icon} src={moreIcon} alt="more" />
          </div>
          {data.links &&
            Object.values(data.links).map(link => (
              <p className={styles.more__link} key={link[0]}>
                <a target="_blank" href={link[1]}>
                  {link[0]}
                </a>
              </p>
            ))}
        </div>
      </div>
    </>
  )
}

export default VideoFeature
