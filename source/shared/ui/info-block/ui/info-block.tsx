import classes from '../styles/styles.module.scss'
import { InfoBlockProps } from '../types/types'
import clsx from 'clsx'

export const InfoBlock: React.FC<InfoBlockProps> = ({ title, data, ...otherProps }) => {
  const [firstCard, ...otherCards] = data
  return (
    <div className={classes.blockInfo} {...otherProps}>
      <div className={classes.cardWrapper}>
        <div className={classes.topContainer}>
          <h3 className={classes.title}>{title}</h3>
          <div className={classes.space}></div>
        </div>
        <div className={clsx(classes.card, classes.bigCard)}>
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
