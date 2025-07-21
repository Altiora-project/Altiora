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
            '("long" | "short" | "shortOutline") вариант отображения: long - иконка + текст; short - иконка; shortOutline - иконка без заливки'
        }
      ]}
      components={
        <>
          <Logo variant="long" />
          <Logo variant="short" />
          <Logo variant="shortOutline" />
        </>
      }
    />
  )
}
