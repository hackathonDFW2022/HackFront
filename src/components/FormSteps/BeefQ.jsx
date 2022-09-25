import React from 'react'

const BeefQ = () => {
  return (
    <>
      <div className='flex flex-col w-1/2 justify-center'>
        <h2 className='underline underline-offset-4 mb-8 font-bold text-2xl'>
          How do your flights impact the climate?
        </h2>
        <div className="mb-6 max-w-md">
          <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Number of yearly flights with travel time less than four hours</label>
          <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" placeholder="2" required="" />
        </div>
        <div className="mb-6 max-w-md">
          <label for="MPG" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Number of yearly flights with travel time greater than four hours</label>
          <input type="text" id="MPG" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" placeholder="4" required="" />
        </div>
      </div>
    </>
  )
}

export default BeefQ