'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { MainBlock } from '../../../shared/ui/_main-block/ui/main-block'
import ServiceCard from '../../../shared/ui/service-card'
import { Button } from '../../../shared/ui/button/ui/button'
import { Modal } from '../../../shared/ui/modal'
import { StartupLabProps } from '../types/types'
import { typeTechnologiesResponse } from '@entities/technologies'
import { typeApiResponse } from '@shared/lib/api/types/types'
import classes from '../styles/styles.module.scss'
import clsx from 'clsx'
import { StartupLabMenu } from '@shared/ui/startup-lab-menu'
import { handleTechnologiesClick as handleTechnologiesClickAction } from '../api/server-actions'
import { MarkdownRenderer } from '@shared/lib/markdown'

export const StartupLab: React.FC<StartupLabProps> = ({ info1, cards, info2, contactURL }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [technologiesData, setTechnologiesData] = useState<typeApiResponse<typeTechnologiesResponse> | null>(null)
  const [isLoading, setIsLoading] = useState(false)

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
    //console.log('renderCards', 'cards', cards);
    return (
      <div className={classes.cardsContainer}>
        {cards?.map((card, index) => (
          <ServiceCard
            key={index}
            icon={<img src={card.imageLink} className={classes.cardIcon} alt={card.title} />}
            title={card.title}
            text={card.info}
          />
        ))}
      </div>
    )
  }

  const renderBottomContent = (asMain: boolean) => {
    return (
      <div className={clsx(classes.bottomContent, asMain ? classes.bottomAsMain : classes.bottomAsFooter)}>
        <Button
          variant="secondary"
          onClick={handleTechnologiesClick}
          disabled={isLoading}
          className={classes.bottomButton}
        >
          {isLoading ? 'Загрузка...' : 'Подробнее'}
        </Button>

        <Button variant="primary" className={classes.bottomButton}>
          <Link href={contactURL}>
            Связаться<span className={classes.buttonFullText}> с нами</span>
          </Link>
        </Button>
      </div>
    )
  }

  const title = '/лаборатория стартапов'

  return (
    <>
      <MainBlock topContent={<h2 className={classes.title}>{title}</h2>} bottomContent={renderBottomContent(true)}>
        <div className={classes.content}>
          <p className={classes.infoText}>{info1}</p>
          <div className={classes.cards}>
            <h3 className={classes.cardsTitle}>Что мы предлагаем:</h3>
            {renderCards()}
          </div>
          <p className={classes.infoText}>{info2}</p>
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
    </>
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
