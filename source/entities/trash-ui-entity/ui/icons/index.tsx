'use client'

import React from 'react'

import { UIContainer } from '../ui-container'
import classes from './style.module.scss'

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
          <div className={classes.container}>
            <div>
              <div style={{ color: '#50F195' }}>
                <Icon size="sm" icon="close" />
              </div>
              size="sm"
              <div style={{ color: '#50F195' }}>
                <Icon size="md" icon="phone" />
              </div>
              <span>size="md"</span>
              <div style={{ color: '#50F195' }}>
                <Icon size="lg" icon="phone" />
              </div>
              size="lg"
              <div style={{ width: '100px', color: '#50F195' }}>
                <Icon size="auto" icon="phone" />
              </div>
              size="auto"
            </div>
          </div>
          <div className={classes.container}>
            <div className={classes.iconsWrapper}>
              <div className={classes.icon}>
                <Icon size="md" icon="chevronRight" />
                <span> - chevronRight</span>
              </div>
              <div className={classes.icon}>
                <Icon size="md" icon="chevronLeft" />
                <span> - chevronLeft</span>
              </div>
              <div className={classes.icon}>
                <Icon size="md" icon="chevronDown" />
                <span> - chevronDown</span>
              </div>
              <div className={classes.icon}>
                <Icon size="md" icon="chevronUp" />
                <span> - chevronUp</span>
              </div>
              <div className={classes.icon}>
                <Icon size="lg" icon="button" />
                <span> - button</span>
              </div>
              <div className={classes.icon}>
                <Icon size="lg" icon="arrowLeft" />
                <span> - arrowLeft</span>
              </div>
              <div className={classes.icon}>
                <Icon size="lg" icon="arrowRight" />
                <span> - arrowRight</span>
              </div>
              <div className={classes.icon}>
                <Icon size="lg" icon="arrowUp" />
                <span> - arrowUp</span>
              </div>
              <div className={classes.icon}>
                <Icon size="sm" icon="close" />
                <span> - close</span>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '200px' }}>
              <div className={classes.icon}>
                <Icon size="md" icon="email" />
                <span> - envelop</span>
              </div>
              <div className={classes.icon}>
                <Icon size="lg" icon="phone" />
                <span>- phone</span>
              </div>
              <div className={classes.icon}>
                <Icon size="lg" icon="wrench" />
                <span> - wrench</span>
              </div>
              <div className={classes.icon}>
                <Icon size="lg" icon="chartSpline" />
                <span> - chartSpline</span>
              </div>
              <div className={classes.icon}>
                <Icon size="lg" icon="star" />
                <span> - star</span>
              </div>
              <div className={classes.icon}>
                <Icon size="lg" icon="megaphone" />
                <span> - megaphone</span>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '200px' }}>
              <div className={classes.icon}>
                <Icon size="lg" icon="support" />
                <span> - support</span>
              </div>
              <div className={classes.icon}>
                <Icon size="lg" icon="mouseClick" />
                <span> - mouseClick</span>
              </div>
              <div className={classes.icon}>
                <Icon size="lg" icon="chartPie" />
                <span> - chartPie</span>
              </div>
              <div className={classes.icon}>
                <Icon size="lg" icon="handshake" />
                <span> - handshake</span>
              </div>
              <div className={classes.icon}>
                <Icon size="lg" icon="trendingUp" />
                <span> - trendingUp</span>
              </div>
              <div className={classes.icon}>
                <Icon size="lg" icon="checkbox" />
                <span> - checkbox</span>
              </div>
              <div className={classes.icon}>
                <Icon size="lg" icon="lineLogo" /> <span>- lineLogo</span>
              </div>
            </div>
          </div>
        </>
      }
    />
  )
}
