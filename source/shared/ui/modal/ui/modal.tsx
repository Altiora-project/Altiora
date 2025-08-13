'use client'

import { VisuallyHidden } from 'radix-ui'
import classes from '../styles/styles.module.scss'
import type { typeModalProps } from '../types/types'
import * as Dialog from '@radix-ui/react-dialog'
import { Icon } from '@shared/ui/icon'
import clsx from 'clsx'

export const Modal: React.FC<typeModalProps> = ({
  isOpen,
  setIsOpen,
  title,
  children,
  withCloseButton,
}) => {
  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Portal>
        <Dialog.Overlay className={classes.overlay} />
        <Dialog.Content className={classes.container}>
          {/* Кнопка закрытия поверх контента */}
          {withCloseButton && <Dialog.Close className={classes.closeButton}>
            <Icon name="close" icon="close" className={classes.closeIcon} />
          </Dialog.Close>}

          {/* Скрытый заголовок для accessibility */}
          <Dialog.Title className={classes.displayNone}>{title}</Dialog.Title>

          <div className={classes.content}>{children}</div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
