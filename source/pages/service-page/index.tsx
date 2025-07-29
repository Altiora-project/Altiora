import { FC, HTMLAttributes } from 'react'

import classes from './styles.module.scss'
import clsx from 'clsx'

import { InfoBlock } from '@shared/ui/info-block'

export const ServicePage: FC<HTMLAttributes<HTMLDivElement>> = ({ className, ...otherProps }) => {
  return (
    <div className={clsx(classes.wrapper, className)} {...otherProps}>
      <h1>Services page</h1>

      <InfoBlock
        title="/почему выбирают нас"
        data={[
          'Мы не просто создаём приложения.Мы превращаем идеи в продукты, которые хочется открывать снова и снова.Для нас важно не только, как это работает, но и что чувствует пользователь. Мы верим в силу хорошего дизайна и точной инженерии. И всегда стремимся сделать лучше, чем вчера',
          'Прозрачный процесс  и чёткие сроки',
          'Команда, которая действительно вовлечена в результат',
          'Глубокий UX-фокус и внимание к деталям',
          'Опыт в fintech, healthtech, e-commerce и других отраслях'
        ]}
        style={{ marginBlockStart: '40px' }}
      />
    </div>
  )
}
