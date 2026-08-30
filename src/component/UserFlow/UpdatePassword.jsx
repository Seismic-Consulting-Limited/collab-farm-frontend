import React from 'react'
import { Input } from './Input'
import eyeSlash from '../../assets/eyeSlash.svg'
import boldEye from '../../assets/boldEye.svg'
import { Header } from './Header'
import { Submit_Bttn } from './Submit_Bttn'
import Tick from '../../assets/Tick.svg'
import { Issues } from './Issues'

export const UpdatePassword = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className='w-full flex flex-col gap-4 box-border'>
      {/* 1. Header */}
      <Header 
        title='Update Password' 
        subtitle='Create a unique password to secure your account' 
      />

      {/* 2. Form Area */}
      <form onSubmit={handleSubmit} className='flex flex-col gap-2.5'>
        {/* New Password + Requirement */}
        <div className='flex flex-col gap-1'>
          <Input label='New Password' onIconClick={()=> alert('show password')} icon={boldEye} placeholder='*******' />
          
          <div className='flex items-center gap-1.5 pl-0.5'>
            <img src={Tick} alt='Tick Icon' className='w-3 h-3 object-contain' />
            <span className='font-[manrope] font-[500] text-xs text-[hsla(0,0%,44%,1)] leading-none'>
              Minimum 8 characters
            </span>
          </div>
        </div>

        {/* Confirm Password */}
        <Input label='Confirm Password' onIconClick={()=> alert('show password')} icon={eyeSlash} placeholder='*******' />

        {/* Helper Note (natural flow, no manual line break bloat) */}
        <p className='mt-3 bg-[hsla(143,32%,86%,1)] border-[0.5px] border-[hsla(143,32%,75%,1)] text-[hsla(143,32%,22%,1)] font-[manrope] text-center text-xs rounded-xl px-3 py-2 leading-tight'>
          Use at least <span className='font-semibold'>8 characters</span>, including an <span className='font-semibold'>uppercase</span>, a <br /> <span className='font-semibold'>number</span>, and a <span className='font-semibold'>symbol</span>.
        </p>

        {/* Action Button */}
        <Submit_Bttn tag='Change Password' className='mt-6 mb-5' />
      </form>

      {/* 3. Issues Footer */}
      <div className='mt-2'>
        <Issues />
      </div>
    </div>
  )
}