import React, { lazy } from 'react'
import { ImagePage } from './pages/ImagePage'
import { Header } from './components/Header'
import Pg2Quotes from './components/page2/Pg2Quotes'
// import Pg3cards from './components/page3/Pg3cards'
import { Page3Projects } from './pages/Page3Projects'
import { Page4Video } from './pages/Page4Video'
import { Route, Routes } from 'react-router-dom'
import { ContactForm } from './pages/ContactForm'



export default function App(){
  return(<>
    <div className='font-[font6]'>
      <Header/>
      <ImagePage/>
    </div>
      <Pg2Quotes/>
      <Page3Projects/>
      
             
  
  </>)
}