import React from 'react'
import AuthLayout from '../../component/UserFlow/Auth_Layout'    
import UploadedCred from '../../component/OnboardingFlow/UploadedCred'

const Uploaded_cred = () => {
  return (
    <div>
        <AuthLayout>
      <UploadedCred />
    </AuthLayout>
    </div>
  )
}

export default Uploaded_cred
