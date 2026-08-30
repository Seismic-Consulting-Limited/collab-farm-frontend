import { CreateAcct_page } from "./pages/AuthPages/CreateAcct_page"
import { Login_page } from "./pages/AuthPages/Login_page"
import { UpdatePassword_page } from "./pages/AuthPages/UpdatePassword_page";
import { BasicInfo } from "./pages/AuthPages/BasicInfo";
import ContactInfo from "./pages/AuthPages/ContactInfo";
import FarmerDirectory from "./pages/FarmerDirectoryPages/FarmerDirectory";
import Upload_cred from "./pages/AuthPages/Upload_cred";
import Dashboard from './pages/AuthPages/Dashboard';
import InvestmentPref from "./pages/AuthPages/InvestmentPref";
import { Testing } from "./pages/AuthPages/Testing";
import Uploaded_cred from "./pages/AuthPages/Uploaded_cred";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
const App = () => {
  return (
    <BrowserRouter>
    <Link to ='/directory'></Link>
    <Link to='/InvestmentPref'></Link>
    <Link to='/dashboard'></Link>
    <Link to='/contact_info'></Link>
    <Link to='/Upload_cred'></Link>
    <Link to='/Testing'></Link>
    <Link to='/BasicInfo'></Link>
    <Link to='/UpdatePassword'></Link>
    <Link to="/create_account"></Link>
    <Link to='/login'></Link>
    <Link to='/Uploaded_cred'></Link>
    <Routes>
      <Route path="/directory" element={<FarmerDirectory/>}/>
      <Route path="/InvestmentPref" element={<InvestmentPref/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/contact_info" element={<ContactInfo/>}/>
      <Route path="/upload" element={<Upload_cred/>}/>
      <Route path="/Testing" element={<Testing/>}/>
      <Route path="/Onboarding_BasicInfo" element={<BasicInfo/>}/>
      <Route path="/create_account" element={ <CreateAcct_page/>}/>
      <Route path= '/login' element={<Login_page/>}/>
      <Route path= '/UpdatePassword' element={<UpdatePassword_page/>}/>
      <Route path= '/Uploaded_cred' element={<Uploaded_cred/>}/>
    </Routes>
    </BrowserRouter>

  )
}
export default App
