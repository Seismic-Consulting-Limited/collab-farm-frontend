import React from 'react'

const TableHead = ({first,second,third,four,five,six,seven}) => {
  return (
        <thead>
              <tr className='bg-[#F8FAFC] border-b border-[#E2E8F0] text-xs font-semibold text-gray-500 font-[manrope]'>
                <th className='py-3.5 px-4 w-[24%]'>{first}</th>
                <th className='py-3.5 px-4 w-[16%]'>{second}</th>
                <th className='py-3.5 px-4 w-[16%]'>{third}</th>
                <th className='py-3.5 px-4 w-[18%]'>{four}</th>
                <th className='py-3.5 px-4 w-[14%]'>{five}</th>
                <th className='py-3.5 px-4 w-[8%] text-center'>{six}</th>
                <th className='py-3.5 px-3 w-[6%] text-right'>{seven}</th>
              </tr>
            </thead>

  )
}

export default TableHead
