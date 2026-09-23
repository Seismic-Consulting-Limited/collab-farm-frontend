import { useState, useEffect } from 'react'
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
import { getDashboardOverview } from '../../services/dashboard'

const Dashboard = () => {
  const [overviewData, setOverviewData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const data = await getDashboardOverview()
        console.log('Dashboard API response:', data)
        setOverviewData(data)
        setErrorMessage('')
      } catch (error) {
        console.error('Dashboard API error:', error)
        setErrorMessage(error.message || 'Failed to load dashboard data')
      } finally {
        setIsLoading(false)
      }
    }

    fetchDashboardData()
  }, [])

  return (
    <div className='min-h-[calc(100vh-72px)] w-full overflow-x-hidden'>
      {isLoading ? (
        <div className='flex items-center justify-center h-64'>
          <div className='text-gray-500'>Loading dashboard data...</div>
        </div>
      ) : errorMessage ? (
        <div className='flex items-center justify-center h-64'>
          <div className='bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl'>
            {errorMessage}
          </div>
        </div>
      ) : (
        <div>
          <div className='mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between'>
            <Dashboard_Header
              Greeting='Good morning,'
              Name={overviewData?.greeting_name || ''}
              sub='Monitor your agricultural investments and discover verified funding opportunities'
              name2='Export Report'
              left={Export}
            />
            <Buton icon={Export} label='Export Report' />
          </div>

          <div className='grid w-full grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-4'>
            <Cards
              Title='ROI (Return on Investment)'
              Amount={overviewData?.kpis?.total_funding_received?.value || ''}
              gains={overviewData?.kpis?.total_funding_received?.change || ''}
              up={ArrowUp}
              className=''
            />
            <Cards
              Title='Total Farmers'
              Amount={overviewData?.kpis?.total_farmers?.value || ''}
              gains={overviewData?.kpis?.total_farmers?.change || ''}
              any={overviewData?.kpis?.total_farmers?.change ? `+${overviewData.kpis.total_farmers.change}` : ''}
              another={TF}
              up={ArrowUp}
            />
            <Cards
              Title='Total Loan Amount'
              Amount={overviewData?.kpis?.total_funding_received?.value || ''}
              gains={overviewData?.kpis?.total_funding_received?.change || ''}
              another={Cash}
              up={ArrowUp}
            />
            <Cards
              Title='Total Active Loans'
              Amount={overviewData?.investment_summary?.active || ''}
              gains={overviewData?.investment_summary?.active_change || ''}
              another={Active}
              up={ArrowUp}
            />
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
      )}
    </div>
  )
}

export default Dashboard
