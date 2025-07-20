'use client'

import React from 'react'

import { UIContainer } from '../ui-container'

import { Icon } from '@shared/ui/icon'

import classes from './style.module.scss'

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
              size="md"
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
                <span style={{ color: '#ffffff' }}> -chevronRight</span>
              </div>
              <div className={classes.icon}>
                <Icon size="md" icon="chevronLeft" />
                <span style={{ color: '#ffffff' }}> - chevronLeft</span>
              </div>
              <div className={classes.icon}>
                <Icon size="md" icon="chevronDown" />
                <span style={{ color: '#ffffff' }}> - chevronDown</span>
              </div>
              <div className={classes.icon}>
                <Icon size="md" icon="chevronUp" />
                <span style={{ color: '#ffffff' }}> - chevronUp</span>
              </div>
              <div className={classes.icon}>
                <Icon size="lg" icon="button" />
                <span style={{ color: '#ffffff' }}> - button</span>
              </div>
              <div className={classes.icon}>
                <Icon size="lg" icon="arrowLeft" />
                <span style={{ color: '#ffffff' }}> - arrowLeft</span>
              </div>
              <div className={classes.icon}>
                <Icon size="lg" icon="arrowRight" />
                <span style={{ color: '#ffffff' }}> - arrowRight</span>
              </div>
              <div className={classes.icon}>
                <Icon size="lg" icon="arrowUp" />
                <span style={{ color: '#ffffff' }}> - arrowUp</span>
              </div>
              <div className={classes.icon}>
                <Icon size="sm" icon="close" />
                <span style={{ color: '#ffffff' }}> - close</span>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '200px' }}>
              <div className={classes.icon}>
                <Icon size="md" icon="envelop" />
                <span style={{ color: '#ffffff' }}> - envelop</span>
              </div>
              <div className={classes.icon}>
                <Icon size="lg" icon="phone" />
                <span style={{ color: '#ffffff' }}>- phone</span>
              </div>
              <div className={classes.icon}>
                <Icon size="lg" icon="wrench" />
                <span style={{ color: '#ffffff' }}> - wrench</span>
              </div>
              <div className={classes.icon}>
                <Icon size="lg" icon="chartSpline" />
                <span style={{ color: '#ffffff' }}> - chartSpline</span>
              </div>
              <div className={classes.icon}>
                <Icon size="lg" icon="star" />
                <span style={{ color: '#ffffff' }}> - star</span>
              </div>
              <div className={classes.icon}>
                <Icon size="lg" icon="megaphone" />
                <span style={{ color: '#ffffff' }}> - megaphone</span>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '200px' }}>
              <div className={classes.icon}>
                <Icon size="lg" icon="support" />
                <span style={{ color: '#ffffff' }}> - support</span>
              </div>
              <div className={classes.icon}>
                <Icon size="lg" icon="mouseClick" />
                <span style={{ color: '#ffffff' }}> - mouseClick</span>
              </div>
              <div className={classes.icon}>
                <Icon size="lg" icon="chartPie" />
                <span style={{ color: '#ffffff' }}> - chartPie</span>
              </div>
              <div className={classes.icon}>
                <Icon size="lg" icon="handshake" />
                <span style={{ color: '#ffffff' }}> - handshake</span>
              </div>
              <div className={classes.icon}>
                <Icon size="lg" icon="trendingUp" />
                <span style={{ color: '#ffffff' }}> - trendingUp</span>
              </div>
              <div className={classes.icon}>
                <Icon size="lg" icon="checkbox" />
                <span style={{ color: '#ffffff' }}> - checkbox</span>
              </div>
            </div>
          </div>
        </>
      }
    />
  )
}
