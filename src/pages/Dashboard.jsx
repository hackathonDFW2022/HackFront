import React from 'react'
import Leaderboard from "../components/Leaderboard"


import {BsLightbulb} from "react-icons/bs"
const Dashboard = () => {
  return (

    <div className='bg-green-100 h-screen'>
        <div className="border flex flex-wrap">
          <div className="w-4/12 flex flex-col items-center ">
            <h1 className='text-2xl font-bold'>Results</h1>
            <div className="flex justify-between items-center">
              <div className="flex justify-center w-6/12 items-center">
                <h3 className='text-green-700 text-9xl'>87%</h3>
              </div>
              <p className='text-green-800 text-xl'>Your carbon footprint is slighty below average!</p>
            </div>
          </div>
          <div className="w-4/12 border text-center ">
             <h1 className='text-2xl font-bold'>Breakdown</h1>
             <div className="pt-4 text-xl m-4">
              <p>Your key carbon emmiters are <span className='font-bold'>Electricity & Vehicle Emmissions</span> which contribute 50% of your carbon footprint</p>
             </div>
          </div>
          <div className="w-4/12 border ">
            <Leaderboard/>
          </div>
          <div className="w-6/12 flex flex-col justify-center items-center">
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
                <h2 className='underline'>Dayton Forehan</h2>
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
          
          <div className="w-6/12 border ">
            <div className="flex justify-between items-center bg-green-400 m-3 p-3 rounded-xl">
              <div className="">
                <h3 className='font-bold'>Here comes the sun</h3>
                <p>During daylight hours, switch off artificial lights and use windows and skylights to brighten your home.</p>
              </div>
              <BsLightbulb className='text-6xl'/>
            </div>
            
            <div className="flex justify-between items-center bg-green-400 m-3 p-3 rounded-xl">
              <div className="">
                <h3 className='font-bold'>Caulk air leaks</h3>
                <p>Using low-cost caulk to seal cracks and openings in your home keeps warm air out -- and cash in your wallet.</p>
              </div>
              <BsLightbulb className='text-6xl'/>
            </div>
          </div>
          
        </div>
    </div>

  )
}

export default Dashboard