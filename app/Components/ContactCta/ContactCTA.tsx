import React from 'react'
import Link from 'next/link'


interface ContactCTAProps {
    onOpenModal: () => void;
}

const ContactCTA = ({ onOpenModal }: ContactCTAProps) => {
    return (
        <div className='mb-20'>
            <div className="relative overflow-hidden rounded-3xl bg-primary px-8 py-16 md:px-16 md:py-20 text-center text-white">
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-accent-gold/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
                <div className="relative z-10 flex flex-col items-center gap-8 max-w-2xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight">Ready to start your global journey?</h2>
                    <p className="text-white/80 text-lg">Join thousands of students who have successfully achieved their dreams with JIMMYPAS.</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <button
                            onClick={onOpenModal}
                            className="bg-white text-primary px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors"
                        >
                            Book Free Appointment
                        </button>
                        <Link href={'/contact'} className="bg-primary border border-white/30 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-colors">
                            Contact Support
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactCTA