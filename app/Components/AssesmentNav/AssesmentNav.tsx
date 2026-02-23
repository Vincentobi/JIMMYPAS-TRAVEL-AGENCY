'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowBack } from '@mui/icons-material'

const AssesmentNav = () => {
    return (
        <nav className="w-full bg-white dark:bg-zinc-950 border-b border-gray-100 dark:border-zinc-800 px-6 py-4">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2">
                    <Image
                        src="/images/Logo.png"
                        alt="Logo"
                        width={40}
                        height={40}
                        className="object-contain"
                    />
                </Link>

                <Link
                    href="/"
                    className="flex items-center gap-2 text-slate-500 hover:text-primary transition-colors font-medium text-sm"
                >
                    <ArrowBack fontSize="small" />
                    Back to Home
                </Link>
            </div>
        </nav>
    )
}

export default AssesmentNav
