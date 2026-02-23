import React from 'react'

const Hero = () => {
  return (
    <div className='max-w-[1200px] mx-auto px-4 md:px-10 py-16 md:py-24'>
        <div className="flex flex-col md:flex-row items-center gap-12">
<div className="w-full md:w-1/2 flex flex-col gap-6">
<div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest w-fit">
                    Established Excellence
                </div>
<h1 className="text-[#101818] dark:text-white text-4xl md:text-6xl font-black leading-[1.1] tracking-tight">
                    Empowering Your <span className="text-primary italic">Dreams</span> Since 2012
                </h1>
<p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed max-w-lg">
                    For over a decade, JIMMYPAS has been the trusted bridge for students and professionals seeking to expand their horizons through global education and international career opportunities.
                </p>
</div>
<div className="w-full md:w-1/2">
<div className="relative">
<div className="absolute -top-4 -right-4 w-24 h-24 bg-accent-gold/20 rounded-full blur-3xl"></div>
<div className="w-full bg-center bg-no-repeat aspect-4/3 bg-cover rounded-2xl shadow-2xl relative z-10" data-alt="Our professional agency headquarters and team" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBVnFarml7JvQn_OLATWnJYLetcjS96MGQGweDFiaFdw65u_j5GePuZY3Q55bl2NKS_thD5A4nxqIoPijHFg0MXE6RMhTXnFgyNrQT0eD5jWW93suwyMmVGzYYjZdggn82NqquD_Jq7htLMSetqiTaMIn-2i_yXDBjBWXVUq_FCO43BbLbRnB3uj__5Rg_B70nWAGDLg5OtaSDRmPbqc_UlJ13S_89NBrv0euHUZ_KUlP-fiUb3x2GLN7JPvtQU4zkyudaHm66MxnQ')"}}></div>
</div>
</div>
</div>
    </div>
  )
}

export default Hero