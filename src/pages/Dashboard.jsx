import React from 'react'
import Card from '../components/Card'
import Leaderboard from '../components/Leaderboard'
import LineChart from '../components/LineChart'

const text = [
    "Based on your Results "
]
const Dashboard = () => {
  return (

    <>
        <div className="border flex flex-wrap">
          <div className="w-4/12 border ">
            Results
          </div>
          <div className="w-4/12 border ">
            <Leaderboard/>
          </div>
          <div className="w-4/12 border ">
            Tips
          </div>
          <div className="w-4/12 border ">Recomended Friends</div>
          <div className="w-4/12 border ">Other</div>
          <div className="w-4/12 border ">other</div>
        </div>
    </>

  )
}

export default Dashboard