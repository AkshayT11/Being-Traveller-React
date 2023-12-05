import React from 'react'

const Features = () => {
  return (
    <div className='main min-h-screen flex flex-col lg:flex-row items-center gap-14 md:mx-32 mx-5 '>
        <div  className='Left-sec w-full lg:w-2/4 '>
            <div className='space-y-4'>

                   <h1 className='text-4xl font-semibold text-center capitalize md:text-start'>Get ready to explore , get ready to experience the beutiful journey</h1>
                    <p className='lg:w-[70%] capitalize '> Enjoy seamless car transfers as you holiday in and around Goa ,Indulge in premium hotel
                         stays and have a memorable holiday </p>
                
            </div>
                {/* image   */}
                <div className='w-full lg:w-3/5 mt-10 lg:ml-14'>
                    <img
                    className='rounded-xl shadow-lg' 
                    src="https://images.pexels.com/photos/2174656/pexels-photo-2174656.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="funImage" />
                </div>
              </div>
            {/* Right-sec  */}
            <div className='w-full  lg:w-2/4 space-y-10'>
                <div className='flex flex-row gap-5'>
                    <div className='w-24 flex flex-row items-center'>
                        <img src="https://cdn-icons-png.flaticon.com/128/2057/2057748.png" alt="icon1" />
                    </div>
                    <div className='space-y-3'>
                        <h1 className='font-semibold text-xl'>Friendly Service</h1>
                        <p className='text-gray'>We will provide excellent service and in cheaper with your trust</p>
                    </div>
                </div>

                <div className='flex flex-row gap-5'>
                    <div className='w-24 flex flex-row items-center'>
                        <img src="https://cdn-icons-png.flaticon.com/128/2854/2854320.png" alt="icon3" />
                    </div>
                    <div className='space-y-3'>
                        <h1 className='font-semibold text-xl'>Affordable Price</h1>
                        <p className='text-gray'>We will provide excellent service and in cheaper with your trust</p>
                    </div>
                </div>

                <div className='flex flex-row gap-5'>
                    <div className='w-24 flex flex-row items-center'>
                        <img src="https://cdn-icons-png.flaticon.com/128/2057/2057748.png" alt="icon1" />
                    </div>
                    <div className='space-y-3'>
                        <h1 className='font-semibold text-xl'>Friendly Service</h1>
                        <p className='text-gray'>We will provide excellent service and in cheaper with your trust</p>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Features