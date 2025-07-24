import { UIContainer } from '../ui-container'

import { Badge } from '@shared/ui/badge'

export const UIBadge: React.FC = () => {
  return <UIContainer title="Badge" description="Бейдж с логотипом партнера" components={<Badge>Badge</Badge>} />
}
