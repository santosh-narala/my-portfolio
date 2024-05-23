'use client';
import React, { useEffect } from 'react'
import SectionHeading from './sectionheading'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/hooks';

export default function About() {
    const {ref } = useSectionInView('About');
    return (
        <motion.section 
        ref={ref}
        className='mb-28 max-w-[60rem] text-center leading-8 sm:mb-40 scroll-mt-28'
        initial={{ opacity: 0, y:100}}
        animate={{ opacity: 1, y:0}}
        transition={{ delay: 0.175 }}
        id='about'
        >
            <SectionHeading>About me</SectionHeading>
            <p className='mb-3'>
                <span>
                    Yet to think about this. 
                </span>
            </p>
        </motion.section>
    )
}

