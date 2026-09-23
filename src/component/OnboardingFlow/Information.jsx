import { useState } from 'react'
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
import { submitCooperativeProfile } from '../../services/onboarding'
import { useAuth } from '../../context/AuthContext'
import { useOnboarding } from '../../context/OnboardingContext'
import { useNavigate } from 'react-router-dom'

const Information = () => {
  const navigate = useNavigate()
  const { setOnboardingComplete } = useAuth()
  const { formData, updateFormData, clearOnboardingData, registrationFile, proofOfAddressFile } = useOnboarding()
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [apiError, setApiError] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    updateFormData(name, value)
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
    setApiError('')
  }

  const validateForm = () => {
    const newErrors = {}
    if (!formData.phone_number.trim()) {
      newErrors.phone_number = 'Phone number is required'
    }
    if (!formData.address.trim()) {
      newErrors.address = 'Address is required'
    }
    if (!formData.state.trim()) {
      newErrors.state = 'State is required'
    }
    if (!formData.lga.trim()) {
      newErrors.lga = 'LGA is required'
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const formatErrorMessage = (error) => {
    if (error.response?.data?.detail) {
      const detail = error.response.data.detail
      if (Array.isArray(detail)) {
        return detail.map(err => err.msg || err).join(', ')
      }
      return detail
    }
    return error.message || 'Profile submission failed. Please try again.'
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    // Validate that files are present
    if (!registrationFile || !proofOfAddressFile) {
      setApiError('Please upload both registration certificate and proof of address documents.')
      return
    }

    setLoading(true)
    setApiError('')

    try {
      const formDataObj = new FormData()

      // Step 1 fields from centralized formData
      formDataObj.append('cooperative_name', formData.cooperative_name || '')
      formDataObj.append('year_established', formData.year_established || '')
      formDataObj.append('registration_number', formData.registration_number || '')

      // Step 2 files - Append actual File objects with correct key names
      formDataObj.append('registration_certificate_file', registrationFile)
      formDataObj.append('proof_of_address_file', proofOfAddressFile)

      // Step 3 fields from centralized formData
      formDataObj.append('phone_number', formData.phone_number)
      formDataObj.append('address', formData.address)
      formDataObj.append('lga', formData.lga)
      formDataObj.append('state', formData.state)

      await submitCooperativeProfile(formDataObj)

      // Mark onboarding as complete
      setOnboardingComplete()

      // Clear onboarding data from localStorage
      clearOnboardingData()

      // Redirect to dashboard
      navigate('/dashboard')
    } catch (error) {
      setApiError(formatErrorMessage(error))
    } finally {
      setLoading(false)
    }
  }

  return (
        <div className='w-full flex flex-col gap-2'>
    <ProgressBar ProgressBar totalSteps='3' currentStep='3' className={'gap-[12px]'} word1='Step' fu='of' progress='100%' />
      
      {/* API Error Message */}
      {apiError && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm">
          {apiError}
        </div>
      )}

      <Header title='Contact Information' subtitle='Please provide basic information about your cooperative.'/>
      <Input 
        icon={Call} 
        placeholder='Enter Phone Number' 
        label='Phone Number *'
        name='phone_number'
        value={formData.phone_number}
        onChange={handleChange}
        error={errors.phone_number}
      />
      <Input 
        icon={Location} 
        label='Address *' 
        placeholder='Enter Address'
        name='address'
        value={formData.address}
        onChange={handleChange}
        error={errors.address}
      />
      <div className='flex items-center gap-2 mt-4 w-full'>
       < div className='w-1/2'>
      <Input 
        icon={ArrowDown} 
        onIconClick={()=> alert('drop down option')} 
        label='State *' 
        placeholder='Select State'
        name='state'
        value={formData.state}
        onChange={handleChange}
        error={errors.state}
      />
      </div>
      <div className='w-1/2'>
      <Input 
        icon={ArrowDown} 
        onIconClick={()=> alert('drop down option')} 
        label='LGA *' 
        placeholder='Select LGA'
        name='lga'
        value={formData.lga}
        onChange={handleChange}
        error={errors.lga}
      />
      </div>
      </div>
     <div className='flex items-center gap-4 w-full'>
        <div className='w-1/3'>
        <Link to='/upload'>
        <Backbttn />
        </Link>
        </div>
        <div className='w-2/3'>
          <Submit_Bttn tag={loading ? 'Submitting...' : 'Continue'} className='mt-0 mb-2' pass={handleSubmit} disabled={loading}/>
        </div>

      </div>
      <Issues className='mt-0' />
    </div>
  )
}

export default Information

