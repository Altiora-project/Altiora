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
      <MainBlock
        className={clsx(classes.mainBlock, classes.cardBlock)}
        topContent={title && <div className={classes.infoBlockTitle}>{title}</div>}
        bottomContent={null}
      >
        <div className={classes.bigCard}>
          {typeof firstCard === 'string' ? (
            <p className={classes.textCard}>{firstCard}</p>
          ) : (
            <div className={classes.cardContent}>
              <h4 className={classes.titleCard}>{firstCard.title}</h4>
              <p className={classes.textCard}>{firstCard.text}</p>
            </div>
          )}
        </div>
      </MainBlock>
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
