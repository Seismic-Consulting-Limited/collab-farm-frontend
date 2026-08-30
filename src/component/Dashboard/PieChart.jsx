import React from 'react'

const cropStats = [
  { name: 'Maize', count: 98, pct: '39.5%', color: 'hsla(143,32%,86%,1)' },
  { name: 'Yam', count: 61, pct: '24.6%', color: 'hsla(143,32%,57%,1)' },
  { name: 'Rice', count: 48, pct: '19.4%', color: 'hsla(143,32%,42%,1)' },
  { name: 'Groundnut', count: 27, pct: '10.9%', color: 'hsla(144,33%,6%,1)' },
  { name: 'Others', count: 14, pct: '5.6%', color: 'hsla(145,33%,93%,1)' },
]

const PieChart = () => {
  return (
    <div className='flex-1 border border-gray-200 rounded-2xl p-6 bg-white flex flex-col justify-between box-border min-h-[340px]'>
      {/* 1. Header */}
      <div className='flex items-center justify-between mb-4'>
        <h3 className='font-[manrope] text-base font-semibold text-gray-900'>
          Farmers by Crop Type
        </h3>
        <button
          type='button'
          className='border border-gray-300 rounded-xl px-4 py-2 text-xs font-[manrope] font-semibold text-gray-800 hover:bg-gray-50 transition-colors cursor-pointer'
        >
          View All Farmers
        </button>
      </div>

      {/* 2. Donut & Legend Content */}
      <div className='flex items-center justify-between gap-6 my-auto pt-2'>
        
        {/* Donut Chart Visual (Square container for perfect circle) */}
        <div className='relative w-[210px] h-[210px] flex items-center justify-center shrink-0'>
          <svg viewBox='0 0 42 42' className='w-full h-full transform -rotate-90'>
            {/* 1. Maize: 39.5% (Top-Right quadrant) */}
            <circle
              cx='21'
              cy='21'
              r='15.91549430918954'
              fill='transparent'
              stroke='hsla(143,32%,86%,1)'
              strokeWidth='10'
              strokeDasharray='39.5 60.5'
              strokeDashoffset='0'
            />
            {/* 2. Groundnut: 10.9% */}
            <circle
              cx='21'
              cy='21'
              r='15.91549430918954'
              fill='transparent'
              stroke='hsla(144,33%,6%,1)'
              strokeWidth='10'
              strokeDasharray='10.9 89.1'
              strokeDashoffset='-39.5'
            />
            {/* 3. Rice: 19.4% (Bottom-Left quadrant) */}
            <circle
              cx='21'
              cy='21'
              r='15.91549430918954'
              fill='transparent'
              stroke='hsla(143,32%,42%,1)'
              strokeWidth='10'
              strokeDasharray='19.4 80.6'
              strokeDashoffset='-50.4'
            />
            {/* 4. Others: 5.6% */}
            <circle
              cx='21'
              cy='21'
              r='15.91549430918954'
              fill='transparent'
              stroke='hsla(145,33%,93%,1)'
              strokeWidth='10'
              strokeDasharray='5.6 94.4'
              strokeDashoffset='-69.8'
            />
            {/* 5. Yam: 24.6% (Top-Left quadrant) */}
            <circle
              cx='21'
              cy='21'
              r='15.91549430918954'
              fill='transparent'
              stroke='hsla(143,32%,57%,1)'
              strokeWidth='10'
              strokeDasharray='24.6 75.4'
              strokeDashoffset='-75.4'
            />
          </svg>

          {/* Center Counter */}
          <div className='absolute inset-0 flex items-center justify-center pointer-events-none'>
            <span className='font-[manrope] text-3xl font-bold text-gray-900'>
              328
            </span>
          </div>
        </div>

        {/* Legend List (Clean left/right alignment) */}
        <div className='flex flex-col gap-3 flex-1 max-w-[220px]'>
          {cropStats.map((item) => (
            <div key={item.name} className='flex items-center justify-between text-xs font-[manrope] w-full'>
              <div className='flex items-center gap-2'>
                <span
                  className='w-2.5 h-2.5 rounded-full shrink-0'
                  style={{ backgroundColor: item.color }}
                />
                <span className='text-gray-600 font-medium'>{item.name}</span>
              </div>
            
              <div className='flex items-center gap-1 shrink-0'>
                <span className='text-gray-800 font-semibold'>{item.count}</span>
                <span className='text-gray-400 font-normal'>({item.pct})</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default PieChart