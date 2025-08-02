import { UIContainer } from '../ui-container'

import { HeaderMenuDesktop } from '@shared/ui/header-menu-desktop'

export const UIHeaderMenuDesktop: React.FC = () => {
  return (
    <UIContainer
      title="Header Menu Desktop"
      description="Десктоп меню в хедере"
      components={
        <HeaderMenuDesktop label="Десктоп меню">
          {[
            { label: 'Пункт 1', url: '#' },
            { label: 'Пункт 2', url: '#' }
          ]}
        </HeaderMenuDesktop>
      }
    />
  )
}
