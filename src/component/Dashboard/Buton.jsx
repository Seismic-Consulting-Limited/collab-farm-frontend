const Buton = ({ 
  label, 
  icon, 
  variant = 'outline', 
  onClick, 
  color,
  className = '' 
}) => {
  const baseStyles = 'flex items-center gap-2 px-4 py-2.5 rounded-xl font-["Manrope",sans-serif] text-xs font-semibold cursor-pointer transition-all duration-150 shrink-0 whitespace-nowrap'
  
  const colors = {
    green: 'bg-[hsla(143,32%,28%,1)]',
    blue: 'bg-blue-600',
    red: 'bg-[rgba(217,45,32,1)]',
    orange: 'bg-orange-500',
  }
  
  const variants = {
    primary: 'bg-[hsla(143,32%,28%,1)] text-white hover:opacity-95 shadow-sm',
    outline: 'border border-gray-300 bg-white text-gray-700 hover:bg-gray-50',
    subtle: 'border border-gray-200 bg-[#F9FAFB] text-gray-800 hover:bg-gray-100',
  }

  return (
    <button 
      type='button' 
      onClick={onClick} 
      className={`${baseStyles} ${variants[variant]} ${variant === 'primary' ? colors[color] : ''} ${className}`}
    >
      {icon && (
        <img src={icon} alt='' className='w-4 h-4 object-contain shrink-0' />
      )}
      {label && <span>{label}</span>}
    </button>
  )
}

export default Buton
