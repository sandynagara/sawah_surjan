import React from 'react'
import InputData from '../Utils/InputData'

function Info({info}) {

  return (
    <div className='bg-white px-3 py-3 h-screen'>
        <div className='text-sm my-2'>
            Pemilik
        </div>
        <InputData value={info["pemilik"]}/>
        <div className='text-sm my-2'>
            Penggarap
        </div>
        <InputData value={info["penggarap"]}/>
        <div className='text-sm my-2'>
            Kelompok Tani
        </div>
        <InputData value={info["kel_tani"]}/>
        <div className='text-sm my-2'>
            Periode Tanam
        </div>
        <InputData value={info["mt"]}/>
        <div className='text-sm my-2'>
            Tanaman
        </div>
        <InputData value={info["jenis"]}/>
    </div>
  )
}

export default Info