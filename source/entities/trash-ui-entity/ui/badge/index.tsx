import { UIContainer } from '../ui-container'

import { Badge } from '@shared/ui/badge'

export const UIBadge: React.FC = () => {
  return <UIContainer title="Bage" description="Бейдж с логотипом партнера" components={<Badge>Bage</Badge>} />
}
