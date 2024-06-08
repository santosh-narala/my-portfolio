'use client';
import React, { useEffect } from 'react'
import SectionHeading from './sectionheading'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/hooks';
import { achievements } from '@/lib/data'

export default function Achievements() {
    const {ref } = useSectionInView('Achievements');
    const fadeInAnimationVariants = {
        initial : { opacity: 0, y:100},
        animate : (index:number) => ({ opacity: 1, y:0, transition: {delay : 0.05 * index}}),
    }
    return (
        <motion.section 
    ref={ref}
    className='mb-28 max-w-[60rem] text-center leading-8 sm:mb-40 scroll-mt-28'
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.175 }}
    id='achievements'
>
    <SectionHeading>Achievements</SectionHeading>
    <ul className='flex flex-wrap justify-center gap-2 text-lg text-gray-800'>
        {
            achievements.map((achievement, index) => (
                <motion.li 
                    className='bg-white border border-black/[0.1] rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80'
                    key={index}
                    variants={fadeInAnimationVariants}
                    initial='initial'
                    whileInView='animate'
                    viewport={{ once: true }}
                    custom={index}
                >
                    <p className='flex justify-between text-left'>{achievement.description}</p>
                    <div className='flex justify-between text-sm py-2 text-gray-600 dark:text-gray-400'>
                        <p className='text-left'>
                            <em>Issued by: {achievement.issuedBy}</em>
                        </p>
                        <p className='text-right'>
                            <em>Date: {achievement.date}</em>
                        </p>
                    </div>
                </motion.li>
            ))
        }
    </ul>
</motion.section>

    )
}

