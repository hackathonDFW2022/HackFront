import React, { useState } from 'react'
import BeefQ from '../components/FormSteps/BeefQ'
import CarQ from '../components/FormSteps/CarQ'
import ElecQ from '../components/FormSteps/ElecQ'
import RecycleQ from '../components/FormSteps/RecycleQ'
import { useNavigate } from 'react-router-dom'

const GreenForm = () => {
  
  const nav = useNavigate();

  const images = [
    "https://images.pexels.com/photos/12441272/pexels-photo-12441272.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/518950/pexels-photo-518950.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/802221/pexels-photo-802221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  ]
  const questions = [
    <CarQ />,
    <BeefQ />,
    <ElecQ />,
    <RecycleQ />
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
            <img 
              className='rounded object-contain' 
              src={images[step]}/>
          </div>
        </div>
        
        <div className='px-24 py-8 flex place-content-between'>
          {step > 0 &&
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
          <p className='text-slate-500 pl-8 pt-8'>Step {step + 1} of 4</p>
          {
            step < 3 &&
            <button 
              className='py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-green-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-500'
              onClick={() => {
                setStep(step+1)
                }
              }
            >
              Next
            </button>
          }
          {
            step === 3 && 
            <button 
              className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
              onClick={() => {
                nav("/dashboard")
              }}
            >
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Submit!
              </span>
            </button>
          }
        </div>
      </div>
    </div>
  )
}

export default GreenForm