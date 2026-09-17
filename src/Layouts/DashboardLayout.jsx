import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import TopPill from '../component/Dashboard/TopPill'
import LeftPill from '../component/Dashboard/LeftPill'

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <div className='min-h-screen overflow-x-hidden bg-gray-50/30'>
      {/* Top Navbar */}
      <TopPill onToggleSidebar={() => setIsSidebarOpen((prev) => !prev)} />

      {/* Main App Canvas - items-start is required so the sidebar doesn't expand */}
      <div className='flex items-start w-full pt-[72px]'>
        <LeftPill
          isOpen={isSidebarOpen}
          onToggleSidebar={() => setIsSidebarOpen(false)}
        />

        {/* Content Area - overflow-hidden lives here so it never breaks the layout */}
        <main className='min-w-0 flex-1 overflow-x-hidden bg-[#F7F7F7] p-4 sm:p-4 lg:ml-64 lg:p-4'>
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default DashboardLayout