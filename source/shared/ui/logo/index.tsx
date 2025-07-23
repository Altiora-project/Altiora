import { Icon } from '../icon'
import styles from './styles.module.scss'
import type { LogoProps } from './types'
import clsx from 'clsx'
import Image from 'next/image'

export const Logo: React.FC<LogoProps> = ({ variant = 'long', text = 'Алтиора', className }) => {
  const showText = variant === 'long'

  if (variant === 'shortOutline') {
    return (
      <div className={clsx(styles.iconWrapper, className)}>
        <Icon icon="lineLogo" size="auto" className={styles.icon} />
      </div>
    )
  }

  return (
    <div className={clsx(styles.wrapper, className)}>
      <div className={styles.iconWrapper}>
        <Image src="/logo.png" alt="Логотип" fill className={styles.icon} />
      </div>

      {showText && <span className={styles.text}>{text}</span>}
    </div>
  )
}
