import React from 'react'

const Button = ({ styles }) => {
  return (
    <button type='button' className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles} rounded-lg transition ease-in-out delay-150 hover:translate-x-2 hover:scale-110 duration-300`}> 
      Get Started
    </button>
  )
}

export default Button