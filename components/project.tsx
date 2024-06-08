'use client';
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { projectsData } from '@/lib/data';
import { FaExternalLinkAlt } from "react-icons/fa";



interface ProjectProps {
    links: { [key: string]: string };
    title: string;
    description: string;
    tags: string[];
    imageUrl: string;
}

export default function Project({links,title, description, tags, imageUrl} : ProjectProps) {
    const ref = useRef<HTMLDivElement>(null);
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"]
    });
    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
    const hasVideo = Object.keys(links).length > 0;
    console.log(links)
    console.log(hasVideo)


    return (
       <motion.div
       ref={ref}
        style = {{
            scale: scaleProgress,
            opacity: opacityProgress
        }} 
        className='group mb-3 sm:mb-8 last:mb-0'
        >
            <section 
            className=' bg-gray-100 max-w-[50rem] border border-black/5 overflow-hidden rounded-lg
            sm:pr-8 relative sm:h-[22rem] mb-3 sm:mb-8 last:mb-0 sm:group-even:pl-8 hover:bg-gray-200 transition dark:bg-white/10 dark:hover:bg-white/20 dark:text-white'>
                <div className='pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[22rem]'>
                    <h3 className='text-xl font-semibold'>{title}</h3>
                    <p className='mt-2 leading-relaxed text-gray-700 dark:text-white/70'>{description}</p>
                    
                    <ul >
                        {
                            Object.entries(links).map(([name, url], index) => (
                                <li className="flex flex-wrap mt-4 gap-2 sm:mt-auto" key={name}>
                                    <a href={url} target='_blank' className='flex flex-wrap mt-4 gap-2 sm:mt-auto underline text-brown' >{name} <FaExternalLinkAlt /></a>
                                    
                                </li>
                            ))
                        }
                         </ul>

                    <ul className='flex flex-wrap mt-4 gap-2 sm:mt-auto'>
                        {
                            tags.map((tag, index) => (
                                <li className='bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70' key={index}>{tag}</li>
                            ))
                        }
                    </ul>
                </div>


                


                <div>
                {hasVideo ? (<iframe className ='absolute hidden sm:block top-2 -right-0 w-[24rem] h-[16rem] mx-2 my-10
                rounded-lg 
                group-even:right-[initial] 
                group-even:-left-0'
                 width="100" height="200" 
                 src={`https://www.youtube.com/embed/${Object.values(links)[0].split('/').pop()}`} 
                 title="YouTube video player" frameBorder="0" allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin"  allowFullScreen></iframe>
                   
                ) : (


                <Image src={imageUrl} alt='My Project' quality={95} className='absolute hidden sm:block top-2 -right-0 w-[24rem] h-[16rem] mx-2 my-10
                rounded-lg shadow-2xl
                transition
                group-hover:scale-[1.04]
                group-hover:-translate-x-3
                group-hover:translate-y-3
                group-hover:-rotate-2
                
                group-even:group-hover:translate-x-3
                group-even:group-hover:translate-y-3
                group-even:group-hover:rotate-2
                
                group-even:right-[initial] 
                group-even:-left-0'/>

            )}

</div>
            </section>
       </motion.div>
    )
}