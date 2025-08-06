'use client'

import classes from '../styles/styles.module.scss'
import { useRouter } from 'next/navigation'

import { ServiceDelails } from '@entities/service-page/model/model'

import { Button } from '@shared/ui/button'
import { ArrowLeftIcon } from '@shared/ui/icon/ui/icons/arrow-left'
import { InfoBlock } from '@shared/ui/info-block'

export const PostscriptumSection: React.FC<{ pageData: ServiceDelails }> = ({ pageData }) => {
  const router = useRouter()

  if (!pageData || 'error' in pageData) {
    return null
  }

  return (
    <div className={classes.postscriptumSection}>
      {pageData.postscriptum && (
        <InfoBlock
          title={pageData.postscriptum.name}
          data={[
            pageData.postscriptum.info,
            pageData.postscriptum.item1,
            pageData.postscriptum.item2,
            pageData.postscriptum.item3,
            pageData.postscriptum.item4
          ]}
        />
      )}
      <Button variant="primary" leftIcon={<ArrowLeftIcon />} onClick={() => router.push('/')}>
        Вернуться к сайту
      </Button>
    </div>
  )
}
