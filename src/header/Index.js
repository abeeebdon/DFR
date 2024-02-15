import { useState } from 'react'
import HeaderLogo from './HeaderLogo'
import NavLinks from './NavLinks'
import Navbar from './Navbar'

const Index = () => {
  return (
    <header>
      {/* header has a display of flex  don*/}
      <HeaderLogo />
      <Navbar />
      <NavLinks />
    </header>
  )
}
export default Index
