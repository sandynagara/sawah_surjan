import React,{useState} from 'react'
import Image from 'next/image'
import dataBasemap from "../Basemaps/BasemapsList"

function Pengaturan({basemapSelect, setBasemapSelect,basemapActive,setBasemapActive,sawahActive,setSawahActive}) {

    const ItemLayer = ({active,setActive,nama="Belum diisi"}) => {

        const [hover, setHover] = useState(false)

        return <div className='px-3 py-3 text-sm flex justify-between items-center shadow-md w-full rounded-md font-semibold'>
            <div>
                {nama}
            </div>
            <div className='w-12 h-6 relative bg-gray-300 rounded-full overflow-visible cursor-pointer'
                onMouseEnter={()=>setHover(true)}
                onMouseLeave={()=>setHover(false)}
                onClick={()=>{
                    setActive(!active)
                }}
            >
                <div className={`rounded-full  w-6 h-6 absolute duration-200 z-20 ${active ? "bg-sky-600 translate-x-full" : "bg-gray-600"}`}/>
                {hover &&  <div className={`rounded-full w-9 h-9 absolute duration-200 ${active ? "bg-sky-300 translate-x-1/2 mt-[-6px]" : "bg-gray-300  mt-[-6px] ml-[-6px]"}`}/>}
              
            </div>
        </div>
    }

    const ItemBasemap = ({gambar,url,nama}) => {
        return <div 
            className={`p-2 my-2 cursor-pointer  shadow-lg rounded-md flex items-center ${basemapSelect == url && "bg-sky-100 border-l-2 border-sky-600"}`}
            onClick={()=>setBasemapSelect(url)}
        >
        <Image src={gambar} height={80} width={80} className="rounded-md"/>
        <div className='ml-2 w-full text-sm font-medium'>
            {nama}
        </div>
    </div>
    }

  return (
    <div className='bg-white px-3 py-3  scroll-m-0'>
        <div className='text-sm mb-2'>
            Daftar <b>Layer</b>
        </div>
        <ItemLayer active={sawahActive} setActive={setSawahActive} nama="Sawah"/>
        <ItemLayer active={basemapActive} setActive={setBasemapActive} nama="Basemap"/>
        <div className='text-sm my-2'>
            Pilih <b>Basemap</b>
        </div>
        <div className='h-[calc(100vh_-_250px)] overflow-y-scroll sidebar '>
            {dataBasemap.map((data,index)=>{
                return <ItemBasemap gambar={data["gambar"]} url={data["url"]} nama={data["nama"]} key={index}/>
            })}
        </div>
        
    </div>
  )
}

export default Pengaturan