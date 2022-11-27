import React,{useState} from 'react'
import Image from 'next/image'
import {AiOutlineLogin,AiFillSetting,AiFillInfoCircle} from "react-icons/ai";
import {BsFillLayersFill} from "react-icons/bs"
import Layer from './Layer';
import Pengaturan from './Pengaturan';
import Info from './Info';

function Sidebar({basemapSelect,setBasemapSelect,setBasemapActive,basemapActive,sawahActive,setSawahActive,info}) {

    const [menuSelect, setMenuSelect] = useState("Layer")

    const ItemMenu = ({icon,nama="belum diisi",menuSelect,setMenuSelect}) => {
        return <div className='flex items-center p-2 cursor-pointer'
            onClick={()=>setMenuSelect(nama)}
        >
            {icon}
            <div className={`ml-2 font-semibold text-sm ${menuSelect == nama ? "text-sky-700" : "text-gray-500" }  `}>
                {nama}
            </div>
        </div>
    }

  return (
    <div className='w-[300px] p-1 h-screen fixed z-10 bg-gray-200 top-0 left-0'>
        <div className='flex px-3 py-6 mb-1 rounded-md bg-white justify-between items-center'>
            <div className='flex items-center w-[200px]'>
                <Image src={"/logo.png"} width="40px" height="50px"/>
                <div className='font-bold text-sm ml-2 text-sky-800'>
                    Dinas Pertanian Kabupaten Kulon Progo
                </div>
            </div>
            <div className='cursor-pointer'>
                <AiOutlineLogin size={25} color="rgb(7,89,133)"/>
            </div>    
        </div>
        <div className='py-2 bg-white mb-1 flex rounded-md justify-around'>
            <ItemMenu 
                icon={<BsFillLayersFill color={`${menuSelect == "Layer" ? "rgb(7,89,133)" : "rgb(173,165,168)"}`} size={20}/>}
                nama="Layer"
                menuSelect = {menuSelect}
                setMenuSelect = {setMenuSelect}
            />
            <ItemMenu 
                icon={<AiFillSetting color={`${menuSelect == "Pengaturan" ? "rgb(7,89,133)" : "rgb(173,165,168)"}`} size={20}/>}
                nama="Pengaturan"
                menuSelect = {menuSelect}
                setMenuSelect = {setMenuSelect}
            />
            <ItemMenu icon={<AiFillInfoCircle color={`${menuSelect == "Info" ? "rgb(7,89,133)" : "rgb(173,165,168)"}`} size={20}/>}
                nama="Info"
                menuSelect = {menuSelect}
                setMenuSelect = {setMenuSelect}
            />
        </div>
        <div>
            {menuSelect == "Layer" && <Layer/>}
            {menuSelect == "Pengaturan" && 
                <Pengaturan 
                    basemapSelect={basemapSelect} 
                    setBasemapSelect={setBasemapSelect} 
                    setBasemapActive={setBasemapActive} 
                    basemapActive={basemapActive}
                    sawahActive={sawahActive}
                    setSawahActive={setSawahActive}
            />}
            {menuSelect == "Info" && <Info info={info}/>}
        </div>
    </div>
  )
}

export default Sidebar