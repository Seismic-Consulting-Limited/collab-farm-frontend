import { createContext, useContext, useState, useEffect } from 'react'

const OnboardingContext = createContext(null)

export const useOnboarding = () => {
  const context = useContext(OnboardingContext)
  if (!context) {
    throw new Error('useOnboarding must be used within an OnboardingProvider')
  }
  return context
}

export const OnboardingProvider = ({ children }) => {
  // Load from localStorage on mount
  const loadFromStorage = () => {
    try {
      const stored = localStorage.getItem('onboarding_draft')
      return stored ? JSON.parse(stored) : null
    } catch {
      return null
    }
  }

  const [formData, setFormData] = useState(() => loadFromStorage() || {
    // Step 1: Basic Info
    cooperative_name: '',
    year_established: '',
    registration_number: '',
    // Step 3: Contact Info
    phone_number: '',
    address: '',
    state: '',
    lga: ''
  })

  const [registrationFile, setRegistrationFile] = useState(null)
  const [proofOfAddressFile, setProofOfAddressFile] = useState(null)

  // Save to localStorage whenever formData changes
  useEffect(() => {
    localStorage.setItem('onboarding_draft', JSON.stringify(formData))
  }, [formData])

  // Update specific field in formData
  const updateFormData = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  // Clear onboarding data (after successful submission)
  const clearOnboardingData = () => {
    localStorage.removeItem('onboarding_draft')
    setFormData({
      cooperative_name: '',
      year_established: '',
      registration_number: '',
      phone_number: '',
      address: '',
      state: '',
      lga: ''
    })
    setRegistrationFile(null)
    setProofOfAddressFile(null)
  }

  const value = {
    // Form data
    formData,
    updateFormData,
    clearOnboardingData,
    // Files
    registrationFile,
    setRegistrationFile,
    proofOfAddressFile,
    setProofOfAddressFile
  }

  return (
    <OnboardingContext.Provider value={value}>
      {children}
    </OnboardingContext.Provider>
  )
}
