{/*
  
  
  export const Form = ({title,
  subtitle,
  first_label,
fist_placeholder,
first_id,
first_type,
first_image,
}) => {
  return (
    <div>
    {/* Right Side: Form Container 
    <div className="flex min-h-full flex-col justify-center py-6 lg:py-8 px-2 sm:px-6">
    {/* Inner Wrapper: Centered on mobile, left-aligned on desktop 
    <div className="w-full max-w-[480px] mx-auto lg:ml-8 xl:ml-16">
      
      {/* Header 
      <div className="space-y-1.5 text-left">
        <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-bold font-['Playfair_Display',serif] leading-tight text-gray-900">
{title}
        </h1>
        <p className="text-sm sm:text-base sm:whitespace-nowrap font-normal font-['Manrope',sans-serif] leading-relaxed text-gray-600">
{subtitle}
        </p>
      </div>

      {/* Form 
      <div className="mt-6 sm:mt-8">
        <form action="#" method="POST" className="space-y-4 sm:space-y-5">
          
          {/* Email 
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-black mb-2">
              {first_label}
            </label>
            <div className="relative">
              <input
                id={first_id}
                name={first_name}
                type={first_type}
                required
                placeholder={fist_placeholder}
                autoComplete="email"
                className="w-full h-[52px] sm:h-[54px] rounded-[17px] border-[0.5px] border-[hsla(0,0%,64%,1)] px-4 pr-12 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-[hsla(143,32%,28%,1)]"
              />
              <img
                src={first_image}
                alt="Email"
                className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 pointer-events-none"
                />
            </div>
          </div>

          {/* Password 
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-black mb-2">
              Password *
            </label>
            <div className="relative">
              <input
                id="password"
                name="password"
                type="password"
                required
                placeholder="input Password"
                autoComplete="current-password"
                className="w-full h-[52px] sm:h-[54px] rounded-[17px] border-[0.5px] border-[hsla(0,0%,64%,1)] px-4 pr-12 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-[hsla(143,32%,28%,1)]"
                />
              <img
                src={eyeslash}
                alt="Toggle Password"
                className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 cursor-pointer"
                />
            </div>
            
            {/* Forgot Password Link 
            <div className="text-sm mt-2 text-right">
              <a href="#" className="font-semibold text-gray-700 hover:text-black">
                Forgot password?
              </a>
            </div>
          </div>

          {/* Submit Button 
          <div>
            <button
              type="submit"
              className="w-full h-[50px] bg-[hsla(143,32%,28%,1)] text-white rounded-[16px] text-sm font-semibold hover:bg-black transition-colors duration-200 mt-2 cursor-pointer"
              >
              Login
            </button>
          </div>
        </form>

        {/* Divider 
        <div className="relative flex items-center my-4 sm:my-5">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="shrink mx-4 text-[hsla(0,0%,44%,1)] text-sm">or</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        {/* Google Sign In 
        <button
          type="button"
          className="w-full h-[50px] sm:h-[52px] bg-white border border-gray-300 rounded-[16px] text-sm font-medium text-gray-700 flex items-center justify-center gap-2.5 cursor-pointer hover:bg-gray-50 transition-colors duration-200"
        >
          <img src={icon1} alt="Google Logo" className="w-[20px] h-[20px]" />
          Sign in with Google
        </button>

        {/* Footer Link 
        <p className="mt-6 text-center text-sm text-gray-500">
        Don't have account?{" "}
          <a href="#" className="font-semibold text-gray-900 hover:underline">
            Create Account
          </a>
        </p>
      </div>

    </div>
  </div>


    </div>
    
)
}
*/}

import React from 'react'
{/*import icon1 from '../assets/icon1.svg'*/}
export const Input = ({label,placeholder,type,autoComplete,htmlFor,icon,onIconClick}) => {
 const Icon = icon;
  return (
    <div>
            <label htmlFor= {htmlFor} className="block text-sm font-normal text-black mb-1 ">
              {label}
            </label>
            <div className="relative">
              <input
                id={htmlFor}
                type={type}
                required
                placeholder={placeholder}
                autoComplete={autoComplete}
                className="w-full h-[52px] sm:h-[54px] rounded-2xl  py-3 border-[0.5px] border-[hsla(0,0%,64%,1)] px-4 pr-12 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-[hsla(143,32%,28%,1)]"
              />
              {icon && (
    <button
      type="button"
      onClick={onIconClick}
      className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5"
    >
      <img
        src={icon}
        alt=""
        className="w-full h-full object-contain"
      />
    </button>
              )}
            </div>
          </div>  
  )
}


