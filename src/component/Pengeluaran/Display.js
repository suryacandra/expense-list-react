import React, { useState } from 'react'
import List from './List'
import Filter from './Filter'

const Display = (props) => {
  const [filter, setFilter] = useState('')
  const [all, setAll] = useState(true)

  const filterHandler = (filter) => {
    if(all){
      setFilter(filter)
      setAll(false)
    } else if(filter === '') {
      setFilter(filter)
      setAll(true)
    } else {
      setFilter(filter)
      setAll(false)
    }
  }

  const filterHandler2 = () => {
      setAll(true)
      setFilter('Pilih')
  }

  const filteredData = props.data.filter(item => (
    item.date.getFullYear().toString() === filter
  ))

  return (
    <div>
      <Filter
      selected={filter}
      filterHandler={filterHandler}
      />
      {all ? null : <button onClick={filterHandler2} className="p-2 m-2 bg-green-300 rounded-lg">Lihat Semua Pengeluaran</button>}
      {/* <div className="grid grid-cols-3 gap-2 place-items-center m-1 p-2 bg-transparent border-black border-2">
            <span>Tanggal</span>
            <span>Judul</span>
            <span>Harga</span>
            <div className="col-span-3">
            {all ? 
      <List data={props.data} delet={props.delet}/>
       : 
       (filteredData.length > 0 ? 
       <List data={filteredData} delet={props.delet}/>
        : <div className="p-5 m-2 bg-white rounded-lg text-center">
          Tidak ada yang ditampilkan</div> )
       }
            </div>
          </div> */}
      {all ? 
      <List data={props.data} delet={props.delet}/>
       : 
       (filteredData.length > 0 ? 
       <List data={filteredData} delet={props.delet}/>
        : <div className="p-5 m-2 bg-white rounded-lg text-center">
          Tidak ada yang ditampilkan</div> )
       }
    </div>
  )
}

export default Display