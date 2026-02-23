import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className='px-6 lg:px-20 pt-10 pb-6'>
        <div className="relative overflow-hidden rounded-xl bg-slate-900 min-h-[400px] flex items-center">
<div className="absolute inset-0 z-0">
  <Image alt="Academic building with students walking" className="w-full h-full object-cover opacity-50" data-alt="Students walking through a historic university campus courtyard" 
 width={200} height={200} src="/images/uniBg.jpg"/>
<div className="absolute inset-0 bg-linear-to-r from-slate-900 via-slate-900/60 to-transparent"></div>
</div>
<div className="relative z-10 px-8 lg:px-16 max-w-2xl">
<span className="inline-block bg-primary/20 text-primary-light border border-primary/30 px-3 py-1 mt-5 rounded-full text-xs font-bold tracking-widest uppercase mb-4 text-soft-blue">
                        Global Education Experts
                    </span>
<h1 className="text-white text-4xl lg:text-6xl font-extrabold leading-[1.1] mb-6">
                        Global Pathways: Discover Your Future <span className="text-primary">Campus</span>
</h1>
<p className="text-slate-300 text-lg mb-8 leading-relaxed">
                        Tailored study abroad services to help you reach the world&apos;s leading universities. From ivy halls to modern labs, your journey starts here.
                    </p>
<div className="flex gap-4 mb-4">
<button className="bg-primary text-white px-8 py-4 rounded-lg font-bold hover:scale-105 cursor-pointer transition-transform">
                            Explore Destinations
                        </button>
<button className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 cursor-pointer rounded-lg font-bold hover:bg-white/20 transition-all">
                            View Scholarships
                        </button>
</div>
</div>
</div>
    </div>
  )
}

export default Hero