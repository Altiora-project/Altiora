export type typeModalProps = {
  defaultOpen?: boolean
  isOpen?: boolean
  setIsOpen?: (value: boolean) => void
  withCloseButton?: boolean
  title: React.ReactNode
  //titleHidden?: boolean;
  //description?: React.ReactNode
  children: React.ReactNode
}
