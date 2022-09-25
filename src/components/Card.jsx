import React from 'react'
import LineChart from './LineChart'

function Card() {
  return (
    <div className="flex mt-2 justify-center">
        <div className="max-w-10xl rounded overflow-hidden shadow-md">
            <div className="font-bold text-xl mx-2 my-2">
                <LineChart />
            </div>
        </div>
    </div>
  )
}

export default Card