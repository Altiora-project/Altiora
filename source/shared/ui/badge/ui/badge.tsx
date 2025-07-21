import styles from '../styles/partner-bage.module.scss'
import { BadgeProps } from '../types/types'

export const Badge: React.FC<BadgeProps> = ({ children }) => {
  return <div className={styles.container}>{children}</div>
}
