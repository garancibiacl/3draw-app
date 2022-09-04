import React from 'react'
import { Navbar } from "../Navbar/Navbar"
import { Header } from "../Header/Header"
import { SectionService } from '../SectionService/SectionService'
import { SectionProduct } from '../SectionProduct/SectionProduct'

export const Home = () => {
  return (
    <> 
     <Navbar/> 
    <Header/>
   <SectionService/>
   <SectionProduct/>
   </>

  )
}
