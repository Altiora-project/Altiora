'use client'

import React from 'react'

import { UIContainer } from '../ui-container'

import { LinkMenu } from '@shared/ui/link-menu'

export const UILinkMenu: React.FC = () => {
  const testData = [
    { label: 'ЦФА РФ', url: '/CFA' },
    { label: 'Что такое токен и токенизация?', url: '/token' },
    { label: 'Токен или ЦФА: в чем разница?', url: '/token_or_CFA' },
    { label: 'Всеобщая токенизация - Коммеранстъ', url: '/commersant' },
    { label: 'Международный опыт токенизации активов', url: '/experience' }
  ]

  return (
    <UIContainer
      title="LinkMenu"
      description="Компонент меню ссылок с заголовком, иконкой и списком ссылок:"
      props={[
        {
          key: 'title',
          value: 'string - заголовок меню'
        },
        {
          key: 'list',
          value: '{label: string, url: string}[] - массив ссылок'
        }
      ]}
      components={
        <>
          <div
            style={{
              display: 'flex',
              gap: '20px',
              flexWrap: 'wrap',
              padding: '10px'
            }}
          >
            <LinkMenu title="Полезные ссылки" list={testData} />
          </div>
        </>
      }
    />
  )
}
