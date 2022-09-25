import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Guess from '../components/Guess'

const Results = () => {
  const [loading, setLoading] = useState(true)
  const [phase, setPhase] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 723)
  }, [phase])

  return (
    <>
      <div className='flex flex-col items-center'>
        <div className='my-2 w-[85%] rounded bg-green-100 border-green-200 border-2 flex justify-center'>
          { phase <= 1 ?
            <h1 
              className='py-6 text-6xl font-semibold'>We think you're from { 
              phase == 0 ? "the state of..." : "the city of..."
              }
            </h1> :
            <h1 className='py-6 text-6xl font-semibold'>
              Select your location
            </h1>
          }
        </div>
        
        {loading && 
          <div role="status pt-8">
              <svg aria-hidden="true" class="mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-green-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"></path>
                  <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"></path>
              </svg>
              <span class="sr-only">Loading...</span>
          </div>
        }
        {(!loading && phase == 0 ) && <Guess location={"Texas"} image={"https://images.pexels.com/photos/9102582/pexels-photo-9102582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} />}
        {(!loading && phase == 1 ) && <Guess location={"Dallas"} image={"https://images.pexels.com/photos/45182/dallas-texas-skyline-dusk-45182.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} />}
        { phase <= 1 &&
          <div className='mt-16 rounded border-4 border-slate-300 px-16 py-4 bg-slate-100 flex-col flex '>
          <h3 className='text-3xl'>Are we correct?</h3>
          <div className='flex justify-center'>
            <div class="flex items-center mr-4">
              <input id="default-radio-1" type="radio" value="" name="default-radio" class="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label for="default-radio-1" class="ml-2 text-xl font-medium text-gray-900 dark:text-gray-300">Yes</label>
            </div>
            <div class="flex items-center">
              <input id="default-radio-2" type="radio" value="" name="default-radio" class="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label for="default-radio-2" class="ml-2 text-xl font-medium text-gray-900 dark:text-gray-300">No</label>
              
            </div>
            
          </div>
          <button 
            className='py-2.5 px-5 mr-2 mt-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-green-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'
            onClick={() => {
              setPhase(phase+1)
            }}
          >
            Submit
          </button>
        </div>
        }
      </div>
      
    </>
  )
}

export default Results