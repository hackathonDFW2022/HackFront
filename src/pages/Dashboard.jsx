import React from 'react'
import Card from '../components/Card'
import LineChart from '../components/LineChart'

const text = [
    "Based on your Results "
]
const Dashboard = () => {
  return (
    <>
        <div className="flex gap-20 justify-center">
            <Card text={"Results"}/>
            <Card text={"Summary"}/>
            <Card text={"Recommendations"}/>
        </div>
        <div className='flex gap-20 justify-center'>
            <Card text={"Leaderboard"}/>
            <Card text={"Friends"}/>
        </div>
        <div className="flex gap-20 justify-center">
            <Card text={"Suggestions"}/>
        </div>
    </>
  )
}

export default Dashboard