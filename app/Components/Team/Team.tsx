import React from 'react'

const Team = () => {
  return (
    <div className='bg-gray-50 dark:bg-gray-900/30 py-20'>
        <div className="max-w-[1200px] mx-auto px-4 md:px-10">
<div className="text-center mb-16 flex flex-col items-center">
<span className="text-primary font-bold text-sm uppercase tracking-[0.2em] mb-4">Our Team</span>
<h2 className="text-3xl md:text-5xl font-black tracking-tight text-[#101818] dark:text-white">Meet the Leadership</h2>
<div className="w-20 h-1.5 bg-accent-gold rounded-full mt-6"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
<div className="flex flex-col gap-6 group">
<div className="relative overflow-hidden rounded-3xl aspect-4/5">
<div className="w-full h-full bg-center bg-no-repeat bg-cover transform group-hover:scale-105 transition-transform duration-500" data-alt="CEO Portrait" style={{backgroundImage: "url('/images/maleCeo.png')"}}></div>
<div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent flex flex-col justify-end p-8 text-white">
<h4 className="text-2xl font-black">James Paschal</h4>
<p className="text-accent-gold font-bold">Founder &amp; Managing Director</p>
</div>
</div>
<p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed px-2">
                        With over 15 years in international education, James founded JIMMYPAS with a vision to make quality global education accessible to all students.
                    </p>
</div>
<div className="flex flex-col gap-6 group">
<div className="relative overflow-hidden rounded-3xl aspect-4/5">
<div className="w-full h-full bg-center bg-no-repeat bg-cover transform group-hover:scale-105 transition-transform duration-500" data-alt="Director Portrait" style={{backgroundImage: "url('/images/femaleCeo.png')"}}></div>
<div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent flex flex-col justify-end p-8 text-white">
<h4 className="text-2xl font-black">Sarah Williams</h4>
<p className="text-accent-gold font-bold">Co-Founder &amp; Head of Consultancy</p>
</div>
</div>
<p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed px-2">
                        Sarah specializes in visa policy and international relations, ensuring that our agency remains at the forefront of global immigration standards.
                    </p>
</div>
</div>
</div>
    </div>
  )
}

export default Team