import React from 'react'
import { Header } from "../Header/Header"
import { SectionService } from '../SectionService/SectionService'
import { SectionProduct } from '../SectionProduct/SectionProduct'
import { SectionPrototype } from '../SectionPrototype/SectionPrototype'

export const Home = () => {
  return (
    <> 
   <Header/>
   <SectionService/>
   <SectionProduct/>
   <SectionPrototype/>
   </>

  )
}
