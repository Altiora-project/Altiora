import { FC } from 'react'

import classes from '../styles/styles.module.scss'
import { typePartnersProps } from '../types'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import Marquee from 'react-fast-marquee'

export const Partners: FC<typePartnersProps> = ({ partners }) => {
  const displayPartners =
    partners.length <= 5 ? [...partners, ...partners, ...partners, ...partners, ...partners] : partners // если объект данных меньше 5 данные дублируются для корректного отображения
  return (
    <div className={classes.container}>
      {[1, 2].map(item => {
        return (
          <Marquee
            key={item}
            speed={70}
            loop={0}
            className={clsx(classes.marquee, item % 2 === 0 ? classes.marqueeLeft : classes.marqueeRight)}
            direction={item % 2 === 0 ? 'left' : 'right'}
          >
            {displayPartners.map((phrase, index) => {
              return (
                <Link
                  key={index}
                  href={phrase.website}
                  className={clsx(classes.dataContainer, phrase.name.length >= 11 ? classes.name : '')}
                  target="_blank"
                >
                  {phrase.logo && (
                    <Image
                      src={phrase.logo}
                      alt={phrase.name}
                      width={30}
                      height={30}
                      style={{ maxWidth: '100%', height: 'auto' }}
                    />
                  )}
                  <p>{phrase.name}</p>
                </Link>
              )
            })}
          </Marquee>
        )
      })}
    </div>
  )
}
