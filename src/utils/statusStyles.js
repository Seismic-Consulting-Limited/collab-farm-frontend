/**
 * Get status badge styles for farmer/loan status
 * @param {string} status - The status text
 * @returns {string} - Tailwind classes for the status badge
 */
export const getStatusBadgeStyle = (status = '') => {
  const text = status.toLowerCase()
  
  switch (text) {
    case 'verified':
      return 'bg-[#EBF7F5] text-[#134E48] border border-[#9EE2D8]'
    case 'pending':
      return 'bg-[#FFF6ED] text-[#C4320A] border border-[#FECDCA]'
    case 'removed':
      return 'bg-[#FEF3F2] text-[#B42318] border border-[#FECDCA]'
    default:
      return 'bg-gray-100 text-gray-700 border border-gray-200'
  }
}

/**
 * Get dot color for loan/investment status
 * @param {string} label - The status label
 * @returns {string|null} - Hex color code or null
 */
export const getStatusDotColor = (label = '') => {
  const text = label.toLowerCase()

  if (text.includes('repaid') || text.includes('paid')) {
    return '#12B76A' // Green
  }
  if (text.includes('active') || text.includes('ongoing')) {
    return '#2E90FA' // Blue
  }
  if (text.includes('overdue') || text.includes('past')) {
    return '#F04438' // Red
  }
  if (text.includes('pending') || text.includes('partially') || text.includes('approved')) {
    return '#F79009' // Orange/Amber
  }

  return null
}
