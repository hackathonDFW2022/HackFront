import React from 'react'

const Breakdown = () => {
  return (
    <div className=' w-[85%] rounded h-[50vh] flex bg-slate-100'>
      <div className='w-[50%] flex flex-col pl-8 pt-8'>
        <h2 className='text-8xl font-bold text-green-900'>87%</h2>
        <p className='text-3xl mt-4 inline-flex'>
          You output 6.2 tons of CO_2 emissions on average every year.
        </p>
      </div>
      <div className='w-[50%] p-2'>
        <img 
          className='object-cover w-full h-full rounded'
          src={"https://images.pexels.com/photos/1757363/pexels-photo-1757363.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} 
          alt="forest floor shot" 
        />
      </div>
    </div>
  )
}

export default Breakdown