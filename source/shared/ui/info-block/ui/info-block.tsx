import classes from '../styles/styles.module.scss'
import { InfoBlockProps } from '../types/types'
import clsx from 'clsx'

import { MainBlock } from '@shared/ui/_main-block'

export const InfoBlock: React.FC<InfoBlockProps> = ({ title, data, ...otherProps }) => {
  if (!data || data.length === 0) {
    return null
  }

  const [firstCard, ...otherCards] = data
  return (
    <div className={classes.blockInfo} {...otherProps}>
      <div className={clsx(classes.container, classes.noise, classes.cardBlock)}>
        <div className={clsx(classes.topContainer)}>
          <div className={classes.topContent}>{title && <div className={classes.infoBlockTitle}>{title}</div>}</div>
          <div className={clsx(classes.space, classes.topSpace)}></div>
        </div>

        <div className={classes.content}>
          <div className={classes.infoCard}>
            {typeof firstCard === 'string' ? (
              <p className={classes.textCard}>{firstCard}</p>
            ) : (
              <div className={classes.cardContent}>
                <h4 className={classes.titleCard}>{firstCard.title}</h4>
                <p className={classes.textCard}>{firstCard.text}</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className={classes.smallCards}>
        {otherCards.map((card, index) => (
          <div className={clsx(classes.card, classes.smallCard)} key={index}>
            {typeof card === 'string' ? (
              <p className={classes.textCard}>{card}</p>
            ) : (
              <div className={classes.cardContent}>
                <h4 className={classes.titleCard}>{card.title}</h4>
                <p className={classes.textCard}>{card.text}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
