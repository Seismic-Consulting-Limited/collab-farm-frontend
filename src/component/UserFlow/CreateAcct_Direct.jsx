import React from 'react'
import { FcGoogle } from "react-icons/fc";
import {Link} from 'react-router-dom'
export const CreateAcct_Direct = () => {
  return (
    <div>
         <button
          type="button"
          className="w-full h-[50px] sm:h-[52px] bg-white border border-gray-300 rounded-[16px] text-sm font-medium text-gray-700 flex items-center justify-center gap-2.5 cursor-pointer hover:bg-gray-50 transition-colors duration-200"
        >
            <FcGoogle size={20}
            />
            {/*
                className="w-[20px] h-[20px]" 
            */}
          Sign in with Google
        </button>

         
        <p className="mt-6 text-center text-sm text-gray-500">
        Already have an account? {" "}
          <Link to='/login'  className="font-semibold underline text-[hsla(143,32%,28%,1)] hover:underline">
          Sign in
          </Link>
        </p>
      
    </div>
  )
}
