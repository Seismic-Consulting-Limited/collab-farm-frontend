      {/* 
import React from 'react'
import image from '../assets/image.png'
import Group1 from '../assets/Group1.svg'

const AuthLayout = ({ children }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 h-screen w-full p-4 sm:p-6 lg:p-8 bg-white overflow-hidden">

      Left Column: Image + Overlay + Text
      <div className="hidden lg:relative lg:flex h-full min-h-[600px] w-full items-end justify-start p-10 rounded-[24px] overflow-hidden">
        {/* Background Image
        <img
          src={image}
          alt="CollabFarm Visual"
          className="absolute inset-0 w-full h-full object-cover rounded-[24px]"
        />

        {/* Gradient Overlay 
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent rounded-[24px]" />

        {/* Text on top of Image 
        <div className="relative z-10 text-white space-y-2">
          <p className=" text-[hsla(0,0%,100%,1)] font-manrope text-sm">
          A data-driven dashboard concept for CollabFarm that enables Super Admins to<br/>monitor platform growth, manage stakeholders, and access critical insights through<br/>and organized, user-centered interface.
          </p>
          <div className="w-full h-[52px] bg-white rounded-full flex items-center justify-start border border-[#E2E8F0]">
    
    {/* LOCK LOGO POSITION 
    {/* A tiny bit of left padding (`pl-4`) and then the logo. 
    <div className="w-full flex-shrink-0">
      <img src={Group1} alt="CollabFarm Finance" className="h-[28px] w-auto" />
    </div>
    </div>
{/*
<div className="px-8 h-12 bg-[hsla(0,0%,100%,1)] flex items-center justify-start rounded-3xl blur-29.6">
  <img src={Group1} alt="icon" className='flex flex-start' />
</div>
<div className="h-12 px-6 bg-white flex items-center justify-start rounded-3xl">
  <img src={Group1} alt="icon" className="w-6 h-6 object-contain" />
</div>
  
        </div>
      </div>

      {/* Right Column: Renders whatever child component you place inside <AuthLayout> 
      <div className="flex flex-col justify-center items-center h-full w-full py-6 px-4 sm:px-8 overflow-y-auto">
      <div className="w-full max-w-xl my-auto">
                  {children}
        </div>
      </div>

    </div>
  )
}

export default AuthLayout
      */}
      import React from 'react'
import image from '../../assets/image.png'
import Group1 from '../../assets/Group1.svg'

const AuthLayout = ({ children }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 h-screen w-full p-4 sm:p-6 lg:p-8 bg-white overflow-hidden">

      {/* Left Column: Image + Overlay + Text */}
      <div className="hidden lg:relative lg:flex h-full min-h-[600px] w-full p-6 flex-col justify-end rounded-[24px] overflow-hidden">
        {/* Background Image */}
        <img
          src={image}
          alt="CollabFarm Visual"
          className="absolute inset-0 w-full h-full object-cover rounded-[24px]"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent rounded-[24px]" />

        {/* Text + White Pill Container on top of Image */}
        <div className="relative z-10 w-full text-white space-y-4">
          <p className="font-manrope text-[13px] leading-relaxed tracking-widest text-white">
            A data-driven dashboard concept for CollabFarm that enables Super Admins to monitor platform growth,manage stakeholders,and access critical insights through an organized,user-centered interface.
          </p>

          {/* White Pill Badge */}
          <div className="w-full h-[56px] bg-white rounded-full flex items-center px-6 border border-[#E2E8F0]">
            <img 
              src={Group1} 
              alt="CollabFarm Finance" 
              className="h-[28px] w-auto object-contain" 
            />
          </div>
        </div>
      </div>

      {/* Right Column: Children / Forms */}
      <div className="flex flex-col justify-start items-center h-full w-full py-6 px-4 sm:px-8 overflow-y-auto">
        <div className="w-full max-w-xl my-auto">
          {children}
        </div>
      </div>

    </div>
  )
}

export default AuthLayout