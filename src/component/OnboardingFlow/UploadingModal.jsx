import React from 'react'
import DocumentUpload from '../../assets/DocumentUpload.svg'


const UploadingModal = ({totalSteps='3',currentStep='2',progress, className, remove}) => {
  return (
      <div className='w-full border p-5 border-dashed border-[#CBD5E1] rounded-lg bg-white'>
      <div className='flex gap-3 items-center'>
        {/*image preview */}
        <img src={DocumentUpload} alt="Document Upload" />
        {/*progress pill */}

  <div className='flex-1 flex flex-col gap-1.5 min-w-0'>
  {/* Label + Percentage */}
  <div className='flex justify-between items-center text-xs font-[manrope]'>
    <span className='font-medium text-gray-700 truncate'>Uploading document...</span>
    <span className='text-gray-500 font-semibold'>{progress}%</span>
  </div>

  {/* Progress Track */}
  <div className='w-full h-1.5 bg-gray-200 rounded-full overflow-hidden'>
    {/* Dynamic Fill */}
    <div 
      className='h-full bg-[hsla(143,32%,28%,1)] transition-all duration-200 rounded-full'
      style={{ width: `${progress}%` }}
    />
  </div>
</div>
 {/*cancel upload */}
    <button
          type='button'
          onClick={remove}
          className='shrink-0 text-gray-400 hover:text-gray-700 transition-colors p-1 cursor-pointer'
          aria-label='Remove file'
        >
          <svg
            className='w-5 h-5'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            strokeWidth={1.75}
          >
            <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
          </svg>
        </button>     
      </div>
    </div>
  )
}

export default UploadingModal
