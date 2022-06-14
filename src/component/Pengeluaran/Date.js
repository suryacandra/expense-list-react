import React from 'react'

const Date = (props) => {
  const day = props.date.toLocaleString('en-US', { day : '2-digit'})
  const month = props.date.toLocaleString('en-US', { month : 'long'})
  const year = props.date.getFullYear()
  return (
    <div>
      <div className="flex flex-col p-5 bg-slate-300 rounded-lg w-[100px] text-center">
        <span>{year}</span>
        <span>{month}</span>
        <span>{day}</span>
      </div>
    </div>
  )
}

export default Date