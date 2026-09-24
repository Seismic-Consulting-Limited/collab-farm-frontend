import { Link, useNavigate, useParams } from 'react-router-dom'
import Dashboard_Header from '../../component/Dashboard/Dashboard_Header'
import Buton from '../../component/Dashboard/Buton'
import SaveIcon from '../../assets/SaveIcon.svg'
import PersonalInfo from '../../component/FarmerDirectory/PersonalInfo'
import AdditionalInfo from '../../component/FarmerDirectory/AdditionalInfo'
import LocationInfo from '../../component/FarmerDirectory/LocationInfo'

const EditFarmer = () => {
  const navigate = useNavigate()
  const { farmerId } = useParams()

  return (
    <div className='flex flex-col gap-5'>
      {/* Breadcrumb Navigation */}
      <nav className='flex items-center gap-2 text-xs font-["Manrope",sans-serif] font-medium text-gray-400'>
        <Link to='/directory' className='hover:text-gray-700 transition-colors'>
          Farmer Directory
        </Link>
        <span>&gt;</span>
        <Link to={`/directory/${farmerId}`} className='hover:text-gray-700 transition-colors'>
          Farmer Details
        </Link>
        <span>&gt;</span>
        <span className='text-gray-900 font-semibold'>Edit Farmer</span>
      </nav>

      {/* Header */}
      <div className='lg:flex lg:justify-between lg:items-center'>
        <Dashboard_Header
          Greeting='Edit Farmer'
          sub='Update the farmers details on the platform'
        />
        <div className='lg:flex gap-2 flex items-center justify-center mt-3'>
          <Buton label='Cancel' onClick={() => navigate(`/directory/${farmerId}`)}/>
          <Buton label='Save Changes' icon={SaveIcon} variant='primary'/>
        </div>
      </div>

      {/* Form Card */}
      <PersonalInfo />
      <LocationInfo />
      <AdditionalInfo />
    </div>
  )
}

export default EditFarmer
