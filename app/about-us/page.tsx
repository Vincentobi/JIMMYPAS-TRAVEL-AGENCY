import React from 'react'
import Hero from '@/app/about-us/About-hero/Hero'
import MandV from '@/app/Components/Mission&Vision/MandV'
import CoreValues from '@/app/Components/CoreValues/CoreValues'
import Team from '@/app/Components/Team/Team'

const page = () => {
  return (
    <div>
      <Hero />
      <MandV />
      <CoreValues />
      <Team />
    </div>
  )
}

export default page