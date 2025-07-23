import type { CheckboxProps as RadixCheckboxProps } from '@radix-ui/react-checkbox'

export type CheckboxSize = 'auto' | 'md' | 'sm'

export interface CheckboxProps extends Omit<RadixCheckboxProps, 'size'> {
  size?: CheckboxSize
}
