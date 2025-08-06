import { UIContainer } from '../ui-container'

import { ContactListItem } from '@shared/ui/contact-list-item/ui/contact-list-item'

export const UIContactListItem: React.FC = () => {
  return (
    <UIContainer
      title="ContactList"
      description="Список контактов принимает пропс type: 'phone' | 'email' | 'address' и title: string"
      components={
        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', padding: '40px' }}>
          <ContactListItem linkType="phone" title="+7 (989) 624 - 34 - 61" />
          <ContactListItem linkType="email" title="ceo@altiora.tech" />
        </div>
      }
    />
  )
}
