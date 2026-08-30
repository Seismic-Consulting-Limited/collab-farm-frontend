import React from 'react'
import { Input } from '../UserFlow/Input'
import { Header } from '../UserFlow/Header'
import { Submit_Bttn } from '../UserFlow/Submit_Bttn'
import { Issues } from '../UserFlow/Issues'
import { ProgressBar } from './ProgressBar'
import { Link } from 'react-router-dom'

export const BasicInfo_Form = () => {
  return (
    <div>
        <ProgressBar totalSteps='3' currentStep='1' className={'gap-[12px]'} progress='30%' word1='Step' fu='of'/>
        <div className='flex flex-col justify-between'>
          <div>
    <Header title='Basic Information' subtitle='Please provide basic information about your cooperative'/>
    <div className='flex flex-col gap-5 mt-4'>
    <Input label='Cooperative Name *' placeholder='Enter Cooperative Name'/>
    <Input label='Year Established *' placeholder='E.G 1999'/>
    <Input label='Registration Number *' placeholder='Enter Registration Number'/>
    </div>
    <Link to='/upload'>
<Submit_Bttn className={'mt-5'} tag='Continue'/>
    </Link>
          </div>
<Issues className={'mt-10'}/>
        </div>
    </div>
  )
}
