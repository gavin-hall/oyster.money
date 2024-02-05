import React from 'react'
// import Image from 'next/image'
// import Link from 'next/link'

interface StatNetWorthProps {
  netWorth: string
  date: string
  percentageChange: string
  changeLabel: string
}

const StatNetWorth: React.FC<StatNetWorthProps> = ({ netWorth, date, percentageChange, changeLabel }) => {
  return (
    <div className=" bg-gray-900/20 rounded-2xl border-gray-400/20 border p-8">
      <div className="uppercase tracking-widest font-semibold text-sm font-secondary text-white">Net worth</div>
      <div className="mt-2 text-4xl font-secondary font-light text-white">{netWorth}</div>
      <div className="text-sm">{date}</div>
      <div className="mt-8">
        <div className="text-green-500 text-2xl font-secondary font-light">{percentageChange}</div>
        <div className="text-sm">{changeLabel}</div>
      </div>
    </div>
  )
}

export default StatNetWorth
