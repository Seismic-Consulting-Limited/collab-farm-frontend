import React from 'react'

const Loans = ({ name = '', amount, icon }) => {
  const getDotColor = (label = '') => {
    const text = label.toLowerCase()

    if (text.includes('repaid') || text.includes('paid')) {
      return '#12B76A' // Green
    }
    if (text.includes('active') || text.includes('ongoing')) {
      return '#2E90FA' // Blue
    }
    if (text.includes('overdue') || text.includes('past')) {
      return '#F04438' // Red
    }
    if (text.includes('pending') || text.includes('partially') || text.includes('approved')) {
      return '#F79009' // Orange/Amber
    }

    return null
  }

  const dotColor = getDotColor(name)

  return (
    <div className='flex items-center justify-between py-3.5 px-4 sm:px-5 border border-gray-100 rounded-xl bg-white hover:border-gray-200 transition-colors'>
      {/* Left: Indicator dot (conditional) + Status name */}
      <div className='flex items-center gap-2.5'>
        {dotColor && (
          <span
            className='w-2.5 h-2.5 rounded-full shrink-0'
            style={{ backgroundColor: dotColor }}
          />
        )}
        <span className='font-[manrope] text-sm font-semibold text-gray-800 leading-tight'>
          {name}
        </span>
      </div>

      {/* Right: Amount + Action arrow */}
      <div className='flex items-center gap-3'>
        <span className='font-[manrope] text-sm font-bold text-gray-900'>
          {amount}
        </span>
        <button
          type='button'
          onClick={() => alert(`View details for ${name}`)}
          className='text-gray-400 hover:text-gray-700 transition-colors p-1 cursor-pointer flex items-center justify-center'
          aria-label={`View ${name}`}
        >
          {icon && (
            <img src={icon} alt="" className='w-4 h-4 object-contain' />
          )}
        </button>
      </div>
    </div>
  )
}

export default Loans