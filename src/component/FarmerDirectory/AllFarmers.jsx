import React from 'react'
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
    phone:'08123456789',
    Date: '27th Aug, 2025',
    Time: '09:30 AM',
    Status: 'Verified',
    what: 'View',
  },
  {
    id: 2,
    FarmersName: 'Natasha Romanoff',
    CropType: 'Yam',
    phone:'08123456789',
    Date: '27th Aug, 2025',
    Time: '09:30 AM',
    Status: 'Verified',
    what: 'View',
  },
  {
    id: 3,
    FarmersName: 'Stephen Strange',
    CropType: 'Groundnut',
    phone:'08123456789',
    Date: '27th Aug, 2025',
    Time: '09:30 AM',
    Status: 'Pending',
    what: 'View',
  },
  {
    id: 4,
    FarmersName: 'Clint Barton',
    CropType: 'Spinach',
    phone:'08123456789',
    Date: '27th Aug, 2025',
    Time: '09:30 AM',
    Status: 'Removed',
    what: 'View',
  },
  {
    id: 5,
    FarmersName: 'Clint Barton',
    CropType: 'Potatoes',
    phone:'08123456789',
    Date: '27th Aug, 2025',
    Time: '09:30 AM',
    Status: 'Verified',
    what: 'View',
  },
   {
    id: 6,
    FarmersName: 'Clint Barton',
    CropType: 'Potatoes',
    phone:'08123456789',
    Date: '27th Aug, 2025',
    Time: '09:30 AM',
    Status: 'Verified',
    what: 'View',
  },
   {
    id: 7,
    FarmersName: 'Clint Barton',
    CropType: 'Potatoes',
    phone:'08123456789',
    Date: '27th Aug, 2025',
    Time: '09:30 AM',
    Status: 'Verified',
    what: 'View',
  },
   {
    id: 8,
    FarmersName: 'Clint Barton',
    CropType: 'Potatoes',
    phone:'08123456789',
    Date: '27th Aug, 2025',
    Time: '09:30 AM',
    Status: 'Verified',
    what: 'View',
  },
   {
    id: 9,
    FarmersName: 'Clint Barton',
    CropType: 'Potatoes',
    phone:'08123456789',
    Date: '27th Aug, 2025',
    Time: '09:30 AM',
    Status: 'Verified',
    what: 'View',
  },
   {
    id: 10,
    FarmersName: 'Clint Barton',
    CropType: 'Potatoes',
    phone:'08123456789',
    Date: '27th Aug, 2025',
    Time: '09:30 AM',
    Status: 'Verified',
    what: 'View',
  },
   {
    id: 11,
    FarmersName: 'Clint Barton',
    CropType: 'Potatoes',
    phone:'08123456789',
    Date: '27th Aug, 2025',
    Time: '09:30 AM',
    Status: 'Verified',
    what: 'View',
  },
]

const AllFarmers = () => {
    const sm =[
        {id:1, some:'All Crop Types'},
        {id:2, some:'All Status'},
        {id: 3, some:'Date Added'},
    ];
  return (
    <div className='border p-5 rounded-xl mt-5'>
        {/*filter */}
      <div className='flex justify-between'>
 <div className='flex items-center justify-between w-full max-w-[420px] h-[40px] px-4 bg-[#F8FAFC] border border-[#E2E8F0] rounded-full'>
            <input 
              type="text" 
              placeholder="Search by name, NIN, phone or crop type..." 
              className='w-full bg-transparent outline-none text-sm text-gray-700 placeholder:text-gray-400 font-[manrope]'
            />
            <img src={Search} alt="Search" className='w-4 h-4 ml-2 shrink-0 opacity-60' />
          </div>
          <div className='flex gap-3'>
{
    sm.map((item =>(
   <Btn key={item.id} some={item.some} icon={ArrowDown}/>     
    )

    ))
    }
          </div>
      </div>
      <div className='border-b border-gray-100 my-5'/>
        {/* Table Container */}
      <div className='mt-4 rounded-xl overflow-x-auto border border-gray-100'>
        <table className='w-full text-left table-fixed border-collapse'>
          {/* Table Column Headers with matching fixed widths */}
          <thead>
            <tr className='bg-[#F8FAFC] border-b border-gray-100 text-xs font-semibold text-gray-500 font-[manrope]'>
              <th className='py-3 px-4 w-[28%] font-semibold'>Names</th>
              <th className='py-3 px-4 w-[20%] font-semibold'>Crop Type</th>
              <th className='py-3 px-4 w-[20%] font-semibold'>Phone Number</th>
              <th className='py-3 px-4 w-[24%] font-semibold'>Date & Time Added</th>
              <th className='py-3 px-4 w-[20%] font-semibold'>Status</th>
              <th className='py-3 px-4 w-[20%] font-semibold'>Actions</th>
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
  )
}

export default AllFarmers
