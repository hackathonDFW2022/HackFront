import React from 'react'
import Card from '../components/Card'
import LineChart from '../components/LineChart'
const Dashboard = () => {
  return (
    <div className="flex mt-2">
        <Card component={<LineChart/>}/>

    </div>
  )
}

export default Dashboard