import React, { useState } from 'react'
import Location2 from '../../assets/Location2.svg'
import Location from '../../assets/Location.svg'
const LocationInfo = ({ onLocationChange }) => {
  const [selectedLocation, setSelectedLocation] = useState('Benue, Nigeria selected')
  const [isDetecting, setIsDetecting] = useState(false)

  // Browser Geolocation Detection
  const handleDetectLocation = () => {
    if (!navigator.geolocation) {
      alert('Geolocation is not supported by your browser.')
      return
    }

    setIsDetecting(true)
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setIsDetecting(false)
        const locString = `Lat: ${position.coords.latitude.toFixed(3)}, Lng: ${position.coords.longitude.toFixed(3)} (Detected)`
        setSelectedLocation(locString)
        if (onLocationChange) onLocationChange(locString)
      },
      (error) => {
        setIsDetecting(false)
        alert('Unable to retrieve your location. Please check your browser permissions.')
      }
    )
  }

  return (
    <div className='w-full bg-white border border-gray-200 rounded-2xl p-6 box-border font-["Manrope",sans-serif]'>
      
      {/* Header section with location icon badge */}
      <div className='flex items-center gap-2.5 pb-4 border-b border-gray-100'>
        <div className='w-7 h-7 rounded-full bg-[#EBF7F5] flex items-center justify-center text-[#134E48] shrink-0'>
        <img src={Location2} alt="" />
        </div>
        <h2 className='text-base font-semibold text-gray-900'>
          Location Information
        </h2>
      </div>

      {/* Main Content: Left Option + "OR" Divider + Right Map */}
      <div className='mt-6 flex flex-col md:flex-row items-stretch gap-6 relative'>
        
        {/* Left: Auto Detect Option */}
        <div className='flex-1 flex flex-col justify-start'>
          <p className='text-xs font-semibold text-gray-800'>
            Use my current location
          </p>
          <p className='text-xs text-gray-400 mt-2 mb-4'>
            Automatically detect your location
          </p>

          <button
            type='button'
            onClick={handleDetectLocation}
            disabled={isDetecting}
            className='w-[271px] flex items-center justify-center gap-2.5 px-5 py-3 rounded-xl border border-[hsla(143,32%,42%,1)] bg-white hover:bg-gray-50 text-xs font-semibold text-[hsla(143,32%,42%,1)] transition-colors cursor-pointer shadow-xs'
          >
            {/* Target / GPS Icon */}
            <img src={Location} alt="" className='w-4 h-4' />
            <span>{isDetecting ? 'Detecting Location...' : 'Use Current Location'}</span>
          </button>
        </div>

        {/* Center Vertical Divider with "or" badge */}
        <div className='hidden md:flex flex-col items-center justify-center relative px-2'>
          <div className='h-full w-px bg-gray-200' />
          <span className='absolute bg-white border border-gray-200 text-gray-400 text-[11px] font-medium rounded-full w-7 h-7 flex items-center justify-center shadow-xs'>
            or
          </span>
        </div>

        {/* Mobile Horizontal Divider */}
        <div className='md:hidden flex items-center justify-center relative my-2'>
          <div className='w-full h-px bg-gray-200' />
          <span className='absolute bg-white border border-gray-200 text-gray-400 text-[11px] font-medium rounded-full px-2 py-0.5 shadow-xs'>
            or
          </span>
        </div>

        {/* Right: Map Selection Area */}
        <div className='flex-[1.5] flex flex-col justify-start'>
          <p className='text-xs font-semibold text-gray-800'>
            Select location on map
          </p>
          <p className='text-xs text-gray-400 mt-0.5 mb-3'>
            Tap on the map to drop a pin
          </p>

          {/* Simulated Map Container with Topo Lines & Dropped Pin */}
          <div className='relative w-full h-[140px] rounded-xl overflow-hidden border border-gray-200 bg-[#E8EDE7] flex items-center justify-center'>
            
            {/* Topography map line background pattern */}
            <svg
              className='absolute inset-0 w-full h-full opacity-40'
              xmlns='http://www.w3.org/2000/svg'
            >
              <defs>
                <pattern id='mapPattern' width='120' height='60' patternUnits='userSpaceOnUse'>
                  <path d='M0 30 Q 30 10, 60 30 T 120 30' fill='none' stroke='#94A3B8' strokeWidth='1' />
                  <path d='M0 15 Q 40 45, 80 15 T 160 15' fill='none' stroke='#CBD5E1' strokeWidth='0.8' />
                  <path d='M0 50 Q 50 20, 100 50' fill='none' stroke='#CBD5E1' strokeWidth='0.8' />
                </pattern>
              </defs>
              <rect width='100%' height='100%' fill='url(#mapPattern)' />
            </svg>

            {/* Road lines simulation */}
            <svg className='absolute inset-0 w-full h-full pointer-events-none'>
              <path
                d='M 20 100 Q 150 90, 240 85 T 450 70'
                fill='none'
                stroke='#D97706'
                strokeWidth='2.5'
                strokeOpacity='0.5'
              />
            </svg>

            {/* City text labels */}
            <span className='absolute bottom-3 left-4 text-[10px] font-bold text-gray-700 bg-white/70 px-1.5 py-0.5 rounded'>
              Otukpa
            </span>
            <span className='absolute bottom-5 left-1/3 text-[10px] font-bold text-gray-700 bg-white/70 px-1.5 py-0.5 rounded'>
              Otukpo
            </span>

            {/* Dropped Location Pin & Tooltip */}
            <div className='absolute right-1/4 top-1/2 -translate-y-1/2 flex flex-col items-center cursor-pointer'>
              {/* Tooltip */}
              <div className='bg-black text-white text-[9px] font-semibold px-2 py-0.5 rounded shadow-md whitespace-nowrap mb-1'>
                Benue, Nigeria
              </div>
              {/* Pin Icon */}
              <div className='w-6 h-6 rounded-full bg-[#134E48] border-2 border-white flex items-center justify-center text-white shadow-md'>
                <svg className='w-3 h-3' fill='currentColor' viewBox='0 0 20 20'>
                  <path fillRule='evenodd' d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z' clipRule='evenodd' />
                </svg>
              </div>
            </div>
          </div>

          {/* Selected Location Address Bar */}
          <div className='mt-3 flex items-center gap-2 px-3.5 py-2.5 rounded-xl border border-gray-200 bg-gray-50/70'>
            <svg className='w-4 h-4 text-gray-500 shrink-0' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.8' d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z' />
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.8' d='M15 11a3 3 0 11-6 0 3 3 0 016 0z' />
            </svg>
            <span className='text-xs font-medium text-gray-800 truncate'>
              {selectedLocation}
            </span>
          </div>

        </div>

      </div>

    </div>
  )
}

export default LocationInfo