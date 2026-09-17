import React from 'react'
import { useRef, useState} from 'react'

const UploadPill = ({ onFileSelect, type, upload, progress, secondicon, fileName, Label, sublabel }) => {
  
  const [selectedFile, setSelectedFile] = useState(null)
  const handleClick=(e)=>{
    const file = e.target.files[0]
    if(!file) return
    onFileSelect(file)
  }
  const fileInputRef = useRef(null)
  const onButtonClick = () => {
fileInputRef.current.click()
  }
  return (
    <div className='w-full'>
      {/* Top Label */}
      <p className='flex items-center gap-1 mb-1'>
        <span className='text-[hsla(0,0%,19%,1)] font-[manrope] text-xs font-medium'>
          {Label}
        </span>
        <span className='text-[hsla(0,0%,40%,1)] font-[manrope] text-[10px] font-normal'>
          {sublabel}
        </span>
      </p>

      {/* Main Upload Box */}
      <div className='w-full border border-dashed border-[#CBD5E1] rounded-lg bg-white'>
        <input
        accept="image/jpeg,image/png,application/pdf,.jpg,.jpeg,.png,.pdf"
        type='file'
         className='hidden'
         ref={fileInputRef}
         onChange={handleClick}
         />

        {/* Compact dropzone wrapper */}
        <div className='py-3 px-2 flex flex-col items-center justify-center text-center w-full'>
          <div className='w-7 h-7 rounded-full bg-white border border-gray-100 flex items-center justify-center mb-1 shadow-xs'>
            <img src={upload} alt='Upload icon' className='w-3.5 h-3.5 object-contain' />
          </div>

          <p className='text-[11px] mb-3 font-semibold text-gray-700 leading-tight'>
          Upload your file here {type}
          </p>
          {/*
          <p className='text-[10px] text-gray-400 mt-0.5 mb-2'>
            JPG, PNG or PDF (Max 5MB)
          </p>
            */}

          <button
            type='button'
            onClick={onButtonClick}
            className='px-2.5 py-1 rounded-lg border border-gray-300 bg-white text-[11px] font-semibold text-gray-700 hover:bg-gray-50 transition-colors cursor-pointer shadow-xs'>
            Choose File
          </button>
        </div>
      </div>
    </div>
  )
}

export default UploadPill