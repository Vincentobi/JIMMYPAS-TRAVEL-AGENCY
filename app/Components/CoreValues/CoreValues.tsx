import { Handshake, Person, WorkspacePremium } from '@mui/icons-material'
import React from 'react'

const CoreValues = () => {
  return (
    <div className='max-w-[1200px] mx-auto px-4 md:px-10 py-20'>
        <div className="text-center mb-16 flex flex-col items-center">
<span className="text-primary font-bold text-sm uppercase tracking-[0.2em] mb-4">The JIMMYPAS Way</span>
<h2 className="text-3xl md:text-5xl font-black tracking-tight text-[#101818] dark:text-white">Our Core Values</h2>
<div className="w-20 h-1.5 bg-accent-gold rounded-full mt-6"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="text-center p-8">
<div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
<Handshake className='text-primary' />
</div>
<h3 className="text-xl font-extrabold mb-4">Integrity</h3>
<p className="text-gray-600 dark:text-gray-400 leading-relaxed">We maintain the highest ethical standards, ensuring honesty and transparency in every consultation.</p>
</div>
<div className="text-center p-8">
<div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
<WorkspacePremium className='text-primary' />
</div>
<h3 className="text-xl font-extrabold mb-4">Excellence</h3>
<p className="text-gray-600 dark:text-gray-400 leading-relaxed">Our commitment to quality drives us to deliver superior service and unmatched success rates for our clients.</p>
</div>
<div className="text-center p-8">
<div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
<Person className='text-primary' />
</div>
<h3 className="text-xl font-extrabold mb-4">Student-First</h3>
<p className="text-gray-600 dark:text-gray-400 leading-relaxed">Your dreams are our priority. We tailor our services to meet the unique needs of every individual student.</p>
</div>
</div>
    </div>
  )
}

export default CoreValues