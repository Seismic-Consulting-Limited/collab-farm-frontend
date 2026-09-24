import Logo from '../../assets/Logo.svg'
import Notification from '../../assets/Notification.svg'
import Initials from '../../assets/Initials.svg'
import Search from '../../assets/Search.svg'
import ArrowDown from '../../assets/ArrowDown.svg'

const TopPill = ({ onToggleSidebar }) => {
  return (
    <header className="fixed inset-x-0 top-0 z-40 h-[72px] w-full border-b border-[#E2E8F0] bg-[hsla(0,0%,97%,1)]">
      <div className="flex h-[72px] w-full items-center justify-between">

        {/* Left Section: Mobile Trigger + CollabFarm Logo with Right Border */}
        <div className="flex h-[72px] items-center gap-3 px-4 sm:px-6 lg:w-64 lg:border-r lg:border-[#E2E8F0] shrink-0">
          <button
            type="button"
            onClick={onToggleSidebar}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E2E8F0] bg-white text-gray-700 lg:hidden"
            aria-label="Toggle sidebar"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            </svg>
          </button>

          <div className="flex items-center">
            <img src={Logo} alt="CollabFarm Logo" className="hidden md:block h-8 w-auto object-contain" />
          </div>
        </div>

        {/* Center-Left Section: Cooperative Title + Search Bar */}
        <div className="flex flex-1 items-center justify-between px-3 ">
          <p className="hidden shrink-0 font-[manrope] text-[16px] font-[400] leading-none text-[hsla(0,0%,9%,1)] md:block">
            Green Fields Cooperative
          </p>

          <div className="flex h-[40px] w-full max-w-[360px] items-center justify-between rounded-full border border-[#E2E8F0] bg-[#F8FAFC] px-4">
            <input
              type="text"
              placeholder="Search Farmers"
              className="w-full bg-transparent text-sm text-gray-700 outline-none placeholder:text-gray-400"
            />
            <img src={Search} alt="Search" className="ml-2 h-4 w-4 shrink-0 opacity-60" />
          </div>

          {/* Right Section: Notifications & Account */}
          <div className="flex items-center gap-3 px-4 sm:gap-5 sm:px-6 shrink-0">
            <div className="relative flex cursor-pointer items-center justify-center">
              <button type="button" onClick={() => alert('NOTIFICATION HERE WE GO')}>
                <img src={Notification} alt="Notification" className="h-8 w-8 object-contain" />
              </button>
            </div>

            <button
              type="button"
              onClick={() => alert('Your initials look like this')}
              className="flex cursor-pointer items-center gap-2"
            >
              <img src={Initials} alt="Initials" className="h-8 w-8 rounded-full object-cover" />
              <p className="hidden font-[manrope] text-sm font-medium text-[hsla(0,0%,9%,1)] sm:block">
                Account
              </p>
            </button>

            <button type="button" onClick={() => alert('Arrow down open')}>
              <img src={ArrowDown} alt="Arrow Down" className="h-3.5 w-3.5 object-contain opacity-70" />
            </button>
          </div>

        </div>
      </div>
    </header>
  )
}

export default TopPill