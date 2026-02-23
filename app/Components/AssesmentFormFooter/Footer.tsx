import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div>
<div className="mt-8 text-center text-slate-400 dark:text-slate-500 text-sm">
<p>Need help with your application? <Link className="text-primary font-semibold underline underline-offset-4 decoration-primary/30" href={'/faqs'}>View FAQ</Link> or <Link href={'/contact'}>contact support.</Link></p>
</div>
    </div>
  )
}

export default Footer