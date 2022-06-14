import React, { useState, useEffect } from 'react'
import HandlerForm from './component/PengeluaranForm/HandlerForm'
import Display from './component/Pengeluaran/Display'
import Data from './Data'

const App = () => {
  const [pengeluaran, setPengeluaran] = useState(Data)

  // BUG when adding feature save to localstorage
  // useEffect(() => {
  //   localStorage.setItem('a', JSON.stringify(pengeluaran))
  // }, [pengeluaran])

  const pengeluaranHandler = (item) => {
    setPengeluaran(tom => (
      [item, ...tom]
    ))
  }
  console.log(pengeluaran)

  const deletHandler = (item) => {
    setPengeluaran(tom => {
      const updateItem = tom.filter(om => om.id !== item)
      return updateItem
    })
  }

  return (
      <div>
        <div className="p-5 bg-slate-600/90 text-white font-mono font-bold text-center shadow-lg fixed top-0 w-full backdrop-filter backdrop-blur-lg">
        <div className="w-full text-white">
          <h1 className="text-6xl tracking-widest">Catpen</h1>
          <h4 className="text-slate-300">Catatan Pengeluaran</h4>
          </div>
        </div>
        <div className="m-5 mt-40 p-5 bg-slate-600 rounded-lg border-2 border-black">
        <HandlerForm
          data={pengeluaranHandler}
        />
        </div>
        <div className="m-2 sm:mt-20 p-5 border-2 border-black rounded-lg bg-slate-600 sm:w-3/4 sm:mx-auto">
          {pengeluaran.length > 0 ? <Display 
            data={pengeluaran}
            delet={deletHandler}
          /> : <div className="p-10 bg-white rounded-lg text-center">Belum ada list pengeluaran, coba buat baru</div> }
      </div>
      </div>
    )
}

export default App;
