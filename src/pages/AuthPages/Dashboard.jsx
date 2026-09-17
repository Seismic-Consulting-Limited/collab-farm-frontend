import React from 'react'
import LoanStatus from '../../component/Dashboard/LoanStatus'
import PieChart from '../../component/Dashboard/PieChart'
import RecentFarmers from '../../component/Dashboard/RecentFarmers'
import Export from '../../assets/Export.svg'
import TF from '../../assets/TF.svg'
import Cash from '../../assets/Cash.svg'
import Active from '../../assets/Active.svg'
import ArrowUp from '../../assets/ArrowUp.svg'
import Dashboard_Header from '../../component/Dashboard/Dashboard_Header'
import Cards from '../../component/Dashboard/Cards'
import BarChart from '../../component/Dashboard/BarChart'
import Buton from '../../component/Dashboard/Buton'
const Dashboard = () => {
  return (
    <div className='min-h-[calc(100vh-72px)] w-full overflow-x-hidden'>
      <div>
        <div className='mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between'>
          <Dashboard_Header
            Greeting='Good morning,'
            Name='Arnold'
            sub='Monitor your agricultural investments and discover verified funding opportunities'
            name2='Export Report'
            left={Export}
          />
          <Buton icon={Export} label='Export Report' />
        </div>

        <div className='grid w-full grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-4'>
          <Cards Title='ROI (Return on Investment)' Amount='18.6%' gains='2.4%' up={ArrowUp} className='' />
          <Cards Title='Total Farmers' Amount='150' gains='12' any='+12' another={TF} up={ArrowUp} />
          <Cards Title='Total Loan Amount' Amount='$3.1 Million' gains='2.4%' another={Cash} up={ArrowUp} />
          <Cards Title='Total Active Loans' Amount='120' gains='7' another={Active} up={ArrowUp} />
        </div>

        <div className='mt-5 grid grid-cols-1 gap-3 xl:grid-cols-[minmax(0,3fr)_minmax(320px,2fr)]'>
          <div className='min-w-0'>
            <BarChart />
          </div>
          <div className='min-w-0'>
            <PieChart />
          </div>
        </div>

        <div className='mt-5 grid grid-cols-1 items-stretch gap-3 xl:grid-cols-[minmax(0,1.6fr)_minmax(320px,1fr)]'>
          <div className='min-w-0'>
            <RecentFarmers />
          </div>
          <div className='min-w-0'>
            <LoanStatus />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
