import React, { useState } from 'react'
import Poultry from '../../assets/Poultry.svg'
import Mixed from '../../assets/Mixed.svg'
import LiveStock from '../../assets/LiveStock.svg'
import Aqua from '../../assets/Aqua.svg'
import Crops from '../../assets/Crops.svg'

const categories = [
  { id: 'crops', label: 'Crop Farming', icon: Crops },
  { id: 'aqua', label: 'Aquaculture', icon: Aqua },
  { id: 'mixed', label: 'Mixed Farming', icon: Mixed },
  { id: 'livestock', label: 'Livestock', icon: LiveStock },
  { id: 'poultry', label: 'Poultry', icon: Poultry },
]

const FilterClick = () => {
  const [selected, setSelected] = useState('crops')

  return (
    <div className='w-full border border-gray-200 rounded-[24px] p-6 bg-white overflow-visible h-auto'>
      {/* Step Header */}
      <div className='flex items-center gap-2.5 mb-5'>
        <span className='w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center font-[manrope] text-xs font-semibold text-gray-700 shrink-0'>
          01
        </span>
        <h3 className='font-[manrope] text-base font-semibold text-gray-900'>
          Personal Information
        </h3>
      </div>

      {/* Options Wrap (No clipping, natural height) */}
      <div className='flex flex-wrap items-center gap-3 w-full overflow-visible'>
        {categories.map((item) => {
          const isSelected = selected === item.id

          return (
            <button
              key={item.id}
              type='button'
              onClick={() => setSelected(item.id)}
              className={`flex items-center gap-2.5 px-5 py-3 rounded-2xl border transition-all duration-150 cursor-pointer shrink-0 ${
                isSelected
                  ? 'bg-[#EBF7F5] border-[#9EE2D8] text-[#134E48]'
                  : 'bg-white border-gray-200 text-gray-700 hover:border-gray-300'
              }`}
            >
              <img
                src={item.icon}
                alt={item.label}
                className='w-5 h-5 object-contain shrink-0'
              />
              <span className='font-[manrope] text-sm font-medium whitespace-nowrap'>
                {item.label}
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default FilterClick