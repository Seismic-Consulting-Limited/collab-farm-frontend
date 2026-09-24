import { Link, useLocation } from 'react-router-dom'
import Logo from '../../assets/Logo.svg'
import Acct from '../../assets/Acct.svg'
import FarmerDirectory from '../../assets/FarmerDirectory.svg'
import funding from '../../assets/funding.svg'
import Loans from '../../assets/Loans.svg'
import Disbursements from '../../assets/Disbursements.svg'
import FarmingProgress from '../../assets/FarmingProgress.svg'   
import Settlements from '../../assets/Settlements.svg'   
import Reports from '../../assets/Report.svg'
import Dashboard from '../../assets/Dashboard.svg'
import Settings from '../../assets/Settings.svg'
import Headset from '../../assets/Headset.svg'

const navItems = [
  { path: '/dashboard', label: 'Dashboard', icon: Dashboard },
  { path: '/directory', label: 'Farmer Directory', icon: FarmerDirectory },
  { path: '/funding', label: 'Funding', icon: funding },
  { path: '/investments', label: 'Investments', icon: Loans },
  { path: '/disbursements', label: 'Disbursements', icon: Disbursements },
  { path: '/farming progess', label: 'Farming Progress', icon: FarmingProgress },
  { path: '/settlements', label: 'Settlements', icon: Settlements },
  { path: '/reports', label: 'Reports', icon: Reports },
  { path: '/profile', label: 'Profile', icon: Acct },
]

const bottomNavItems = [
  { path: '/settings', label: 'Settings', icon: Settings },
  { path: '/support', label: 'Help & Support', icon: Headset },
]

const LeftPill = ({ isOpen, onToggleSidebar }) => {
  const location = useLocation()

  const closeMenu = () => onToggleSidebar?.()

  const getItemClass = (path) =>
    `flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-[manrope] text-sm font-medium transition-colors duration-150 ${location.pathname === path
      ? 'bg-[hsla(143,32%,86%,1)] text-[hsla(0,0%,20%,1)] font-semibold'
      : 'text-[hsla(0,0%,20%,1)] hover:bg-gray-100'
    }`

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div
          onClick={closeMenu}
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden"
        />
      )}

      {/* Sidebar Navigation */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 flex h-screen w-64 flex-col justify-between border-r border-[#E2E8F0] bg-[#FEFEFE] p-4 transition-transform duration-300 ease-in-out box-border
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          lg:top-[72px] lg:bottom-0 lg:h-auto lg:translate-x-0 lg:shrink-0 lg:z-30`}
      >
        {/* Top Section */}
        <div className="flex flex-col">
          {/* Mobile Header with Logo & Close */}
          <div className="flex items-center justify-between pb-3 lg:hidden">
            <img src={Logo} alt="CollabFarm" className="h-7 w-auto object-contain" />
            <button
              type="button"
              onClick={closeMenu}
              className="rounded-lg p-1 text-gray-500 hover:bg-gray-100"
            >
              <svg className="h-5 w-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="mb-3 border-b border-[#E2E8F0] lg:hidden" />

          {/* Nav Items */}
          <nav className="flex flex-col gap-1.5">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={closeMenu}
                className={getItemClass(item.path)}
              >
                <img src={item.icon} alt="" className="h-5 w-5 object-contain" />
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col gap-1.5 border-t border-[#E2E8F0] pt-4">
          {bottomNavItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={closeMenu}
              className={getItemClass(item.path)}
            >
              <img src={item.icon} alt="" className="h-5 w-5 object-contain" />
              <span>{item.label}</span>
            </Link>
          ))}
        </div>
      </aside>
    </>
  )
}

export default LeftPill