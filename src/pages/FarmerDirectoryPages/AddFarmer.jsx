import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Dashboard_Header from '../../component/Dashboard/Dashboard_Header'
import Buton from '../../component/Dashboard/Buton'
import SaveIcon from '../../assets/SaveIcon.svg'
import PersonalInfo from '../../component/FarmerDirectory/PersonalInfo'
import AdditionalInfo from '../../component/FarmerDirectory/AdditionalInfo'
import LocationInfo from '../../component/FarmerDirectory/LocationInfo'
const AddFarmer = () => {
  
  const navigate = useNavigate()

  return (
    <div className='flex flex-col gap-5'>
      {/* Breadcrumb Navigation */}
      <nav className='flex items-center gap-2 text-xs font-["Manrope",sans-serif] font-medium text-gray-400'>
        <Link to='/directory' className='hover:text-gray-700 transition-colors'>
          Farmer Directory
        </Link>
        <span>&gt;</span>
        <span className='text-gray-900 font-semibold'>Add Farmer</span>
      </nav>

      {/* Header */}
      <div className='lg:flex lg:justify-between lg:items-center'>
        <Dashboard_Header
          Greeting='Add Farmer'
          sub='Enter the farmers details to register them on the platform'
        />
        <div className='lg:flex gap-2 flex items-center justify-center mt-3'>
        <Buton label='Cancel' onClick={() => navigate('/directory')}/>
        <Buton label='Save Farmer' icon={SaveIcon} variant='primary'/>
        </div>
      </div>

      {/* Form Card */}
      <PersonalInfo/>
      <LocationInfo/>
      <AdditionalInfo/>
    </div>
  )
}

export default AddFarmer