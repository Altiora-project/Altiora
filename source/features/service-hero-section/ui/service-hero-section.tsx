import classes from '../styles/styles.module.scss'

import { ServiceDelails as ServiceDetails } from '@entities/service-page/model/model'

import { Slider } from '@shared/ui/slider'
import { SliderCard } from '@shared/ui/slider-card'

export const ServiceHeroSection: React.FC<{ pageData: ServiceDetails }> = ({ pageData }) => {
  return (
    <div>
      <h1 className={classes.title}>{pageData.name}</h1>
      <div className={classes.heroSection}>
        <div className={classes.heroSection__info}>
          <p className={classes.heroSection__description}>{pageData.info}</p>
          {pageData.tags?.map((tag, index) => (
            <div className={classes.heroSection__tags} key={index}>
              <span className={classes.heroSection__tag}>{tag.name}</span>
            </div>
          ))}
        </div>
        <Slider
          cards={pageData.case_studies.map((caseStudy, index) => (
            <SliderCard
              key={index}
              title={caseStudy.name}
              description={caseStudy.info}
              tags={caseStudy.tags?.map((tag, index) => ({ id: index, name: tag.name }))}
            />
          ))}
        />
      </div>
    </div>
  )
}
