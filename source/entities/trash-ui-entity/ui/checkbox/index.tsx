'use client'

import React, { useState } from 'react'

import { UIContainer } from '../ui-container'
import type { CheckedState } from '@radix-ui/react-checkbox'

import { Checkbox } from '@shared/ui/checkbox'

export const UICheckbox: React.FC = () => {
  const [checkedMd, setCheckedMd] = useState<CheckedState>(false)
  const [checkedSm, setCheckedSm] = useState<CheckedState>(false)

  return (
    <UIContainer
      title="Checkbox"
      description="Чекбокс со всеми стандартными props Radix UI и дополнительным props:"
      props={[{ key: 'size', value: '("md" | "sm") размер чекбокса: md - 40x40px; sm - 24x24px' }]}
      components={
        <>
          <div
            style={{
              display: 'flex',
              gap: '20px',
              alignItems: 'center',
              flexWrap: 'wrap',
              padding: '10px',
              backgroundColor: 'var(--color-grey2)',
              color: 'var(--color-white)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Checkbox checked={checkedMd} onCheckedChange={setCheckedMd} size="md" />
              <span>Medium size (md)</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Checkbox checked={checkedSm} onCheckedChange={setCheckedSm} size="sm" />
              <span>Small size (sm)</span>
            </div>
          </div>
        </>
      }
    />
  )
}
