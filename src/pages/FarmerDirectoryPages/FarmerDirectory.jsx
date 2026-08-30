import React from 'react'
import AllFarmers from '../../component/FarmerDirectory/AllFarmers'
import Buton from '../../component/Dashboard/Buton'
import LongPile from '../../component/FarmerDirectory/LongPile'
import Dashboard_Header from '../../component/Dashboard/Dashboard_Header'
import LeftPill from '../../component/Dashboard/LeftPill'
import TopPill from '../../component/Dashboard/TopPill'
import Export from '../../assets/Export.svg'
import Add from '../../assets/Add.svg'
import Pagination from '../../component/FarmerDirectory/Pagination'
const FarmerDirectory = () => {
  return (
    <div>
      <TopPill/>
          <div className='lg:grid-cols-[240px_1fr] grid grid-cols-1'>
      <LeftPill/>
      {/*end of the links */}
      
      {/*right column */}
      <div className='p-4'>
        <div className='flex justify-between items-center mb-5'>
<Dashboard_Header Greeting='Farmers' sub='Manage all farmers in your cooperative.'/>
        <div className='flex gap-2'>
<Buton label='Export' icon={Export}/>
<Buton label='Add Farmer' icon={Add} variant='primary'/>
        </div>
        </div>
        <LongPile/>
        <AllFarmers/>
        <div className='flex justify-center mt-5'>
         <Pagination/>
        </div>
      </div>
      </div>
    </div>
  )
}

export default FarmerDirectory
