import React, { useState } from 'react'
import Form from './Form'

const HandlerForm = (props) => {
  const [inpo, setInpo] = useState(true)

  const dataHandler = (data) => {
    const saveItem = {
      ...data,
      id: Math.random().toString()
    }

    props.data(saveItem)
  }

  const cancelHandler = () => {
    setInpo(true)
  }
  const cancelHandler2 = () => {
    setInpo(false)
  }


  return (
    <div>
       {inpo ? 
        <div className="p-10 bg-white rounded-lg text-center">
        <button className="bg-green-400 p-3 rounded-lg" onClick={cancelHandler2}>Buat Pengeluaran Baru</button>
        </div> : <Form 
          data={dataHandler}
          cancel={cancelHandler}
        />}

    </div>
  )
}

export default HandlerForm