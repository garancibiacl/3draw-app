import React from 'react'
import { Header } from "../Header/Header"
import { SectionService } from '../SectionService/SectionService'
import { SectionProduct } from '../SectionProduct/SectionProduct'

export const Home = () => {
  return (
    <> 
    <Header/>
   <SectionService/>
   <SectionProduct/>
   </>

  )
}
