import React from 'react'
import { useNavigate } from 'react-router-dom'
import Dashboard_Header from './Dashboard_Header'
import Buton from './Buton'
import Farmers from './Farmers'
import More from '../../assets/More.svg'

const farmersData = [
  {
    id: 1,
    FarmersName: 'Bruce Banner',
    CropType: 'Maize',
    Date: '27th Aug, 2025',
    Time: '09:30 AM',
    Status: 'Verified',
  },
  {
    id: 2,
    FarmersName: 'Natasha Romanoff',
    CropType: 'Yam',
    Date: '27th Aug, 2025',
    Time: '09:30 AM',
    Status: 'Verified',
  },
  {
    id: 3,
    FarmersName: 'Stephen Strange',
    CropType: 'Groundnut',
    Date: '27th Aug, 2025',
    Time: '09:30 AM',
    Status: 'Pending',
  },
  {
    id: 4,
    FarmersName: 'Clint Barton',
    CropType: 'Spinach',
    Date: '27th Aug, 2025',
    Time: '09:30 AM',
    Status: 'Removed',
  },
  {
    id: 5,
    FarmersName: 'Clint Barton',
    CropType: 'Potatoes',
    Date: '27th Aug, 2025',
    Time: '09:30 AM',
    Status: 'Verified',
  },
]

const RecentFarmers = () => {
    const navigate = useNavigate()
  
  return (
    <div className='w-full bg-white border border-[#E2E8F0] rounded-2xl p-4 sm:p-6 shadow-sm box-border'>
      {/* Header section */}
      <div className='flex items-center justify-between pb-4 border-b border-[#E2E8F0]'>
        <Dashboard_Header Name='Recent Farmers' />
        <Buton label='View All Farmers' 
                    onClick={() => navigate('/directory')}
 />
      </div>

      {/* Table Container with safe responsive overflow */}
      <div className='overflow-x-auto mt-2'>
        <div className='inline-block min-w-full align-middle'>
          <table className='min-w-[650px] w-full table-fixed border-collapse text-left'>
            <thead>
              <tr className='bg-[#F8FAFC] border-b border-[#E2E8F0] text-xs font-semibold text-gray-500 font-[manrope]'>
                <th className='py-3.5 px-4 w-[36%]'>Farmer</th>
                <th className='py-3.5 px-4 w-[20%]'>Crop Type</th>
                <th className='py-3.5 px-4 w-[24%]'>Date & Time Added</th>
                <th className='py-3.5 px-4 w-[14%]'>Status</th>
                <th className='py-3.5 px-3 w-[8%] text-center'></th>
              </tr>
            </thead>

            <tbody className='divide-y divide-[#E2E8F0] bg-white'>
              {farmersData.map((farmer) => (
                <Farmers
                  key={farmer.id}
                  FarmersName={farmer.FarmersName}
                  CropType={farmer.CropType}
                  Date={farmer.Date}
                  Time={farmer.Time}
                  Status={farmer.Status}
                  Action={More}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default RecentFarmers