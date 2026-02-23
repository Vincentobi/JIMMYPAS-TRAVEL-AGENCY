'use client'
import { useState } from 'react'
import MobileNav from './MobileNav'
import Nav from './Nav'

const ResponsiveNav = () => {
    const [showNav, setShowNav] = useState(false)
    const closeNav = () => setShowNav(false)
    const openNav = () => setShowNav(true)
  return (
    <>
        <MobileNav showNav={showNav} closeNav={closeNav} />
        <Nav openNav={openNav} />
    </>
  )
}

export default ResponsiveNav