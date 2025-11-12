import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        {/* ---------- Left Section ---------*/}
        <div>
          <img className='mb-5 w-40' src={assets.logo} alt=""/>
          <p className='w-full md:w2/3 text-gray-600 leading-6'>
            MediConnect is a modern healthcare platform designed to simplify the connection between patients and doctors. It allows users to easily search for trusted medical professionals, view their profiles, specialties, and availability, and book appointments online with just a few clicks. The platform aims to bridge the gap between healthcare providers and patients by offering a smooth, transparent, and efficient booking experience. MediConnect not only enhances accessibility to quality healthcare but also helps doctors manage appointments effectively. With its user-friendly interface and responsive design, MediConnect ensures that healthcare is just a tap away for everyone.
          </p>
        </div>
        {/* ---------- Center Section ---------*/}
        <div>
           <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        {/* ---------- Right Section ---------*/}
        <div>
         <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
         <ul className='flex flex-col gap-2 text-gray-600'>
          <li>+0-000-000-000</li>
          <li>mediconnect@gmail.com</li>
         </ul>
        </div>
      </div>
      {/* -----------Cppyright Text----------- */}
      <div>
        <hr/>
        <p className='py-5 text-sm text-center'>
          Copyright 2024 @ Greatstack.dev - All Right Reserved.
        </p>
      </div>
    </div>
  )
}

export default Footer