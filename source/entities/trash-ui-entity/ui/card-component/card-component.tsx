'use client'

import React from 'react'

import { UIContainer } from '../ui-container'

import { CardComponent } from '@shared/ui/card-component'

export const UICardComponent: React.FC = () => {
  return (
    <UIContainer
      title="Card Component"
      description="Универсальная карточка со всеми стандартными props и дополнительными для радиуса скругления, фона и ссылки:"
      props={[
        { key: 'radius', value: '("md" | "lg") вариант отображения: md - скругление 20px; lg -  скругление 40px' },
        {
          key: 'background',
          value: '("light-grey" | "grey" | "black") light-grey - #353735, grey -#2F2F2F4D, black - #111111'
        },
        {
          key: 'tag',
          value: '("default" | "link") default - компонент возвращает обычный div элемент, link - внутренняя ссылка'
        },
        {
          key: 'href',
          value: '("UrlObject") UrlObject - передается вместе с ссылкой объект роута, например, "routes.blog"'
        }
      ]}
      components={
        <>
          <div style={{ width: '300px' }}>
            <CardComponent radius="md" background="grey" tag="default">
              <div>
                <p style={{ color: '#666666', fontSize: '24px' }}>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae possimus ad ratione inventore
                </p>
                <p style={{ color: '#FEFEFE', fontSize: '18px' }}>
                  xercitationem cupiditate, laboriosam ullam ipsum minus atque incidunt ab repellendus. Enim
                  perspiciatise
                  <span style={{ color: '#50F195', fontSize: '18px', fontWeight: '700' }}> dolorem corporis</span>{' '}
                  voluptatum reiciendis fuga?
                </p>
              </div>
            </CardComponent>
          </div>
          <div style={{ width: '400px' }}>
            <CardComponent radius="lg" background="black" tag="default">
              <div>
                <p style={{ color: '#666666', fontSize: '24px' }}>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae possimus ad ratione inventore
                </p>
                <p style={{ color: '#FEFEFE', fontSize: '18px' }}>
                  xercitationem cupiditate, laboriosam ullam ipsum minus atque incidunt ab repellendus. Lorem ipsum
                  dolor, sit amet consectetur adipisicing elit. Officia vel cumque tenetur accusantium libero omnis et,
                  nemo distinctio debitis fugit deleniti, illum pariatur? Earum ut incidunt dolores obcaecati cum odio!
                  Enim perspiciatise
                  <span style={{ color: '#50F195', fontSize: '18px', fontWeight: '700' }}> dolorem corporis</span>{' '}
                  voluptatum reiciendis fuga?
                </p>
              </div>
            </CardComponent>
          </div>
          <div style={{ width: '300px' }}>
            <CardComponent radius="md" background="light-grey" tag="link" href="/">
              <div>
                <p style={{ color: '#FEFEFE', fontSize: '18px' }}>
                  Xercitationem cupiditate, laboriosam ullam ipsum repellendus. Enim perspiciatise
                  <span style={{ color: '#50F195', fontSize: '18px', fontWeight: '700' }}> dolorem corporis</span>{' '}
                  voluptatum reiciendis fuga?
                </p>
                <p style={{ color: '#666666', fontSize: '24px' }}>
                  Lorem ipsum dolor, sit amet consectetur . Repudiandae possimus ad ratione inventore.
                </p>
              </div>
            </CardComponent>
          </div>
        </>
      }
    />
  )
}
