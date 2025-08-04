'use client'

import React, { useState } from 'react'
import clsx from 'clsx'
import classes from '../styles/styles.module.scss'
import { StartupLabMenuProps } from '../types/types'
import { Button } from '@shared/ui/button'
//import { Icon } from '@shared/ui/icon'

export const StartupLabMenu: React.FC<StartupLabMenuProps> = ({
    data,
    link,
    ...props
}) => {
    const [activeIndex, setActiveIndex] = useState(0)

    const handleMenuItemClick = (index: number) => {
        setActiveIndex(index)
    }

    if (!data || data.length === 0) {
        return null
    }

    const activeItem = data[activeIndex]

    return (
        <div className={classes.container} {...props}>
            <div className={classes.containerHeader}>
                <h1>/лаборатория стартапов</h1>
                <div className={classes.space} >
                    {/* <button type="button">
                        <Icon name="close" icon="close" className={classes.closeIcon} />
                    </button> */}
                </div>
            </div>
            <div className={classes.containerBody}>
                {/* Левое меню */}
                <nav className={classes.menuSection}>
                    {data.map((item, index) => (
                        <button
                            key={index}
                            className={clsx(
                                classes.menuItem,
                                activeIndex === index && classes.active
                            )}
                            onClick={() => handleMenuItemClick(index)}
                            type="button"
                        >
                            <span>{`#${index + 1}`}</span>
                            <span className={classes.menuItemTitle}>{`${item.title}`}</span>
                        </button>
                    ))}
                </nav>

                {/* Правая секция с контентом */}
                <div className={classes.contentSection}>
                    <div className={classes.contentBody}>
                        {activeItem.content}
                    </div>
                    <div className={classes.contentFooter}>
                        <div className={classes.space} />
                        {link && (
                            <div className={classes.button}>
                                <Button variant="primary" onClick={() => window.open(link, '_blank')}>
                                    Заказать проект
                                </Button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div >
    )
} 