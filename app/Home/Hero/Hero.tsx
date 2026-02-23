import Link from 'next/link';
import React from 'react'


interface HeroProps {
    onOpenModal: () => void;
}

const Hero = ({ onOpenModal }: HeroProps) => {
    return (
        <div className='py-12 md:py-20'>
            <div className="flex flex-col md:flex-row gap-10 items-center">
                <div className="w-full md:w-1/2 flex flex-col order-2 md:order-1 gap-8">
                    <div className="flex flex-col gap-8">
                        <div className='inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest w-fit'>
                            Empowering Futures
                        </div>
                        <h1 className='text-[#101818] dark:text-white text-4xl md:text-6xl font-black leading-[1.1] tracking-tight'>
                            Your Journey to <span className="text-primary italic">Global Education</span> Starts Here
                        </h1>
                        <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed max-w-lg">
                            Providing expert educational and consultancy services to help you navigate the complexities of international admissions and visa processing.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button
                                onClick={onOpenModal}
                                className="flex min-w-[200px] cursor-pointer items-center justify-center rounded-xl h-14 px-6 bg-primary text-white text-base font-bold shadow-xl shadow-primary/30 hover:scale-[1.02] transition-transform"
                            >
                                Book a Free Consultation
                            </button>
                            <Link href={'/visa'}  className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-xl h-14 px-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-base font-bold hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                                View Services
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/2 order-1 md:order-2">
                    <div className="relative">
                        <div className="absolute -top-4 -left-4 w-24 h-24 bg-accent-gold/20 rounded-full blur-3xl"></div>
                        <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
                        <div className='w-full bg-center bg-no-repeat aspect-4/3 bg-cover rounded-2xl shadow-2xl relative z-10' id='hero-image' style={{ backgroundImage: 'url("/images/HeroBg.jpg")' }}>
                            {/* <Image
                                        src="/images/HeroBg.jpg"
                                        alt="Hero image of students in a university campus"
                                        fill
                                        priority
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        className="object-cover rounded-2xl -z-10 relative"
                                    /> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero