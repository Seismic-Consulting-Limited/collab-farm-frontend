export const Submit_Bttn = ({pass, tag, className, disabled}) => {
  return (
    <div>
      
        <button onClick={pass} type="submit" disabled={disabled} className={`w-full h-[50px] bg-[hsla(143,32%,28%,1)] text-white rounded-[16px] text-sm font-semibold hover:bg-[hsla(143,32%,20%,1)] transition-colors duration-200 mt-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed ${className}`}>
              {tag}
     </button>
      
    </div>
  )
}
