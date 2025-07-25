import { UIContainer } from '../ui-container'

import { Bage } from '@shared/ui/bage'

export const UIBage: React.FC = () => {
  return <UIContainer title="Bage" description="Бейдж с логотипом партнера" components={<Bage>Bage</Bage>} />
}
