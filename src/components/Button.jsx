import React from 'react'

const Button = () => {
  return (
    
        
    <label class="w-96 text-center px-6 text-white  bg-[#EDB50F] py-3 rounded-sm shadow-lg tracking-wide cursor-pointer ">
        <span class="mt-2 text-1xl font-bold">Click here to choose a file</span>
        <input type='file' class="hidden" />
    </label>
  )
}

export default Button