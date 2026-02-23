import { Flag, Visibility } from '@mui/icons-material'
import React from 'react'

const MandV = () => {
  return (
    <div className='bg-white dark:bg-gray-900/50 py-20 border-y border-gray-100 dark:border-gray-800'>
        <div className="max-w-[1200px] mx-auto px-4 md:px-10">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
<div className="flex flex-col gap-6 p-8 rounded-3xl bg-background-light dark:bg-background-dark border border-gray-100 dark:border-gray-800">
<div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center text-white">
<Flag className='text-3xl' />
</div>
<h2 className="text-2xl font-black text-primary">Our Mission</h2>
<p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                        To simplify the global transition process for students and professionals by providing transparent, expert guidance and personalized consultancy services that ensure success in every step of their journey.
                    </p>
</div>
<div className="flex flex-col gap-6 p-8 rounded-3xl bg-background-light dark:bg-background-dark border border-gray-100 dark:border-gray-800">
<div className="w-14 h-14 rounded-2xl bg-accent-gold flex items-center justify-center text-white">
<Visibility className='text-3xl' />
</div>
<h2 className="text-2xl font-black text-accent-gold">Our Vision</h2>
<p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                        To be the leading global consultancy recognized for transforming lives through education, fostering international collaboration, and setting the gold standard for integrity in visa and admission services.
                    </p>
</div>
</div>
</div>
    </div>
  )
}

export default MandV