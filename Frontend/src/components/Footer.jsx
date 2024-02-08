import React from 'react'

const Footer = () => {

    const currentDate = new Date();

// Get the current year using the getFullYear() method
const currentYear = currentDate.getFullYear();
  return (
    <div className='bg-[#1E3F78] p-4 mt-auto'>
      <h1 className='text-white text-center'>Copyright © {currentYear} Haad Analytics.</h1>
    </div>
  )
}

export default Footer
