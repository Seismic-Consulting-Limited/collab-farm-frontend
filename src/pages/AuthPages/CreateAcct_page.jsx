import React from 'react'
import AuthLayout from '../../component/UserFlow/Auth_Layout'
import { Create_Acct_Form } from '../../component/UserFlow/Create_Acct_Form'

export const CreateAcct_page = () => {
  return (
      <AuthLayout>
<Create_Acct_Form/>      
      </AuthLayout>
  )
}
