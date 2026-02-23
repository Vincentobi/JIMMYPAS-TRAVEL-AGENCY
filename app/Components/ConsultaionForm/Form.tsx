'use client'
import { useState } from 'react'
import { Close, ChevronRight, ExpandMore, Schedule } from '@mui/icons-material'

interface FormProps {
    isOpen: boolean;
    onClose: () => void;
}

const Form = ({ isOpen, onClose }: FormProps) => {
    const [formData, setFormData] = useState({
        service: '',
        preferredDate: '',
        preferredTime: '',
        fullName: '',
        email: '',
        phoneNumber: ''
    });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    if (!isOpen) return null;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        setErrorMessage('');

        try {
            const response = await fetch('/api/booking', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.error || 'Failed to send message');
            }

            setStatus('success');
            setFormData({ service: '', preferredDate: '', preferredTime: '', fullName: '', email: '', phoneNumber: '' });
            setTimeout(() => {
                setStatus('idle');
                onClose();
            }, 2000);
        } catch (error: unknown) {
            console.error('Submission error:', error);
            setStatus('error');
            const message = error instanceof Error ? error.message : 'Something went wrong. Please try again.';
            setErrorMessage(message);
        }
    };

    return (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4 backdrop-blur-sm bg-black/40">
            {/* Modal Container */}
            <div
                className="bg-white dark:bg-zinc-900 w-full max-w-xl rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300 relative"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header Bar */}
                <div className="bg-primary px-6 py-5 flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <div className="bg-white/10 p-1.5 rounded-lg border border-white/20">
                            <span className="text-white font-extrabold tracking-tighter text-xl">JP</span>
                        </div>
                        <span className="text-white font-bold tracking-widest text-sm ml-1 uppercase">Jimmypas</span>
                    </div>
                    <button
                        onClick={onClose}
                        className="text-white/80 hover:text-white transition-colors bg-white/10 hover:bg-white/20 p-2 rounded-full"
                    >
                        <Close />
                    </button>
                </div>

                {/* Modal Content */}
                <div className="p-8 max-h-[80vh] overflow-y-auto">
                    {/* Typography Block */}
                    <div className="mb-8 text-center sm:text-left">
                        <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
                            Schedule Your Free Consultation
                        </h2>
                        <p className="text-slate-500 dark:text-slate-400 mt-2 font-medium">
                            Expert advice tailored to your global ambitions
                        </p>
                    </div>

                    {/* Status Messages */}
                    {status === 'success' && (
                        <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-300 rounded-xl text-center font-medium animate-in slide-in-from-top-2">
                            Booking confirmed! We&apos;ll contact you shortly.
                        </div>
                    )}
                    {status === 'error' && (
                        <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-300 rounded-xl text-center font-medium animate-in slide-in-from-top-2">
                            {errorMessage}
                        </div>
                    )}

                    {/* Form Section */}
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Select Service */}
                            <div className="md:col-span-2">
                                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Select Service</label>
                                <div className="relative">
                                    <select
                                        name="service"
                                        value={formData.service}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-slate-50 dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 rounded-xl py-3.5 px-4 appearance-none focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all text-slate-800 dark:text-slate-200 cursor-pointer"
                                    >
                                        <option value="" disabled>Select a purpose...</option>
                                        <option value="study">Study Abroad Programs</option>
                                        <option value="work">Work Visa &amp; Employment</option>
                                        <option value="visit">Visitor &amp; Tourism</option>
                                    </select>
                                    <ExpandMore className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                                </div>
                            </div>

                            {/* Preferred Date */}
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Preferred Date</label>
                                <div className="relative">
                                    <input
                                        name="preferredDate"
                                        value={formData.preferredDate}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-slate-50 dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 rounded-xl py-3.5 px-4 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all text-slate-800 dark:text-slate-200"
                                        type="date"
                                    />
                                </div>
                            </div>

                            {/* Preferred Time */}
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Preferred Time</label>
                                <div className="relative">
                                    <select
                                        name="preferredTime"
                                        value={formData.preferredTime}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-slate-50 dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 rounded-xl py-3.5 px-4 appearance-none focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all text-slate-800 dark:text-slate-200 cursor-pointer"
                                    >
                                        <option value="" disabled>Select slot...</option>
                                        <option value="09:00 AM - 10:00 AM">09:00 AM - 10:00 AM</option>
                                        <option value="11:00 AM - 12:00 PM">11:00 AM - 12:00 PM</option>
                                        <option value="02:00 PM - 03:00 PM">02:00 PM - 03:00 PM</option>
                                        <option value="04:00 PM - 05:00 PM">04:00 PM - 05:00 PM</option>
                                    </select>
                                    <Schedule className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" fontSize="small" />
                                </div>
                            </div>

                            {/* Full Name */}
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Full Name</label>
                                <input
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-slate-50 dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 rounded-xl py-3.5 px-4 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all text-slate-800 dark:text-slate-200 placeholder:text-slate-400"
                                    placeholder="John Doe"
                                    type="text"
                                />
                            </div>

                            {/* Email Address */}
                            <div className="md:col-span-2">
                                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Email Address</label>
                                <input
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-slate-50 dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 rounded-xl py-3.5 px-4 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all text-slate-800 dark:text-slate-200 placeholder:text-slate-400"
                                    placeholder="john@example.com"
                                    type="email"
                                />
                            </div>

                            {/* Phone Number */}
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Phone Number <span className='italic font-bold text-primary'>(preferrably Whatsaap)</span></label>
                                <input
                                    name="phoneNumber"
                                    value={formData.phoneNumber}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-slate-50 dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 rounded-xl py-3.5 px-4 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all text-slate-800 dark:text-slate-200 placeholder:text-slate-400"
                                    placeholder="+1 (555) 000-0000"
                                    type="tel"
                                />
                            </div>
                        </div>

                        {/* Confirm Button */}
                        <div className="pt-4">
                            <button
                                disabled={status === 'loading' || status === 'success'}
                                className={`w-full bg-primary text-white py-4 rounded-xl font-bold text-lg shadow-xl shadow-primary/30 transition-all flex items-center justify-center gap-2 ${status === 'loading' || status === 'success' ? 'opacity-70 cursor-not-allowed' : 'hover:bg-primary/90 hover:scale-[1.01]'}`}
                                type="submit"
                            >
                                <span>{status === 'loading' ? 'Booking...' : status === 'success' ? 'Booked!' : 'Confirm Booking'}</span>
                                <ChevronRight />
                            </button>
                            <p className="text-center text-xs text-slate-400 mt-4 px-8">
                                By booking, you agree to our <a className="underline hover:text-primary transition-colors" href="#">Privacy Policy</a> and will receive a confirmation message shortly.
                            </p>
                        </div>
                    </form>
                </div>

                {/* Bottom Decor */}
                <div className="h-1.5 w-full flex">
                    <div className="h-full w-1/2 bg-primary/20"></div>
                    <div className="h-full w-1/2 bg-primary"></div>
                </div>
            </div>

            {/* Backdrop Click handle */}
            <div className="absolute inset-0 -z-10" onClick={onClose}></div>
        </div>
    )
}

export default Form