'use client'
import { ArrowBack, ArrowForward, CalendarToday, Check, CheckCircle, Description, ExpandMore, Flight, Home, MailOutline, PersonOutline, RocketLaunch, School, Search, SupportAgent, VerifiedUser, WorkOutline } from '@mui/icons-material';
import { useState } from 'react'
import Link from 'next/link'

// shape of my form data
interface FormData {
    //step 1: Primary goal
    primaryGoal: 'study' | 'work' | 'visit' | 'immigrate' | 'other' | '';

    //step 2: Country preference
    countryPreference: string;

    //step 3: Educational background
    educationalBackground: {
        highestQualification: string;
        preferredStartdate: string;
        yearsOfWorkExperience: string;
    }

    //step 4: Form
    personalDetails: {
        fullName: string;
        email: string;
        phone: string;
    }
}

const initialFormData: FormData = {
    primaryGoal: '',
    countryPreference: '',
    educationalBackground: {
        highestQualification: '',
        preferredStartdate: '',
        yearsOfWorkExperience: '5',
    },
    personalDetails: {
        fullName: '',
        email: '',
        phone: '',
    }
}

const countries = [
    { name: 'United Kingdom', value: 'uk', flag: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAtPmWyYQpLTlMKnPTUuZTod2-idszWbDj-ird7vitURg_0c29oGRImy8oQj-VDm4b0XYQlYWlVAm8AjB7qxm9u67fk1kpk3XZAg5exJ8j6pV6CExFSGS7JZ_HESQLnmpjS9RjtYLzQuCF6jtTDo-1X2tSlHZNsuO2B-2wqZd1U-RblsyXsovAcKoIP_Pa3HjIn-rcoLYi633czCzLfcAnLLNu9WBFVWc3PmXW-MZ1F47IDihrQD5320fV95paSvmuEnsvUOlbhvWg' },
    { name: 'Canada', value: 'canada', flag: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCoMlM2m3DJlm3fnvAfvZIfRR0YAJXY8JLa5VwHoD8C7wth-tzOhy5ZYKCzUrZBm4p0hs8BeFdct9ymwuQ_xrP_IN5FpypiQYlmilRLvxj5Z4Pr3gttdxPtizAGRwS6B80jnBGO70FaPLKzvikO4tlsvMhrMnizzATZfHULaDzLepA4OwSnK50MjczFkzS4_J75n4o28EjP5UIDM81xU-VJ46WERjpJm7-vLYnvsAfB7kB8LqJztRrJN_HfA69L705tNemFxHquAnc' },
    { name: 'USA', value: 'usa', flag: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA1kB_NRshWVvXrSbM9Ulz8MWjjcBW5Joh_qu8xUf3F7rRtFUI2y5y3PdU-TXvWbqZODsUFooxM-G_Y96xq9zQ-HumeE_DVBl5UmwkIPuR9alr4-VwOVvEBRLzvXrqXsmWhyUnHgguUyY_9t1Zp04nLDnr2ntJ40xrq2mlEzyW3UgjjB6Fi0QX4mVGxg9ZNtAn5GcIw4_C9y6wFvYfo3cE_grJNTRNzlGtofRAzCcdbz8h7KTHQePjtl4bS1C6KqGwgOdEMiE-rwNI' },
    { name: 'Australia', value: 'australia', flag: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBj1IKuKloQRPAOvvTiViSy-sthmryQli5SZTuiq_yCRhI4hWxi0yMWuKm1KSaOgRSvS0ksNPuyaef6Uuo3exF-BsFYWqS74UsAhX4o64IQvQ1B5UGKaUJSmqNt3m2WyjiO_M197HSlssfVBL7QjsOGB1QAfzMvCcbWljezOEz9cfr0lZO3KpTGfHxalJRmhcuMcvhBOnK3UcFKoqti04hhCyYoXR-bt1cfJObm8dZXbFV4ooLoR9-qBoEu-RfjgCebBcny0_vcs8Q' },
    { name: 'Germany', value: 'germany', flag: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBXFQaqxJ6wR_3WKl05knf-MOhice3cIO4DFdcZOpcHV8YpWkJIInH9wgGkQiksf7RN_eeGZyb6tNfRBxsQg27sC6B0Nn8_cspmO9tK0GJvixxzAceiLA7-hiPfM7nmYIebCH1JJqngOqOyvFrIVKKeR3g9ai9ambFzwOUZXd7RBY8fs5oOmifFeyjlxmOKAjcwPNBD5tLNBE1n9tYUriKEeGEoAMuz-0c7iMyhxKpgq_6YYoie3FZhZNIgEtYLDOUmaFOUgDxFxnY' },
    { name: 'France', value: 'france', flag: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCruFvMmEEU70oi3No-dviwRNeWR6ECAYpiwFLMUjiqIjTNOe661bnAcYjube_jO7gggUxj0VBsfbOD2tgecm9S6k-3NZ3GxWx46qzr0-BMSZvVdak9obESfuGc80FZ_A8uLZFZXd1JBCUxI2cjSJeEO_ty_aEcujlzLBR2VFWEKe-f44d5JFKvuDhFahZIjqGBuZFn5ZscRHPTl_Moo12maR9v4TouPbN3PsMBde2XsNssm_VAf1iGTugdK-84ouHaaOl7h2rcY2Y' },
    { name: 'Japan', value: 'japan', flag: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDX3N5sr8SPVix9A0403Yd_M4_Nz3t3kAhKzA9bG_K6MmyEQ8MHJmp5gaCf3zPLh3kBGwUv3hdQpT-a-3Y3fChHHJwxplw1laMR9UXPFcCY_CACwz4tkefiDmERcmIUojInDCja7xrAHdajcVJ3npvSA430Db7sCWYK4ExJhazaDcLnhtWWYCQ2ZReU3e2htVqMMm7Zx4EmGircetNVQVwNjIUUhOnKg_0HSPaNA4lliUgak7wORZ9J5JLJzP6jFJ8b5SKblkpl-28' },
    { name: 'Switzerland', value: 'switzerland', flag: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCiHDzlcXDCBS419ymuq9I6o-QFxuWfHd4jLnGstOXKDWrFh9nE5IB63PY00SFUEAKr9TBiiSR6XOnMhMjko41T2jUMiIWu3IK3PjQcftvkiy1VsseBRCYj8qCc-s7IbYulzIT4HjPlJiajJS46TWyRyAQeWo_dAJM09xZOfCTDmq_ejYquxBzVJ4-U6vZiBuMbeJRBkBchYfkT1xyfZF2EgSr3reqsUifSu-SymGSsMp9FAu8t9076s0zeU2MxoEOaYTVAHeAKoRg' },
]



const AssesmentForm = () => {
    const [formData, setFormData] = useState<FormData>(initialFormData);
    const [currentStep, setCurrentStep] = useState<number>(1);
    const [error, setError] = useState<string>('');
    const [success, setSuccess] = useState<boolean>(false);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

    const totalSteps = 4;

    // Calculate progress based on selection
    const calculateProgress = () => {
        const fields = [
            formData.primaryGoal,
            formData.countryPreference,
            formData.educationalBackground.highestQualification,
            formData.educationalBackground.preferredStartdate,
            formData.personalDetails.fullName,
            formData.personalDetails.email,
            formData.personalDetails.phone
        ];

        const completed = fields.filter(field => field !== '').length;
        return (completed / fields.length) * 100;
    };

    const progress = calculateProgress();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;

        if (name.includes('.')) {
            const [parent, child] = name.split('.');
            setFormData(prev => ({
                ...prev,
                [parent]: {
                    ...(prev[parent as keyof FormData] as object),
                    [child]: value
                }
            }));
        } else {
            setFormData(prev => ({
                ...prev,
                [name]: value
            }));
        }
    }

    const handleNext = () => {
        setCurrentStep(prev => prev + 1);
    }

    const handlePrev = () => {
        setCurrentStep(prev => prev - 1);
    }



    // clear error for each field

    // validation for each step
    const validateStep = () => {
        switch (currentStep) {
            case 1:
                if (!formData.primaryGoal) {
                    setError('Please select your primary goal');
                    return false;
                }
                return true;
            case 2:
                if (!formData.countryPreference) {
                    setError('Please select your country preference');
                    return false;
                }
                return true;
            case 3:
                // not all necessary so no validation needed
                return true;
            case 4:
                if (!formData.personalDetails.fullName) {
                    setError('Please enter your full name');
                    return false;
                }
                if (!formData.personalDetails.email) {
                    setError('Please enter your email');
                    return false;
                }
                if (!formData.personalDetails.phone) {
                    setError('Please enter your phone number');
                    return false;
                }
                return true;
            default:
                return false;
        }
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError('');
        setSuccess(false);

        if (validateStep()) {
            try {
                const response = await fetch('/api/register', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ formData }),
                });

                if (!response.ok) {
                    throw new Error('Failed to submit form');
                }

                const data = await response.json();
                console.log('Success:', data);

                // Keep loader for a minimum time for smooth UX
                setTimeout(() => {
                    setIsSubmitting(false);
                    setSuccess(true);
                    setCurrentStep(5);
                }, 2000);
            } catch (error) {
                console.error('Error:', error);
                setError('Failed to submit form');
                setIsSubmitting(false);
            }
        } else {
            setIsSubmitting(false);
        }
    }


    const renderStep = () => {
        switch (currentStep) {
            case 1: {
                const goals = [
                    { id: 'study', label: 'Study Abroad', description: 'Ideal for students seeking international education, degree programs, or research opportunities.', icon: <School className="text-4xl" /> },
                    { id: 'work', label: 'Work Permit', description: 'For professionals looking to advance their careers globally with specialized work authorizations.', icon: <WorkOutline className="text-4xl" /> },
                    { id: 'visit', label: 'Tourist/Visitor Visa', description: 'For short-term travel, tourism, business meetings, or visiting family and friends.', icon: <Flight className="text-4xl" /> },
                ] as const

                return (
                    <div>
                        {/* Main Content Area */}
                        <main className="grow flex flex-col items-center py-12 px-6">
                            {/* Progress Section */}
                            <div className="w-full max-w-3xl mb-12">
                                <div className="flex justify-between items-end mb-4">
                                    <div>
                                        <span className="text-xs font-bold uppercase tracking-widest text-primary">Assessment Progress</span>
                                        <h2 className="text-sm font-medium text-slate-500">Step {currentStep} of {totalSteps}</h2>
                                    </div>
                                    <span className="text-xs font-bold text-primary">{Math.round(progress)}% Complete</span>
                                </div>
                                <div className="h-2 w-full bg-primary/10 rounded-full overflow-hidden">
                                    <div className="h-full bg-primary rounded-full transition-all duration-500" style={{ width: `${progress}%` }}></div>
                                </div>
                            </div>
                            {/* Form Section */}
                            <div className="w-full max-w-5xl">
                                <div className="text-center mb-12">
                                    <h1 className="text-4xl font-bold text-background-dark dark:text-background-light mb-4">What is your primary goal?</h1>
                                    <p className="text-lg text-slate-600 dark:text-slate-400">Select one option to personalize your journey and get tailored advice.</p>
                                    {error && <p className="mt-4 text-red-500 font-semibold">{error}</p>}
                                    {success && <p className="mt-4 text-green-500 font-semibold text-center">Form submitted successfully!</p>}
                                </div>
                                {/* Card Grid */}
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                    {goals.map((goal) => (
                                        <button
                                            key={goal.id}
                                            type="button"
                                            onClick={() => {
                                                setFormData(prev => ({ ...prev, primaryGoal: goal.id }));
                                                if (error) setError('');
                                            }}
                                            className={`flex flex-col items-center p-10 bg-white dark:bg-zinc-900 border-2 rounded-xl cursor-pointer transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 group h-full ${formData.primaryGoal === goal.id ? 'border-primary shadow-lg shadow-primary/10' : 'border-transparent'}`}
                                        >
                                            <div className={`w-20 h-20 rounded-full flex items-center justify-center mb-6 transition-colors ${formData.primaryGoal === goal.id ? 'bg-primary/20' : 'bg-primary/10 group-hover:bg-primary/10'}`}>
                                                <div className={`${formData.primaryGoal === goal.id ? 'text-primary' : 'text-primary group-hover:text-primary'}`}>
                                                    {goal.icon}
                                                </div>
                                            </div>
                                            <h3 className={`text-xl font-bold mb-3 transition-colors ${formData.primaryGoal === goal.id ? 'text-primary' : 'text-background-dark dark:text-background-light'}`}>{goal.label}</h3>
                                            <p className="text-center text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                                                {goal.description}
                                            </p>
                                            <div className="mt-auto pt-6">
                                                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${formData.primaryGoal === goal.id ? 'border-primary' : 'border-primary/20'}`}>
                                                    <div className={`w-2.5 h-2.5 rounded-full bg-primary transition-opacity ${formData.primaryGoal === goal.id ? 'opacity-100' : 'opacity-0'}`}></div>
                                                </div>
                                            </div>
                                        </button>
                                    ))}
                                </div>
                                {/* Footer Navigation */}
                                <div className="mt-16 flex items-center justify-between border-t border-primary/10 pt-8">
                                    <Link href="/" className="flex items-center space-x-2 text-slate-400 hover:text-primary transition-colors">
                                        <ArrowBack />
                                        <span className="font-semibold">Cancel</span>
                                    </Link>
                                    <button
                                        onClick={handleNext}
                                        className="bg-primary hover:bg-primary/90 text-background-dark hover:text-background-light font-bold px-10 py-4 rounded-lg shadow-lg shadow-primary/20 transition-all active:scale-95 flex items-center space-x-2 cursor-pointer"
                                        type="button"
                                    >
                                        <span>Next</span>
                                        <ArrowForward />
                                    </button>
                                </div>
                            </div>
                        </main>
                        {/* Background Decorative Elements */}
                        <div className="fixed top-0 right-0 -z-10 opacity-10 blur-3xl pointer-events-none">
                            <div className="w-[500px] h-[500px] bg-primary rounded-full translate-x-1/2 -translate-y-1/2"></div>
                        </div>
                        <div className="fixed bottom-0 left-0 -z-10 opacity-10 blur-3xl pointer-events-none">
                            <div className="w-[300px] h-[300px] bg-primary rounded-full -translate-x-1/2 translate-y-1/2"></div>
                        </div>
                    </div>
                )
            }
            case 2: {
                const filteredCountries = countries.filter(c => c.name.toLowerCase().includes(searchTerm.toLowerCase()))

                return (
                    <div>
                        <div className="max-w-6xl mx-auto px-6 py-12">
                            {/* Top Section: Progress & Header */}
                            <header className="text-center mb-12">
                                <div className="max-w-md mx-auto mb-6">
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="text-sm font-semibold text-primary/80 uppercase tracking-widest">Step {currentStep} of {totalSteps}</span>
                                        <span className="text-sm font-semibold text-primary">{Math.round(progress)}% Complete</span>
                                    </div>
                                    <div className="w-full h-3 bg-primary/10 rounded-full overflow-hidden">
                                        <div className="h-full bg-primary rounded-full transition-all duration-500" style={{ width: `${progress}%` }}></div>
                                    </div>
                                </div>
                                <h1 className="text-4xl font-bold text-background-dark dark:text-background-light mb-4">Select your dream destination</h1>
                                <p className="text-background-dark/60 dark:text-background-light/60">Choose the country where you see your future self growing and thriving.</p>
                            </header>
                            {/* Search Bar Section */}
                            <div className="max-w-2xl mx-auto mb-12 relative">
                                <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-primary/60" />
                                <input
                                    className="w-full py-4 pl-14 pr-6 bg-white dark:bg-white/5 border-2 border-primary/10 focus:border-primary focus:ring-0 rounded-full text-lg outline-none transition-all placeholder:text-background-dark/30 dark:placeholder:text-background-light/30"
                                    placeholder="Search for a country..."
                                    type="text"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>
                            {/* Country Selection Grid */}
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
                                {filteredCountries.map((country) => (
                                    <button
                                        key={country.value}
                                        onClick={() => setFormData(prev => ({ ...prev, countryPreference: country.value }))}
                                        className={`group relative p-6 bg-white dark:bg-white/5 rounded-xl border-2 transition-all hover:scale-105 active:scale-95 flex flex-col items-center gap-4 ${formData.countryPreference === country.value ? 'border-primary shadow-[0_0_25px_rgba(212,172,53,0.15)]' : 'border-transparent hover:border-primary/30'}`}
                                    >
                                        {formData.countryPreference === country.value && (
                                            <div className="absolute -top-3 -right-3 bg-primary text-white p-1 rounded-full shadow-lg">
                                                <Check className="text-sm" fontSize="small" />
                                            </div>
                                        )}
                                        <div className={`w-24 h-24 rounded-full overflow-hidden border-4 transition-all ${formData.countryPreference === country.value ? 'border-primary ring-4 ring-primary/20' : 'border-primary/10 group-hover:border-primary/30'}`}>
                                            <img alt={country.name} className="w-full h-full object-cover" src={country.flag} width={96} height={96} />
                                        </div>
                                        <span className={`text-lg font-bold transition-colors ${formData.countryPreference === country.value ? 'text-primary' : 'text-background-dark dark:text-background-light'}`}>{country.name}</span>
                                    </button>
                                ))}
                                {filteredCountries.length === 0 && (
                                    <div className="col-span-full text-center py-10 text-slate-500">
                                        No countries found matching &quot;{searchTerm}&quot;
                                    </div>
                                )}
                            </div>
                            <div className="flex items-center justify-between border-t border-primary/10 pt-10">
                                <button
                                    onClick={handlePrev}
                                    className="flex items-center gap-2 px-8 py-3 bg-white dark:bg-zinc-800 border border-primary/20 rounded-full text-slate-500 font-bold hover:text-primary transition-all active:scale-95"
                                    type="button"
                                >
                                    <ArrowBack fontSize="small" />
                                    Back
                                </button>
                                <div className="flex items-center gap-4">
                                    <p className="hidden md:block text-sm text-background-dark/40 dark:text-background-light/40">You can change this later in your profile</p>
                                    <button
                                        onClick={handleNext}
                                        className="flex items-center gap-2 px-10 py-3 bg-primary hover:bg-primary/90 text-background-dark font-bold rounded-full transition-all shadow-lg shadow-primary/20 active:scale-95"
                                        type="button"
                                    >
                                        Next Step
                                        <ArrowForward />
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* Background Decorative Elements */}
                        <div className="fixed top-0 right-0 -z-10 opacity-10 blur-3xl pointer-events-none">
                            <div className="w-[500px] h-[500px] bg-primary rounded-full translate-x-1/2 -translate-y-1/2"></div>
                        </div>
                        <div className="fixed bottom-0 left-0 -z-10 opacity-10 blur-3xl pointer-events-none">
                            <div className="w-[300px] h-[300px] bg-primary rounded-full -translate-x-1/2 translate-y-1/2"></div>
                        </div>
                    </div>
                )
            }
            case 3:
                return (
                    <div>
                        <main className="grow flex flex-col items-center py-12 px-6">
                            {/* Progress Indicator Container */}
                            <div className="w-full max-w-2xl mb-8">
                                <div className="flex justify-between items-end mb-2">
                                    <span className="text-primary dark:text-primary font-bold text-sm tracking-wide uppercase">Assessment Progress</span>
                                    <span className="text-slate-500 dark:text-slate-400 text-sm font-semibold">{Math.round(progress)}% Completed</span>
                                </div>
                                <div className="w-full bg-slate-200 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                                    <div className="bg-primary h-full transition-all duration-500" style={{ width: `${progress}%` }}></div>
                                </div>
                            </div>
                            {/* Main Assessment Card */}
                            <div className="w-full max-w-2xl bg-white dark:bg-slate-900 rounded-xl shadow-xl shadow-slate-200/50 dark:shadow-none p-8 md:p-12 relative">
                                <header className="mb-10 text-center">
                                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full mb-3 uppercase tracking-widest">Step {currentStep} of {totalSteps}</span>
                                    <h1 className="text-3xl font-bold text-slate-800 dark:text-white">Your Educational Background</h1>
                                    <p className="text-slate-500 dark:text-slate-400 mt-2">Help us understand your academic journey and career goals.</p>
                                </header>
                                {/* Form Section */}
                                <div className="space-y-8">
                                    {/* Highest Qualification Dropdown */}
                                    <div className="space-y-2">
                                        <label className="block text-sm font-bold text-slate-700 dark:text-slate-300" htmlFor="qualification">Highest Qualification</label>
                                        <div className="relative">
                                            <select
                                                className="w-full appearance-none bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 py-3 px-4 pr-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all cursor-pointer"
                                                id="qualification"
                                                name="educationalBackground.highestQualification"
                                                value={formData.educationalBackground.highestQualification}
                                                onChange={handleChange}
                                            >
                                                <option disabled value="">Choose your qualification...</option>
                                                <option value="high-school">High School Diploma</option>
                                                <option value="associate">Associate Degree</option>
                                                <option value="bachelors">Bachelor&apos;s Degree</option>
                                                <option value="masters">Master&apos;s Degree</option>
                                                <option value="phd">Doctorate (PhD)</option>
                                                <option value="other">Other Professional Cert</option>
                                            </select>
                                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-slate-400">
                                                <ExpandMore />
                                            </div>
                                        </div>
                                    </div>
                                    {/* Preferred Start Date Dropdown */}
                                    <div className="space-y-2">
                                        <label className="block text-sm font-bold text-slate-700 dark:text-slate-300" htmlFor="intake">Preferred Start Date</label>
                                        <div className="relative">
                                            <select
                                                className="w-full appearance-none bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 py-3 px-4 pr-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all cursor-pointer"
                                                id="intake"
                                                name="educationalBackground.preferredStartdate"
                                                value={formData.educationalBackground.preferredStartdate}
                                                onChange={handleChange}
                                            >
                                                <option disabled value="">Choose your start date...</option>
                                                <option value="fall-2024">Fall (September)</option>
                                                <option value="spring-2025">Spring (January)</option>
                                                <option value="summer-2025">Summer (May)</option>
                                                <option value="fall-2025">Fall (September)</option>
                                            </select>
                                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-slate-400">
                                                <CalendarToday fontSize="small" />
                                            </div>
                                        </div>
                                    </div>
                                    {/* Experience Slider */}
                                    <div className="space-y-6 pt-4">
                                        <div className="flex justify-between items-center">
                                            <label className="block text-sm font-bold text-slate-700 dark:text-slate-300">Years of Work Experience</label>
                                            <span className="bg-primary/10 text-primary px-3 py-1 rounded font-bold text-sm" id="experience-value">{formData.educationalBackground.yearsOfWorkExperience} Years</span>
                                        </div>
                                        <div className="px-2">
                                            <input
                                                className="w-full cursor-pointer"
                                                id="experience-slider"
                                                name="educationalBackground.yearsOfWorkExperience"
                                                max="20"
                                                min="0"
                                                type="range"
                                                value={formData.educationalBackground.yearsOfWorkExperience}
                                                onChange={handleChange}
                                            />
                                            <div className="flex justify-between text-[10px] font-bold text-slate-400 mt-2 uppercase tracking-tighter">
                                                <span>Fresher</span>
                                                <span>5 Years</span>
                                                <span>10 Years</span>
                                                <span>15 Years</span>
                                                <span>20+ Years</span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Form Navigation */}
                                    <div className="flex flex-col sm:flex-row items-center gap-4 pt-8 border-t border-slate-100 dark:border-slate-800">
                                        <button
                                            onClick={handlePrev}
                                            className="w-full sm:w-auto px-8 py-3 text-slate-500 dark:text-slate-400 font-bold hover:text-primary dark:hover:text-primary transition-colors flex items-center justify-center gap-2"
                                            type="button"
                                        >
                                            <ArrowBack className="text-sm" fontSize="small" />
                                            Back
                                        </button>
                                        <button
                                            onClick={handleNext}
                                            className="w-full sm:ml-auto sm:w-auto bg-primary hover:bg-primary/90 text-background-dark cursor-pointer hover:text-background-light font-bold py-3 px-10 rounded-lg shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-2 group"
                                            type="button"
                                        >
                                            Save & Continue
                                            <ArrowForward className="text-sm transition-transform group-hover:translate-x-1" fontSize="small" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </main>
                        {/* Background Decorative Elements */}
                        <div className="fixed top-0 right-0 -z-10 opacity-10 blur-3xl pointer-events-none">
                            <div className="w-[500px] h-[500px] bg-primary rounded-full translate-x-1/2 -translate-y-1/2"></div>
                        </div>
                        <div className="fixed bottom-0 left-0 -z-10 opacity-10 blur-3xl pointer-events-none">
                            <div className="w-[300px] h-[300px] bg-primary rounded-full -translate-x-1/2 translate-y-1/2"></div>
                        </div>
                    </div>
                )
            case 4:
                return (
                    <div>
                        <main className="grow flex flex-col items-center py-12 px-6">
                            <div className="w-full max-w-xl">
                                {/* <!-- Progress Tracker --> */}
                                <div className="mb-8">
                                    <div className="flex justify-between items-end mb-4">
                                        <div>
                                            <span className="text-primary font-bold text-sm tracking-wider uppercase">Step {currentStep} of {totalSteps}</span>
                                            <h1 className="text-3xl font-extrabold text-background-dark dark:text-background-light mt-1">Let&apos;s stay in touch</h1>
                                        </div>
                                        <div className="text-right">
                                            <span className="text-2xl font-bold text-primary">{Math.round(progress)}%</span>
                                        </div>
                                    </div>
                                    <div className="w-full h-1.5 bg-primary/10 dark:bg-white/5 rounded-full overflow-hidden">
                                        <div className="h-full bg-primary rounded-full transition-all duration-500" style={{ width: `${progress}%` }}></div>
                                    </div>
                                </div>
                                {/* <!-- Form Card --> */}
                                <div className="bg-white dark:bg-neutral-900 rounded-xl shadow-xl shadow-primary/5 border-t-4 border-primary overflow-hidden">
                                    <div className="p-8 md:p-10">
                                        <p className="text-background-dark/60 dark:text-background-light/60 mb-8 leading-relaxed">
                                            Great work! You&apos;ve completed all assessment modules. Please provide your contact details so we can send your personalized report and recommendations.
                                        </p>
                                        <form onSubmit={handleSubmit} className="space-y-6">
                                            {/* Full Name */}
                                            <div>
                                                <label className="block text-sm font-semibold text-background-dark dark:text-background-light mb-2" htmlFor="fullName">Full Name</label>
                                                <div className="relative">
                                                    <PersonOutline className="absolute left-4 top-1/2 -translate-y-1/2 text-background-dark/40 dark:text-background-light/40 text-xl" />
                                                    <input
                                                        className="w-full pl-12 pr-4 py-3 bg-background-light dark:bg-white/5 border border-primary/20 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all dark:text-white"
                                                        id="fullName"
                                                        name="personalDetails.fullName"
                                                        placeholder="John Doe"
                                                        type="text"
                                                        value={formData.personalDetails.fullName}
                                                        onChange={handleChange}
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            {/* Email Address */}
                                            <div>
                                                <label className="block text-sm font-semibold text-background-dark dark:text-background-light mb-2" htmlFor="email">Email Address</label>
                                                <div className="relative">
                                                    <MailOutline className="absolute left-4 top-1/2 -translate-y-1/2 text-background-dark/40 dark:text-background-light/40 text-xl" />
                                                    <input
                                                        className="w-full pl-12 pr-4 py-3 bg-background-light dark:bg-white/5 border border-primary/20 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all dark:text-white"
                                                        id="email"
                                                        name="personalDetails.email"
                                                        placeholder="john@example.com"
                                                        type="email"
                                                        value={formData.personalDetails.email}
                                                        onChange={handleChange}
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            {/* Phone Number */}
                                            <div>
                                                <label className="block text-sm font-semibold text-background-dark dark:text-background-light mb-2" htmlFor="phone">Phone Number <span className='italic text-primary text-base'>Preferrably WhatsApp</span></label>
                                                <div className="flex gap-2">
                                                    <input
                                                        className="grow px-4 py-3 bg-background-light dark:bg-white/5 border border-primary/20 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all dark:text-white"
                                                        id="phone"
                                                        name="personalDetails.phone"
                                                        placeholder="+1 (555) 000-0000"
                                                        type="tel"
                                                        value={formData.personalDetails.phone}
                                                        onChange={handleChange}
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            {/* Submit Button */}
                                            <div className="pt-4">
                                                <button
                                                    className="group relative w-full bg-primary cursor-pointer hover:bg-primary/90 text-background-dark hover:text-background-light font-bold py-4 rounded-xl shadow-lg shadow-primary/20 transition-all active:scale-[0.98] flex items-center justify-center gap-2"
                                                    type="submit"
                                                >
                                                    <span>Complete Assessment</span>
                                                    <ArrowForward className="group-hover:translate-x-1 transition-transform" />
                                                </button>
                                            </div>
                                            {/* Trust Badge */}
                                            <div className="flex items-center justify-center gap-2 text-background-dark/50 dark:text-background-light/40 pt-2">
                                                <VerifiedUser className="text-lg" />
                                                <span className="text-xs font-medium uppercase tracking-widest">Your data is encrypted and secure</span>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                {/* Back Link */}
                                <div className="mt-8 text-center">
                                    <button
                                        onClick={handlePrev}
                                        className="text-background-dark/40 dark:text-background-light/40 hover:text-primary transition-colors flex items-center gap-1 mx-auto text-sm font-semibold"
                                        type="button"
                                    >
                                        <ArrowBack className="text-base" />
                                        Return to Step 3
                                    </button>
                                </div>
                            </div>
                        </main>
                        {/* Background Decorative Elements */}
                        <div className="fixed top-0 right-0 -z-10 opacity-10 blur-3xl pointer-events-none">
                            <div className="w-[500px] h-[500px] bg-primary rounded-full translate-x-1/2 -translate-y-1/2"></div>
                        </div>
                        <div className="fixed bottom-0 left-0 -z-10 opacity-10 blur-3xl pointer-events-none">
                            <div className="w-[300px] h-[300px] bg-primary rounded-full -translate-x-1/2 translate-y-1/2"></div>
                        </div>
                    </div>
                )
            case 5:
                return (
                    <div>
                        <main className='grow flex items-center justify-center px-4 pb-20'>
                            <div className='max-w-xl w-full bg-white dark:bg-background-dark/50 border border-primary/5 shadow-2xl shadow-primary/5 rounded-xl p-8 md:p-12 text-center'>
                                {/* Success Icon */}
                                <div className='mb-8 flex justify-center'>
                                    <div className='w-24 h-24 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center relative'>
                                        <div className='w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg shadow-primary/30'>
                                            <CheckCircle className='text-white text-4xl leading-none' />
                                            {/* <!-- Decorative rings --> */}
                                            <div className="absolute inset-0 border-2 border-primary/20 rounded-full scale-110"></div>
                                            <div className="absolute inset-0 border border-primary/10 rounded-full scale-125"></div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Content --> */}
                                <h1 className="text-3xl md:text-4xl font-extrabold text-primary dark:text-white mb-4">
                                    Assessment Submitted Successfully!
                                </h1>
                                <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-10 max-w-md mx-auto">
                                    Thank you for choosing <span className="font-bold text-primary dark:text-primary/80">JIMMYPAS</span>. One of our expert consultants will review your profile and contact you within <span className="font-semibold underline decoration-primary/30 underline-offset-4">24 hours</span>.
                                </p>
                                {/* <!-- Action Buttons --> */}
                                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                    <Link href='/' className="w-full sm:w-auto px-8 py-4 bg-primary hover:bg-background-light text-white font-bold rounded-lg transition-all shadow-md shadow-accent-blue/20 flex items-center justify-center space-x-2">
                                        <Home className='text-xl' />
                                        <span>Back to Home</span>
                                    </Link>
                                </div>
                                {/* <!-- Visual Divider --> */}
                                <div className="mt-12 pt-8 border-t border-slate-100 dark:border-primary/10">
                                    <div className="grid grid-cols-3 gap-4">
                                        <div className="flex flex-col items-center">
                                            <div className="w-8 h-8 rounded-full bg-primary/5 flex items-center justify-center mb-2">
                                                <Description className='text-primary text-sm' />
                                            </div>
                                            <span className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">Review</span>
                                        </div>
                                        <div className="flex flex-col items-center">
                                            <div className="w-8 h-8 rounded-full bg-primary/5 flex items-center justify-center mb-2">
                                                <SupportAgent className='text-primary text-sm' />
                                            </div>
                                            <span className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">Consultation</span>
                                        </div>
                                        <div className="flex flex-col items-center">
                                            <div className="w-8 h-8 rounded-full bg-primary/5 flex items-center justify-center mb-2">
                                                <RocketLaunch className='text-primary text-sm' />
                                            </div>
                                            <span className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">Success</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </main>
                    </div>
                )
        }
    }



    return (
        <div className='min-h-screen bg-background-light dark:bg-background-dark relative overflow-hidden'>
            {isSubmitting && (
                <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm">
                    <div className="relative w-24 h-24">
                        <div className="absolute inset-0 border-4 border-primary/20 rounded-full"></div>
                        <div className="absolute inset-0 border-4 border-primary rounded-full border-t-transparent animate-spin"></div>
                        <div className="absolute inset-4 bg-primary/10 rounded-full flex items-center justify-center">
                            <RocketLaunch className="text-primary animate-pulse" />
                        </div>
                    </div>
                    <div className="mt-8 text-center">
                        <h2 className="text-2xl font-bold text-background-dark dark:text-background-light animate-pulse">Processing Your Assessment</h2>
                        <p className="text-slate-500 dark:text-slate-400 mt-2">Connecting you with path to success...</p>
                    </div>
                    {/* Background Decorative Rings */}
                    <div className="absolute w-[500px] h-[500px] border border-primary/5 rounded-full animate-[ping_3s_linear_infinite]"></div>
                    <div className="absolute w-[700px] h-[700px] border border-primary/5 rounded-full animate-[ping_4s_linear_infinite]"></div>
                </div>
            )}
            {renderStep()}
        </div>
    )

}

export default AssesmentForm