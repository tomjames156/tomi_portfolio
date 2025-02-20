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
        <section className="mt-20 mx-40" id='experience'>
            <h1 className="font-semibold text-2xl">Experience</h1>
            <div className='mt-4 flex justify-between'>
                <ul className='w-[20%] flex flex-col gap-4'>
                    {workExperiences.map((exp, index) => (
                        index !==  activeIndex?
                        <li key={exp.exp_id} className='flex justify-between pr-10'>    
                            <p className='uppercase font-bold text-gray-400 cursor-pointer hover:text-gray-500 tansition transition-all duration-200' onClick={() => {setActiveIndex(index)}}>{exp.organisation}</p>
                        </li> :
                        <li key={exp.exp_id} className='flex justify-between pr-10'>
                            <p className='uppercase font-bold text-blue-900'>{exp.organisation}</p>
                            <div className='w-[4px] h-full bg-[#0038BC]'></div>
                        </li>
                    ))}
                </ul>
                <div className='w-[80%]'>
                    <h1 className='font-bold text-[1.2rem]'>{workExperiences[activeIndex].role} @ <span className='text-blue-900'>{workExperiences[activeIndex].organisation}</span></h1>
                    <h2 className='uppercase mt-2 mb-8 text-[0.9rem] text-gray-500'>{workExperiences[activeIndex].duration}</h2>
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
                                <div className={`text-[1.1rem] ${libre_franklin.className} antialiased -mt-2`}>{bullet}</div>
                            </motion.li>
                        ))}
                    </motion.ul>
                </div>
            </div>
            
        </section>
        
    )
}