import React from 'react'
import LineChart from './LineChart'

function Card({component}) {
  return (
        <div className="min-w-fit rounded overflow-hidden shadow-md justify-center">
            <div className="font-bold text-xl mx-2 my-2">
                {component}
        </div>
    </div>
  )
}

export default Card