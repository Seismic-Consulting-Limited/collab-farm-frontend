import React from 'react'

const UploadingPill = ({ upload, progress, secondicon, fileName, Label, sublabel }) => {
  return (
    <div className='w-full'>
      {/* Top Label */}
      <p className='flex items-center gap-1 mb-1'>
        <span className='text-[hsla(0,0%,19%,1)] font-[manrope] text-sm font-medium'>
          {Label}
        </span>
        <span className='text-[hsla(0,0%,40%,1)] font-[manrope] text-xs font-normal'>
          {sublabel}
        </span>
      </p>

      {/* Main Upload Box */}
      <div className='w-full border border-dashed border-[#CBD5E1] rounded-sm px-4 py-3 flex items-center justify-between gap-3 bg-white'>
        {/* Left Icon */}
        <div className='w-9 h-9 shrink-0 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center'>
          <img src={upload} alt='Upload icon' className='w-4 h-4 object-contain' />
        </div>

        {/* Middle part */}
        <div className='flex-1 flex flex-col gap-1 min-w-0'>
          {/* Top: File Name + Percentage */}
          <div className='flex justify-between items-center leading-none'>
            <span className='text-[hsla(0,0%,19%,1)] font-[manrope] text-sm md:text-sm font-normal truncate'>
              {fileName}
            </span>
            <span className='text-[hsla(0,0%,19%,1)] font-[manrope] font-semibold text-sm md:text-sm shrink-0'>
              {progress}%
            </span>
          </div>

          {/* Progress Bar */}
          <div className='w-full h-1 bg-[hsla(0,0%,90%,1)] rounded-full overflow-hidden'>
            <div
              className='h-full bg-[hsla(143,32%,28%,1)] rounded-full transition-all duration-300'
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Cancel Upload */}
          <button onClick={()=> alert('cancelled')} className='flex items-end'>
          <span className='text-[hsla(0,0%,19%,1)] font-[manrope] text-[11px] leading-none font-medium cursor-pointer w-fit hover:underline'>
            Cancel Upload
          </span>
          </button>
          {/*
              */}
        </div>

        {/* Second Icon */}
        <div className='shrink-0 flex items-center justify-center'>
            <button onClick={()=> alert('cancelled')}>
          <img src={secondicon} alt='Action icon' className='w-4 h-4 object-contain cursor-pointer' />
            </button>
        </div>
      </div>
    </div>
  )
}

export default UploadingPill