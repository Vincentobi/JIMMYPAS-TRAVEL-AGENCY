import React from 'react'
import Hero from './Visa-hero/Hero'
import Timeline from '../Components/VisaProcessTimeline/Timeline'
import Testimonial from '@/Testimonial/Testimonial'
import VisaCTA from '../Components/VisaCTA/VisaCTA'


const VisaPage = () => {
  return (
    <div>
      <Hero />
      <Timeline />
      <Testimonial />
      <VisaCTA />
    </div>
  )
}

export default VisaPage