import React from 'react'
import { ProgressBar } from './ProgressBar'
import UploadingPill from './UploadingPill'
import { Header } from '../UserFlow/Header'
import DocumentUpload from '../../assets/DocumentUpload.svg'
import Vector from '../../assets/Vector.svg'
import { Submit_Bttn } from '../UserFlow/Submit_Bttn'
import Backbttn from '../UserFlow/Backbttn'
import { Issues } from '../UserFlow/Issues' 
import { Link } from 'react-router-dom' 
{/*
    import { Backbttn } from '../Backbttn'
    */}

const UploadCred_form = () => {
  return (
    <div className='w-full flex flex-col gap-6'>
      <ProgressBar totalSteps='3' currentStep='2' className={'gap-[12px]'} word1='Step' fu='of' progress='60%' />
      
      <Header title='Upload Credentials' subtitle='Upload your documentation' />
      
      <div className='flex flex-col gap-4'>
        <UploadingPill 
          upload={DocumentUpload} 
          secondicon={Vector} 
          progress='25' 
          fileName='Uploading Document.....' 
          Label='Registration Certificate' 
          sublabel='(Official government issue license) *' 
        />
        <UploadingPill 
          upload={DocumentUpload} 
          secondicon={Vector} 
          progress='25' 
          fileName='Uploading Document.....' 
          Label='Proof of Address' 
          sublabel='(Utility bill) *'
        />
      </div>

      {/* Buttons side-by-side: Back takes fixed/compact width, Continue takes remaining space */}
      <div className='flex items-center gap-4 w-full'>
        <div className='w-1/3'>
        {/*
          <Backbttn />
         */}
        <Link to='/Onboarding_BasicInfo'>
        <Backbttn />
        </Link>
        </div>
        <div className='w-2/3'>
        <Link to='/Uploaded_cred'>
          <Submit_Bttn tag='Continue' className='mt-0' />
        </Link>
        </div>

      </div>
        <Issues className={'mt-4'}/>
    </div>
  )
}

export default UploadCred_form