import React, { useState } from 'react'

const FarmerCard = ({
  farmerName,
  profileImage,
  status,
  verification,
  number,
  eye,
  phoneNumber,
  cropType,
  farmSize,
  location,
  dateAdded,
  verificationStatus,
}) => {
  const [showNin, setShowNin] = useState(false)

  const formatNin = (nin) => {
    if (!nin) return ''
    const str = String(nin)
    if (str.length <= 4) return '•'.repeat(str.length)
    return '•'.repeat(str.length - 4) + str.slice(-4)
  }

  return (
    <div className='border border-gray-200 rounded-xl p-6 bg-white w-full '>
      <div className='flex items-center gap-8'>
        {/* Left Section: Avatar + Identity */}
        <div className='flex items-center gap-4 pr-8 border-r border-gray-200 shrink-0'>
          <img
            src={profileImage}
            alt={farmerName}
            className='w-16 h-16 rounded-full object-cover'
          />

          <div className='space-y-1.5'>
            <h1 className='text-base font-semibold text-gray-900'>{farmerName}</h1>

            <div className='inline-flex items-center gap-1 px-2 py-0.5 border rounded-full text-xs font-medium text-emerald-700 border-emerald-200 bg-emerald-50'>
              <img src={status} alt="" className='w-3.5 h-3.5' />
              <span>{verification}</span>
            </div>

            <div className='flex items-center gap-1.5 text-xs text-gray-500'>
              <span className='font-medium text-gray-700'>NIN:</span>
              <span>{showNin ? number : formatNin(number)}</span>
              <button
                type="button"
                onClick={() => setShowNin((prev) => !prev)}
                className='cursor-pointer focus:outline-none ml-1'
                title={showNin ? "Hide NIN" : "Show NIN"}
              >
                <img src={eye} alt="toggle nin" className='w-3.5 h-3.5 opacity-70 hover:opacity-100' />
              </button>
            </div>
          </div>
        </div>

        {/* Right Section: Details Grid with Dividers */}
        <div className='grid grid-cols-3 flex-1 divide-x divide-gray-200'>
          {/* Column 1 */}
          <div className='pl-3 space-y-4'>
            <div>
              <p className='text-xs font-medium text-gray-400'>Phone Number</p>
              <p className='text-sm font-medium text-gray-800 mt-1'>{phoneNumber || '08051245789'}</p>
            </div>
            <div className='pt-3 border-t border-gray-100'>
              <p className='text-xs font-medium text-gray-400'>Location</p>
              <p className='text-sm font-medium text-gray-800 mt-1'>{location || 'Kaduna, Nigeria'}</p>
            </div>
          </div>

          {/* Column 2 */}
          <div className='pl-1 space-y-4'>
            <div>
              <p className='text-xs font-medium text-gray-400'>Crop Type</p>
              <p className='text-sm font-medium text-gray-800 mt-1'>{cropType || 'Maize'}</p>
            </div>
            <div className='pt-3 border-t border-gray-100'>
              <p className='text-xs font-medium text-gray-400'>Date Added</p>
              <p className='text-sm font-medium text-gray-800 mt-1'>{dateAdded || '26/03/2026'}</p>
            </div>
          </div>

          {/* Column 3 */}
          <div className='pl-1 space-y-4'>
            <div>
              <p className='text-xs font-medium text-gray-400'>Farm Size</p>
              <p className='text-sm font-medium text-gray-800 mt-1'>{farmSize || '5000 Hctr'}</p>
            </div>
            <div className='pt-3 border-t border-gray-100'>
              <p className='text-xs font-medium text-gray-400'>Verification Status</p>
              <p className='text-sm font-medium text-gray-800 mt-1'>{verificationStatus || 'Verified'}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FarmerCard