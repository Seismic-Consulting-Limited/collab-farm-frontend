import { useState } from 'react'
import { Input } from '../UserFlow/Input'
import { Header } from '../UserFlow/Header'
import { Submit_Bttn } from '../UserFlow/Submit_Bttn'
import { Issues } from '../UserFlow/Issues'
import { ProgressBar } from './ProgressBar'
import { Link } from 'react-router-dom'
import { useOnboarding } from '../../context/OnboardingContext'

export const BasicInfo_Form = () => {
  const { formData, updateFormData } = useOnboarding()
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    updateFormData(name, value)
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const handleContinue = () => {
    const newErrors = {}
    if (!formData.cooperative_name.trim()) {
      newErrors.cooperative_name = 'Cooperative name is required'
    }
    if (!formData.year_established.trim()) {
      newErrors.year_established = 'Year established is required'
    } else if (isNaN(formData.year_established) || formData.year_established.length !== 4) {
      newErrors.year_established = 'Please enter a valid 4-digit year'
    }
    if (!formData.registration_number.trim()) {
      newErrors.registration_number = 'Registration number is required'
    }
    setErrors(newErrors)
    
    if (Object.keys(newErrors).length === 0) {
      // Data is already saved in context via updateFormData
    }
  }

  return (
    <div>
        <ProgressBar totalSteps='3' currentStep='1' className={'gap-[12px]'} progress='30%' word1='Step' fu='of'/>
        <div className='flex flex-col justify-between'>
          <div>
    <Header title='Basic Information' subtitle='Please provide basic information about your cooperative'/>
    <div className='flex flex-col gap-5 mt-4'>
    <Input 
      label='Cooperative Name *' 
      placeholder='Enter Cooperative Name'
      name='cooperative_name'
      value={formData.cooperative_name}
      onChange={handleChange}
      error={errors.cooperative_name}
    />
    <Input 
      label='Year Established *' 
      placeholder='E.G 1999'
      name='year_established'
      value={formData.year_established}
      onChange={handleChange}
      error={errors.year_established}
    />
    <Input 
      label='Registration Number *' 
      placeholder='Enter Registration Number'
      name='registration_number'
      value={formData.registration_number}
      onChange={handleChange}
      error={errors.registration_number}
    />
    </div>
    <Link to='/upload'>
<Submit_Bttn className={'mt-5'} tag='Continue' pass={handleContinue}/>
    </Link>
          </div>
<Issues className={'mt-10'}/>
        </div>
    </div>
  )
}
