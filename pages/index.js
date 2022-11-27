import Head from 'next/head'
import React,{createContext, useContext,useState} from 'react'
import Peta from '../components/Peta'
import Sidebar from '../components/Sidebar/Sidebar'
import {FilterContext} from "../components/Context/FilterContext"

export default function Home() {

  const [basemapSelect, setBasemapSelect] = useState("https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}")
  const [basemapActive, setBasemapActive] = useState(true)
  const [sawahActive, setSawahActive] = useState(true)
  const [info, setInfo] = useState(false)
  const [petaUrl, setPetaUrl] = useState("http://localhost:7800/postgisftw.filtersawah/{z}/{x}/{y}.pbf?pemilikinput=&penggarapinput=&masatanam=&tanaman=&kelompoktani=");

  return (
    <div className='w-screen h-screen'>
      <FilterContext.Provider value={[petaUrl, setPetaUrl]}>
        <Head>
          <title>Dashboard Sawah Sarjan</title>
          <link rel="shortcut icon" href={"/logo.png"}  />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Sidebar 
          setBasemapSelect={setBasemapSelect} 
          basemapSelect={basemapSelect} 
          basemapActive={basemapActive} 
          setBasemapActive={setBasemapActive}
          setSawahActive={setSawahActive}
          sawahActive={sawahActive}
          info = {info}
        />
        <Peta basemapSelect={basemapSelect} basemapActive={basemapActive} sawahActive={sawahActive} setInfo={setInfo}/>
      </FilterContext.Provider>
    </div>
  )
}
