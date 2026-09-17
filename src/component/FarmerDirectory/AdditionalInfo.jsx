import React from 'react'
import Location2 from '../../assets/Location2.svg'

const AdditionalInfo = () => {
  return (
    <div className='w-full bg-white border border-gray-200 rounded-2xl p-6 box-border font-["Manrope",sans-serif]'>
      {/* Header section */}
      <div className='flex items-center gap-2.5 pb-4 border-b border-gray-100'>
        <img src={Location2} alt='' className='w-5 h-5 object-contain' />
        <h2 className='text-base font-semibold text-gray-900'>
          Additional Information
        </h2>
      </div>

      <div className='mt-4'>
        <label htmlFor='ifo' className="block text-xs font-normal text-[hsla(0,0%,19%,1)] mb-1.5">
          Notes (Optional)
        </label>
        <div className="relative">
          <textarea
            id='ifo'
            rows={4}
            placeholder='Any additional notes about this farmer'
className="w-full h-[100px] resize-none rounded-2xl py-3 px-4 text-[14px] text-[hsla(0,0%,75%,1)] placeholder:text-[hsla(0,0%,75%,1)] border-[0.5px] border-[hsla(0,0%,64%,1)] focus:outline-none focus:ring-1 focus:ring-[hsla(143,32%,28%,1)]"
/>
        </div>
      </div>
    </div>
  )
}

export default AdditionalInfo