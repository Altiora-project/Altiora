import styles from './styles.module.scss'
import clsx from 'clsx'

type ModalOverlayProps = {
  onClose?: () => void
  isOpen?: boolean
}

const ModalOverlay = ({ onClose, isOpen = true }: ModalOverlayProps) => (
  <div className={clsx(styles.overlay, styles.active && isOpen)} onClick={onClose} />
)

export default ModalOverlay
