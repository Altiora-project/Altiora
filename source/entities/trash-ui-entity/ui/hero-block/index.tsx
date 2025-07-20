import { UIContainer } from '@entities/trash-ui-entity/ui/ui-container'

import { HeroBlock } from '@shared/ui/hero-block/ui/hero-block'

export const UIHeroBlock = () => {
  return (
    <UIContainer
      title="HeroBlock"
      description="Компонент hero блока. В props должен принимать url: "
      props={[{ key: 'url', value: '(string) - ссылка, по которой будет переход при клике.' }]}
      components={<HeroBlock url={''} />}
    />
  )
}
