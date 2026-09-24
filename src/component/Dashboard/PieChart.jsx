import { motion } from 'framer-motion'

const cropStats = [
  { name: 'Maize', count: 98, pct: '39.5%', color: 'hsla(143,32%,86%,1)' },
  { name: 'Yam', count: 61, pct: '24.6%', color: 'hsla(143,32%,57%,1)' },
  { name: 'Rice', count: 48, pct: '19.4%', color: 'hsla(143,32%,42%,1)' },
  { name: 'Groundnut', count: 27, pct: '10.9%', color: 'hsla(144,33%,6%,1)' },
  { name: 'Others', count: 14, pct: '5.6%', color: 'hsla(145,33%,93%,1)' },
]

const PieChart = () => {
  return (
    <div className='flex min-w-0 flex-1 flex-col justify-between rounded-2xl border border-gray-200 bg-white p-4 box-border sm:p-6'>
      {/* 1. Header */}
      <div className='mb-4 flex flex-wrap items-center justify-between gap-3'>
        <h3 className='font-[manrope] text-base font-semibold text-gray-900'>
          Farmers by Crop Type
        </h3>
        <button
          type='button'
          className='shrink-0 rounded-xl border border-gray-300 px-3 py-2 text-xs font-[manrope] font-semibold text-gray-800 transition-colors hover:bg-gray-50 sm:px-4'
        >
          View All Farmers
        </button>
      </div>

      {/* 2. Donut & Legend Content */}
      <div className='grid min-w-0 grid-cols-1 items-center gap-5 pt-2 sm:grid-cols-[minmax(0,1fr)_minmax(150px,1fr)]'>

        {/* Donut Chart Visual (Square container for perfect circle) */}
        <div className='relative mx-auto flex h-[min(42vw,190px)] w-[min(42vw,190px)] max-w-full items-center justify-center sm:mx-0'>
          <svg viewBox='0 0 42 42' className='w-full h-full transform -rotate-90'>
            {/* 1. Maize: 39.5% (Top-Right quadrant) */}
            <motion.circle
              cx='21'
              cy='21'
              r='15.91549430918954'
              fill='transparent'
              stroke='hsla(143,32%,86%,1)'
              strokeWidth='10'
              strokeDasharray='39.5 60.5'
              strokeDashoffset='0'
              initial={{ strokeDashoffset: 100 }}
              animate={{ strokeDashoffset: 0 }}
              transition={{ duration: 1, delay: 0.1, ease: 'easeOut' }}
            />
            {/* 2. Groundnut: 10.9% */}
            <motion.circle
              cx='21'
              cy='21'
              r='15.91549430918954'
              fill='transparent'
              stroke='hsla(144,33%,6%,1)'
              strokeWidth='10'
              strokeDasharray='10.9 89.1'
              strokeDashoffset='-39.5'
              initial={{ strokeDashoffset: 100 }}
              animate={{ strokeDashoffset: -39.5 }}
              transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
            />
            {/* 3. Rice: 19.4% (Bottom-Left quadrant) */}
            <motion.circle
              cx='21'
              cy='21'
              r='15.91549430918954'
              fill='transparent'
              stroke='hsla(143,32%,42%,1)'
              strokeWidth='10'
              strokeDasharray='19.4 80.6'
              strokeDashoffset='-50.4'
              initial={{ strokeDashoffset: 100 }}
              animate={{ strokeDashoffset: -50.4 }}
              transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
            />
            {/* 4. Others: 5.6% */}
            <motion.circle
              cx='21'
              cy='21'
              r='15.91549430918954'
              fill='transparent'
              stroke='hsla(145,33%,93%,1)'
              strokeWidth='10'
              strokeDasharray='5.6 94.4'
              strokeDashoffset='-69.8'
              initial={{ strokeDashoffset: 100 }}
              animate={{ strokeDashoffset: -69.8 }}
              transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
            />
            {/* 5. Yam: 24.6% (Top-Left quadrant) */}
            <motion.circle
              cx='21'
              cy='21'
              r='15.91549430918954'
              fill='transparent'
              stroke='hsla(143,32%,57%,1)'
              strokeWidth='10'
              strokeDasharray='24.6 75.4'
              strokeDashoffset='-75.4'
              initial={{ strokeDashoffset: 100 }}
              animate={{ strokeDashoffset: -75.4 }}
              transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
            />
          </svg>

          {/* Center Counter */}
          <motion.div
            className='absolute inset-0 flex items-center justify-center pointer-events-none'
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6, ease: 'easeOut' }}
          >
            <span className='font-[manrope] text-3xl font-bold text-gray-900'>
              328
            </span>
          </motion.div>
        </div>

        {/* Legend List (Clean left/right alignment) */}
        <div className='flex min-w-0 w-full max-w-[260px] flex-col gap-3 justify-self-center sm:justify-self-stretch'>
          {cropStats.map((item) => (
            <div key={item.name} className='flex w-full min-w-0 items-center justify-between gap-2 text-xs font-[manrope]'>
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