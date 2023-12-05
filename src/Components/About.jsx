import React from 'react'
import { Link } from 'react-scroll'
import Button from '../layouts/Button'

const About = () => {

    const buttonColor = "bg-white"

  return (
    <div className='min-h-screen flex flex-col justify-center lg:flex-row items-center gap-8 bg-darkBackground md:px-32 px-5'>
        <div className='w-full lg:w-2/4 space-y-5'>
            <h1 className='text-white text-4xl capitalize'>At Being Traveller, we are ready to provide with a best trip of your life</h1>
            <p className='text-[#bdbdbd] pb-5'>Your dream vacation awaits, and you ready to grab it</p>

            <Link to='contact' spy={true} smooth={true} duration={500}
             >
                <Button title="Contact Now" backgroundColor={buttonColor}
                    textColor="text-black"
                    hoverColor="hover:bg-[#8482ff] hover:text-white"
                 />
            </Link>
        </div>
        {/* Right section */}
        <div className='w-full lg:w-2/4 '>
            <img
            className=' rounded-md' 
            src="https://images.pexels.com/photos/289326/pexels-photo-289326.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="about_img" />
        </div>
    </div>
  )
}

export default About