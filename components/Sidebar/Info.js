import React from 'react'
import InputData from '../Utils/InputData'

function Info() {
  return (
    <div className='bg-white px-3 py-3 h-screen'>
        <div className='text-sm my-2'>
            Pemilik
        </div>
        <InputData/>
        <div className='text-sm my-2'>
            Kelompok Tani
        </div>
        <InputData/>
        <div className='text-sm my-2'>
            Periode Tanam
        </div>
        <InputData/>
        <div className='text-sm mb-2'>
            Kecamatan
        </div>
        <InputData/>
        <div className='text-sm my-2'>
            Desa
        </div>
        <InputData/>
        
    </div>
  )
}

export default Info