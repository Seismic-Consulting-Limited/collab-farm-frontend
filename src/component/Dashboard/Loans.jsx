import React from 'react'

const Loans = ({ name, sub, amount, icon }) => {
  const getDotColor = (subtitle = '') => {
    switch (subtitle) {
        case 'Paid':
        return 'hsla(220,100%,58%,1)'
      case 'Currently ongoing':
        return 'hsla(152,77%,39%,1)' // Green
      case 'Past payment date':
        return 'hsla(4,74%,49%,1)' // Red
      case 'Yet to be approved':
        return 'hsla(34,94%,50%,1)' // Orange/Amber
      default:
        return 'hsla(0,0%,60%,1)'
    }
  }

  return (
    <div className='flex items-center justify-between py-4 px-6 mb-5 border border-gray-100 rounded-xl'>
      {/* Left: Indicator dot + Text info */}
      <div className='flex items-start gap-3'>
        <span
          className='w-2.5 h-2.5 rounded-full mt-1.5 shrink-0'
          style={{ backgroundColor: getDotColor(sub) }}
        />
        <div className='flex flex-col'>
          <span className='font-[manrope] text-sm font-semibold text-gray-900 leading-tight'>
            {name}
          </span>
          <span className='font-[manrope] text-xs text-gray-400 mt-0.5 leading-none'>
            {sub}
          </span>
        </div>
      </div>

      {/* Right: Amount Count + Arrow Button */}
      <div className='flex items-center gap-3'>
        <span className='font-[manrope] text-sm font-bold text-gray-900'>
          {amount}
        </span>
        <button
          type='button'
          onClick={() => alert(`View details for ${name}`)}
          className='text-gray-400 hover:text-gray-700 transition-colors p-1 cursor-pointer flex items-center justify-center'
        >
          {icon && (
            <img src={icon} alt="Arrow" />
          )}
        </button>
      </div>
    </div>
  )
}

export default Loans