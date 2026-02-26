'use client'
import Image from 'next/image'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import React from 'react'

const StudyCards = ({ flag, title, subTitle, description, image }: { flag: string, title: string, subTitle: string, description: string, image: string }) => {
  return (
    <div className="destination-card group bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-sm border border-gray-100 dark:border-slate-800 transition-all">
      <div className="h-48 relative overflow-hidden">
        <Image alt={title} fill className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src={image} />
        <div className="absolute top-4 left-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm px-3 py-1 rounded-lg flex items-center gap-2 shadow-sm">
          <Image src={flag} alt={`${title} Flag`} width={28} height={20} className="w-7 h-5 rounded shadow-sm object-cover" />
          <span className="text-xs font-bold">{title}</span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{subTitle}</h3>
        <p className="text-gray-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
          {description}
        </p>
        <button className="w-full bg-primary/10 hover:bg-primary text-primary hover:text-white py-3 rounded-lg font-bold transition-all flex items-center justify-center gap-2 cursor-pointer">
          Learn More <ArrowForwardIcon />
        </button>
      </div>
    </div>
  )
}

export default StudyCards