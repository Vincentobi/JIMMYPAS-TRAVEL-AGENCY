"use client";
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import StudyCards from '../StudyCards/StudyCards';
import { studyCards, scholarshipUpdates } from '@/data/data';
import StarsIcon from '@mui/icons-material/Stars';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

interface InquiryForm {
    fullName: string;
    email: string;
    destination: string;
    message: string;
}

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 1
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const Destinations = () => {
    const carouselRef = React.useRef<Carousel>(null);

    // Chunk the studyCards into groups of 4
    const chunks = [];
    for (let i = 0; i < studyCards.length; i += 4) {
        chunks.push(studyCards.slice(i, i + 4));
    }


    const [formData, setFormData] = React.useState<InquiryForm>({
        fullName: '',
        email: '',
        destination: '',
        message: '',
    });

    const [isSubmitting, setIsSubmitting] = React.useState(false);
    const [submissionStatus, setSubmissionStatus] = React.useState<'idle' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmissionStatus('idle');

        try {
            const response = await fetch('/api/inquiry', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (data.success) {
                setSubmissionStatus('success');
                setFormData({
                    fullName: '',
                    email: '',
                    destination: '',
                    message: '',
                });
                setTimeout(() => setSubmissionStatus('idle'), 3000);
            } else {
                setSubmissionStatus('error');
            }
        } catch (error) {
            console.error('Inquiry submission error:', error);
            setSubmissionStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };


    return (
        <div className='px-6 lg:px-20 py-10 grid grid-cols-1 lg:grid-cols-12 gap-10'>
            <div className="lg:col-span-8">
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-3xl font-extrabold tracking-tight">Popular Study Destinations</h2>
                    <div className="flex gap-2">
                        <button onClick={() => carouselRef.current?.previous()} className="p-2 border border-gray-200 dark:border-slate-800 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors">
                            <ChevronLeftIcon />
                        </button>
                        <button onClick={() => carouselRef.current?.next()} className="p-2 border border-gray-200 dark:border-slate-800 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors">
                            <ChevronRightIcon />
                        </button>
                    </div>
                </div>

                <Carousel
                    ref={carouselRef}
                    arrows={false}
                    responsive={responsive}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={3000}
                    keyBoardControl={true}
                    itemClass="px-3"
                    containerClass="carousel-container"
                    ssr={true}
                    customLeftArrow={<div />}
                    customRightArrow={<div />}
                >
                    {chunks.map((chunk, index) => (
                        <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-4 px-2">
                            {chunk.map((card) => (
                                <StudyCards key={card.title} title={card.title} subTitle={card.subTitle} description={card.description} image={card.image} flag={card.flag} />
                            ))}
                        </div>
                    ))}
                </Carousel>
            </div>
            {/* <!-- Sidebar --> */}
            <aside className="lg:col-span-4 space-y-8">
                {/* <!-- Scholarship Updates --> */}
                <div className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-slate-800">
                    <div className="flex items-center gap-2 mb-6">
                        <StarsIcon className='text-accent-coral' />
                        <h3 className="text-lg font-extrabold">Scholarship Feed</h3>
                    </div>
                    <div className="space-y-4">
                        {scholarshipUpdates.map((update, index) => (
                            <div key={index} className={`scholarship-card p-4 rounded-lg bg-gray-50 dark:bg-slate-800/50 border-l-4 ${update.borderColor} transition-transform cursor-pointer`}>
                                <div className="flex justify-between items-start mb-1">
                                    <span className={`text-[10px] font-bold ${update.color} uppercase tracking-widest`}>{update.category}</span>
                                    <span className="text-[10px] text-gray-400">{update.date}</span>
                                </div>
                                <h4 className="font-bold text-sm leading-tight">{update.title}</h4>
                                <p className="text-xs text-gray-500 dark:text-slate-400 mt-2">{update.description}</p>
                            </div>
                        ))}
                    </div>
                    <button className="w-full mt-6 text-sm font-bold text-primary hover:underline flex items-center justify-center gap-1">
                        View All Opportunities <OpenInNewIcon className="text-sm" />
                    </button>
                </div>
                {/* <!-- Inquiry Form --> */}
                <div className="bg-primary rounded-xl p-6 text-white shadow-xl">
                    <h3 className="text-xl font-extrabold mb-2">Ready to Start?</h3>
                    <p className="text-white/80 text-sm mb-6">Send an inquiry and our counselors will reach out within 24 hours.</p>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-[10px] font-bold uppercase tracking-widest mb-1 opacity-70">Full Name</label>
                            <input
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                required
                                className="w-full bg-white/10 border border-white/20 rounded-lg py-2 px-3 text-sm focus:ring-0 focus:border-white placeholder:text-white/40"
                                placeholder="John Doe"
                                type="text"
                            />
                        </div>
                        <div>
                            <label className="block text-[10px] font-bold uppercase tracking-widest mb-1 opacity-70">Email Address</label>
                            <input
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full bg-white/10 border border-white/20 rounded-lg py-2 px-3 text-sm focus:ring-0 focus:border-white placeholder:text-white/40"
                                placeholder="john@example.com"
                                type="email"
                            />
                        </div>
                        <div>
                            <label className="block text-[10px] font-bold uppercase tracking-widest mb-1 opacity-70">Desired Destination</label>
                            <select
                                name="destination"
                                value={formData.destination}
                                onChange={handleChange}
                                required
                                className="w-full bg-white/10 border border-white/20 rounded-lg py-2 px-3 text-sm focus:ring-0 focus:border-white"
                            >
                                <option value="" className="text-gray-900">Select country...</option>
                                <option value="United Kingdom" className="text-gray-900">United Kingdom</option>
                                <option value="United States" className="text-gray-900">United States</option>
                                <option value="Canada" className="text-gray-900">Canada</option>
                                <option value="Australia" className="text-gray-900">Australia</option>
                                <option value="Not listed here" className="text-gray-900">Not listed here</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-[10px] font-bold uppercase tracking-widest mb-1 opacity-70">Message</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                className="w-full bg-white/10 border border-white/20 rounded-lg py-2 px-3 text-sm focus:ring-0 focus:border-white placeholder:text-white/40"
                                placeholder="Tell us about your dreams..."
                                rows={3}
                            ></textarea>
                        </div>

                        {submissionStatus === 'success' && (
                            <div className="bg-green-500/20 border border-green-500/50 rounded-lg p-3 text-xs text-center">
                                Enquiry sent successfully! We&apos;ll reach out soon.
                            </div>
                        )}

                        {submissionStatus === 'error' && (
                            <div className="bg-red-500/20 border border-red-500/50 rounded-lg p-3 text-xs text-center">
                                Something went wrong. Please try again.
                            </div>
                        )}

                        <button
                            type='submit'
                            disabled={isSubmitting}
                            className={`w-full bg-white text-primary font-extrabold py-3 rounded-lg transition-all shadow-lg active:scale-95 flex items-center justify-center gap-2 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-opacity-90'}`}
                        >
                            {isSubmitting ? (
                                <>
                                    <div className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
                                    Sending...
                                </>
                            ) : 'Submit Inquiry'}
                        </button>
                    </form>
                </div>
            </aside>
        </div>
    )
}

export default Destinations