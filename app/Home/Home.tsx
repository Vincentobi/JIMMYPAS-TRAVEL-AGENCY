'use client'
import React from 'react'
import Hero from './Hero/Hero'
import CTA from '../Components/CTA/CTA'
import WhatWeOffer from '../Components/WhatWeOffer/WhatWeOffer'
import ContactCTA from '../Components/ContactCta/ContactCTA'
import { useModal } from '../context/ModalContext'

const Home = () => {
  const { openModal } = useModal();

  return (
    <div>
      <Hero onOpenModal={openModal} />
      <CTA />
      <WhatWeOffer />
      <ContactCTA onOpenModal={openModal} />
    </div>
  )
}

export default Home