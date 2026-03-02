'use client'
import React, { ReactNode } from 'react'
import { motion } from 'framer-motion'

export default function PageAnimate({children}: { children: ReactNode })
{
  return (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        >
            {children}
    </motion.div>
  )
}

