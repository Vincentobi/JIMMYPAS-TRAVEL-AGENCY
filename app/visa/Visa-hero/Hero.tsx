import React from 'react'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className="mb-16">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-l-4 border-primary pl-6 py-2">
<div className="max-w-2xl">
<h1 className="text-5xl font-black leading-tight tracking-tight text-slate-900 dark:text-white mb-4">
                        Visa Consultancy <span className="text-primary">Process</span>
</h1>
<p className="text-lg text-slate-600 dark:text-slate-400 font-medium">
                        Your journey to global opportunity begins with a single step. We have refined a structured five-phase framework to ensure your application is seamless, transparent, and successful.
                    </p>
</div>
<Link href={'/assessment'} className="flex items-center gap-2 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white px-8 py-4 rounded-xl text-sm font-extrabold hover:bg-primary/10 transition-colors border border-slate-200 dark:border-slate-700 cursor-pointer">
<RocketLaunchIcon />
                    Start Your Application
                </Link>
</div>
</div>
  )
}

export default Hero