import React from 'react'
import { Login_Form } from '../../component/UserFlow/Login_Form'
import AuthLayout from '../../component/UserFlow/Auth_Layout'

export const Login_page = () => {
  return (
    <AuthLayout>
    <Login_Form/>      
          </AuthLayout>
  )
}
