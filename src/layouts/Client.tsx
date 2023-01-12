import React from 'react'
import Footer from '../components/client/Footer'
import Header from '../components/client/Header'
import { Outlet } from 'react-router-dom'
const Client = () => {
  return (
    <div className='font-inter'>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Client