import React from 'react'

export const NavBar = () => {
    const initials= (fullName) =>{
        return  fullName
.split(' ')
.map((word) => word[0])
.join('')
.toUpperCase()
}
const userName= (fullName)=>{
return fullName === '' ? 'Hello there stranger' : `Hello ${fullName}`;
}
return (

<div className='flex justify-between px-6 items-center h-16'>
    <div className='font-extrabold'>
    <h1>{userName('Abdul Hafeez')}</h1>
    </div>
    <div className='border border-black rounded-lg px-3 py-1.5 border-solid'>
    <input type="text" placeholder='Search...' className='outline-none'/>
    </div>
    <div className='border border-black rounded-full bg-blue-900 w-9 h-9 text-white items-center flex justify-center'>
    <span>
        {initials('Abdul Hafeez')}
        </span>
    </div>
</div>
);
}
