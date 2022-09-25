import React from 'react'

const CarQ = () => {
  return (
    <>
      <div className='flex flex-col w-1/2 justify-center'>
        <h2 className='underline underline-offset-4 mb-8 font-bold text-xl'>
          How does your vehicle usage impact the climate?
        </h2>
        <div className="mb-6 max-w-md">
          <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Weekly Miles Driven</label>
          <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" placeholder="215" required="" />
        </div>
        <div className="mb-6 max-w-md">
          <label for="MPG" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Vehicle MPG</label>
          <input type="text" id="MPG" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" placeholder="23.8" required="" />
        </div>
        
      </div>
      
      
    </>
  )
}

export default CarQ