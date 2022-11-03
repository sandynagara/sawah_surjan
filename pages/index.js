import Head from 'next/head'
import React,{useRef,useEffect,useState} from 'react'
import Image from 'next/image'
import Peta from '../components/Peta'
import Sidebar from '../components/Sidebar/Sidebar'
import styles from '../styles/Home.module.css'

export default function Home() {

  const [basemapSelect, setBasemapSelect] = useState("https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}")
  const [basemapActive, setBasemapActive] = useState(true)
  const [sawahActive, setSawahActive] = useState(true)

  return (
    <div className='w-screen h-screen'>
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
      />
      <Peta basemapSelect={basemapSelect} basemapActive={basemapActive} sawahActive={sawahActive} />
    </div>
  )
}
