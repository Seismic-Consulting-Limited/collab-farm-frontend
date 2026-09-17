import React from 'react'
import image from '../../assets/image.png'
import Group1 from '../../assets/Group1.svg'

const AuthLayout = ({ children }) => {
  return (
    <div className="min-h-screen w-full bg-white p-4 sm:p-6 lg:h-screen lg:p-8 lg:overflow-hidden">
      
      {/* Mobile / Tablet: flex-col, centered, tight max-width
        Laptop / Desktop (lg+): grid 2-columns, full height, original spacing
      */}
      <div className="flex flex-col items-center justify-center gap-4 sm:gap-6 max-w-lg mx-auto w-full lg:max-w-none lg:grid lg:grid-cols-2 lg:gap-8 lg:h-full">

        {/* Left Column: Image Banner Card */}
        <div className="relative flex w-full h-[240px] sm:h-[280px] md:h-[320px] lg:h-full lg:min-h-[600px] overflow-hidden rounded-[24px] p-5 sm:p-6 lg:p-10 flex-shrink-0">
          {/* Background Image */}
          <img
            src={image}
            alt="CollabFarm Visual"
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />

          {/* Card Content */}
          <div className="relative z-10 mt-auto w-full text-white space-y-3 lg:space-y-4">
            <p className="font-manrope text-[11px] sm:text-xs lg:text-[13px] leading-relaxed tracking-wide text-white/95">
              A data-driven dashboard concept for CollabFarm that enables Super Admins to monitor platform growth, manage stakeholders, and access critical insights through an organized, user-centered interface.
            </p>

            {/* Sub-card/Logo Pill */}
            <div className="flex h-11 sm:h-12 lg:h-[56px] w-full items-center rounded-full border border-slate-200 bg-white px-5 lg:px-6 shadow-sm">
              <img
                src={Group1}
                alt="CollabFarm Finance"
                className="h-5 sm:h-6 lg:h-7 w-auto object-contain"
              />
            </div>
          </div>
        </div>

        {/* Right Column: Children / Forms */}
        <div className="flex w-full flex-col items-center justify-center py-2 sm:py-4 lg:h-full lg:overflow-y-auto lg:px-8">
          <div className="w-full max-w-xl my-auto">
            {children}
          </div>
        </div>

      </div>
    </div>
  )
}

export default AuthLayout