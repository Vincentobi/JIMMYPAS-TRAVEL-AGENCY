import Link from 'next/link'
import NavLinks from '@/Constants/constants'
import React from 'react'
import Button from '../Button';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';

type Props = {
    showNav: boolean;
    closeNav: () => void;
}

const MobileNav = ({ showNav, closeNav }: Props) => {

    const navOpenStyle = showNav ? "translate-x-0" : "translate-x-full";
    const backdropStyle = showNav ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none";

    return (
        <>
            {/* Backdrop */}
            <div
                className={`fixed inset-0 z-[1000] bg-black/60 backdrop-blur-[2px] transition-opacity duration-300 ${backdropStyle}`}
                onClick={closeNav}
                aria-hidden="true"
            />

            {/* Drawer */}
            <div className={`fixed right-0 top-0 z-[1001] h-screen w-[80%] sm:w-[60%] bg-white/95 dark:bg-gray-950/95 backdrop-blur-xl transition-transform duration-300 ease-out shadow-2xl border-l border-gray-100 dark:border-gray-800 ${navOpenStyle} flex flex-col`}>
                {/* Header with Close Button */}
                <div className='flex justify-end p-6 border-b border-gray-100 dark:border-gray-800'>
                    <IconButton onClick={closeNav} className='hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors'>
                        <CloseIcon className='text-gray-900 dark:text-white w-6 h-6' />
                    </IconButton>
                </div>

                {/* Links Container */}
                <div className='flex flex-col items-center justify-center flex-1 space-y-8 pb-20'>
                    {NavLinks.map((link) => {
                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                className='relative text-2xl font-medium text-gray-800 dark:text-gray-100 hover:text-primary transition-colors group'
                                onClick={closeNav}
                            >
                                {link.name}
                                <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
                            </Link>
                        )
                    })}
                    <div className='mt-8'>
                        <Button href="/assessment" onClick={closeNav}>Get Started</Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MobileNav