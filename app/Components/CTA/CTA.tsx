import React from 'react'
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import GroupsIcon from '@mui/icons-material/Groups';
import { motion } from 'framer-motion';

const CTA = () => {
  return (
    <motion.div className='mb-16' initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div className="group flex flex-col gap-2 rounded-2xl p-8 bg-white dark:bg-gray-800 border border-[#dae6e7] dark:border-gray-700 hover:border-primary transition-all" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                <VerifiedUserIcon className="text-primary" />
            </div>
            <p className="text-gray-500 dark:text-gray-400 text-sm font-semibold uppercase tracking-wider">Visa Success Rate</p>
            <p className="text-[#101818] dark:text-white text-4xl font-black">99%</p>
            </motion.div>
            <motion.div className="group flex flex-col gap-2 rounded-2xl p-8 bg-white dark:bg-gray-800 border border-[#dae6e7] dark:border-gray-700 hover:border-primary transition-all" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                <AccountBalanceIcon className="text-primary" />
            </div>
            <p className="text-gray-500 dark:text-gray-400 text-sm font-semibold uppercase tracking-wider">Patnered universities</p>
            <p className="text-[#101818] dark:text-white text-4xl font-black">50+</p>
            </motion.div>
            <motion.div className="group flex flex-col gap-2 rounded-2xl p-8 bg-white dark:bg-gray-800 border border-[#dae6e7] dark:border-gray-700 hover:border-primary transition-all" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1.5 }}>
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                <GroupsIcon className="text-primary" />
            </div>
            <p className="text-gray-500 dark:text-gray-400 text-sm font-semibold uppercase tracking-wider">Students Placed</p>
            <p className="text-[#101818] dark:text-white text-4xl font-black">200+</p>
            </motion.div>
        </div>
    </motion.div>
  )
}

export default CTA