import { FC } from 'react'

import data from './data'
import moreIcon from './moreIcon.svg'
import styles from './styles.module.scss'
import Image from 'next/image'

const VideoFeature: FC<HTMLDivElement> = () => {
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
        <iframe
          className={styles.video}
          src={data.video}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <div className={styles.more}>
        <div className={styles.more__title}>
          <p>{data.more}</p>
          <Image className={styles.more__icon} src={moreIcon} alt="more" />
        </div>
        {Object.values(data.links).map(link => (
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
