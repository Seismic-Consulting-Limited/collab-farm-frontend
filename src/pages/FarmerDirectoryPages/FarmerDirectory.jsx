import React from 'react'
import { useNavigate } from 'react-router-dom'
import Dashboard_Header from '../../component/Dashboard/Dashboard_Header'
import Buton from '../../component/Dashboard/Buton'
import LongPile from '../../component/FarmerDirectory/LongPile'
import AllFarmers from '../../component/FarmerDirectory/AllFarmers'
import Pagination from '../../component/FarmerDirectory/Pagination'
import Export from '../../assets/Export.svg'
import Add from '../../assets/Add.svg'

const FarmerDirectory = () => {
  const navigate = useNavigate()

  return (
    <div className='flex flex-col gap-5'>
      {/* Breadcrumb */}
      <nav className='flex items-center gap-2 text-xs font-["Manrope",sans-serif] font-medium text-gray-900'>
        <span>Farmer Directory</span>
      </nav>

      {/* Header & Action Buttons */}
      <div className='lg:flex lg:justify-between lg:items-center'>
        <Dashboard_Header
          Greeting='Farmers'
          sub='Manage all farmers in your cooperative.'
        />
        <div className='flex items-center justify-center lg:flex lg:items-center lg:justify-center gap-2 mt-3'>
          <Buton label='Export' icon={Export} />
          <Buton
            label='Add Farmer'
            icon={Add}
            variant='primary'
            onClick={() => navigate('/directory/add')}
          />
        </div>
      </div>

      {/* Summary Cards */}
      <LongPile />

      {/* Farmers Table */}
      <AllFarmers />

      {/* Pagination Footer */}
      <div className='flex justify-center mt-2'>
        <Pagination />
      </div>
    </div>
  )
}

export default FarmerDirectory