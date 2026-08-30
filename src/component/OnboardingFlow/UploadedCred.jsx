import React from 'react'
import {Header} from '../UserFlow/Header'
import UploadedPill from './UploadedPill'
import {ProgressBar} from './ProgressBar'
import {Submit_Bttn} from '../UserFlow/Submit_Bttn'
import Backbttn from '../UserFlow/Backbttn'
import {Issues} from '../UserFlow/Issues'
import {Link} from 'react-router-dom'
const UploadedCred = () => {
  return (
        <div className='w-full flex flex-col gap-3'>
      <ProgressBar ProgressBar totalSteps='3' currentStep='2' className={'gap-[12px]'} word1='Step' fu='of' progress='60%' />
      <Header title='Upload Credentials' subtitle='Upload your documentation' />
            <div className='flex flex-col gap-4'>
                <UploadedPill fileName1='CAC issued document.jpg' Label='Registration Certificate' sublabel = '(Official government issue license) *'/>
                <UploadedPill fileName1='AEDC bill.jpg' Label='Proof of address' sublabel='(Utility bill) *'/>
            </div>
 <div className='flex items-center gap-4 w-full'>
        <div className='w-1/3'>
        {/*
          <Backbttn />
         */}
         <Link to='/upload'>
        <Backbttn />
        </Link>
        </div>
        <div className='w-2/3'>
        <Link to='/Contact_info'>
          <Submit_Bttn tag='Continue' className='mt-0' />
        </Link>
        </div>

      </div>
        <Issues className={'mt-4'}/>
    
    </div>
  )
}

export default UploadedCred
