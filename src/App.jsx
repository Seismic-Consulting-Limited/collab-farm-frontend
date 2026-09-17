import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

// Layouts
import DashboardLayout from './Layouts/DashboardLayout'

// Dashboard Views
import Dashboard from './pages/AuthPages/Dashboard'
import FarmerDirectory from './pages/FarmerDirectoryPages/FarmerDirectory'
import FarmerDetails from './pages/FarmerDirectoryPages/FarmerDetails'
import AddFarmer from './pages/FarmerDirectoryPages/AddFarmer'
import LoansOverview from './pages/Loans/LoansOverview'
import InvestmentPref from './pages/AuthPages/InvestmentPref'
import EditFarmer from './pages/FarmerDirectoryPages/EditFarmer'

// Auth & Onboarding Views
import { Login_page } from './pages/AuthPages/Login_page'
import { CreateAcct_page } from './pages/AuthPages/CreateAcct_page'
import { UpdatePassword_page } from './pages/AuthPages/UpdatePassword_page'
import { BasicInfo } from './pages/AuthPages/BasicInfo'
import ContactInfo from './pages/AuthPages/ContactInfo'
import Upload_cred from './pages/AuthPages/Upload_cred'
import Uploaded_cred from './pages/AuthPages/Uploaded_cred'
import { Testing } from './pages/AuthPages/Testing'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Default route redirect */}
        <Route path='/' element={<Navigate to='/dashboard' replace />} />

        {/* Protected Dashboard Shell */}
        <Route element={<DashboardLayout />}>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/directory' element={<FarmerDirectory />} />
          <Route path='/directory/edit' element={<EditFarmer/>}/>
          <Route path='/directory/:farmerId' element={<FarmerDetails/>}/>
          <Route path='/directory/add' element={<AddFarmer />} />
          <Route path='/loans' element={<LoansOverview />} />
        </Route>

        {/* Auth & Standalone Pages */}
        <Route path='/investmentPref' element={<InvestmentPref />} />
        <Route path='/login' element={<Login_page />} />
        <Route path='/create_account' element={<CreateAcct_page />} />
        <Route path='/UpdatePassword' element={<UpdatePassword_page />} />
        <Route path='/onboarding_Basicinfo' element={<BasicInfo />} />
        <Route path='/Contact_info' element={<ContactInfo />} />
        <Route path='/upload' element={<Upload_cred />} />
        <Route path='/uploaded_cred' element={<Uploaded_cred />} />
        <Route path='/testing' element={<Testing />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App