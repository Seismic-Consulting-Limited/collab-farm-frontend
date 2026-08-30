import React from 'react'
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
  return (
    <div className='w-full bg-white border border-gray-200 rounded-2xl p-6 box-border'>
      {/* Header section */}
      <div className='flex justify-between items-center pb-5 border-b border-gray-100'>
        <Dashboard_Header Name='Recent Farmers' />
        <Buton label='View All Farmers' />
      </div>

      {/* Table Container */}
      <div className='mt-4 rounded-xl overflow-x-auto border border-gray-100'>
        <table className='w-full text-left table-fixed border-collapse'>
          {/* Table Column Headers with matching fixed widths */}
          <thead>
            <tr className='bg-[#F8FAFC] border-b border-gray-100 text-xs font-semibold text-gray-500 font-[manrope]'>
              <th className='py-3 px-4 w-[28%] font-semibold'>Names</th>
              <th className='py-3 px-4 w-[20%] font-semibold'>Crop Type</th>
              <th className='py-3 px-4 w-[24%] font-semibold'>Date & Time Added</th>
              <th className='py-3 px-4 w-[20%] font-semibold'>Status</th>
              <th className='py-3 px-4 w-[8%] text-right font-semibold'></th>
            </tr>
          </thead>

          {/* Mapped Row List */}
          <tbody className='divide-y divide-gray-100'>
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
  )
}

export default RecentFarmers