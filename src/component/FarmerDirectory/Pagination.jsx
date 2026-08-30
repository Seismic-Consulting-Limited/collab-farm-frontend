import React, { useState } from 'react'
import Options from './Options'
import PrevIcon from '../../assets/ArrowLeft.svg' // or your chevron icon
import NextIcon from '../../assets/ArrowRight.svg'

const Pagination = ({ totalPages = 6 }) => {
  // 1. Defaults to 1 immediately
  const [currentPage, setCurrentPage] = useState(1)

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1)

  return (
    <div className="flex items-center gap-2">
      {/* 2. Previous Button: disabled when on page 1 */}
      <Options
        icon={PrevIcon}
        disabled={currentPage === 1}
        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
      />

      {/* 3. Numbered Buttons: only the matching page gets isActive */}
      {pages.map((pageNum) => (
        <Options
          key={pageNum}
          number={pageNum}
          isActive={currentPage === pageNum}
          onClick={() => setCurrentPage(pageNum)}
        />
      ))}

      {/* Next Button: disabled when on last page */}
      <Options
        icon={NextIcon}
        disabled={currentPage === totalPages}
        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
      />
    </div>
  )
}

export default Pagination