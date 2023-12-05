import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";



const Footer = () => {
  return (
    <div className='bg-darkBackground text-white'>
        <div className='flex flex-col md:flex-row justify-between p-8 md:mx-32 px-5'>
            <div className='w-full md:w-1/4'>
                <h1 className='text-xl font-bold pb-4'>Being Traveller</h1>
                <p className='text-sm'>With Our Egency You can experience best Tourist destinations and our hospitality</p>
            </div>
            <div>
                <h1 className='text-xl font-semibold pt-5 pb-4  md:pt-0'>Destination</h1>
                <nav className='flex flex-col gap-2'>
                    <a className='hover:text-brightColor transition-all cursor-pointer' href="/">France, Paris</a>
                    <a className='hover:text-brightColor transition-all cursor-pointer' href="/">Norway</a>
                    <a  className='hover:text-brightColor transition-all cursor-pointer'href="/">India North-Ease</a>
                </nav>
            </div>
            <div>
                <h1 className='text-xl font-semibold pt-5 pb-4  md:pt-0'>About</h1>
                <nav className='flex flex-col gap-2'>
                    <a className='hover:text-brightColor transition-all cursor-pointer' href="/">Contact Us</a>
                    <a className='hover:text-brightColor transition-all cursor-pointer' href="/">Testimonial</a>
                    <a className='hover:text-brightColor transition-all cursor-pointer' href="/">Rating</a>
                </nav>
            </div>
            <div>
                <h1 className='font-medium text-xl pb-4 pt-5 md:pt-0'>Follow Us</h1>
                <nav className='flex flex-col md:items-center gap-2'>
                <FaFacebookSquare size={25} className='hover:text-brightColor transition-all cursor-pointer' />
                <FaInstagramSquare size={25} className='hover:text-brightColor transition-all cursor-pointer' />
                <FaXTwitter size={25} className='hover:text-brightColor transition-all cursor-pointer' />
                </nav>
            </div>
        </div>
        <div>
            <p className='text-center py-4'>
                @copyright developed by
                <span className='text-red-400 mx-1 font-semibold'>Ak Programmer</span> |
                All Rights Reserved
            </p>
        </div>
    </div>
  )
}

export default Footer