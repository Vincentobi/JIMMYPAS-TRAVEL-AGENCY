import { ChatBubble, FolderOpen, Group, Send, Verified } from '@mui/icons-material'
import React from 'react'

const Timeline = () => {
  return (
    <div className="relative mb-24">
<div className="absolute left-5 top-0 bottom-0 w-0.5 bg-linear-to-b from-primary via-accent-coral to-accent-blue opacity-30 md:hidden"></div>
<div className="flex flex-col gap-12">
{/* <!-- Step 1 --> */}
<div className="grid grid-cols-1 md:grid-cols-[1fr_200px_1fr] items-center g-8">
<div className="order-2 md:order-1 text-right hiddend:block">
<h3 className="text-xl font-extrabold text-primary mb-2">Phase 01</h3>
<p className="text-slate-500">The Discovery Foundation</p>
</div>
<div className="order-1 md:order-2 flex justify-start md:justify-center z-10">
<div className="size-14 rounded-full bg-primary text-white flex items-center justify-center shadow-xl ring-8 ring-background-light dark:ring-background-dark">
<ChatBubble/>
</div>
</div>
<div className="order-3 bg-white dark:bg-slate-800/50 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-lg transition-shadow">
<h2 className="text-2xl font-bold mb-3 flex items-center gap-2">
                            Initial Consultation
                        </h2>
<p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                            We begin by mapping your goals. Our experts assess your eligibility against the latest immigration policies to find the most viable pathway for your specific profile.
                        </p>
<div className="flex gap-2 flex-wrap">
<span className="text-[10px] uppercase font-bold tracking-widest bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded">Eligibility Check</span>
<span className="text-[10px] uppercase font-bold tracking-widest bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded">Strategy Mapping</span>
</div>
</div>
</div>
{/* <!-- Step 2 --> */}
<div className="grid grid-cols-1 md:grid-cols-[1fr_200px_1fr] items-center gap-8">
<div className="order-3 md:order-1 bg-white dark:bg-slate-800/50 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-lg transition-shadow md:text-right">
<h2 className="text-2xl font-bold mb-3">Document Preparation</h2>
<p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                            The most critical phase. We provide a customized checklist and undergo rigorous verification of every paper to ensure a &quot;Right First Time&quot; submission.
                        </p>
<div className="flex gap-2 flex-wrap md:justify-end">
<span className="text-[10px] uppercase font-bold tracking-widest bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded">Verification</span>
<span className="text-[10px] uppercase font-bold tracking-widest bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded">Notarization</span>
</div>
</div>
<div className="order-1 md:order-2 flex justify-start md:justify-center z-10">
<div className="size-14 rounded-full bg-accent-coral text-white flex items-center justify-center shadow-xl ring-8 ring-background-light dark:ring-background-dark">
<FolderOpen/>
</div>
</div>
<div className="order-2 md:order-3 text-left hidden md:block">
<h3 className="text-xl font-extrabold text-accent-coral mb-2">Phase 02</h3>
<p className="text-slate-500">Technical Accuracy</p>
</div>
</div>
{/* <!-- Step 3 --> */}
<div className="grid grid-cols-1 md:grid-cols-[1fr_200px_1fr] items-center gap-8">
<div className="order-2 md:order-1 text-right hidden md:block">
<h3 className="text-xl font-extrabold text-primary mb-2">Phase 03</h3>
<p className="text-slate-500">Liaison &amp; Advocacy</p>
</div>
<div className="order-1 md:order-2 flex justify-start md:justify-center z-10">
<div className="size-14 rounded-full bg-primary text-white flex items-center justify-center shadow-xl ring-8 ring-background-light dark:ring-background-dark">
<Send />
</div>
</div>
<div className="order-3 bg-white dark:bg-slate-800/50 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-lg transition-shadow">
<h2 className="text-2xl font-bold mb-3">Application Submission</h2>
<p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                            We take the burden off your shoulders by managing the complex digital and physical filing processes, coordinating directly with embassies and consulates.
                        </p>
<div className="flex gap-2 flex-wrap">
<span className="text-[10px] uppercase font-bold tracking-widest bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded">Fast-Track</span>
<span className="text-[10px] uppercase font-bold tracking-widest bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded">Compliance</span>
</div>
</div>
</div>
{/* <!-- Step 4 --> */}
<div className="grid grid-cols-1 md:grid-cols-[1fr_200px_1fr] items-center gap-8">
<div className="order-3 md:order-1 bg-white dark:bg-slate-800/50 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-lg transition-shadow md:text-right">
<h2 className="text-2xl font-bold mb-3">Interview Preparation</h2>
<p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                            Boost your confidence with our intensive mock interview sessions. We coach you on common pitfalls, body language, and articulate answering techniques.
                        </p>
<div className="flex gap-2 flex-wrap md:justify-end">
<span className="text-[10px] uppercase font-bold tracking-widest bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded">Mock Sessions</span>
<span className="text-[10px] uppercase font-bold tracking-widest bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded">Coaching</span>
</div>
</div>
<div className="order-1 md:order-2 flex justify-start md:justify-center z-10">
<div className="size-14 rounded-full bg-accent-blue text-white flex items-center justify-center shadow-xl ring-8 ring-background-light dark:ring-background-dark">
<Group/>
</div>
</div>
<div className="order-2 md:order-3 text-left hidden md:block">
<h3 className="text-xl font-extrabold text-accent-blue mb-2">Phase 04</h3>
<p className="text-slate-500">Confidence Building</p>
</div>
</div>
{/* <!-- Step 5 --> */}
<div className="grid grid-cols-1 md:grid-cols-[1fr_200px_1fr] items-center gap-8">
<div className="order-2 md:order-1 text-right hidden md:block">
<h3 className="text-xl font-extrabold text-primary mb-2">Phase 05</h3>
<p className="text-slate-500">Final Success</p>
</div>
<div className="order-1 md:order-2 flex justify-start md:justify-center z-10">
<div className="size-14 rounded-full bg-primary text-white flex items-center justify-center shadow-xl ring-8 ring-background-light dark:ring-background-dark">
<Verified/>
</div>
</div>
<div className="order-3 bg-white dark:bg-slate-800/50 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-lg transition-shadow">
<h2 className="text-2xl font-bold mb-3">Visa Approval</h2>
<p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                            The moment of success. We conclude with a post-visa briefing on travel requirements, insurance, and initial steps in your destination country.
                        </p>
<div className="flex gap-2 flex-wrap">
<span className="text-[10px] uppercase font-bold tracking-widest bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded">Departure Prep</span>
<span className="text-[10px] uppercase font-bold tracking-widest bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded">Client Briefing</span>
</div>
</div>
</div>
</div>
</div>
  )
}

export default Timeline