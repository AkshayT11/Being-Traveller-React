import React from 'react'
import Button from './Button'

const DestinationCard = (props) => {
    const backgroundColor = `bg-brightColor`

  return (
    <div className='w-full lg:w-2/6 cursor-pointer hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
        <img className='rounded-t-lg w-full' src= {props.img} alt="cardImg" />
        <div className='p-5 space-y-3 bg-[#f2f2f2] rounded-b-lg '>
            <h2 className='text-xl text-center font-medium'>{props.title}</h2>
            <p className='text-sm font-semibold text-gray-400'>{props.para}</p>

            <div className='flex flex-row justify-center'>
                <Button title="Book Ticket" backgroundColor={backgroundColor} />
            </div>
        </div>
    </div>

  )
}

export default DestinationCard