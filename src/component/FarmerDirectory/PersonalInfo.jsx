import React, { useState } from 'react'
import Info from '../../assets/Info.svg'
import { Input } from '../UserFlow/Input'
import UploadFile from './UploadFile'
import ArrowDown from '../../assets/ArrowDown.svg'

const GENDER_OPTIONS = ['MALE', 'FEMALE', 'T.G', 'Others']
const Crop_Options =['YAM','BEANS','RICE','COCOA','BANANA']

const PersonalInfo = () => {
    const [isCropOpen, setIsCropOpen] = useState(false)
const [selectedCrop, setSelectedCrop] = useState('')

const handleSelectCrop = (something)=>{
    setSelectedCrop(something)
    setIsCropOpen(false)
}

  const [isGenderOpen, setIsGenderOpen] = useState(false)
  const [selectedGender, setSelectedGender] = useState('')

  const handleSelectGender = (option) => {
    setSelectedGender(option)
    setIsGenderOpen(false)
  }

  return (
    <div className='w-full bg-white border border-gray-200 rounded-2xl p-6 box-border font-["Manrope",sans-serif]'>
      {/* Header section */}
      <div className="flex items-center gap-2.5 pb-4 border-b border-gray-100">
        {Info && <img src={Info} alt="" className="w-5 h-5 object-contain" />}
        <h2 className="text-base font-semibold text-gray-900">Personal Information</h2>
      </div>

      {/* Upload and Details Field Container */}
      <div className="mt-6 flex flex-col lg:flex-row gap-6 items-start">
        {/* Left: ID / Photo Upload Card */}
        <div className="w-full lg:w-[280px] shrink-0 flex flex-col">
          <p className="text-xs font-semibold text-gray-800">ID / Photo</p>
          <p className="text-xs text-gray-400 mt-0.5 mb-3">
            Upload a clear photo or ID document
          </p>
          <UploadFile />
        </div>

        {/* Right: Inputs Grid Container */}
        <div className="flex-1 w-full flex flex-col gap-4">
          {/* Fullname & NIN */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
            <Input label="Full Name *" placeholder="Enter full name" />
            <Input
              label="NIN (National Identification Number) *"
              placeholder="Enter 11-digit NIN"
            />
          </div>

          {/* Crop Type & Phone Number */}
          <div className=" grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
            <div className='relative w-full'>
            <Input
              label="Crop Type *"
              value={selectedCrop}
              readOnly
              onClick={()=>setIsCropOpen((prev)=>!prev)}
              onIconClick={()=>setIsCropOpen((prev)=>!prev)}
              placeholder="Select crop type"
              icon={ArrowDown}
              />
            {isCropOpen &&(
                <div className="absolute top-[calc(100%+4px)] left-0 w-full bg-white border border-gray-200 rounded-xl shadow-lg z-50 py-1 overflow-hidden">
                   { Crop_Options.map((something)=>(
                       <button key={something} type='button' onClick={()=>handleSelectCrop(something)}  className="w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors font-medium">
    {something}
</button>
))}
</div>
)}
</div>
            <Input label="Phone Number *" placeholder="Enter phone number" />
          </div>

          {/* Gender (with Custom Dropdown) & Farm Size */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
            {/* Gender Field with Dropdown Menu */}
            <div className="relative w-full">
              <Input
                label="Gender *"
                placeholder="Select gender"
                value={selectedGender}
                readOnly
                onClick={() => setIsGenderOpen((prev) => !prev)}
                icon={ArrowDown}
                onIconClick={() => setIsGenderOpen((prev) => !prev)}
                className="cursor-pointer"
              />

              {isGenderOpen && (
                <div className="absolute top-[calc(100%+4px)] left-0 w-full bg-white border border-gray-200 rounded-xl shadow-lg z-50 py-1 overflow-hidden">
                  {GENDER_OPTIONS.map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => handleSelectGender(option)}
                      className="w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors font-medium"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Farm Size */}
            <Input
                        buttonClassName='border p-1'
              label="Farm size *"
              placeholder="Enter farm size"
              unit="Acres"
              icon={ArrowDown}
              onIconClick={()=>alert('yeahhhh')}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PersonalInfo