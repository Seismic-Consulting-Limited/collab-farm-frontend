import React from 'react'

const Cards = ({up,Title,Amount,gains,another,any,className}) => {
    {/*
        const comp =[
            {id:1, label:'ROI(Return on Investment)', next:'18.6%', last:'2.4% In the last 30 days.' },
            {id:2, label:'Total Farmers', next:'150', last:}
            {},
            {},
        ];
        */}
  return (
    <div className= {`flex flex-1 flex-col gap-4 justify-between border rounded-2xl px-[24px] py-[16px] ${className}`}>
     <div className='flex gap-2 items-center'>
{another && (
    <img src={another} alt="" />

)}
      <h1 className='font-[Manrope] font-normal text-xs'>{Title}</h1>
     </div>
      <div className='flex justify-between'>
      <p className='text-black font-[Manrope] text-lg font-bold'>{Amount}</p>
      {
        any && (
            <p className='bg-[hsla(143,32%,28%,1)] text-white px-[8px] py-[4px] border rounded-full'>{any}</p>
        )
      }
      </div>
      <div className='flex items-center gap-1'>
        <img src={up} alt="" />
        <p className='font-[Manrope] font-normal text-[14px] text-[hsla(152,77%,39%,1)]'>{gains} <span className='font-[Manrope] font-normal text-[14px] text-[hsla(0,0%,19%,1)]'>
            in the last 30 days
            </span> 
            </p>
      </div>
    </div>
  )
}

export default Cards
