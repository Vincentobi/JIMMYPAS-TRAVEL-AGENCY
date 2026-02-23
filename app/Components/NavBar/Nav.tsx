'use client';
import NavLinks from '@/Constants/constants'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import Button from '../Button'
import HamburgerMenu from '../HamburgerMenu'

type Props = {
    openNav: () => void
}

const Nav = ({ openNav }: Props) => {
    const pathname = usePathname()
    const [navBg, setNavBg] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 100) {
                setNavBg(true)
            } else {
                setNavBg(false)
            }
        }
        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    return (
        <div className={`sticky justify-center items-center top-0 z-50 transition-all duration-300 px-4 md:px-10 py-3 ${navBg ? 'bg-white/90 dark:bg-gray-900/90 shadow-sm border-b border-gray-100 dark:border-gray-800 backdrop-blur-md' : 'bg-white/70 dark:bg-gray-900/70 border-b border-transparent'}`}>
            <div className='max-w-[1200px] mx-auto flex items-center justify-between'>
                {/* LOGO */}
                <Link href={'/'} className='flex items-center gap-2'>
                    <Image
                        src={"/images/Logo.png"}
                        alt="Logo"
                        width={50}
                        height={50}
                        priority={true}
                        className="object-contain"
                    />
                </Link>
                {/* NAV-LINKS */}
                <div className='hidden md:flex items-center gap-8'>
                    {NavLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`hover:text-primary font-semibold text-sm transition-colors ${pathname === link.href ? 'text-primary' : 'text-gray-700 dark:text-gray-300'}`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Button href={"/assessment"}>Get Started</Button>
                </div>

                {/* CTA & MOBILE MENU */}
                <div className='flex items-center gap-4'>
                    <div className='md:hidden'>
                        <HamburgerMenu onClick={openNav} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nav