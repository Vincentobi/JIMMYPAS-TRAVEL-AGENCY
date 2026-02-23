'use client'
import { Apartment, Call, LocationOn, Mail, Public } from '@mui/icons-material'
import Image from 'next/image'
import React, { useState } from 'react'

const ContactConnect = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phoneNumber: '',
        message: ''
    });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        setErrorMessage('');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.error || 'Failed to send message');
            }

            setStatus('success');
            setFormData({ fullName: '', email: '', phoneNumber: '', message: '' });
        } catch (error: any) {
            console.error('Submission error:', error);
            setStatus('error');
            const message = error instanceof Error ? error.message : 'Something went wrong. Please try again.';
            setErrorMessage(message);
        }
    };

    return (
        <div className=''>
            <div className="flex flex-col items-center text-center gap-4 mb-16">
                <span className="text-primary font-bold text-sm uppercase tracking-[0.2em]">Connect with us</span>
                <h1 className="text-[#101818] dark:text-white text-4xl md:text-6xl font-black leading-[1.1] tracking-tight">Get in <span className="text-primary italic">Touch</span></h1>
                <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed max-w-2xl">
                    Whether you have a question about our services, university admissions, or visa processing, our team of experts is ready to help you navigate your journey.
                </p>
                <div className="w-20 h-1.5 bg-accent-gold rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
                <div className="lg:col-span-7 bg-white dark:bg-gray-800 rounded-3xl p-8 md:p-12 shadow-xl shadow-gray-200/50 dark:shadow-none border border-gray-100 dark:border-gray-700">
                    <h3 className="text-2xl font-extrabold mb-8">Send us a message</h3>

                    {status === 'success' ? (
                        <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 p-8 rounded-2xl text-center">
                            <div className="w-16 h-16 bg-green-100 dark:bg-green-800/50 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                            </div>
                            <h4 className="text-xl font-bold text-green-800 dark:text-green-300 mb-2">Message Sent!</h4>
                            <p className="text-green-700 dark:text-green-400 mb-6">Thank you for reaching out. We&apos;ll get back to you as soon as possible.</p>
                            <button
                                onClick={() => setStatus('idle')}
                                className="text-green-800 dark:text-green-300 font-bold hover:underline"
                            >
                                Send another message
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-bold text-gray-700 dark:text-gray-300">Full Name</label>
                                    <input
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-5 py-4 rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                        placeholder="John Doe"
                                        type="text"
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-bold text-gray-700 dark:text-gray-300">Email Address</label>
                                    <input
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-5 py-4 rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                        placeholder="john@example.com"
                                        type="email"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-bold text-gray-700 dark:text-gray-300">Phone Number</label>
                                <input
                                    name="phoneNumber"
                                    value={formData.phoneNumber}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-5 py-4 rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                    placeholder="+234 ..."
                                    type="tel"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-bold text-gray-700 dark:text-gray-300">Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-5 py-4 rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                    placeholder="Tell us how we can help you..."
                                    rows={5}
                                ></textarea>
                            </div>

                            {status === 'error' && (
                                <p className="text-red-500 text-sm font-medium">{errorMessage}</p>
                            )}

                            <button
                                disabled={status === 'loading'}
                                className={`w-full bg-primary text-white py-4 rounded-xl font-bold text-lg shadow-xl shadow-primary/30 transition-all ${status === 'loading' ? 'opacity-70 cursor-not-allowed' : 'hover:bg-primary/90 hover:scale-[1.01]'}`}
                                type="submit"
                            >
                                {status === 'loading' ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>
                    )}
                </div>
                <div className="lg:col-span-5 space-y-8">
                    <div className="bg-primary text-white rounded-3xl p-8 relative overflow-hidden group">
                        <div className="absolute -top-12 -right-12 w-40 h-40 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
                        <div className="relative z-10">
                            <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center mb-6">
                                <Apartment className='text-white' />
                            </div>
                            <h4 className="text-xl font-extrabold mb-4">Head Office</h4>
                            <div className="space-y-4">
                                <div className="flex gap-4">
                                    <LocationOn className='text-white' />
                                    <p className="text-white/80">123 Education Plaza, Victoria Island, Lagos, Nigeria</p>
                                </div>
                                <div className="flex gap-4">
                                    <Call className='text-accent-gold' />
                                    <p className="text-white/80">+234 (0) 800-JIMMY-PAS</p>
                                </div>
                                <div className="flex gap-4">
                                    <Mail className='text-accent-gold' />
                                    <p className="text-white/80">hello@jimmypas.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 border border-gray-100 dark:border-gray-700 shadow-lg shadow-gray-100/50">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-lg bg-accent-gold/10 flex items-center justify-center">
                                <Public className='text-accent-gold' />
                            </div>
                            <h4 className="text-xl font-extrabold">Global Branches</h4>
                        </div>
                        <div className="space-y-6">
                            <div className="border-b border-gray-100 dark:border-gray-700 pb-4">
                                <p className="font-bold text-primary">London, United Kingdom</p>
                                <p className="text-sm text-gray-500">Kensington Business Hub, W8 4BA</p>
                            </div>
                            <div className="border-b border-gray-100 dark:border-gray-700 pb-4">
                                <p className="font-bold text-primary">Toronto, Canada</p>
                                <p className="text-sm text-gray-500">Bay Street Financial Center, M5H 2Y4</p>
                            </div>
                            <div>
                                <p className="font-bold text-primary">Nairobi, Kenya</p>
                                <p className="text-sm text-gray-500">Westlands Commercial District, 00100</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="mb-20">
                <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800 relative group h-[450px]">
                    <div className="absolute inset-0 bg-gray-200">
                        <Image
                            alt="Map Location"
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                            src="/images/contact-map.png"
                            fill
                            priority
                        />
                        <div className="absolute inset-0 bg-primary/5 backdrop-grayscale-[0.2]"></div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            <div className="relative">
                                <div className="w-12 h-12 bg-primary rounded-full animate-ping absolute inset-0 opacity-75"></div>
                                <div className="w-12 h-12 bg-primary rounded-full relative flex items-center justify-center shadow-2xl border-4 border-white">
                                    <LocationOn className='text-white text-xl' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="absolute bottom-6 left-6 right-6 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md p-6 rounded-3xl flex flex-col md:flex-row items-center justify-between shadow-2xl border border-white/20">
                        <div className="text-center md:text-left mb-4 md:mb-0">
                            <p className="text-lg font-black text-gray-900 dark:text-white">Visit our Head Office</p>
                            <p className="text-sm text-gray-500 font-medium">Open Mon-Fri: 9:00 AM - 6:00 PM</p>
                        </div>
                        <a href="https://www.google.com/maps/place/123+Education+Plaza,+Victoria+Island,+Lagos,+Nigeria" target="_blank" rel="noopener noreferrer" className="bg-primary text-white px-8 py-3 rounded-xl text-sm font-extrabold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">Open in Google Maps</a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ContactConnect
