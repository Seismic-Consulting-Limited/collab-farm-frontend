import React from 'react'

export const Divider = ({ticker}) => {
  return (
    <div className="relative flex items-center w-full my-4 sm:my-5">
    <div className={`flex-grow border-t border-gray-300 ${ticker}`}></div>
    <span className="shrink mx-4 text-[hsla(0,0%,44%,1)] text-sm">or</span>
    <div className={`flex-grow border-t border-gray-300 ${ticker}`}></div>
  </div>
  )
}
