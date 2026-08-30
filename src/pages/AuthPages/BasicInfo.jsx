import React from 'react'
import AuthLayout from '../../component/UserFlow/Auth_Layout'
import { BasicInfo_Form } from '../../component/OnboardingFlow/BasicInfo_Form'
export const BasicInfo = () => {
  return (
    <div>
    <AuthLayout>
        <BasicInfo_Form/>
    </AuthLayout>
    </div>
  )
}
