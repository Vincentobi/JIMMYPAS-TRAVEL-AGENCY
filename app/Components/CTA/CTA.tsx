import React from 'react'
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import GroupsIcon from '@mui/icons-material/Groups';

const CTA = () => {
  return (
    <div className='mb-16'>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="group flex flex-col gap-2 rounded-2xl p-8 bg-white dark:bg-gray-800 border border-[#dae6e7] dark:border-gray-700 hover:border-primary transition-all">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                <VerifiedUserIcon className="text-primary" />
            </div>
            <p className="text-gray-500 dark:text-gray-400 text-sm font-semibold uppercase tracking-wider">Visa Success Rate</p>
            <p className="text-[#101818] dark:text-white text-4xl font-black">99%</p>
            </div>
            <div className="group flex flex-col gap-2 rounded-2xl p-8 bg-white dark:bg-gray-800 border border-[#dae6e7] dark:border-gray-700 hover:border-primary transition-all">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                <AccountBalanceIcon className="text-primary" />
            </div>
            <p className="text-gray-500 dark:text-gray-400 text-sm font-semibold uppercase tracking-wider">Patnered universities</p>
            <p className="text-[#101818] dark:text-white text-4xl font-black">50+</p>
            </div>
            <div className="group flex flex-col gap-2 rounded-2xl p-8 bg-white dark:bg-gray-800 border border-[#dae6e7] dark:border-gray-700 hover:border-primary transition-all">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                <GroupsIcon className="text-primary" />
            </div>
            <p className="text-gray-500 dark:text-gray-400 text-sm font-semibold uppercase tracking-wider">Students Placed</p>
            <p className="text-[#101818] dark:text-white text-4xl font-black">200+</p>
            </div>
        </div>
    </div>
  )
}

export default CTA