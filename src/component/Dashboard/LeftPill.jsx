import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import Acct from '../../assets/Acct.svg'
import FarmerDirectory from '../../assets/FarmerDirectory.svg'
import Loans from '../../assets/Loans.svg'
import Reports from '../../assets/Report.svg'
import Dashboard from '../../assets/Dashboard.svg'
import Settings from '../../assets/Settings.svg'
import Headset from '../../assets/Headset.svg'

const navItems = [
  { path: '/dashboard', label: 'Dashboard', icon: Dashboard },
  { path: '/directory', label: 'Farmer Directory', icon: FarmerDirectory },
  { path: '/loans', label: 'Loans', icon: Loans },
  { path: '/reports', label: 'Reports', icon: Reports },
  { path: '/profile', label: 'Profile', icon: Acct },
]

const bottomNavItems = [
  { path: '/settings', label: 'Settings', icon: Settings },
  { path: '/support', label: 'Help & Support', icon: Headset },
]

const LeftPill = () => {
  const location = useLocation()

  const getItemClass = (path) =>
    `flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-[manrope] text-sm font-medium transition-colors duration-150 ${
      location.pathname === path
        ? 'bg-[hsla(143,32%,86%,1)] text-[hsla(0,0%,20%,1)] font-semibold'
        : 'text-[hsla(0,0%,20%,1)] hover:bg-gray-100'
    }`

  return (
    <div className='w-full bg-[#FEFEFE] shrink-0 h-[calc(100vh-72px)] sticky top-[72px] flex flex-col justify-between px-4 py-4 border-r border-[#E2E8F0] box-border'>
      {/* Top Nav Links */}
      <nav className='flex flex-col gap-1.5'>
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={getItemClass(item.path)}
          >
            <img src={item.icon} alt="" className='w-5 h-5 object-contain' />
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>

      {/* Bottom Nav Links */}
      <div className='flex flex-col gap-1.5 pt-4 border-t border-[#E2E8F0]'>
        {bottomNavItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={getItemClass(item.path)}
          >
            <img src={item.icon} alt="" className='w-5 h-5 object-contain' />
            <span>{item.label}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default LeftPill