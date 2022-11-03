import React from 'react'
import SelectData from '../Utils/SelectData'

function Layer() {
  return (
    <div className='bg-white px-3 py-3 h-screen'>
        <div className='text-sm mb-2'>
            Pilih <b>Kecamatan</b>
        </div>
        <SelectData/>
        <div className='text-sm my-2'>
            Pilih <b>Desa</b>
        </div>
        <SelectData/>
        <div className='text-sm my-2'>
            Pilih <b>Jenis Sawah</b>
        </div>
        <SelectData/>
        <div className='text-sm my-2'>
            Pilih <b>Tanaman</b>
        </div>
        <SelectData/>
        <div className='bg-sky-600 cursor-pointer text-sm p-2 font-medium text-center text-white mt-4 rounded-md'>
            Terapkan
        </div>
    </div>
  )
}

export default Layer