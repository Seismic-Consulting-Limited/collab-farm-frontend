import React from 'react'
import ArrowDown from '../../assets/ArrowDown.svg'

const BarChart = () => {
  const barData = [
    { month: "Dec '25", value: 70, color: 'hsla(46,65%,52%,1)' },
    { month: "Jan '26", value: 20, color: 'hsla(143,32%,28%,1)' },
    { month: "Feb '26", value: 92, color: 'hsla(46,65%,52%,1)' },
    { month: "Mar '26", value: 36, color: 'hsla(143,32%,28%,1)' },
    { month: "Apr '26", value: 72, color: 'hsla(46,65%,52%,1)' },
    { month: "May '26", value: 28, color: 'hsla(143,32%,28%,1)' },
  ]

  const yAxis = ['100%', '80%', '60%', '40%', '20%', '0%']

  return (
    <div className='flex min-w-0 flex-1 flex-col justify-between rounded-2xl border border-gray-200 bg-white p-4 box-border sm:p-6'>
      {/* Header */}
      <div className='mb-4 flex flex-wrap items-start justify-between gap-3'>
        <div>
          <h3 className='font-[manrope] text-base font-bold text-gray-900 leading-tight'>
            Accumulative ROI
          </h3>
          <p className='font-[manrope] text-xs text-gray-500 mt-0.5'>
            Track your return on investment trend over time.
          </p>
        </div>

        {/* Dropdown Pill */}
        <button
          type='button'
          className='flex items-center gap-2 border border-gray-300 rounded-xl px-3 py-1.5 text-xs font-[manrope] font-medium text-gray-700 hover:bg-gray-50 cursor-pointer'
        >
          {/*
          'w-3.5 h-3.5
             */}
          <span>In 6 months</span>
          <img src={ArrowDown} alt="ArrowDown" onClick={() => alert('ArrowDrop down menu')} />
        </button>
      </div>

      {/* Chart Canvas */}
      <div className='flex h-[200px] w-full min-w-0 items-end gap-2 overflow-hidden pt-4 sm:gap-3'>
        {/* Y-Axis Labels */}
        <div className='flex flex-col justify-between h-[170px] pb-6 text-right pr-2'>
          {yAxis.map((tick) => (
            <span key={tick} className='font-[manrope] text-[11px] text-gray-400 leading-none'>
              {tick}
            </span>
          ))}
        </div>

        {/* Bars Container + Axis Divider */}
        <div className='flex min-w-0 flex-1 flex-col justify-between'>
          {/* 1. The Bars Stack */}
          <div className='grid h-[170px] grid-cols-6 items-end gap-1 sm:gap-3'>
            {barData.map((item, idx) => (
              <div key={idx} className='flex justify-center items-end h-full'>
                <div className='w-full max-w-[34px] h-[170px] bg-[#EAEFF4] rounded-t-xl relative flex items-end overflow-hidden'>
                  <div
                    className='w-full rounded-t-xl transition-all duration-300'
                    style={{
                      height: `${item.value}%`,
                      backgroundColor: item.color,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* 2. Full-Width Straight Horizontal Axis Line */}
          <div className='w-full border-b border-gray-200' />

          {/* 3. The Months Row */}
          <div className='grid grid-cols-6 gap-1 pt-2 sm:gap-3'>
            {barData.map((item, idx) => (
              <span key={idx} className='text-center font-[manrope] text-[11px] text-gray-500 whitespace-nowrap leading-none'>
                {item.month}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
export default BarChart