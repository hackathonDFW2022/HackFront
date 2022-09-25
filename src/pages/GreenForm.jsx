import React, { useState } from 'react'
import BeefQ from '../components/FormSteps/BeefQ'
import CarQ from '../components/FormSteps/CarQ'
import ElecQ from '../components/FormSteps/ElecQ'

const GreenForm = () => {


  const questions = [
    <CarQ />,
    <BeefQ />,
    <ElecQ />
  ]

  const [step, setStep] = useState(0)

  return (
    <div className='px-64 mt-8 bg-slate-200 min-h-screen min-w-screen'>
      <div className='bg-slate-200 flex-col justify-center items-center rounded'>
        <div className=''>
          
        </div>
        <div className='p-8 flex'>
          {questions[step]}
          <div className='w-1/2 pl-8'>
            <img className='rounded' src='https://thumbs.dreamstime.com/b/traffic-jam-rows-cars-21795079.jpg'/>
          </div>
        </div>
        
        <div className='px-24 py-8 flex place-content-between'>
          {
            <button 
              className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-green-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-500"
              onClick={() => {
                  setStep(step-1)
                }
              }
            >
              Back
            </button>
          }
          <button 
            className='py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-green-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-500'
            onClick={() => {
              setStep(step+1)
              }
            }
          >
            Next
          </button>
        </div>
        <div className='px-24 py-8 flex justify-center'>
          <p className='text-slate-500 pl-8 pt-8'>Step {step + 1} of 4</p>
        </div>
      </div>
    </div>
  )
}

export default GreenForm