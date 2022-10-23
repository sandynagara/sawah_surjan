import React from 'react'
import InputData from '../Utils/InputData'

function Layer() {
  return (
    <div className='bg-white px-3 py-3 h-screen'>
        <div className='text-sm mb-2'>
            Pilih <b>Kecamatan</b>
        </div>
        <InputData/>
        <div className='text-sm my-2'>
            Pilih <b>Jenis Sawah</b>
        </div>
        <InputData/>
        <div className='text-sm my-2'>
            Pilih <b>Tanaman</b>
        </div>
        <InputData/>
        <div className='bg-sky-600 cursor-pointer text-sm p-2 font-medium text-center text-white mt-4 rounded-md'>
            Terapkan
        </div>
    </div>
  )
}

export default Layer