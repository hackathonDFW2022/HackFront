import React from 'react'

const Guess = ({location, image}) => {
  return (
    <div className=' w-[85%] rounded h-[50vh] flex'>
      <div className='w-[50%] flex justify-center items-center'>
        <h2 className='text-8xl'>{location}!</h2>
      </div>
      <div className='w-[50%]'>
        <img 
          className='object-cover w-full h-full rounded'
          src={image} 
          alt="" 
        />
      </div>
    </div>
  )
}

export default Guess