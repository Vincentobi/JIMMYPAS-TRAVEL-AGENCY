'use client'
import React from 'react'
import { usePathname } from 'next/navigation'
import ResponsiveNav from './NavBar/ResponsiveNav'
import Footer from './Footer/Footer'
import { ModalProvider, useModal } from '../context/ModalContext'
import Form from './ConsultaionForm/Form'

const LayoutContent = ({ children }: { children: React.ReactNode }) => {
    const { isModalOpen, closeModal } = useModal()
    const pathname = usePathname()
    const isAssessmentPage = pathname.startsWith('/assessment')

    if (isAssessmentPage) {
        return <>{children}</>
    }

    return (
        <>
            <ResponsiveNav />
            <main className='max-w-[1200px] mx-auto px-4 md:px-10'>
                {children}
            </main>
            <Footer />
            <Form isOpen={isModalOpen} onClose={closeModal} />
        </>
    )
}

const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
    return (
        <ModalProvider>
            <LayoutContent>{children}</LayoutContent>
        </ModalProvider>
    )
}

export default LayoutWrapper
