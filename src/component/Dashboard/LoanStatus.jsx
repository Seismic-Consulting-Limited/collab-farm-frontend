import { getStatusDotColor } from '../../utils/statusStyles'
import RightArrow from '../../assets/RightArrow.svg'

const LoanItem = ({ name = '', amount, icon }) => {
  const dotColor = getStatusDotColor(name)

  return (
    <div className='flex items-center justify-between py-3.5 px-4 sm:px-5 border border-gray-100 rounded-xl bg-white hover:border-gray-200 transition-colors'>
      <div className='flex items-center gap-2.5'>
        {dotColor && (
          <span
            className='w-2.5 h-2.5 rounded-full shrink-0'
            style={{ backgroundColor: dotColor }}
          />
        )}
        <span className='font-[manrope] text-sm font-semibold text-gray-800 leading-tight'>
          {name}
        </span>
      </div>

      <div className='flex items-center gap-3'>
        <span className='font-[manrope] text-sm font-bold text-gray-900'>
          {amount}
        </span>
        <button
          type='button'
          onClick={() => alert(`View details for ${name}`)}
          className='text-gray-400 hover:text-gray-700 transition-colors p-1 cursor-pointer flex items-center justify-center'
          aria-label={`View ${name}`}
        >
          {icon && (
            <img src={icon} alt="" className='w-4 h-4 object-contain' />
          )}
        </button>
      </div>
    </div>
  )
}

const LoanStatus = () => {
  return (
    <div className='flex h-full w-full flex-col justify-between rounded-2xl border border-gray-200 bg-white p-5 sm:p-6'>
      <div className='pb-4'>
        <h3 className='font-[manrope] text-base font-semibold text-gray-900'>
          Recent Investments
        </h3>
      </div>

      <div className='flex flex-col space-y-9'>
        <LoanItem name='Active Loans' amount='156' icon={RightArrow} />
        <LoanItem name='Repaid Loans' amount='70' icon={RightArrow} />
        <LoanItem name='Overdue Loans' amount='40' icon={RightArrow} />
        <LoanItem name='Pending Loans' amount='12' icon={RightArrow} />
      </div>

      <div className='pt-5'>
        <button
          type='button'
          className='w-full rounded-xl border border-gray-200 bg-[#F9FAFB] py-3 text-center text-xs font-[manrope] font-semibold text-gray-800 transition-colors hover:bg-gray-100 cursor-pointer'
        >
          View All Investments
        </button>
      </div>
    </div>
  )
}

export default LoanStatus