import React from 'react'
import UploadedDocument from '../../assets/UploadedDocument.svg'

const UploadedPill = ({
  upload = UploadedDocument,
  fileName1,
  fileSize = '1.2 MB',
  statusText = 'Document Uploaded',
  Label,
  sublabel,
  onRemove,
}) => {
  return (
    <div className='w-full flex flex-col gap-1.5'>
      {/* Top Label */}
      <p className='text-sm text-[hsla(0,0%,19%,1)] font-[manrope] leading-tight'>
        <span className='font-medium'>{Label} </span>
        <span className='font-normal text-gray-500'>{sublabel}</span>
      </p>

      {/* Dashed Box */}
      <div className='w-full border border-dashed border-[#CBD5E1] rounded-sm px-5 py-4 flex items-center justify-between gap-4 bg-white box-border'>
        {/* Left: Document Thumbnail + Details */}
        <div className='flex items-center gap-3.5 min-w-0 flex-1'>
          {/* Document Thumbnail */}
          <div className='w-10 h-12 shrink-0 rounded-md overflow-hidden bg-gray-100 border border-gray-200 flex items-center justify-center'>
            <img src={upload} alt='Document preview' className='w-full h-full object-cover' />
          </div>

          {/* File Info */}
          <div className='flex flex-col gap-1 min-w-0 flex-1'>
            <h4 className='text-sm font-semibold text-gray-900 font-[manrope] truncate'>
              {fileName1}
            </h4>
            <p className='text-xs text-gray-500 font-[manrope] leading-none'>
              <span>{fileSize}</span>
              <span className='mx-1.5'>•</span>
              <span>{statusText}</span>
            </p>
          </div>
        </div>

        {/* Right: Close / Remove Icon */}
        <button
          type='button'
          onClick={()=> alert('cancelll')}
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

export default UploadedPill