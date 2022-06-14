import React from 'react'
import Item from './Item'

const List = (props) => {

  return (
    <div>
      {props.data.map(item => (
        <Item
        key={item.id} 
        title={item.title}
        date={item.date}
        amount={item.amount}
        delet={props.delet}
        id={item.id}
        />
      ))}
    </div>
  )
}

export default List