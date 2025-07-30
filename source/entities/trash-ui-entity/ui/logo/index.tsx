import { UIContainer } from '../ui-container'

import { Logo } from '@shared/ui/logo'

export const UILogo: React.FC = () => {
  return (
    <UIContainer
      title="Logo"
      description="Логотип со всеми props:"
      props={[
        {
          key: 'variant',
          value:
            '("long" | "short" | "shortOutline") - вариант отображения: long - иконка + текст; short - иконка; shortOutline - иконка без заливки'
        },
        {
          key: 'text',
          value:
            '(string) - текст логотипа (по умолчанию "Алтиора"). При variant="short" и variant="shortOutline" текст не отображается'
        },
        {
          key: 'darkText',
          value: '(boolean) - при true текст логотипа будет чёрным (по умолчанию false).'
        }
      ]}
      components={
        <>
          <Logo variant="long" />
          <div style={{ backgroundColor: 'var(--color-grey2)', padding: '10px' }}>
            <Logo variant="long" darkText />
          </div>
          <Logo variant="short" />
          <Logo variant="shortOutline" />
        </>
      }
    />
  )
}
