'use client'

import React, { InputHTMLAttributes, useRef } from 'react'
import styles from './styles/styles.module.scss'
import clsx from 'clsx'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean
  supportingText?: string
  onClear?: () => void
  label?: string
  type?: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  name?: string
  placeholder?: string
}

const Input: React.FC<InputProps> = ({
  error = false,
  supportingText,
  onClear,
  value,
  label,
  type = 'text',
  onChange,
  name,
  placeholder,
  ...props
}) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [inputValue, setInputValue] = React.useState(value ?? '')

  React.useEffect(() => {
    if (typeof value === 'string') setInputValue(value)
  }, [value])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
    if (onChange) onChange(e)
  }

  const handleClear = () => {
    setInputValue('')
    if (onClear) onClear()
    if (inputRef.current) inputRef.current.focus()
  }

  const showClear = typeof inputValue === 'string' && inputValue.length > 0 && typeof onClear === 'function'

  return (
    <div className={styles.inputWrapper}>
      {label && (
        <label className={styles.inputLabel} htmlFor={props.id}>
          {label}
        </label>
      )}
      <div className={styles.inputContent} style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
        <input
          ref={inputRef}
          className={clsx(styles.inputField, error && styles.error, inputValue && !error && styles.valid)}
          type={type}
          name={name}
          placeholder={placeholder}
          value={inputValue}
          onChange={handleChange}
          {...props}
        />
        {showClear && (
          <button
            type="button"
            aria-label="Очистить"
            onClick={handleClear}
            className={styles.clearButton}
            style={{
              position: 'absolute',
              right: 0,
              background: 'none',
              cursor: 'pointer',
              padding: 0,
              alignItems: 'start',
              height: '100%',
            }}
          >
            <svg viewBox="0 0 36 36">
              <line x1="8" y1="8" x2="28" y2="28" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
              <line x1="28" y1="8" x2="8" y2="28" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </button>
        )}
        {supportingText && (
          <div className={`${styles.supportingText} ${error ? styles.error : ''}`}>{supportingText}</div>
        )}
      </div>
    </div>
  )
}

export { Input }
