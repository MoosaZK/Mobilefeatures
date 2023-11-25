import React from 'react'
import logo from '../images/logo.svg'
const Footer = () => {
  return (
    <div>
    <div className='w-full mt-20 bg-[#F8FAFB] py-16 px-4'>
      <div className='max-w-[1240px] mx-auto flex-cols md:flex justify-between'>
    
        <div>
            <img src={logo} alt="" />
            <p className='md:text-xl mt-4 sm:text-lg  text-gray-400'>This membership will help you plan and <br />execute a variety of projects.</p>
        </div>

        <div className='md:flex '>

            <div className='mt-5 md:mx-8 md:mt-0'>
                <h1 className='md:text-3xl sm:text-2xl text-xl '>Home</h1>
                <ul className=' text-gray-400'>

                <li className='hover:text-[#7083F5] cursor-pointer'>Product</li>
              <li className='hover:text-[#7083F5] mt-1 cursor-pointer'>Pricing</li>
              <li className='hover:text-[#7083F5] mt-1 cursor-pointer'>Business</li>
              <li className='hover:text-[#7083F5] mt-1 cursor-pointer'>Enterprise</li>
                </ul>
            </div>

            <div className='mt-5 md:mx-8 md:mt-0'>
                <h1 className='md:text-3xl sm:text-2xl text-xl '>Home</h1>
                <ul className=' text-gray-400'>

                <li className='hover:text-[#7083F5] cursor-pointer'>Product</li>
              <li className='hover:text-[#7083F5] mt-1 cursor-pointer'>Pricing</li>
              <li className='hover:text-[#7083F5] mt-1 cursor-pointer'>Business</li>
              <li className='hover:text-[#7083F5] mt-1 cursor-pointer'>Enterprise</li>
                </ul>
            </div>
            <div className='mt-5 md:mx-8 md:mt-0'>
                <h1 className='md:text-3xl sm:text-2xl text-xl '>Home</h1>
                <ul className=' text-gray-400'>

                <li className='hover:text-[#7083F5] cursor-pointer'>Product</li>
              <li className='hover:text-[#7083F5] mt-1 cursor-pointer'>Pricing</li>
              <li className='hover:text-[#7083F5] mt-1 cursor-pointer'>Business</li>
              <li className='hover:text-[#7083F5] mt-1 cursor-pointer'>Enterprise</li>
                </ul>
            </div>
            <div className='mt-5 md:mx-8 md:mt-0'>
                <h1 className='md:text-3xl sm:text-2xl text-xl '>Home</h1>
                <ul className=' text-gray-400'>

                <li className='hover:text-[#7083F5] cursor-pointer'>Product</li>
              <li className='hover:text-[#7083F5] mt-1 cursor-pointer'>Pricing</li>
              <li className='hover:text-[#7083F5] mt-1 cursor-pointer'>Business</li>
              <li className='hover:text-[#7083F5] mt-1 cursor-pointer'>Enterprise</li>
                </ul>
            </div>

        </div>

        </div>
        
    </div>
    <div className='w-full  bg-[#7083F5] py-5 px-4 '>
        <div className='max-w-[1240px] mx-auto md:flex md:justify-between'>
            <h2 className='md:text-xl mt-4 sm:text-lg font-semibold   text-gray-200'>© 2025 Appline. All rights reserved</h2>
            <h2 className='md:text-xl mt-4 sm:text-lg font-semibold cursor-pointer  text-gray-200'>Privacy Policy</h2>
            <h2 className='md:text-xl mt-4 sm:text-lg font-semibold cursor-pointer text-gray-200'>Terms and Conditions</h2>
     </div>
    </div>
    </div>
  )
}

export default Footer