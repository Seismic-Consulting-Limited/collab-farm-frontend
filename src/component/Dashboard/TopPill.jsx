import React from 'react'
import Logo from '../../assets/Logo.svg'
import Notification from '../../assets/Notification.svg'
import Initials from '../../assets/Initials.svg'
import Search from '../../assets/Search.svg'
import ArrowDown from '../../assets/ArrowDown.svg'

const TopPill = () => {
  return (
    <div className='w-full bg-[hsla(0,0%,97%,1)] z-50 top-0 sticky border-b border-[#E2E8F0]'>
      <div className='w-full flex items-center justify-between h-[72px]'>
        
        {/* 1. Left Logo Brand Area */}
        <div className='w-[240px] shrink-0 h-full flex items-center px-6 border-r border-[#E2E8F0]'>
          <img src={Logo} alt="Logo" className='h-8 w-auto object-contain' />
        </div>

        {/* 2. Middle Area: Cooperative Name + Centered Pill Search Input */}
        <div className='flex-1 flex items-center justify-between px-6 gap-4'>
          <p className='font-[manrope] font-[400] text-[16px] leading-none text-[hsla(0,0%,9%,1)] shrink-0'>
            Green Fields Cooperative
          </p>

          <div className='flex items-center justify-between w-full max-w-[420px] h-[40px] px-4 bg-[#F8FAFC] border border-[#E2E8F0] rounded-full'>
            <input 
              type="text" 
              placeholder="Search Farmers" 
              className='w-full bg-transparent outline-none text-sm text-gray-700 placeholder:text-gray-400 font-[manrope]'
            />
            <img src={Search} alt="Search" className='w-4 h-4 ml-2 shrink-0 opacity-60' />
          </div>
        </div>

        {/* 3. Right Area: Notification + Account Pill */}
        <div className='flex items-center gap-5 px-6 shrink-0'>
          {/* Notification Icon */}
          <div className='relative cursor-pointer flex items-center justify-center'>
            <button onClick={()=> alert('NOTIFICATION HERE WE GO')}>
            <img src={Notification} alt="Notification" className='w-8 h-8 object-contain' />
            </button>
          </div>

          {/* Account Profile Group */}

        <button onClick={()=> alert('YOur initials look like this')} className='flex items-center gap-2 cursor-pointer'>
  <img
    src={Initials}
    alt="Initials"
    className='w-8 h-8 rounded-full object-cover'
  />
  <p className='font-[manrope] text-sm text-[hsla(0,0%,9%,1)] font-medium'>
    Account
  </p>
</button>
<button onClick={()=> alert('Arrow down open')}>
  <img
    src={ArrowDown}
    alt="Arrow Down"
    className='w-3.5 h-3.5 object-contain opacity-70'
  />
</button>
        </div>

      </div>
    </div>
  )
}

export default TopPill