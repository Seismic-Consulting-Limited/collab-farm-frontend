import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
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
          <motion.div
            className='flex flex-col items-center gap-3'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <motion.div
              className='w-10 h-10 border-4 border-gray-200 border-t-[hsla(143,32%,28%,1)] rounded-full'
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
            />
            <div className='text-gray-500'>Loading dashboard data...</div>
          </motion.div>
        </div>
      ) : errorMessage ? (
        <div className='flex items-center justify-center h-64'>
          <motion.div
            className='bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl'
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {errorMessage}
          </motion.div>
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <motion.div
            className='mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between'
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Dashboard_Header
              Greeting='Good morning,'
              Name={overviewData?.greeting_name || ''}
              sub='Monitor your agricultural investments and discover verified funding opportunities'
              name2='Export Report'
              left={Export}
            />
            <Buton icon={Export} label='Export Report' />
          </motion.div>

          <motion.div
            className='grid w-full grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-4'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
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
          </motion.div>

        <motion.div
          className='mt-5 grid grid-cols-1 gap-3 xl:grid-cols-[minmax(0,3fr)_minmax(320px,2fr)]'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className='min-w-0'>
            <BarChart />
          </div>
          <div className='min-w-0'>
            <PieChart />
          </div>
        </motion.div>

        <motion.div
          className='mt-5 grid grid-cols-1 items-stretch gap-3 xl:grid-cols-[minmax(0,1.6fr)_minmax(320px,1fr)]'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className='min-w-0'>
            <RecentFarmers />
          </div>
          <div className='min-w-0'>
            <LoanStatus />
          </div>
        </motion.div>
        </motion.div>
      )}
    </div>
  )
}

export default Dashboard
