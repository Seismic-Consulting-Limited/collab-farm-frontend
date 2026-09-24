import { Link } from 'react-router-dom'
import Dashboard_Header from '../../component/Dashboard/Dashboard_Header'
import LoanStatus from '../../component/Dashboard/LoanStatus'
import Loans from '../../component/Dashboard/Loans'
import BarChart from '../../component/Dashboard/BarChart'
import PieChart from '../../component/Dashboard/PieChart'

const LoansOverview = () => {
  return (
    <div className='flex flex-col gap-5'>
      {/* Breadcrumb Navigation */}
      <nav className='flex items-center gap-2 text-xs font-["Manrope",sans-serif] font-medium text-gray-400'>
        <Link to='/dashboard' className='hover:text-gray-700 transition-colors'>
          Dashboard
        </Link>
        <span>&gt;</span>
        <span className='text-gray-900 font-semibold'>Loans Overview</span>
      </nav>

      {/* Header */}
      <Dashboard_Header
        Greeting='Loans Overview'
        sub='Track and manage all loan applications and repayments'
      />

      {/* Stats Cards */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
        <LoanStatus />
      </div>

      {/* Charts Section */}
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
        <div className='bg-white border border-[#E2E8F0] rounded-2xl p-4 shadow-sm'>
          <Dashboard_Header Name='Loan Distribution' />
          <div className='mt-4'>
            <PieChart />
          </div>
        </div>
        <div className='bg-white border border-[#E2E8F0] rounded-2xl p-4 shadow-sm'>
          <Dashboard_Header Name='Monthly Loan Trends' />
          <div className='mt-4'>
            <BarChart />
          </div>
        </div>
      </div>

      {/* Loans Table */}
      <div className='bg-white border border-[#E2E8F0] rounded-2xl p-4 shadow-sm'>
        <div className='flex items-center justify-between pb-4 border-b border-[#E2E8F0]'>
          <Dashboard_Header Name='Recent Loan Applications' />
        </div>
        <div className='mt-4'>
          <Loans />
        </div>
      </div>
    </div>
  )
}

export default LoansOverview
