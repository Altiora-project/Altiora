import { FC } from 'react'

import classes from './styles/styles.module.scss'
import { typeServiceDetailsProps } from './types/types'
import clsx from 'clsx'
import { PostscriptumSection } from '@features/postscriptum-section'
import { ServiceHeroSection } from '@features/service-hero-section'
import { getServiceDetailsAction } from '@entities/service-page/api/server-action'
import { NotFound } from '@shared/ui/not-found'
import { ServiceInformation } from '@features/service-information'

export const ServiceDetails: FC<typeServiceDetailsProps> = async ({ slug, className, ...otherProps }) => {
  //TODO: тут используем сущность которая через slug получает данные из api для запрашиваемой услуги
  // далее парсим данные и наполняем страницу
  const response = await getServiceDetailsAction(slug)

  if (!response) return <NotFound />
  if ('error' in response) return <NotFound />

  const pageData = response.data.data

  // const content = pageData.content

  //TODO: заменить на данные с бека
  const content =
    '### исследование и аналитика&nbsp;\n Перед стартом проекта мы погружаемся в специфику бизнеса:\n - изучаем целевую аудиторию\n - анализируем конкурентов\n - выявляем ключевые сценарии использования\n - формируем список функциональных требований\n\n Результат &mdash; чёткое понимание, что нужно пользователю, и как это реализовать эффективно\n\n ### UX/UI-дизайн\n Продумываем структуру, навигацию и интерфейс до мелочей:\n - прототипы и пользовательские потоки\n - современный и понятный UI\n - адаптация под платформенные гайдлайны (Human Interface Guidelines, Material Design)\n\n Цель &mdash; интуитивный и приятный пользовательский опыт с первого касания\n\n ### разработка под iOS и Android\n Мы используем проверенные технологии:\n - нативная и кроссплатформенная разработка\n - интеграции с API, базами данных, платёжными системами\n - поддержка сложной логики и анимаций\n\n Команда разработчиков работает в тесной связке с дизайнерами и менеджерами, чтобы избежать разрывов между идеей и реализацией\n\n ### тестирование и запуск\n Перед публикацией мы тщательно проверяем продукт:\n - функциональное и UX-тестирование\n - проверка кода и производительности\n - подготовка и публикация в App Store и Google Play\n\n Важно не просто запустить продукт — важно запустить его качественно'

  return (
    <div className={clsx(classes.wrapper, className)} {...otherProps}>
      <ServiceHeroSection pageData={pageData} />
      <ServiceInformation content={content} />
      <PostscriptumSection pageData={pageData} />
    </div>
  )
}
