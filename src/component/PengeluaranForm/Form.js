import React, { useState } from 'react'

const Form = (props) => {
  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState('')
  const [date, setDate] = useState('')
  const [inpo, setInpo] = useState(false)
  const [success, setSuccess] = useState(false)


    const baruHandler = (event) => {
        event.preventDefault();
        if(title.length <= 100 && amount.length <= 0 && date.length <= 0) {
          setInpo(true)
        } else if(title.length <= 0 && amount.length <= 100 && date.length <= 0) {
          setInpo(true)
        }else if(title.length <= 0 && amount.length <= 0 && date.length <= 100) {
          setInpo(true)
        } else if(title.length > 0 && amount.length > 0 && date.length <= 0) {
          setInpo(true)
        } else {
          const saveItem = {
            title: title,
            amount: +amount,
            date: new Date(date)
          }
          props.data(saveItem)
          setTitle('')
          setAmount('')
          setDate('')
          setInpo(false)
          setSuccess(true)
        }
    }

    window.addEventListener('click', () => {
      setSuccess(false)
    })

    const berhasil = ( <div className="m-2 p-5 bg-green-300 text-black text-center rounded-lg">Berhasil menambahkan data</div> )

    const titleHandler = (event) => {
      setTitle(event.target.value)
    }

    const amountHandler = (event) => {
      setAmount(event.target.value)
    }

    const dateHandler = (event) => {
      setDate(event.target.value)
    }


  return (
    <div>
        <form className="grid grid-cols-2 gap-5" onSubmit={baruHandler}>
            <input type="text" className="border-2 border-black rounded-lg py-2 px-3" placeholder="Judul..." value={title} onChange={titleHandler}/>

            <input type="number" className="border-2 border-black rounded-lg py-2 px-3" placeholder="Nominal..." min="0.01" step="0.01" value={amount} onChange={amountHandler}/>

            <input type="date" className="border-2 border-black rounded-lg py-2 px-3" min="2019-01-01" max="2022-12-31" value={date} onChange={dateHandler}/>

            <button className="bg-green-400 p-2 rounded-lg border-2 border-black">Buat Pengeluaran</button>
            {inpo && <div className="p-5 rounded-lg text-center col-span-2 bg-red-400 border-2 border-white text-white">
            <h1>Harap masukan input dengan benar</h1>
          </div>}
        </form>
        <button className="w-full mt-2 col-span-2 bg-red-400 p-2 rounded-lg border-2 border-black" onClick={props.cancel}>Batal</button>
        {success && berhasil}
    </div>
  )
}

export default Form