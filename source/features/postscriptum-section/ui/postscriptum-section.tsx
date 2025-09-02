'use client'

import classes from '../styles/styles.module.scss'
import { useRouter } from 'next/navigation'

import { Postscriptum, ServiceDelails } from '@entities/service-page/model/model'

import { Button } from '@shared/ui/button'
import { ArrowLeftIcon } from '@shared/ui/icon/ui/icons/arrow-left'
import { InfoBlock } from '@shared/ui/info-block'

export const PostscriptumSection: React.FC<{ pageData: ServiceDelails }> = ({ pageData }) => {
  const router = useRouter()

  if (!pageData || 'error' in pageData) {
    return null
  }

  const itemsToProcess: Exclude<keyof Postscriptum, 'id' | 'name'>[] = ['info', 'item1', 'item2', 'item3', 'item4']
  const processedData = itemsToProcess.map(item => {
    const value = pageData.postscriptum[item]
    return value && value.includes('-') ? value.replace('-', '\u2011') : value
  })

  return (
    <div className={classes.postscriptumSection}>
      {pageData.postscriptum && <InfoBlock title={pageData.postscriptum.name} data={processedData} />}
      <Button variant="primary" leftIcon={<ArrowLeftIcon />} onClick={() => router.push('/')}>
        Вернутьсяк сайту
      </Button>
    </div>
  )
}
