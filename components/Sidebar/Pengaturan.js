import React from 'react'
import Image from 'next/image'
import dataBasemap from "../Basemaps/BasemapsList"

function Pengaturan() {

    const ItemBasemap = ({gambar,url,nama}) => {
        return <div className='p-2 my-2 cursor-pointer shadow-lg rounded-md flex items-center'>
        <Image src={gambar} height={80} width={80} className="rounded-md"/>
        <div className='ml-2 w-full text-sm'>
            {nama}
        </div>
    </div>
    }

  return (
    <div className='bg-white px-3 py-3  scroll-m-0'>
        <div className='text-sm mb-2'>
            Pilih <b>Basemap</b>
        </div>
        <div className='h-[calc(100vh_-_200px)] overflow-y-scroll sidebar '>
            {dataBasemap.map(data=>{
                return <ItemBasemap gambar={data["gambar"]} nama={data["nama"]}/>
            })}
        </div>
        
    </div>
  )
}

export default Pengaturan