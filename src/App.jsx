import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import { OnboardingProvider } from './context/OnboardingContext'
import { ProtectedRoute } from './component/ProtectedRoute'

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
import { BasicInfo } from './pages/AuthPages/BasicInfo'
import ContactInfo from './pages/AuthPages/ContactInfo'
import Upload_cred from './pages/AuthPages/Upload_cred'
import Uploaded_cred from './pages/AuthPages/Uploaded_cred'
import { Testing } from './pages/AuthPages/Testing'

const App = () => {
  return (
    <AuthProvider>
      <OnboardingProvider>
        <BrowserRouter>
          <Routes>
            {/* Default route redirect */}
            <Route path='/' element={<Navigate to='/login' replace />} />

            {/* Public Auth Routes */}
            <Route path='/login' element={<Login_page />} />
            <Route path='/register' element={<CreateAcct_page />} />

            {/* Protected Onboarding Routes - 3-step flow */}
            <Route path='/onboarding_Basicinfo' element={
              <ProtectedRoute requireOnboarding={true}>
                <BasicInfo />
              </ProtectedRoute>
            } />
            <Route path='/upload' element={
              <ProtectedRoute requireOnboarding={true}>
                <Upload_cred />
              </ProtectedRoute>
            } />
            <Route path='/Contact_info' element={
              <ProtectedRoute requireOnboarding={true}>
                <ContactInfo />
              </ProtectedRoute>
            } />

            {/* Protected Dashboard Routes */}
            <Route element={<ProtectedRoute requireOnboarding={false}><DashboardLayout /></ProtectedRoute>}>
              <Route path='/dashboard' element={<Dashboard />} />
              <Route path='/directory' element={<FarmerDirectory />} />
              <Route path='/directory/edit' element={<EditFarmer/>}/>
              <Route path='/directory/:farmerId' element={<FarmerDetails/>}/>
              <Route path='/directory/add' element={<AddFarmer />} />
              <Route path='/loans' element={<LoansOverview />} />
            </Route>

            {/* Legacy Routes */}
            <Route path='/investmentPref' element={<InvestmentPref />} />
            <Route path='/create_account' element={<CreateAcct_page />} />
            <Route path='/uploaded_cred' element={<Uploaded_cred />} />
            <Route path='/testing' element={<Testing />} />
          </Routes>
        </BrowserRouter>
      </OnboardingProvider>
    </AuthProvider>
  )
}

export default App