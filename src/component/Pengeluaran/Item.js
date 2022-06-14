import React from 'react'
import Date from './Date'
import { FaTrashAlt } from 'react-icons/fa'

const Item = (props) => {

  const deletHandler = () => {
    props.delet(props.id)
  }

  return (
    <div>
      <div className="grid grid-cols-3 gap-2 justify-items-center  bg-white m-2 p-5 rounded-lg">
        <div className="w-full"><Date date={props.date} /></div>
        <span className="self-center break-all">{props.title}</span>
        <div className="self-center">${props.amount}</div>
        <div className=" col-span-3 scale-150 self-center hover:text-red-500"
        onClick={deletHandler}>
          <FaTrashAlt />
        </div>
      </div>
    </div>
  )
}

export default Item