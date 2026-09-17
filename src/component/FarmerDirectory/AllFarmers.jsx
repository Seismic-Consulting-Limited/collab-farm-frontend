import React from 'react'
import TableHead from './TableHead'
import Farmers from '../Dashboard/Farmers'
import Search from '../../assets/Search.svg'
import ArrowDown from '../../assets/ArrowDown.svg'
import Btn from './Btn'
import More from '../../assets/More.svg'

const farmersData = [
  {
    id: 1,
    FarmersName: 'Bruce Banner',
    CropType: 'Maize',
    phone: '08123456789',
    Date: '27th Aug, 2025',
    Time: '09:30 AM',
    Status: 'Verified',
    what: 'View',
  },
  {
    id: 2,
    FarmersName: 'Natasha Romanoff',
    CropType: 'Yam',
    phone: '08123456789',
    Date: '27th Aug, 2025',
    Time: '09:30 AM',
    Status: 'Verified',
    what: 'View',
  },
  {
    id: 3,
    FarmersName: 'Stephen Strange',
    CropType: 'Groundnut',
    phone: '08123456789',
    Date: '27th Aug, 2025',
    Time: '09:30 AM',
    Status: 'Pending',
    what: 'View',
  },
  {
    id: 4,
    FarmersName: 'Clint Barton',
    CropType: 'Spinach',
    phone: '08123456789',
    Date: '27th Aug, 2025',
    Time: '09:30 AM',
    Status: 'Removed',
    what: 'View',
  },
  {
    id: 5,
    FarmersName: 'Clint Barton',
    CropType: 'Potatoes',
    phone: '08123456789',
    Date: '27th Aug, 2025',
    Time: '09:30 AM',
    Status: 'Verified',
    what: 'View',
  },
  {
    id: 6,
    FarmersName: 'Clint Barton',
    CropType: 'Potatoes',
    phone: '08123456789',
    Date: '27th Aug, 2025',
    Time: '09:30 AM',
    Status: 'Verified',
    what: 'View',
  },
  {
    id: 7,
    FarmersName: 'Clint Barton',
    CropType: 'Potatoes',
    phone: '08123456789',
    Date: '27th Aug, 2025',
    Time: '09:30 AM',
    Status: 'Verified',
    what: 'View',
  },
  {
    id: 8,
    FarmersName: 'Clint Barton',
    CropType: 'Potatoes',
    phone: '08123456789',
    Date: '27th Aug, 2025',
    Time: '09:30 AM',
    Status: 'Verified',
    what: 'View',
  },
  {
    id: 9,
    FarmersName: 'Clint Barton',
    CropType: 'Potatoes',
    phone: '08123456789',
    Date: '27th Aug, 2025',
    Time: '09:30 AM',
    Status: 'Verified',
    what: 'View',
  },
  {
    id: 10,
    FarmersName: 'Clint Barton',
    CropType: 'Potatoes',
    phone: '08123456789',
    Date: '27th Aug, 2025',
    Time: '09:30 AM',
    Status: 'Verified',
    what: 'View',
  },
  {
    id: 11,
    FarmersName: 'Clint Barton',
    CropType: 'Potatoes',
    phone: '08123456789',
    Date: '27th Aug, 2025',
    Time: '09:30 AM',
    Status: 'Verified',
    what: 'View',
  },
]

const sm = [
  { id: 1, some: 'All Crop Types' },
  { id: 2, some: 'All Status' },
  { id: 3, some: 'Date Added' },
]

const AllFarmers = () => {
  return (
    <div className='w-full bg-white border border-[#E2E8F0] rounded-2xl p-4 sm:p-6 mt-6 shadow-sm'>
      {/* Filters Bar: Search & Action Buttons */}
      <div className='flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between'>
        <div className='flex items-center justify-between w-full lg:max-w-[400px] h-10 px-4 bg-[#F8FAFC] border border-[#E2E8F0] rounded-full focus-within:border-emerald-600 transition-colors'>
          <input
            type='text'
            placeholder='Search by name, NIN, phone or crop...'
            className='w-full bg-transparent outline-none text-sm text-gray-700 placeholder:text-gray-400 font-[manrope]'
          />
          <img src={Search} alt='Search' className='w-4 h-4 ml-2 shrink-0 opacity-60' />
        </div>

        <div className='flex items-center gap-2 sm:gap-3'>
          {sm.map((item) => (
            <Btn key={item.id} some={item.some} icon={ArrowDown} />
          ))}
        </div>
      </div>

      <div className='border-b border-[#E2E8F0] my-5' />

      {/* Table Container - Removed side borders (border-x-0) */}
      <div className='overflow-x-auto'>
        <div className='inline-block min-w-full align-middle'>
          <table className='min-w-[950px] w-full table-fixed border-collapse text-left'>
          <TableHead first='Farmer' second='Crop Type' third='Phone Number' four='Date & Time Added' five='Status' six='Actions' seven=''/>
            <tbody className='divide-y divide-[#E2E8F0] bg-white'>
              {farmersData.map((farmer) => (
                <Farmers
                  key={farmer.id}
                  id={farmer.id}
                  FarmersName={farmer.FarmersName}
                  CropType={farmer.CropType}
                  phone={farmer.phone}
                  Date={farmer.Date}
                  Time={farmer.Time}
                  Status={farmer.Status}
                  what={farmer.what}
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

export default AllFarmers