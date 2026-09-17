import React from 'react'

const Cards = ({ up, Title, Amount, gains, another, any, className }) => {
  {/*
        const comp =[
            {id:1, label:'ROI(Return on Investment)', next:'18.6%', last:'2.4% In the last 30 days.' },
            {id:2, label:'Total Farmers', next:'150', last:}
            {},
            {},
        ];
        */}
  return (
    <div className={`flex min-w-0 flex-col justify-between gap-4 rounded-2xl border border-gray-200 bg-white px-[24px] py-[16px] ${className}`}>
      <div className='flex items-center gap-2'>
        {another && <img src={another} alt='' className='h-5 w-5 object-contain' />}
        <h1 className='font-[Manrope] text-xs font-normal text-gray-700'>{Title}</h1>
      </div>

      <div className='flex items-center justify-between gap-2'>
        <p className='text-lg font-bold text-black font-[Manrope]'>{Amount}</p>
        {any && (
          <p className='rounded-full border border-[hsla(143,32%,28%,1)] bg-[hsla(143,32%,28%,1)] px-[8px] py-[4px] text-xs text-white'>
            {any}
          </p>
        )}
      </div>

      <div className='flex items-center gap-1'>
        {up && <img src={up} alt='' className='h-4 w-4 object-contain' />}
        <p className='font-[Manrope] text-[14px] font-normal text-[hsla(152,77%,39%,1)]'>
          {gains}{' '}
          <span className='font-[Manrope] text-[14px] font-normal text-[hsla(0,0%,19%,1)]'>
            in the last 30 days
          </span>
        </p>
      </div>
    </div>
  )
}

export default Cards
