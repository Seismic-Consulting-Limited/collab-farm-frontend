import React from 'react'
import { Header } from './Header'
import { Input } from './Input'
import { Submit_Bttn } from './Submit_Bttn'
import { Divider } from './Divider'
import { CreateAcct_Direct } from './CreateAcct_Direct'
export const Create_Acct_Form = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: Add submit/API logic here
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
          
          {/* 2-Column Grid for Inputs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <Input 
              label="First Name *" 
              placeholder="Enter First Name" 
              type="text" 
            />
            <Input 
              label="Last Name *" 
              placeholder="Enter Last Name" 
              type="text" 
            />
            <Input 
              label="Email *" 
              placeholder="youremail@email" 
              type="email" 
              htmlFor="email" 
              autoComplete="email" 
            />
            <Input 
              label="Phone *" 
              placeholder="Enter phone number" 
              type="tel" 
            />
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <Submit_Bttn tag="Sign Up" />
          </div>
        </form>
      </div>

      {/* Divider Component */}
      <Divider ticker={'border-t-2'} />
<CreateAcct_Direct/>
    </div>
  )
}