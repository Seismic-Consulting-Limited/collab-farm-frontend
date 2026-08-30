import React from 'react'

export const SideBar = () => {
    const login =(name)=>{
        return  name === ''? <p className='text-blue-600'>Logged in as <span className='text-white'>Stranger</span></p> :
        <p className='text-blue-60 flex justify-between flex-wrap'>Logged in as <span className='text-white'>{name}</span></p>   
    ;}
return (
    <div className='flex justify-between min-h-screen flex-col bg-blue-900 lg:w-64 w-20 sm:p-2 '>
    <div className='flex flex-col gap-4'>
    {/*Head name */}
    <h1 className='text-white font-extrabold'>AppBrand</h1>
    {/*Little List */}
    <p className='flex flex-col gap-2 text-white'>
        <a className="text-gray-400 hover:text-white hover:bg-gray-800 px-3 py-2 rounded-lg text-sm font-medium">Overview</a>
        <a className="text-gray-400 hover:text-white hover:bg-gray-800 px-3 py-2 rounded-lg text-sm font-medium">Analytics</a>
        <a className="text-gray-400 hover:text-white hover:bg-gray-800 px-3 py-2 rounded-lg text-sm font-medium">Projects</a>
        <a className="text-gray-400 hover:text-white hover:bg-gray-800 px-3 py-2 rounded-lg text-sm font-medium">Settings</a>
    </p>
    </div>
    {/*Bottom part */}
    
    <div>
        <hr className='mb-3 border border-gray-700' />
{login('hafeez')}
    </div>
    </div>
  );
}
