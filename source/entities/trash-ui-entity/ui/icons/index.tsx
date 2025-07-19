'use client'

import React from 'react'

import { UIContainer } from '../ui-container'

import { Icon } from '@shared/ui/icon'

export const UIIcons: React.FC = () => {
  return (
    <UIContainer
      title="Icons"
      description="Компонент иконок, принимающий на пропсы размера и название иконки"
      props={[
        {
          key: 'size',
          value:
            '("auto" | "sm" | "md" | "lg") - sm - mobile, md - tablet, lg - desktop, auto - по размеру контейнера, значения у sm есть не на всех иконках, смотреть макет.'
        },
        {
          key: 'icon',
          value:
            '(string) - названия иконок есть в макете и в списке типов к иконке:  lineLogo, envelop, chevronRight, etc. '
        }
      ]}
      components={
        <>
          <div>
            <div style={{ color: '#111111' }}>
              <Icon size="sm" icon="close" />
            </div>
            size="sm"
            <div style={{ color: '#50F195' }}>
              <Icon size="md" icon="phone" />
            </div>
            size="md"
            <div style={{ color: '#50F195' }}>
              <Icon size="lg" icon="phone" />
            </div>{' '}
            size="lg"
            <div style={{ width: '100px', color: '#50F195' }}>
              <Icon size="auto" icon="phone" />
            </div>
            size="auto"
          </div>
        </>
      }
    />
  )
}

// | 'lineLogo'
//   | 'envelop'
//   | 'chevronRight'
//   | 'chevronLeft'
//   | 'button'
//   | 'arrowLeft'
//   | 'arrowRight'
//   | 'arrowUp'
//   | 'close'
//   | 'phone'
//   | 'wrench'
//   | 'chartSpline'
//   | 'star'
//   | 'megaphone'
//   | 'support'
//   | 'mouseClick'
//   | 'chartPie'
//   | 'handshake'
//   | 'trendingUp'
//   | 'checkbox'
