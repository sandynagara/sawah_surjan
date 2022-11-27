import React,{useState} from 'react'
import configURL from "../../config.json"


function InputFilter({namaFilter = "Belum diisi",api = "",field = "",setFilter,filter}) {

  const [inputValue, setInputValue] = useState("Semua")
  const [daftarData, setDaftarData] = useState([])

  const changeValueHandle = (value) => {
    setInputValue(value)
    const url = configURL.BASE_URL_DEV + `${api}/${value}`
    fetch(url).then(res=>res.json()).then(res=>{
      setDaftarData(res["data"])
    }).catch(err=>console.log(err))
  }
  
  const handleSelectData = (value) => {
    if(value == "Semua"){
      filter[field] = ""
    }else{
      filter[field] = value
    }
    setFilter(filter)
    setInputValue(value)
    setDaftarData([])
  }

  return (
    <div className='relative'>
      <div className='text-sm my-2'>
            Pilih <b>{namaFilter}</b>
      </div>
      <input className='bg-gray-300 text-sm w-full p-2 px-2' value={inputValue} onChange={(value)=>changeValueHandle(value.target.value)}/>
      <div className='absolute bg-white   w-full z-[999] border-2 border-gray-300 max-h-60 overflow-y-scroll'>
        {daftarData && daftarData.length != 0 && daftarData.map((data,index)=>{
          return  (
          <div className='bg-white text-sm w-full p-2 cursor-pointer hover:bg-gray-300' key={index} onClick={()=>handleSelectData(data[field])}>
            {data[field]}
          </div> 
          )
        })}
        
      </div>
    </div>
    
  )
}

export default InputFilter