import React from 'react'
import BasicsFarmers from './BasicsFarmers'
import Total_FF from '../../assets/Total_FF.svg'
import Verified from '../../assets/Verified.svg'
import Pending from '../../assets/Pending.svg'
import Removed from '../../assets/Removed.svg'

const LongPile = () => {
    const pile =[
{id: 'total', name: 'Total Farmers', num: '188', icon: Total_FF },
  { id: 'verified', name: 'Verified Farmers', num: '138', icon: Verified},
{id: 'pending', name:'Pending Verification', num:'32', icon:Pending},
{id: 'removed',name:'Removed Farmers', num:'18', icon:Removed }
    ];
  return (
    <div className='w-full bg-white flex flex-col sm:flex-row items-stretch sm:items-center justify-between border border-[hsla(143,32%,57%,1)] p-5 rounded-2xl divide-y sm:divide-y-0 sm:divide-x divide-gray-200 box-border'>
     {
         pile.map((item)=>(
 <BasicsFarmers key={item.id} name={item.name} num={item.num} icon={item.icon}/>
      )
      )}
    </div>
  )
}

export default LongPile