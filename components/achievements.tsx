'use client';
import React, { useEffect } from 'react'
import SectionHeading from './sectionheading'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/hooks';

export default function Achievements() {
    const {ref } = useSectionInView('Achievements');
    return (
        <motion.section 
        ref={ref}
        className='mb-28 max-w-[60rem] text-center leading-8 sm:mb-40 scroll-mt-28'
        initial={{ opacity: 0, y:100}}
        animate={{ opacity: 1, y:0}}
        transition={{ delay: 0.175 }}
        id='achievements'
        >
            <SectionHeading>Achievements</SectionHeading>
            <p className='mb-3'>
                <span>
                    Way too many achievements :) 
                </span>

                
            </p>
            
        </motion.section>
    )
}

