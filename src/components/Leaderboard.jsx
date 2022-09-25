import React from 'react'

export default function Leaderboard() {
  return (
    <div>
        <div className="font-bold">
            Leaderboard
        </div>
        <div className="flex flex-wrap">
            <div className="text-grey-300 w-4/12 text-sm">USERNAME</div>
            <div className="text-grey-300 w-4/12 text-sm">SCORE</div>
            <div className="text-grey-300 w-4/12 text-sm">REGION</div>
        </div>
        <div>
            <div className="flex flex-wrap">
                <div className="w-4/12 text-grey-400">juls9301</div>
                <div className="w-4/12 text-grey-400">87%</div>
                <div className="w-4/12 text-grey-400">Texas</div>
            </div>
            <div className="flex flex-wrap">
                <div className="w-4/12 text-grey-400">user3421</div>
                <div className="w-4/12 text-grey-400">87%</div>
                <div className="w-4/12 text-grey-400">Texas</div>
            </div>
            <div className="flex flex-wrap">
                <div className="w-4/12 text-grey-400">jakobeus</div>
                <div className="w-4/12 text-grey-400">87%</div>
                <div className="w-4/12 text-grey-400">Texas</div>
            </div>
            <div className="flex flex-wrap">
                <div className="w-4/12 text-grey-400">kobedevon</div>
                <div className="w-4/12 text-grey-400">87%</div>
                <div className="w-4/12 text-grey-400">Texas</div>
            </div>
            <div className="flex flex-wrap">
                <div className="w-4/12 text-grey-400">daytoncf</div>
                <div className="w-4/12 text-grey-400">87%</div>
                <div className="w-4/12 text-grey-400">Texas</div>
            </div>         
        </div>
    </div>
  )
}
