import React from 'react'

const RecycleQ = () => {
  return (
    <>
      <div className='flex flex-col w-1/2 justify-center'>
        <h2 className='underline underline-offset-4 mb-8 font-bold text-2xl'>
          How do your recycling habits impact the climate?
        </h2>
        <div className="mb-6 max-w-md">
          <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Do you recycle paper?</label>
          <input type="checkbox" className='w-8 h-8 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'/>
        </div>
        <div className="mb-6 max-w-md">
          <label for="MPG" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Do you recycle plastic?</label>
          <input type='checkbox' className='w-8 h-8 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'/>
        </div>
        <div className="mb-6 max-w-md">
          <label for="MPG" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Do you recycle aluminum and tin?</label>
          <input type='checkbox' className='w-8 h-8 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'/>
        </div>
      </div>
    </>
  )
}

export default RecycleQ