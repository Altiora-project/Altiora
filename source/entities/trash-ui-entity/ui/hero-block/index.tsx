import { HeroBlock } from '@shared/ui/hero-block/ui/hero-block'

import { UIContainer } from '@entities/trash-ui-entity/ui/ui-container'

export const UIHeroBlock = () => {
  return (
    <UIContainer
      title="HeroBlock"
      description="Компонент hero блока. В props должен принимать url: "
      props={[
        { key: 'link', value: '(string) - ссылка, по которой будет переход при клике.' },
        { key: 'imgUrl', value: '(string) - ссылка на картинку.' },
        { key: 'title', value: '(string) - заголовок блока.' }
      ]}
      components={<HeroBlock contactLink={''} imgUrl={''} title="" />}
    />
  )
}
