import styles from '../styles/styles.module.scss'
import { ProductCardProps } from '../types/types'

import { CardComponent } from '@shared/ui/card-component'
import { Icon } from '@shared/ui/icon'

export const ProductCard: React.FC<ProductCardProps> = ({
  title,
  description,
  actionLink,
  tagList,
  text = 'Узнать больше'
}) => (
  <CardComponent radius="md" background="light-grey" tag="link" href={actionLink} className={styles.card}>
    <div className={styles.content}>
      <h3 className={styles.titleCard}>{title}</h3>
      <p className={styles.descriptionCard}>{description}</p>
    </div>
    <div className={styles.actions}>
      <div className={styles.tags}>
        {tagList &&
          tagList.map((item, index) => (
            <span key={index} className={styles.tagCard}>
              {item}
            </span>
          ))}
      </div>
      <div className={styles.actionBlock}>
        <span className={styles.actionText}>{text}</span>
        <Icon icon="arrowRight" size="lg" className={styles.icon} />
      </div>
    </div>
  </CardComponent>
)
