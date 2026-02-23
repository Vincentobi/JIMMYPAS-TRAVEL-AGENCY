import Link from 'next/link'
import React from 'react'

const Button = ({ children, href, onClick }: { children: React.ReactNode, href: string, onClick?: () => void }) => {
    return (
        <Link
            href={href}
            onClick={onClick}
            className='flex min-w-[140px] cursor-pointer items-center justify-center rounded-lg h-10 px-5 bg-primary text-white text-sm font-bold shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all'
        >
            {children}
        </Link>
    )
}

export default Button