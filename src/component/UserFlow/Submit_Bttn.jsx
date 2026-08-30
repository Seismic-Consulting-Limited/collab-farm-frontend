import React from 'react'

export const Submit_Bttn = ({tag, className}) => {
  return (
    <div>
         <button type="submit" className={`w-full h-[50px] bg-[hsla(143,32%,28%,1)] text-white rounded-[16px] text-sm font-semibold hover:bg-[hsla(143,32%,20%,1)] transition-colors duration-200 mt-2 cursor-pointer ${className}`}>
              {tag}
     </button>
    </div>
  )
}
