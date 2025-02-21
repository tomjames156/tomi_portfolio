'use client'

import { workExperiences } from '@/app/lib/placeholder-data'
import { libre_franklin } from './fonts'
import { motion } from 'framer-motion'
import { useState } from 'react'

const container = {
    initial: { opacity: 1, scale: 0},
    whileInView: {
        opacity: 1,
        scale: 1,
        transition: {
            delayChildren: 0.1,
            staggerChildren: 0.1,
        }
    }
}

const item  = {
    initial: { x: 20, opacity: 0},
    whileInView: {
        x: 0,
        opacity: 1
    }
}

export default function Experience(){

    const [ activeIndex, setActiveIndex ] = useState(1)

    return(
        <section className="mt-20 mx-5 sm:mx-10 border-2 mx-40 border-2 sm:mx-10 lg:mx-20 xl:mx-40" id='experience'>
            <h1 className="font-semibold text-xl xs:text-2xl">Experience</h1>
            <div className='mt-4 flex justify-between flex-col lg:flex-row'>
                <ul className='w-full flex flex-wrap gap-4 justify-between mb-4 lg:w-[20%] lg:flex-col'>
                    {workExperiences.map((exp, index) => (
                        index !==  activeIndex?
                        <li key={exp.exp_id} className='flex justify-between pr-10'>    
                            <p className='uppercase text-[0.8rem] font-bold text-gray-400 cursor-pointer hover:text-gray-500 tansition transition-all duration-200 xs:text-[1rem]' onClick={() => {setActiveIndex(index)}}>{exp.organisation}</p>
                        </li> :
                        <li key={exp.exp_id} className='flex justify-between pr-10'>
                            <p className='uppercase text-[0.8rem] font-bold text-blue-900 border-b-[4px] border-[#0038BC] lg:border-none xs:text-[1rem]'>{exp.organisation}</p>
                            <div className='w-[4px] h-full bg-[#0038BC] hidden lg:block'></div>
                        </li>
                    ))}
                </ul>
                <div className='w-full lg:w-[80%]'>
                    <h1 className='font-bold text-[0.9rem] xs:text-[1.2rem]'>{workExperiences[activeIndex].role} @ <span className='text-blue-900'>{workExperiences[activeIndex].organisation}</span></h1>
                    <h2 className='uppercase mt-2 mb-8 text-[0.75rem] text-gray-500 xs:text-[0.9rem]'>{workExperiences[activeIndex].duration}</h2>
                    <motion.ul 
                        className='flex flex-col gap-y-4' 
                        initial="initial"
                        whileInView="whileInView"
                        variants={container}
                        viewport={{once: true}}>
                        {workExperiences[activeIndex].experiences.map((bullet, index) => (
                            <motion.li key={index} className='flex items-start gap-4' variants={item}>
                                <div>
                                    <div className='w-[0.5rem] bg-blue-900 h-[0.5rem] rounded-xl'>
                                    </div>
                                </div>
                                <div className={`text-[0.9rem] ${libre_franklin.className} antialiased -mt-2 text-justify xs:text-[1.1rem]`}>{bullet}</div>
                            </motion.li>
                        ))}
                    </motion.ul>
                </div>
            </div>
            
        </section>
        
    )
}