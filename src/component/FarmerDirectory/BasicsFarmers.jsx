import React from 'react'

const BasicsFarmers = ({ name, num, icon }) => {
  return (
    <div className='flex flex-col gap-3 lg:gap-5 flex-1 px-4 first:pl-0 last:pr-0'>
      {/* Icon + Title */}
      <div className='flex items-center gap-2'>
        {icon && (
          <img src={icon} alt='' className='w-6 h-6 object-contain shrink-0' />
        )}
        <h3 className='font-["Manrope",sans-serif] text-xs font-medium text-gray-500 whitespace-nowrap'>
          {name}
        </h3>
      </div>

      {/* Number Count */}
      <p className='font-["Manrope",sans-serif] text-2xl font-bold text-gray-900 leading-none'>
        {num}
      </p>
    </div>
  )
}

export default BasicsFarmers