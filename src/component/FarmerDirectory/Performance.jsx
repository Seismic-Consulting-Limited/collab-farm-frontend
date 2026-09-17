import React from 'react'
import Loans from '../Dashboard/Loans'
import RightArrow from '../../assets/RightArrow.svg'

const Performance = () => {
  return (
    <div className='flex h-full w-full flex-col justify-between rounded-2xl border border-gray-200 bg-white p-5 sm:p-6'>
      <div className='pb-4'>
        <h3 className='font-[manrope] text-base font-semibold text-gray-900'>
Performance Summary
        </h3>
      </div>

      <div className='flex flex-col space-y-4'>
        <Loans name='Total Loans Taken' amount='156' icon={RightArrow} />
        <Loans name='Repaid Loans' amount='70' icon={RightArrow} />
        <Loans name='Overdue Loans' amount='40' icon={RightArrow} />
        <Loans name='Pending Loans' amount='12' icon={RightArrow} />
      </div>

      <div className='pt-5'>
        <button
          type='button'
          className='w-full rounded-xl border border-gray-200 bg-[#F9FAFB] py-3 text-center text-xs font-[manrope] font-semibold text-gray-800 transition-colors hover:bg-gray-100 cursor-pointer'
        >
View Full Performance Report
        </button>
      </div>
    </div>
  )
}

export default Performance