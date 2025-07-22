'use client'

import * as Dialog from '@radix-ui/react-dialog'
import type { typeModalProps } from '../types/types'
import classes from '../styles/styles.module.scss'

export const Modal: React.FC<typeModalProps> = ({
  isOpen,
  setIsOpen,
  title,
  description,
  children,
  withCloseButton
}) => {
  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Portal>
        <Dialog.Overlay className={classes.overlay} />
        <Dialog.Content className={classes.container}>
          <div className={classes.topBlock}>
            {title && <Dialog.Title className={classes.title}>{title}</Dialog.Title>}

            {withCloseButton && <Dialog.Close className={classes.close}>Close</Dialog.Close>}
          </div>

          {description && (
            <div className={classes.description}>
              <Dialog.Description>{description}</Dialog.Description>
            </div>
          )}

          <div className={classes.content}>{children}</div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
