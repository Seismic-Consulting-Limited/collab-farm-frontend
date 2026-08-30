import React from 'react'
import Loans from './Loans'
import RightArrow from '../../assets/RightArrow.svg'

const LoanStatus = () => {
  return (
    <div className='w-1/2 bg-white border border-gray-200 rounded-2xl p-6 box-border flex flex-col justify-between'>
      {/* Header */}
      <div className='pb-4'>
        <h3 className='font-[manrope] text-base font-semibold text-gray-900'>
          Loan Status Overview
        </h3>
      </div>

      {/* Loans List */}
      <div className='flex flex-col'>
        <Loans
          name='Active Loans'
          sub='Currently ongoing'
          amount='156'
          icon={RightArrow}
        />
          <Loans
            name='Repaid Loans'
            sub='Paid'
            amount='70'
            icon={RightArrow}
          />
        <Loans
          name='Overdue Loans'
          sub='Past payment date'
          amount='40'
          icon={RightArrow}
        />
        <Loans
          name='Pending Loans'
          sub='Yet to be approved'
          amount='12'
          icon={RightArrow}
        />
      </div>

      {/* Bottom Action Button */}
      <div className='pt-4'>
        <button
          type='button'
          className='w-full py-3 rounded-xl border border-gray-200 text-xs font-[manrope] font-semibold text-gray-800 bg-[#F9FAFB] hover:bg-gray-100 transition-colors cursor-pointer text-center'
        >
          View All Loans
        </button>
      </div>
    </div>
  )
}

export default LoanStatus