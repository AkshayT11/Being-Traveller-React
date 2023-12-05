import React from 'react'

const Button = (props) => {
  return (
    <div>
        <button className={`${props.backgroundColor} text-black rounded-full py-2 px-8 font-medium hover:bg-[#8482ff] hover:text-white transition-all `}>
            {props.title}
        </button>
    </div>
  )
}

export default Button