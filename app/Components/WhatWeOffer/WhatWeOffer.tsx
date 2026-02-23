import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const WhatWeOffer = () => {
    return (
        <div className='pt-10'>
            <div className="flex flex-col items-center text-center gap-4 mb-12">
                <span className="text-primary font-bold text-sm uppercase tracking-0.2em">What We Offer</span>
                <h2 className="text-[#101818] dark:text-white text-3xl md:text-4xl font-black tracking-tight">Comprehensive Global Solutions</h2>
                <div className="w-20 h-1.5 bg-accent-gold rounded-full"></div>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pb-20'>
                <div className='flex flex-col gap-4 group cursor-pointer'>
                    <div className="relative overflow-hidden rounded-xl aspect-4/5">
                        <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/0 transition-colors z-10"></div>
                        <div className="w-full h-full bg-center bg-no-repeat bg-cover transform group-hover:scale-110 transition-transform duration-500" style={{ backgroundImage: 'url("/images/passportVisa.jpg")' }}></div>
                    </div>
                    <div className="px-1">
                        <h3 className="text-[#101818] dark:text-white text-lg font-extrabold flex items-center gap-2">
                            Student Visa
                            <ArrowForwardIcon className='text-sm opacity-0 group-hover:opacity-100 transition-opacity' />
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mt-1">End-to-end processing for your academic journey abroad.</p>
                    </div>
                </div>
                <div className='flex flex-col gap-4 group cursor-pointer'>
                    <div className="relative overflow-hidden rounded-xl aspect-4/5">
                        <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/0 transition-colors z-10"></div>
                        <div className="w-full h-full bg-center bg-no-repeat bg-cover transform group-hover:scale-110 transition-transform duration-500" style={{ backgroundImage: 'url("/images/WorkPermit.png")' }}></div>
                    </div>
                    <div className="px-1">
                        <h3 className="text-[#101818] dark:text-white text-lg font-extrabold flex items-center gap-2">
                            Work Permit
                            <ArrowForwardIcon className='text-sm opacity-0 group-hover:opacity-100 transition-opacity' />
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mt-1">Specialized guidance for global career opportunities.</p>
                    </div>
                </div>
                <div className='flex flex-col gap-4 group cursor-pointer'>
                    <div className="relative overflow-hidden rounded-xl aspect-4/5">
                        <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/0 transition-colors z-10"></div>
                        <div className="w-full h-full bg-center bg-no-repeat bg-cover transform group-hover:scale-110 transition-transform duration-500" style={{ backgroundImage: 'url("/images/AdmissionsBg.png")' }}></div>
                    </div>
                    <div className="px-1">
                        <h3 className="text-[#101818] dark:text-white text-lg font-extrabold flex items-center gap-2">
                            Admissions
                            <ArrowForwardIcon className='text-sm opacity-0 group-hover:opacity-100 transition-opacity' />
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mt-1">Secure your spot in top ranked global institutions</p>
                    </div>
                </div>
                <div className='flex flex-col gap-4 group cursor-pointer'>
                    <div className="relative overflow-hidden rounded-xl aspect-4/5">
                        <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/0 transition-colors z-10"></div>
                        <div className="w-full h-full bg-center bg-no-repeat bg-cover transform group-hover:scale-110 transition-transform duration-500" style={{ backgroundImage: 'url("/images/Travelnsurance.jpg")' }}></div>
                    </div>
                    <div className="px-1">
                        <h3 className="text-[#101818] dark:text-white text-lg font-extrabold flex items-center gap-2">
                            Travel Insurance
                            <ArrowForwardIcon className='text-sm opacity-0 group-hover:opacity-100 transition-opacity' />
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mt-1">Stay protected throughout your international stay.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhatWeOffer