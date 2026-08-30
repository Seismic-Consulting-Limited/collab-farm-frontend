import React from 'react'

const Backbttn = ({ onClick, className = '' }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full h-[50px] bg-white border border-[hsla(143,32%,28%,1)] text-[hsla(143,32%,28%,1)] rounded-[16px] text-sm font-semibold hover:bg-gray-50 transition-colors duration-200 cursor-pointer flex items-center justify-center ${className}`}
    >
      Back
    </button>
  )
}

export default Backbttn