import React from 'react'
import { Header } from '../UserFlow/Header'
import { Input } from '../UserFlow/Input'
import { Submit_Bttn } from '../UserFlow/Submit_Bttn'
import { Issues } from '../UserFlow/Issues'
import { ProgressBar } from './ProgressBar'
import { Link } from 'react-router-dom'
import  Backbttn  from '../UserFlow/Backbttn'
import Call from '../../assets/Call.svg'
import Location from '../../assets/Location.svg'
import ArrowDown from '../../assets/ArrowDown.svg'

const Information = () => {
  return (
        <div className='w-full flex flex-col gap-2'>
    <ProgressBar ProgressBar totalSteps='3' currentStep='3' className={'gap-[12px]'} word1='Step' fu='of' progress='100%' />
      <Header title='Contact Information' subtitle='Please provide basic information about your cooperative.'/>
      <Input icon={Call} placeholder='Enter Phone Number' label='Phone Number *'/>
      <Input icon={Location} label='Address *' placeholder='Enter Address'/>
      <div className='flex items-center gap-2 mt-4 w-full'>
       < div className='w-1/2'>
      <Input icon={ArrowDown} onIconClick={()=> alert('drop down option')} label='State *' placeholder='Select State'/>
      </div>
      <div className='w-1/2'>
      <Input icon={ArrowDown} onIconClick={()=> alert('drop down option')} label='LGA *' placeholder='Select LGA'/>
      </div>
      </div>
     <div className='flex items-center gap-4 w-full'>
        <div className='w-1/3'>
        <Link to='/Uploaded_cred'>
        <Backbttn />
        </Link>
        </div>
        <div className='w-2/3'>
        <Link to='/InvestmentPref'>
          <Submit_Bttn tag='Continue' className='mt-0 mb-2' />
        </Link>
        </div>

      </div>
      <Issues className='mt-0' />
    </div>
  )
}

export default Information

