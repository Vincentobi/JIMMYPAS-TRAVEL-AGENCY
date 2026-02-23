import React from 'react'
import Image from 'next/image'
import PublicIcon from '@mui/icons-material/Public';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import Link from 'next/link';
import { useModal } from '../../context/ModalContext';

const Footer = () => {
  const { openModal } = useModal();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 pt-20 pb-10">
      <div className="max-w-[1200px] mx-auto px-10 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-1 flex flex-col gap-6">
          <div className="flex items-center gap-2 text-primary dark:text-white">
            <Image
              src={"/images/Logo.png"}
              alt="Logo"
              width={100}
              height={100}
              priority={true}
              className="object-contain"
            />
          </div>
          <p className="text-gray-500 text-sm leading-relaxed">
            Dedicated to providing excellence in educational consultancy and travel services since 2012. Your partner in global growth.
          </p>
          <div className="flex gap-4">
            <a className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all" href="#">
              <PublicIcon className='text-lg' />
            </a>
            <a className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all" href="#">
              <AlternateEmailIcon className='text-lg' />
            </a>
          </div>
        </div>
        <div>
          <h4 className="font-bold text-[#101818] dark:text-white mb-6">Quick Links</h4>
          <ul className="flex flex-col gap-4 text-gray-500 text-sm font-medium">
            <li><Link className="hover:text-primary" href="/">Home</Link></li>
            <li><Link className="hover:text-primary" href="/study-abroad">Study Abroad</Link></li>
            <li><Link className="hover:text-primary" href="/visa#testimonial">Success Stories</Link></li>
            <li><Link className="hover:text-primary" href="#">Resources</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-[#101818] dark:text-white mb-6">Services</h4>
          <ul className="flex flex-col gap-4 text-gray-500 text-sm font-medium">
            <li><Link className="hover:text-primary" href="#">Student Visa</Link></li>
            <li><Link className="hover:text-primary" href="#">Work Permit</Link></li>
            <li><Link className="hover:text-primary" href="#">Tourist Visa</Link></li>
            <li><button className="hover:text-primary transition-colors text-left" onClick={openModal}>Consultation</button></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-[#101818] dark:text-white mb-6">Support</h4>
          <ul className="flex flex-col gap-4 text-gray-500 text-sm font-medium">
            <li><Link className="hover:text-primary" href="/contact">Contact Us</Link></li>
            <li><Link className="hover:text-primary" href="#">Privacy Policy</Link></li>
            <li><Link className="hover:text-primary" href="#">Terms of Service</Link></li>
            <li><Link className="hover:text-primary" href="/faqs">FAQs</Link></li>
          </ul>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto px-10 border-t border-gray-100 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-xs font-semibold">
        <p>© {currentYear} JIMMYPAS Educational &amp; Consultancy Services Ltd. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <span>Certified Education Agent</span>
          <span>Reg No: 2012/8374/EU</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer