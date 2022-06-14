import React from 'react'

const Filter = (props) => {

  const filterHandler = (event) => {
    props.filterHandler(event.target.value);
  }

  return (
    <div>
      <div className="flex flex-col items-center my-5 p-3 bg-slate-300 rounded-lg">
        <h1 className="text-black text-md">Tampilkan berdasarkan tahun</h1>
        <select value={props.selected} onChange={filterHandler} className="px-5 rounded-lg border-2 border-black">
          <option value="">Semuanya</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  )
}

export default Filter