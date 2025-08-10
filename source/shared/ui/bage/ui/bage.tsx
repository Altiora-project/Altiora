import styles from '../styles/bage.module.scss'
import { BageProps } from '../types/types'

export const Bage: React.FC<BageProps> = ({ children }) => {
  return <div className={styles.container}>{children}</div>
}
