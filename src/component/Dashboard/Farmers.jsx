import React from 'react'

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

const Farmers = ({ FarmerImg, FarmersName, CropType, Date, Time, Status, Action, what, phone }) => {
    const space = (sub = '') => {
  const str = String(sub)

  // If length is between 5 and 7 digits: e.g. "080312" -> "0803 12"
  if (str.length > 4 && str.length <= 7) {
    return `${str.slice(0, 4)} ${str.slice(4)}`
  }

  // If longer than 7 digits: e.g. "08031234567" -> "0803 123 4567"
  if (str.length > 7) {
    return `${str.slice(0, 4)} ${str.slice(4, 7)} ${str.slice(7)}`
  }

  return str
}
  return (
    <tr className='hover:bg-gray-50/75 transition-colors border-b border-gray-100 last:border-b-0'>
      {/* 1. Farmer Identity */}
      <td className='py-3.5 px-4'>
        <div className='flex items-center gap-3 min-w-0 pr-2'>
          {FarmerImg ? (
            <img
              src={FarmerImg}
              alt={FarmersName}
              className='w-9 h-9 rounded-full object-cover shrink-0'
            />
          ) : (
            <div className='w-9 h-9 rounded-full bg-gray-100 text-gray-700 flex items-center justify-center font-[manrope] text-xs font-semibold shrink-0'>
              {FarmersName?.slice(0, 2).toUpperCase()}
            </div>
          )}
          <span className='inline-block max-w-[85px] truncate font-[manrope] text-sm font-medium text-gray-900'>
            {FarmersName}
          </span>
        </div>
      </td>

      {/* 2. Crop Type */}
      <td className='py-3.5 px-4 font-[manrope] text-sm text-gray-600 capitalize whitespace-nowrap'>
        {CropType}
      </td>
{/*phone number */}
{
    phone && (
        <td className='py-3.5 px-4 font-[manrope] text-sm text-gray-600 capitalize whitespace-nowrap'>
        {space(phone)}
      </td>
    )
}
      {/* 3. Date & Time */}
      <td className='py-3.5 px-4 whitespace-nowrap'>
        <div className='flex flex-col text-xs font-[manrope]'>
          <span className='text-gray-900 font-medium'>{Date}</span>
          <span className='text-gray-400'>{Time}</span>
        </div>
      </td>

      {/* 4. Status Badge */}
      <td className='py-3.5 px-4 whitespace-nowrap'>
        <span
          className={`inline-flex items-center justify-center px-9 py-2 rounded-xl text-xs font-medium font-[manrope] capitalize ${getStatusStyle(
              Status
            )}`}
            >
          {Status}
        </span>
        {what && (
            <button className='inline-flex items-center justify-center border border-gray-500 px-9 py-2 rounded-xl text-xs font-medium font-[manrope] capitalize ml-2'>
            {what}
          </button>
        )}
      </td>

      {/* 5. Action (Menu / Options) */}
      <td className='py-3.5 px-4 text-right whitespace-nowrap'>
        {Action && (
            <button
            type='button'
            onClick={() => alert('MORE')}
            className='text-gray-400 hover:text-gray-700 cursor-pointer inline-flex items-center justify-end'
            >
            <img src={Action} alt='' />
          </button>
        )}
      </td>
        
    </tr>
  )
}

export default Farmers