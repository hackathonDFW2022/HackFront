import React from 'react'

function Card({text}) {
  return (
        <div className="rounded overflow-hidden shadow-md justify-center">
            <div className="font-bold text-xl">
                {text}
            </div>
    </div>
  )
}

export default Card