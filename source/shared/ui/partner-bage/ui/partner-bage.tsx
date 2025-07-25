import styles from '../styles/partner-bage.module.scss'
import { PartnerBageProps } from '../types/types'

export const PartnerBage: React.FC<PartnerBageProps> = ({ children }) => {
  return <div className={styles.container}>{children}</div>
}
