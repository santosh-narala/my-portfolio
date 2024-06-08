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
                I recently graduated with a Master's degree in Computer Science from the 
                <span className="font-bold"> University of Southern California</span>. 
                During my time at USC, I served as the head teaching assistant for the graduate-level course on web technologies under Professor Marco Papa. In this role, I instructed students on various technologies, including React, Angular, Android, iOS, Flask, Node, and GraphQL. Before pursuing my Master's, I accumulated six years of professional experience at 
                <span className="font-bold"> Applied Materials</span>
                , a leading company in the semiconductor industry. I started as a software engineer and advanced to senior software engineer, eventually becoming a technical lead. In my last role, I led a team of four in developing simulation solutions for hardware flows, primarily utilizing React, Java, and MongoDB. 
                </span>
            </p>
            <p className='mb-3'>
                <span>
                    My expertise lies in designing and implementing server-side logic, database architecture, and APIs that power seamless user experiences. With a deep understanding of both frontend and backend technologies, I bridge the gap between user interface design and complex backend processes, ensuring cohesive, scalable and high-performing applications. My passion for problem-solving and continuous learning drives me to stay updated with the latest industry trends and best practices, enabling me to deliver innovative and reliable solutions. Beyond the realm of technology, I find inspiration and solace in <span className="italic">hiking, music, snorkeling </span>and
                    <span className="italic"> reading science fiction</span>
                </span>
            </p>
        </motion.section>
    )
}

