'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import Form from '../ConsultaionForm/Form'

const VisaCTA = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="bg-primary p-12 rounded-3xl text-center text-white relative overflow-hidden group">
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl group-hover:bg-white/10 transition-colors"></div>
      <div className="relative z-10">
        <h2 className="text-3xl font-black mb-4">Ready to start your journey?</h2>
        <p className="text-primary/10 bg-white/10 inline-block px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-8">No commitment required for first consult</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => setIsModalOpen(true)}
            className="w-full sm:w-auto bg-white text-primary px-10 py-4 rounded-xl font-extrabold text-lg hover:shadow-xl transition-all active:scale-95"
          >
            Book a Free Consultation
          </button>
          <Link href="#" className="w-full sm:w-auto bg-transparent border-2 border-white/30 text-white px-10 py-4 rounded-xl font-extrabold text-lg hover:bg-white/10 transition-all">
            Download Pricing Guide
          </Link>
        </div>
      </div>

      {/* Consultation Modal */}
      <Form isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  )
}

export default VisaCTA