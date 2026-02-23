import { FormatQuote } from '@mui/icons-material'
import React from 'react'

const Testimonial = () => {
  return (
    <div id='testimonial' className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
{/* <!-- Client 1 --> */}
<div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 flex flex-col items-center text-center shadow-sm">
<div className="size-24 rounded-full overflow-hidden mb-6 border-4 border-slate-50 dark:border-slate-700">
<img alt="Happy client smiling" className="w-full h-full object-cover" data-alt="Portrait of a smiling young professional man" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdhav-VliqK1FDu52APH-pB1wAW1drPht_xBhS0TyGL08_V4pyfUznB8wGiqydEPhYAD6V2VDFpaHScCP-RdL0OYD2wXgtBXrkaDvWU9XB8SdLl0oBLWDKF-o9ql3xTA5i0ppwzQ7Bpa35WYuOeuo3CuDLrMgqwwi-54WTOkc8vlHKEHj0FlzECPPIwipHNu8EiHWUJXHPtvP8EZAuivcnySmNuAsdWvsKnN2Dp4Xe3H--eELBmUw1d2kS0t1kEat6vrN0VymjG0E"/>
</div>
<div className="mb-4">
<FormatQuote className='text-primary text-4xl opacity-20'/>
<p className="text-slate-600 dark:text-slate-400 italic text-sm leading-relaxed">
                        &quot;The document preparation phase was so daunting until JIMMYPAS stepped in. Their attention to detail is why I&apos;m currently working in Toronto today.&quot;
                    </p>
</div>
<div>
<h4 className="font-bold text-slate-900 dark:text-white">Marcus Chen</h4>
<p className="text-xs font-semibold text-primary uppercase tracking-wider">Skilled Worker Visa (Canada)</p>
</div>
</div>
{/* <!-- Client 2 --> */}
<div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 flex flex-col items-center text-center shadow-sm">
<div className="size-24 rounded-full overflow-hidden mb-6 border-4 border-slate-50 dark:border-slate-700">
<img alt="Professional woman smiling" className="w-full h-full object-cover" data-alt="Portrait of a smiling professional woman in a blazer" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpJKH_9YTbNnrJd0YkeSbwbIynuSfn2FIL_QYjECe0rC9N14jmuTHu0vTVlW27GDW1znOQz-EAyosqg-RlhGWvbr9Jy4E6m5OLCp1oAH81UMZZtw5TrEFzoj_p2hdMY_ZdZgIlYgEB_8Z9y0V41K8l6XTOpzeor26wQrzlloRoCQftd8fBYZi697kzPd7Y-22REncThadQuMAb7arysRZjKTDgoeNPfWbSbWjLQ3GR4kTkhJ14OOi4C-M9zwYgl8jiD92AwWfHrnI"/>
</div>
<div className="mb-4">
<FormatQuote className='text-accent-coral text-4xl opacity-20' />
<p className="text-slate-600 dark:text-slate-400 italic text-sm leading-relaxed">
                        &quot;I was nervous about my interview, but the mock sessions at Phase 4 were identical to the real thing. I felt prepared and confident throughout.&quot;
                    </p>
</div>
<div>
<h4 className="font-bold text-slate-900 dark:text-white">Aisha Rahman</h4>
<p className="text-xs font-semibold text-primary uppercase tracking-wider">Business Visa (UK)</p>
</div>
</div>
{/* <!-- Client 3 --> */}
<div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 flex flex-col items-center text-center shadow-sm">
<div className="size-24 rounded-full overflow-hidden mb-6 border-4 border-slate-50 dark:border-slate-700">
<img alt="Smiling man with glasses" className="w-full h-full object-cover" data-alt="Close up portrait of a man with glasses smiling" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCa3mrEiv6rb1BnLsOUveRbIQefntsxsAyWHOUzgl9vnHSfvLnlwYkwj75ZChOPCT3EpU6L9Ip4U9q6ZpBOeRw2sGO4dA8KOXJeSFF0ULzduec6MMHyCKR0yzXF3e7KkJf2_hqwbV3WXRHKM-q-GkdGcSsfq18ypWzrb0DdyoZQDQmnDO37oDYP-dFGW--dGSc3tPJGQMi9L7AaZ6sJGxc-NpElBRCRWC4_ppsXlWD4mZZcspaXJNpOweUWzVLcvM7JbQ0L58OMIdQ"/>
</div>
<div className="mb-4">
<FormatQuote className='text-accent-blue text-4xl opacity-20' />
<p className="text-slate-600 dark:text-slate-400 italic text-sm leading-relaxed">
                        &quot;JIMMYPAS didn&apos;t just help with the visa; they helped me plan my life in Australia. Their post-approval briefing was incredibly helpful.&quot;
                    </p>
</div>
<div>
<h4 className="font-bold text-slate-900 dark:text-white">David Miller</h4>
<p className="text-xs font-semibold text-primary uppercase tracking-wider">Investor Visa (Australia)</p>
</div>
</div>
</div>
  )
}

export default Testimonial