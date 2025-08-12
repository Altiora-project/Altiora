'use client'

import { FC, useEffect, useMemo, useState } from 'react'

import moreIcon from './moreIcon.svg'
import styles from './styles.module.scss'
import Image from 'next/image'

import { getVideoDataAction, videoData } from '@entities/video'

const VideoFeature: FC = () => {
  const [data, setData] = useState<videoData>()

  useEffect(() => {
    // getVideoDataAction().then(res => {
    //   if ('data' in res) setData(res.data.data)
    // })

    // TEMP
    fetch('https://d3462337-77f3-4977-bb62-55e280a4892a.mock.pstmn.io/video-feature')
      .then(res => res.json())
      .then(res => setData(res.data))
  }, [])

  const isFile = useMemo(
    () => (data?.video ? /\.(mp4|webm|ogg|mkv|flv|m4v|mov|wmv|mpg|mpeg)$/i.test(data!.video) : false),
    [data]
  )
  const Tag = isFile ? 'video' : 'iframe'

  if (!data) return null

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{data.title}</h2>
      <p className={styles.description}>{data.description}</p>
      <div className={styles.video}>
        <div className={styles.video__wrapper}>
          <span className={styles.video__title}>
            <p>Видео</p>
          </span>
        </div>
        <Tag
          className={styles.video__player}
          src={data.video}
          {...(!isFile && {
            allow: 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          })}
          {...(!isFile && { allowFullScreen: true })}
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
  )
}

export default VideoFeature
