import React,{useContext,useState} from 'react'
import InputFilter from '../Utils/InputFilter'
import SelectData from '../Utils/SelectData'
import { FilterContext } from '../Context/FilterContext';

function Layer() {
    const [petaUrl, setPetaUrl] = useContext(FilterContext);
    const [filter, setFilter] = useState({
        pemilik:"",
        penggarap:"",
        kel_tani:"",
        mt:"",
        jenis:""
    })
    const handleFilterPeta = () => {
        const url = `http://localhost:7800/postgisftw.filtersawah/{z}/{x}/{y}.pbf?pemilikinput=${filter["pemilik"]}&penggarapinput=${filter["penggarap"]}&masatanam=${filter["mt"]}&tanaman=${filter["jenis"]}&kelompoktani=${filter["kel_tani"]}`
        setPetaUrl(url)
    }
  return (
    <div className='bg-white px-3 py-3 h-screen'>
        <InputFilter namaFilter='Pemilik' api='pemilik' field='pemilik' setFilter={setFilter} filter={filter}/>
        <InputFilter namaFilter='Penggarap' api='penggarap' field='penggarap'  setFilter={setFilter} filter={filter}/>
        <InputFilter namaFilter='Kelompok Tani'  api='kelompoktani' field='kel_tani'  setFilter={setFilter} filter={filter}/>
        <SelectData namaFilter='Periode Tanam' setFilter={setFilter} filter={filter}/>
        <InputFilter namaFilter='Tanaman'  api='tanaman' field='jenis'  setFilter={setFilter} filter={filter}/>
        <div className='bg-sky-600 cursor-pointer text-sm p-2 font-medium text-center text-white mt-4 rounded-md'
            onClick={handleFilterPeta}
        >
            Terapkan
        </div>
    </div>
  )
}

export default Layer