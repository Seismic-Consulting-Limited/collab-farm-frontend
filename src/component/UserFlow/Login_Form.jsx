import React from 'react'
import { Header } from './Header'
import { Input } from './Input'
import sms from '../../assets/sms.svg'
import eyeSlash from '../../assets/eyeSlash.svg'
import { Submit_Bttn } from './Submit_Bttn';
import { Divider } from './Divider';
import { Login_Direct } from './Login_Direct';
import { Link } from 'react-router-dom';
export const Login_Form = () => {
    const handleSubmit=(e)=>{
        e.preventDefault()
    }
  return (
    <div className='w-full'>
   <Header title='Welcome Back' subtitle='Join CollabFarm today to meet up with certified farmers across the country '/> 
   <div className="mt-6">
   <form onSubmit={handleSubmit} className="space-y-4">
<Input label='Email *' placeholder='youremail@gmail.com' icon={sms} type='email' autoComplete='email' htmlFor='email'  />
<div>
<Input label='Password *' placeholder='input your password' onIconClick={()=> alert('show password')} icon={eyeSlash} type='password' autoComplete='current-password' htmlFor='password' />
<div className="text-sm mt-2 text-right">
              <Link to='/UpdatePassword' className="font-semibold text-gray-700 hover:text-black">
                Forgot password?
              </Link>
            </div>
</div>
<div className="pt-2">
    <Submit_Bttn tag='Login'/>
</div>
   </form>
</div>
<Divider/>
<Login_Direct/>
    </div>
  )
}
