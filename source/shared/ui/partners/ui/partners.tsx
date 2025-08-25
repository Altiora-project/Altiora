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
                <div className={classes.dataContainer} key={index}>
                  <Link
                    key={phrase.id}
                    href={phrase.website}
                    className={clsx(classes.linkData, phrase.name.length >= 11 ? classes.name : '')}
                    target="_blank"
                  >
                    <div style={{ display: 'flex' }}>
                      {phrase.logo && (
                        <Image src={phrase.logo} className={classes.img} alt={phrase.name} width={30} height={18} />
                      )}
                      <p>{phrase.name}</p>
                    </div>
                  </Link>
                </div>
              )
            })}
          </Marquee>
        )
      })}
    </div>

    // <div className={classes.container}>
    //   <Marquee speed={70} loop={0} className={clsx(classes.marquee, classes.marqueeRight)} direction="right">
    //     {displayPartners.map(phrase => {
    //       return (
    //         <div className={classes.dataContainer}>
    //           <Link key={phrase.id} href={phrase.website} className={classes.linkData}>
    //             {phrase.logo ? <img src={phrase.logo} className={classes.img} alt={phrase.name} /> : <>{phrase.name}</>}
    //           </Link>
    //         </div>
    //       )
    //     })}
    //   </Marquee>

    //   <Marquee speed={50} loop={0} className={clsx(classes.marquee, classes.marqueeLeft)} direction="left">
    //     {displayPartners.map(phrase => {
    //       return (
    //         <div className={classes.dataContainer}>
    //           <Link key={phrase.id} href={phrase.website} className={classes.linkData}>
    //             {phrase.logo ? <img src={phrase.logo} className={classes.img} alt={phrase.name} /> : <>{phrase.name}</>}
    //           </Link>
    //         </div>
    //       )
    //     })}
    //   </Marquee>
    // </div>
  )
}
