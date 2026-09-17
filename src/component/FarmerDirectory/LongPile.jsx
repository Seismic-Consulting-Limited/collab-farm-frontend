import React from 'react'
import BasicsFarmers from './BasicsFarmers'
import Total_FF from '../../assets/Total_FF.svg'
import Verified from '../../assets/Verified.svg'
import Pending from '../../assets/Pending.svg'
import Removed from '../../assets/Removed.svg'

const LongPile = () => {
  const pile = [
    { id: 'total', name: 'Total Farmers', num: '188', icon: Total_FF },
    { id: 'verified', name: 'Verified Farmers', num: '138', icon: Verified },
    { id: 'pending', name: 'Pending Verification', num: '32', icon: Pending },
    { id: 'removed', name: 'Removed Farmers', num: '18', icon: Removed },
  ]

  return (
    <div className="w-full bg-white flex flex-col sm:flex-row items-stretch border border-[hsla(143,32%,57%,1)] p-3 sm:p-5 rounded-2xl box-border">
      {pile.map((item, index) => (
        <div
          key={item.id}
          className={`flex-1 flex items-center justify-start sm:justify-center
            /* Small screens: horizontal line with margins */
            ${index !== 0 ? 'border-t border-gray-200 mt-3 pt-3 mx-2 sm:mt-0 sm:pt-0 sm:mx-0' : ''}
            /* Large screens: vertical line with inset spacing */
            ${index !== 0 ? 'sm:border-t-0 sm:border-l sm:border-gray-200 sm:pl-5 sm:my-1' : ''}
          `}
        >
          <BasicsFarmers name={item.name} num={item.num} icon={item.icon} />
        </div>
      ))}
    </div>
  )
}

export default LongPile