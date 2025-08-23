'use client'

import React, { FC, useState } from 'react'

import ServiceCard from '../../../shared/ui/service-card'
import { handleTechnologiesClick as handleTechnologiesClickAction } from '../api/server-actions'
import classes from '../styles/styles.module.scss'
import { StartupLabProps } from '../types/types'
import clsx from 'clsx'
import Link from 'next/link'

import { typeTechnologiesResponse } from '@entities/technologies'

import { typeApiResponse } from '@shared/lib/api/types/types'
import { MarkdownRenderer } from '@shared/lib/markdown'
import { MainBlock } from '@shared/ui/_main-block'
import { Button } from '@shared/ui/button'
import { Modal } from '@shared/ui/modal'
import { StartupLabMenu } from '@shared/ui/startup-lab-menu'

export const StartupLab: FC<StartupLabProps> = ({
  cards,
  cardCount,
  info1,
  info2,
  contactURL,
  className,
  ...otherProps
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [technologiesData, setTechnologiesData] = useState<typeApiResponse<typeTechnologiesResponse> | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const labsCards = (cards || [])
    .sort((a, b) => a.id - b.id)
    .filter(card => card.id <= cardCount)
    .map(card => ({
      imageLink: 'http://' + process.env.NEXT_PUBLIC_IMAGE_HOST + card.image,
      title: card.title,
      info: card.description
    }))

  // Функция для загрузки технологий
  const handleTechnologiesClick = async () => {
    setIsLoading(true)
    try {
      const response = await handleTechnologiesClickAction()
      setTechnologiesData(response)
      setIsModalOpen(true)
    } catch (error) {
      console.error('Ошибка при загрузке технологий:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const renderCards = () => {
    return (
      <div className={classes.cardsContainer}>
        {labsCards?.map((card, index) => (
          <ServiceCard key={index} icon={card.imageLink} title={card.title} text={card.info} />
        ))}
      </div>
    )
  }

  const renderBottomContent = (asMain: boolean) => {
    return (
      <div className={clsx(classes.bottomContent, asMain ? classes.bottomAsMain : classes.bottomAsFooter)}>
        <Button
          variant={asMain ? 'secondary' : 'secondary-black'}
          onClick={handleTechnologiesClick}
          disabled={isLoading}
          className={clsx(classes.bottomButton, !asMain && classes.bottomButtonAsFooter)}
        >
          {isLoading ? 'Загрузка...' : 'Подробнее'}
        </Button>

        <Link href={contactURL} className={clsx(!asMain && classes.bottomButtonAsFooter)}>
          <Button variant="primary" className={clsx(classes.bottomButton, !asMain && classes.bottomSubButtonAsFooter)}>
            Связаться&nbsp;<span> с нами</span>
          </Button>
        </Link>
      </div>
    )
  }

  const title = '/лаборатория стартапов'

  return (
    <div className={className} id={'laboratory'} {...otherProps}>
      <MainBlock
        bottomStyles={classes.bottomContainer}
        topContent={<h2 className={classes.title}>{title}</h2>}
        bottomContent={renderBottomContent(true)}
      >
        <div className={classes.content}>
          <MarkdownRenderer className={classes.markdown} content={info1} />
          <div className={classes.cards}>
            <h3 className={classes.cardsTitle}>Что мы предлагаем:</h3>
            {renderCards()}
          </div>
          <MarkdownRenderer className={classes.markdown} content={info2} />
          {renderBottomContent(false)}
        </div>
      </MainBlock>

      {/* Модальное окно для отображения технологий */}
      <Modal isOpen={isModalOpen} setIsOpen={setIsModalOpen} title={title} withCloseButton={true}>
        <div
          className={classes.modalContent}
          //style={{ padding: '20px', maxHeight: '70vh', overflow: 'auto' }}
        >
          {isLoading ? (
            <div>Загрузка данных...</div>
          ) : technologiesData && 'data' in technologiesData && technologiesData.data.data ? (
            <StartupLabMenu
              link={contactURL}
              data={technologiesData.data.data.map(el => {
                return {
                  title: el.name,
                  content: (
                    <section className={classes.tabContent}>
                      <MarkdownRenderer content={el.primary_info} />
                      {el.image && <img src={el.image} />}
                      {el.secondary_info && <MarkdownRenderer content={el.secondary_info} />}
                    </section>
                  )
                }
              })}
            />
          ) : (
            <div>Нет данных для отображения</div>
          )}
        </div>
      </Modal>
    </div>
  )
}

/**
 *                      (
                            <div>
                                <pre>
                                    {JSON.stringify(technologiesData, null, 2)}
                                </pre>
                            </div>
                        )
 */
