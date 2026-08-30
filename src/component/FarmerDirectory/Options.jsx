import React from 'react'

const Options = ({ icon, number, isActive, onClick, disabled }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`flex items-center justify-center min-w-[36px] h-9 px-3 rounded-full border transition-all duration-150 text-sm font-medium ${
        disabled
          ? 'border-gray-200 text-gray-300 cursor-not-allowed opacity-50'
          : isActive
          ? 'bg-[hsla(143,32%,28%,1)] text-white border-transparent'
          : 'border-[hsla(0,0%,19%,1)] text-gray-800 bg-transparent hover:bg-gray-100 cursor-pointer'
      }`}
    >
      {number && <span>{number}</span>}
      {icon && <img src={icon} alt="" className="w-4 h-4 object-contain" />}
    </button>
  )
}

export default Options