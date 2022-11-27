import React,{useEffect,useState} from 'react'
import configData from "../../config.json"

function SelectData({namaFilter = "Belum diisi",setFilter,filter,field="mt"}) {

    const [daftarData, setDaftarData] = useState([])

    useEffect(() => {
        const url = configData.BASE_URL_DEV+"periodetanam"
        fetch(url).then(res=>res.json()).then(res=>{
            console.log(res)
            setDaftarData(res["data"])
        }).catch(err=>console.log(err))
    }, [])
    
    const handleSelectData = (value) => {
        if(value == "Semua"){
          filter[field] = ""
        }else{
          filter[field] = value
        }
        setFilter(filter)
    }

  return (
    <div>
        <div className='text-sm my-2'>
            Pilih <b>{namaFilter}</b>
      </div>
        <select className='bg-gray-300 text-sm w-full p-2 px-2' onChange={(e)=>handleSelectData(e.target.value)}>
            {daftarData && daftarData.length != 0 && daftarData.map((data,key)=>{
                return <option key={key} value={data["mt"]}>{data["mt"]}</option>
            })}
        </select>
    </div>
  )
}

export default SelectData