import React from 'react'
import { Header } from '../UserFlow/Header'
import { Submit_Bttn } from '../UserFlow/Submit_Bttn'
import Backbttn from '../UserFlow/Backbttn'
import { ProgressBar } from './ProgressBar'
import FilterClick from './FilterClick'
import { Link } from 'react-router-dom'

const FieldPill = () => {
  return (
            <div className='w-full flex flex-col gap-4'>
 <ProgressBar ProgressBar totalSteps='3' currentStep='3' className={'gap-[12px]'} word1='Step' fu='of' progress='100%' />
      <Header title='Investment Preferences' subtitle='Tell us about your investment goals. We will use this information to help match you to suitable agricultural investment opportunities.'/>
      <div className='flex flex-col gap-4'>
<FilterClick/>
<FilterClick/>
<FilterClick/>
</div>

 <div className='flex items-center mt-10 gap-4 w-full'>
        <div className='w-1/3'>
        <Link to='/Contact_info'>
        <Backbttn />
        </Link>
        </div>
        <div className='w-2/3'>
        <Link to='/Dashboard'>
          <Submit_Bttn tag='Continue' className='mt-0 mb-2' />
        </Link>
        </div>

      </div>

    </div>
  )
}

export default FieldPill
