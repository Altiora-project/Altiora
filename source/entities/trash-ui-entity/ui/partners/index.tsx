import { Partners } from '@shared/ui/partners/ui/partners'
import { UIContainer } from '../ui-container'

export const UIPartners: React.FC = () => {
  const partners = [
    { id: 0, name: 'русбейс', logo: '', website: '#' },
    { id: 1, name: 'entspace', logo: '', website: '#' },
    { id: 2, name: 'иктин', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/11/STOCK-logo.png', website: '#' }
  ]
  return (
    <UIContainer
      title="Partners"
      description="Бегущие строки партнеров:"
      props={[
        {
          key: 'partners',
          value: '(  {id: number, name: string, logo: string | null, website: string}[]) - массив объектов'
        }
      ]}
      components={<Partners partners={partners} />}
      style={{ gap: '12px' }}
    />
  )
}
