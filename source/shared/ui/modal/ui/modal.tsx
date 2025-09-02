'use client'

import classes from '../styles/styles.module.scss'
import type { typeModalProps } from '../types/types'
import * as Dialog from '@radix-ui/react-dialog'

import { Icon } from '@shared/ui/icon'

export const Modal: React.FC<typeModalProps> = ({ isOpen, setIsOpen, title, children, withCloseButton }) => {
  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Portal>
        <Dialog.Overlay className={classes.overlay} />
        <Dialog.Content className={classes.container}>
          {/* Кнопка закрытия поверх контента */}
          {withCloseButton && (
            <Dialog.Close className={classes.closeButton}>
              {/*<Icon  className={classes.closeIcon} />*/}
              <svg
                className={classes.closeIcon}
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M25 3L3 25M3 3L25 25" stroke="currentColor" strokeWidth="3" strokeLinecap="square" />
              </svg>
            </Dialog.Close>
          )}

          {/* Скрытый заголовок для accessibility */}
          <Dialog.Title className={classes.displayNone}>{title}</Dialog.Title>

          <div className={classes.content}>{children}</div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
