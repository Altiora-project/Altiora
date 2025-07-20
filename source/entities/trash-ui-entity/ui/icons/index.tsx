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
                <Icon size="lg" icon="lineLogo" /> <span style={{ color: '#111111' }}>- lineLogo</span>
              </div>
              <div className={classes.icon}>
                <Icon size="md" icon="chevronRight" />
                <span style={{ color: '#111111' }}> -chevronRight</span>
              </div>
              <div className={classes.icon}>
                <Icon size="md" icon="chevronLeft" />
                <span style={{ color: '#111111' }}> - chevronLeft</span>
              </div>
              <div className={classes.icon}>
                <Icon size="md" icon="chevronDown" />
                <span style={{ color: '#111111' }}> - chevronDown</span>
              </div>
              <div className={classes.icon}>
                <Icon size="md" icon="chevronUp" />
                <span style={{ color: '#111111' }}> - chevronUp</span>
              </div>
              <div className={classes.icon}>
                <Icon size="lg" icon="button" />
                <span style={{ color: '#111111' }}> - button</span>
              </div>
              <div className={classes.icon}>
                <Icon size="lg" icon="arrowLeft" />
                <span style={{ color: '#111111' }}> - arrowLeft</span>
              </div>
              <div className={classes.icon}>
                <Icon size="lg" icon="arrowRight" />
                <span style={{ color: '#111111' }}> - arrowRight</span>
              </div>
              <div className={classes.icon}>
                <Icon size="lg" icon="arrowUp" />
                <span style={{ color: '#111111' }}> - arrowUp</span>
              </div>
              <div className={classes.icon}>
                <Icon size="sm" icon="close" />
                <span style={{ color: '#111111' }}> - close</span>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '200px' }}>
              <div className={classes.icon}>
                <Icon size="md" icon="envelop" />
                <span style={{ color: '#111111' }}> - envelop</span>
              </div>
              <div className={classes.icon}>
                <Icon size="lg" icon="phone" />
                <span style={{ color: '#111111' }}>- phone</span>
              </div>
              <div className={classes.icon}>
                <Icon size="lg" icon="wrench" />
                <span style={{ color: '#111111' }}> - wrench</span>
              </div>
              <div className={classes.icon}>
                <Icon size="lg" icon="chartSpline" />
                <span style={{ color: '#111111' }}> - chartSpline</span>
              </div>
              <div className={classes.icon}>
                <Icon size="lg" icon="star" />
                <span style={{ color: '#111111' }}> - star</span>
              </div>
              <div className={classes.icon}>
                <Icon size="lg" icon="megaphone" />
                <span style={{ color: '#111111' }}> - megaphone</span>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '200px' }}>
              <div className={classes.icon}>
                <Icon size="lg" icon="support" />
                <span style={{ color: '#111111' }}> - support</span>
              </div>
              <div className={classes.icon}>
                <Icon size="lg" icon="mouseClick" />
                <span style={{ color: '#111111' }}> - mouseClick</span>
              </div>
              <div className={classes.icon}>
                <Icon size="lg" icon="chartPie" />
                <span style={{ color: '#111111' }}> - chartPie</span>
              </div>
              <div className={classes.icon}>
                <Icon size="lg" icon="handshake" />
                <span style={{ color: '#111111' }}> - handshake</span>
              </div>
              <div className={classes.icon}>
                <Icon size="lg" icon="trendingUp" />
                <span style={{ color: '#111111' }}> - trendingUp</span>
              </div>
              <div className={classes.icon}>
                <Icon size="lg" icon="checkbox" />
                <span style={{ color: '#111111' }}> - checkbox</span>
              </div>
            </div>
          </div>
        </>
      }
    />
  )
}
