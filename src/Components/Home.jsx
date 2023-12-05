import React from 'react'
import Button from '../layouts/Button'
import { Link } from 'react-scroll'

const Home = () => {

    //button color
    const buttonColor = `bg-yellow-300`

  return (
    <div className='flex flex-col min-h-[80vh] gap-10 lg:min-h-[90vh] justify-center md:mx-32 mx-5 lg:flex-row items-center'>
        <div className='Left-sec flex p-2 flex-col text-center lg:text-start gap-4'>
            <h1 className='lg:text-5xl text-4xl font-bold leading-tight'>Discover the best destinations</h1>
            <p>With Our Egency You can experience best Tourist destinations and our hospitality</p>
            <div className='lg:pl-24'>
                <Link to='destination' spy={true} smooth={true} duration={500} >
                <Button title="Destinations" backgroundColor={buttonColor} />
                </Link>
            </div>
        </div>
        {/* image */}
        <div className='mt-10  lg:mt-0 w-full lg:w-4/5'>
            <img
            className='rounded-md '
             src="https://images.pexels.com/photos/2734521/pexels-photo-2734521.jpeg?auto=compress&cs=tinysrgb&w=600" alt="hero" />
        </div>
    </div>
  )
}

export default Home