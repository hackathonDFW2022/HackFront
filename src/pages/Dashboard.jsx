import React from 'react'


import {BsLightbulb} from "react-icons/bs"
const Dashboard = () => {
  return (

    <>
        
        <div className="border flex flex-wrap">
          <div className="w-4/12 border ">
            Results
          </div>
          <div className="w-4/12 border ">
            Leaderboard
          </div>
          <div className="w-4/12 border ">
            <div className="flex justify-center items-center bg-green-400 m-3 p-3 rounded-xl">
              <div className="">
                <h3 className='font-bold'>Here comes the sun</h3>
                <p>During daylight hours, switch off artificial lights and use windows and skylights to brighten your home.</p>
              </div>
              <BsLightbulb className='text-6xl'/>
            </div>
            <div className="flex justify-center items-center bg-green-400 m-3 p-3 rounded-xl">
              <div className="">
                <h3 className='font-bold'>Caulk air leaks</h3>
                <p>Using low-cost caulk to seal cracks and openings in your home keeps warm air out -- and cash in your wallet.</p>
              </div>
              <BsLightbulb className='text-6xl'/>
            </div>
          </div>
          <div className="w-4/12 flex flex-col justify-center items-center">
            <h1 className='text-2xl font-bold'>Recommended Friends</h1>
            <div className=" flex px-16 py-4 justify-between gap-24">
              <div className="flex flex-col justify-center items-center">
                <div className="inline-flex overflow-hidden relative justify-center items-center w-24 h-24 bg-green-500 rounded-full">
                  <span className="text-5xl text-green-700">JG</span>
                </div>
                <h2 className='underline'>Julian Garcia</h2>
                <h3 className='font-bold text-sm'>Add+</h3>
              </div>
              <div className="flex flex-col justify-center items-center">
                <div className="inline-flex overflow-hidden relative justify-center items-center w-24 h-24 bg-green-500 rounded-full">
                  <span className="text-5xl text-green-700">DF</span>
                </div>
                <h2 className='underline'>Dayton Forehand</h2>
                <h3 className='font-bold text-sm'>Add+</h3>
              </div>
              <div className="flex flex-col justify-center items-center">
                <div className="inline-flex overflow-hidden relative justify-center items-center w-24 h-24 bg-green-500 rounded-full">
                  <span className="text-5xl text-green-700">JB</span>
                </div>
                <h2 className='underline'>Jacob Benz</h2>
                <h3 className='font-bold text-sm'>Add+</h3>
              </div>
          </div>
          </div>
          <div className="w-4/12 border ">Other</div>
          <div className="w-4/12 border ">other</div>
        </div>
    </>

  )
}

export default Dashboard