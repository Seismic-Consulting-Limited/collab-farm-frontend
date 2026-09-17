import React from 'react'
import { useNavigate } from 'react-router-dom'

const getStatusStyle = (status = '') => {
  switch (status.toLowerCase()) {
    case 'verified':
      return 'bg-[#EBF7F5] text-[#134E48] border border-[#9EE2D8]'
    case 'pending':
      return 'bg-[#FFF6ED] text-[#C4320A] border border-[#FECDCA]'
    case 'removed':
      return 'bg-[#FEF3F2] text-[#B42318] border border-[#FECDCA]'
    default:
      return 'bg-gray-100 text-gray-700 border border-gray-200'
  }
}

const Farmers = ({ 
  id,
  FarmerImg, 
  FarmersName, 
  CropType, 
  Date, 
  Time, 
  Status, 
  Action, 
  what, 
  phone, 
}) => {
  const space = (sub = '') => {
    const str = String(sub)
    if (str.length > 4 && str.length <= 7) return `${str.slice(0, 4)} ${str.slice(4)}`
    if (str.length > 7) return `${str.slice(0, 4)} ${str.slice(4, 7)} ${str.slice(7)}`
    return str
  }
 
 const navigate = useNavigate()

  return (
    <tr className='hover:bg-gray-50/75 transition-colors border-b border-[#E2E8F0] last:border-b-0'>
      {/* 1. Farmer Identity */}
      <td className='py-3.5 px-4'>
        <div className='flex items-center gap-3 min-w-0'>
          {FarmerImg ? (
            <img
              src={FarmerImg}
              alt={FarmersName}
              className='w-9 h-9 rounded-full object-cover shrink-0'
            />
          ) : (
            <div className='w-9 h-9 rounded-full bg-[#F1F5F9] text-gray-700 flex items-center justify-center font-[manrope] text-xs font-semibold shrink-0'>
              {FarmersName?.slice(0, 2).toUpperCase()}
            </div>
          )}
          <span className='truncate font-[manrope] text-sm font-medium text-gray-900'>
            {FarmersName}
          </span>
        </div>
      </td>

      {/* 2. Crop Type */}
      <td className='py-3.5 px-4 font-[manrope] text-sm text-gray-600 capitalize whitespace-nowrap'>
        {CropType}
      </td>

      {/* 3. Phone Number (Only rendered when hasPhone is true) */}
      {phone && (
        <td className='py-3.5 px-4 font-[manrope] text-sm text-gray-600 whitespace-nowrap'>
          {phone ? space(phone) : '—'}
        </td>
      )}

      {/* 4. Date & Time */}
      <td className='py-3.5 px-4 whitespace-nowrap'>
        <div className='flex flex-col text-xs font-[manrope] leading-tight'>
          <span className='text-gray-900 font-medium'>{Date}</span>
          <span className='text-gray-400 mt-0.5'>{Time}</span>
        </div>
      </td>

      {/* 5. Status Badge */}
      <td className='py-3.5 px-4 whitespace-nowrap'>
        <span
          className={`inline-flex items-center justify-center px-3 py-1 rounded-full text-xs font-medium font-[manrope] capitalize ${getStatusStyle(
            Status
          )}`}
        >
          {Status}
        </span>
      </td>

      {/* 6. Action Button (Only rendered if what is provided) */}
      {Boolean(what) && (
        <td className='py-3.5 px-4 text-center whitespace-nowrap'>
          <button
            type='button'
            onClick={() => navigate(`/directory/${id}`)}
            className='inline-flex items-center justify-center border border-[#CBD5E1] bg-white hover:bg-gray-50 px-3.5 py-1 rounded-lg text-xs font-medium font-[manrope] text-gray-700 shadow-sm transition-colors'
          >
            {what}
          </button>
        </td>
      )}

      {/* 7. Dedicated More Column */}
      <td className='py-3.5 px-4 text-right whitespace-nowrap'>
        {Action && (
          <button
            type='button'
            onClick={() => alert(`More options for ${FarmersName}`)}
            className='p-1 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded transition-colors inline-flex items-center justify-center'
            aria-label='More options'
          >
            <img 
              src={Action} 
              alt='More' 
              className='w-5 h-5 min-w-[20px] min-h-[20px] object-contain block shrink-0' 
            />
          </button>
        )}
      </td>
    </tr>
  )
}

export default Farmers