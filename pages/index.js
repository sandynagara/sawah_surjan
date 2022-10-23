import Head from 'next/head'
import Image from 'next/image'
import Peta from '../components/Peta'
import Sidebar from '../components/Sidebar/Sidebar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className='w-screen h-screen'>
      <Sidebar/>
      <Peta/>
    </div>
  )
}
