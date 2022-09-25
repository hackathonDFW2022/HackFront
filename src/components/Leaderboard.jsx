import React from 'react'

export default function Leaderboard() {
  return (
    <div className='bg-green-400 p-3 m-3 rounded-2xl'>
        <div className="font-bold text-center">
            <h1 className='text-2xl'>Leaderboard</h1>
        </div>
        <div className="flex flex-wrap font-bold border-b-2 border-black/50">
            <div className="text-grey-300 w-4/12 ">USERNAME</div>
            <div className="text-grey-300 w-4/12 ">SCORE</div>
            <div className="text-grey-300 w-4/12 text-s">REGION</div>
        </div>
        <div>
            <div className="flex flex-wrap border-b-2 border-black/50">
                <div className="w-4/12 text-grey-400">juls9301</div>
                <div className="w-4/12 text-grey-400">80%</div>
                <div className="w-4/12 text-grey-400">DFW</div>
            </div>
            <div className="flex flex-wrap border-b-2 border-black/50">
                <div className="w-4/12 text-grey-400">user3421</div>
                <div className="w-4/12 text-grey-400">83%</div>
                <div className="w-4/12 text-grey-400">DFW</div>
            </div>
            <div className="flex flex-wrap border-b-2 border-black/50">
                <div className="w-4/12 text-grey-400">jakobeus</div>
                <div className="w-4/12 text-grey-400">86%</div>
                <div className="w-4/12 text-grey-400">DFW</div>
            </div>
            <div className="flex flex-wrap border-b-2 border-black/50">
                <div className="w-4/12 text-grey-400">kobedevon</div>
                <div className="w-4/12 text-grey-400">87%</div>
                <div className="w-4/12 text-grey-400">DFW</div>
            </div>
            <div className="flex flex-wrap border-b-2 border-black/50">
                <div className="w-4/12 text-grey-400">daytoncf</div>
                <div className="w-4/12 text-grey-400">92%</div>
                <div className="w-4/12 text-grey-400">DFW</div>
            </div>         
        </div>
    </div>
  )
}
