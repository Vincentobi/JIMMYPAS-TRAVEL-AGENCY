import Accordion from '@/app/Components/Accordion/Accordion'
import { Chat, Mail, WhatsApp } from '@mui/icons-material'
import Link from 'next/link'
import React from 'react'

const Faqs = () => {
  return (
    <div className='w-full'>
      <div className='text-center mb-16'>
        <h1 className='text-[#101818] dark:text-white text-4xl md:text-6xl font-black leading-[1.1] tracking-tight mb-6'>How can we <span className='text-primary/80'>help you?</span></h1>
        <p className="text-gray-500 dark:text-gray-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">Find answers to commonly asked questions about our consultancy and visa services.</p>

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-12'>
          <Accordion />
          <aside>
            <div className="p-8 rounded-xl bg-white border border-slate-100 shadow-sm relative overflow-hidden">
              <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-primary/5 rounded-full blur-2xl"></div>
              <h3 className="text-2xl font-800 mb-4 text-primary">Still have questions?</h3>
              <p className="text-text-muted mb-8 leading-relaxed">Can&apos;t find what you&apos;re looking for? Our dedicated support team is here to help you with any specific queries.</p>
              <Link href={'https://wa.me/23480054669727'} target="_blank" className="w-full flex items-center justify-center gap-2 bg-secondary-blue cursor-pointer hover:bg-secondary-blue/90 font-800 py-4 rounded-lg transition-all mb-4 shadow-sm">
                <WhatsApp className='text-xl text-primary' />
                Contact Support
              </Link> 
              <button className="w-full flex items-center justify-center gap-2 bg-white cursor-pointer hover:bg-slate-50 border border-slate-200 text-text-dark font-700 py-4 rounded-lg transition-all shadow-sm">
                <Chat className='text-primary' />
                Start Live Chat
              </button>
            </div>
            <div className="p-8 rounded-xl bg-white border border-slate-100 shadow-sm">
              <h4 className="text-lg font-bold mb-4 flex items-center gap-2 text-primary">
                <Mail />
                Stay Updated
              </h4>
              <p className="text-sm text-text-muted mb-4">Receive the latest news on visa policy changes and education opportunities.</p>
              <div className="space-y-3">
                <input className="w-full px-4 py-3 bg-brand-bg border border-slate-200 rounded-lg focus:ring-1 focus:ring-primary outline-none text-sm text-text-dark" placeholder="Email address" type="email" />
                <button className="w-full py-3 bg-accent-coral text-white font-bold rounded-lg text-sm hover:opacity-90 transition-opacity shadow-sm">Subscribe</button>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden h-56 relative group border border-slate-100 shadow-md">
              <img
                alt="Support Team"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAq2ZsUzD8AbguupuFAJ4029c4FfkpQKMJ08rUv_KtLfVYUAQ7z40IvQa1OsOkEMI1yBrfmI8bkD3QGzuBPWP7N-jBSt6G4j1KsHaQGYH-LKyWm0weeGZ2l1yGkWRFxvlt6zEUeb856uqenqpj2P3BteWnR3ZRX5y4JPQK36Xk_uDvXmdvyVz_up6PgfDv_BKlhkLPigTAyqNVnhRvKcmYRtjRvBEHvSU_lGfsGyfM9lnv3ey3-9IRHH7rEqn_9v6iLqsVKG1Oi1I0"
                fill
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4">
                <span className="text-xs font-bold uppercase tracking-widest text-white">Ready to help 24/7</span>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}

export default Faqs