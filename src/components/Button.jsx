import React from 'react'

const Button = () => {
  return (
    
        <div class="flex w-full h-screen items-center justify-center bg-grey-lighter">
    <label class="w-64 flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue-500 hover:text-white">
        <span class="mt-2 text-base leading-normal">Click here to choose a file</span>
        <input type='file' class="hidden" />
    </label>
</div>
  )
}

export default Button