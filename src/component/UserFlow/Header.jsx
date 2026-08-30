import React from 'react'

export const Header = ({ title, subtitle, className = '' }) => {
  return (
    <div className={`text-left flex flex-col gap-1 mb-3 ${className}`}>
      <h1 className="text-2xl sm:text-3xl font-bold font-['Playfair_Display',serif] leading-tight text-gray-900">
        {title}
      </h1>
      {subtitle && (
        <p className="text-[13px] mt-1 tracking-tighter font-normal font-['Manrope',sans-serif] leading-normal text-gray-500">
          {subtitle}
        </p>
      )}
    </div>
  )
}