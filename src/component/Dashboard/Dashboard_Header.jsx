import React from 'react'

const Dashboard_Header = ({ Greeting, Name, sub }) => {
  return (
    <div className='flex flex-col gap-0.5'>
      <div className='flex items-center gap-1.5'>
        {Greeting && (
          <span className='text-2xl sm:text-xl font-bold font-["Manrope",sans-serif] text-gray-900 leading-tight'>
            {Greeting}
          </span>
        )}
        {Name && (
          <span className='text-2xl sm:text-xl font-bold font-["Manrope",sans-serif] text-[hsla(143,32%,28%,1)] leading-tight'>
            {Name}
          </span>
        )}
      </div>
      {sub && (
        <p className='text-xs font-normal font-["Manrope",sans-serif] text-[hsla(0,0%,44%,1)]'>
          {sub}
        </p>
      )}
    </div>
  )
}

export default Dashboard_Header