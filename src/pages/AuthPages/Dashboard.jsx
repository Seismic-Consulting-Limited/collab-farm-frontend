import React from 'react'
import LoanStatus from '../../component/Dashboard/LoanStatus'
import PieChart from '../../component/Dashboard/PieChart'
import RecentFarmers from '../../component/Dashboard/RecentFarmers'
import Export from '../../assets/Export.svg'
import TF from '../../assets/TF.svg'
import Cash from '../../assets/Cash.svg'
import Active from '../../assets/Active.svg'
import ArrowUp from '../../assets/ArrowUp.svg'
import TopPill from '../../component/Dashboard/TopPill'
import LeftPill from '../../component/Dashboard/LeftPill'
import Dashboard_Header from '../../component/Dashboard/Dashboard_Header'
import Cards from '../../component/Dashboard/Cards'
import BarChart from '../../component/Dashboard/BarChart'
import Buton from '../../component/Dashboard/Buton'
const Dashboard = () => {
  return (
    <div>
        <TopPill/>
    <div className='lg:grid-cols-[240px_1fr] grid grid-cols-1'>
        {/*left column LINKS */}
<LeftPill/>
{/*end of the links */}
      
      {/*right column */}
      <div className='bg-[#F7F7F7] p-4'>
        <div className='mb-5 flex justify-between'>
        <Dashboard_Header Greeting="Good morning," Name="Arnold" sub="Monitor your agricultural investments and discover verified funding opportunities" name2='Export Report' left={Export}/>
        <Buton icon={Export} label='Export Report'/>
        </div>
<div className='flex w-full gap-3'>
<Cards Title='ROI (Return on Investment)' Amount='18.6%' gains='2.4%' up={ArrowUp} className=''/>
<Cards Title='Total Farmers' Amount='150' gains='12' any='+12' another={TF} up={ArrowUp}/>
<Cards Title='Total Loan Amount' Amount='$3.1 Million' gains='2.4%' another={Cash} up={ArrowUp}/>
<Cards Title='Total Active Loans' Amount='120' gains='7' another={Active} up={ArrowUp}/>
</div>
{/*chart */}
<div className='flex gap-3 mt-5'>
    <BarChart/>
    <PieChart/>
</div>
{/* down part */}
<div className='flex gap-2 mt-5'>
    <RecentFarmers/>
    <LoanStatus/>
</div>
      </div>
      {/*end of the right column */}
    </div>
    {/*end of the grid */}
    </div>
  )
}

export default Dashboard
