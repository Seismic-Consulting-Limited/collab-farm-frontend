import React, { useState } from 'react'
import RedDot from '../../assets/RedDot.svg'

export const Input = ({
  unit, // renamed from 'something' (e.g. "Acres")
  buttonClassName = '',
  label,
  placeholder,
  type = 'text',
  autoComplete,
  htmlFor,
  icon,
  onIconClick,
  value,
  defaultValue = '',
  onChange,
  error,
  ...props
}) => {
  // Internal state allows validation to work even without parent state
  const [internalValue, setInternalValue] = useState(defaultValue)
  const isControlled = value !== undefined
  const currentValue = isControlled ? value : internalValue

  const isNINField = placeholder?.toLowerCase().includes('nin')
  const isNINInvalid = isNINField && currentValue.length > 0 && currentValue.length !== 11

  const handleChange = (e) => {
    let val = e.target.value
    // If it's a NIN field, allow only numbers up to 11 digits
    if (isNINField) {
      val = val.replace(/\D/g, '').slice(0, 11)
      e.target.value = val
    }

    if (!isControlled) {
      setInternalValue(val)
    }
    if (onChange) {
      onChange(e)
    }
  }

  return (
    <div className="w-full">
      {label && (
        <label htmlFor={htmlFor} className="block text-sm font-normal text-black mb-1">
          {label}
        </label>
      )}

      <div className="relative">
        <input
          id={htmlFor}
          type={type}
          value={currentValue}
          onChange={handleChange}
          placeholder={placeholder}
          autoComplete={autoComplete}
          maxLength={isNINField ? 11 : undefined}
          {...props}
          className={`w-full h-[52px] sm:h-[54px] rounded-2xl py-3 border px-4 ${
            icon || unit ? 'pr-20' : 'pr-4'
          } text-base text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-1 ${
            isNINInvalid || error
              ? 'border-red-500 focus:ring-red-500'
              : 'border-[hsla(0,0%,64%,1)] focus:ring-[hsla(143,32%,28%,1)]'
          }`}
        />

        {(icon || unit) && (
          <button
            type="button"
            onClick={onIconClick}
            className={`absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1.5 text-gray-500 hover:text-gray-700 ${buttonClassName}`}
          >
            {unit && <span className="text-xs font-medium text-gray-600">{unit}</span>}
            {icon && <img src={icon} alt="" className="w-4 h-4 object-contain" />}
          </button>
        )}
      </div>

      {(isNINInvalid || error) && (
        <p className="flex items-center gap-1.5 text-red-800 text-xs mt-1.5">
          <img src={RedDot} alt="" className="w-2.5 h-2.5" />
          <span>{error || 'NIN must be exactly 11 digits'}</span>
        </p>
      )}
    </div>
  )
}