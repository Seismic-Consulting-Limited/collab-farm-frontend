import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Header } from './Header'
import { Input } from './Input'
import { Submit_Bttn } from './Submit_Bttn'
import { Divider } from './Divider'
import { CreateAcct_Direct } from './CreateAcct_Direct'
import { registerUser, storeAuthToken } from '../../services/auth'
import { useAuth } from '../../context/AuthContext'

export const Create_Acct_Form = () => {
  const navigate = useNavigate()
  const { resetOnboardingStatus } = useAuth()
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone_number: '',
    password: ''
  })
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [apiError, setApiError] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
    setApiError('')
  }

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.first_name.trim()) {
      newErrors.first_name = 'First name is required'
    }
    if (!formData.last_name.trim()) {
      newErrors.last_name = 'Last name is required'
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email format'
    }
    if (!formData.phone_number.trim()) {
      newErrors.phone_number = 'Phone number is required'
    }
    if (!formData.password) {
      newErrors.password = 'Password is required'
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setLoading(true)
    setApiError('')

    try {
      const response = await registerUser({
        email: formData.email,
        password: formData.password,
        is_active: true,
        is_superuser: false,
        is_verified: false,
        first_name: formData.first_name,
        last_name: formData.last_name,
        phone_number: formData.phone_number,
        role: 'COOPERATIVE',
        investor_type: 'INDIVIDUAL',
        verification_status: 'not_submitted'
      })

      // Store the authentication token from registration response
      if (response.access_token) {
        storeAuthToken(response.access_token)
      }

      // Reset onboarding status to ensure new users go through onboarding
      resetOnboardingStatus()

      // Navigate to onboarding step 1 (Basic Info)
      navigate('/onboarding_Basicinfo')
    } catch (error) {
      setApiError(error.message || 'Registration failed. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="w-full">
      {/* Header Component */}
      <Header 
        title="Create an account" 
        subtitle="Join CollabFarm today to meet up with certified farmers across the country"
      />

      {/* Form Area */}
      <div className="mt-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* API Error Message */}
          {apiError && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm">
              {apiError}
            </div>
          )}

          {/* 2-Column Grid for Inputs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <Input 
              label="First Name *" 
              placeholder="Enter First Name" 
              type="text" 
              name="first_name"
              value={formData.first_name}
              onChange={handleChange}
              error={errors.first_name}
            />
            <Input 
              label="Last Name *" 
              placeholder="Enter Last Name" 
              type="text" 
              name="last_name"
              value={formData.last_name}
              onChange={handleChange}
              error={errors.last_name}
            />
            <Input 
              label="Email *" 
              placeholder="youremail@email" 
              type="email" 
              htmlFor="email" 
              autoComplete="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              error={errors.email}
            />
            <Input 
              label="Phone *" 
              placeholder="Enter phone number" 
              type="tel" 
              name="phone_number"
              value={formData.phone_number}
              onChange={handleChange}
              error={errors.phone_number}
            />
            <Input 
              label="Password *" 
              placeholder="Enter password" 
              type="password" 
              htmlFor="password" 
              autoComplete="new-password" 
              name="password"
              value={formData.password}
              onChange={handleChange}
              error={errors.password}
            />
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <Submit_Bttn tag={loading ? 'Creating Account...' : 'Sign Up'} disabled={loading} />
          </div>
        </form>
      </div>

      {/* Divider Component */}
      <Divider ticker={'border-t-2'} />
      <CreateAcct_Direct/>
    </div>
  )
}