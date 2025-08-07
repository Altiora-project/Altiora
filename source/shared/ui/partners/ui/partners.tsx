import { FC } from 'react'
import classes from '../styles/styles.module.scss'
import { typePartnersProps } from '../types'
import Marquee from 'react-fast-marquee'
import clsx from 'clsx'
import Link from 'next/link'

export const Partners: FC<typePartnersProps> = ({ partners }) => {
  const displayPartners = partners.length <= 5 ? [...partners, ...partners, ...partners] : partners // если объект данных меньше 5 данные дублируются для корректного отображения
  return (
    <div className={classes.container}>
      <Marquee speed={70} loop={0} className={clsx(classes.marquee, classes.marqueeRight)} direction="right">
        {displayPartners.map(phrase => {
          return (
            <div className={classes.dataContainer}>
              <Link key={phrase.id} href={phrase.website} className={classes.linkData}>
                {phrase.logo ? <img src={phrase.logo} className={classes.img} alt={phrase.name} /> : <>{phrase.name}</>}
              </Link>
            </div>
          )
        })}
      </Marquee>

      <Marquee speed={50} loop={0} className={clsx(classes.marquee, classes.marqueeLeft)} direction="left">
        {displayPartners.map(phrase => {
          return (
            <div className={classes.dataContainer}>
              <Link key={phrase.id} href={phrase.website} className={classes.linkData}>
                {phrase.logo ? <img src={phrase.logo} className={classes.img} alt={phrase.name} /> : <>{phrase.name}</>}
              </Link>
            </div>
          )
        })}
      </Marquee>
    </div>
  )
}
