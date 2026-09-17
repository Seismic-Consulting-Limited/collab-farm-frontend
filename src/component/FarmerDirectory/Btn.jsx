import React from 'react'

const Btn = ({some,icon}) => {
  return (
    <div>
      <button className='flex items-center gap-2 px-5 py-2.5 border border-gray-500 rounded-xl font-["Manrope",sans-serif] text-xs font-semibold cursor-pointer transition-all duration-150 shrink-0 whitespace-nowrap' onClick={()=> alert('yeh')}>
        <span>{some}</span>
        <img src={icon} alt="" />
      </button>
    </div>
  )
}

export default Btn
