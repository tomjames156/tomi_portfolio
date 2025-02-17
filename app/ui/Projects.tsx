"use client"

import { libre_franklin } from './fonts'
import { useState } from 'react'
import { projectsList } from '../lib/placeholder-data'
import Image from 'next/image'

export default function Projects(){

    const [activeIndex, setActiveIndex] = useState(1)

    return (
        <section className="mt-40 mx-40">
            <div>
                <h1 className="font-semibold text-2xl">Projects</h1>
                <Image
                    src={projectsList[activeIndex].proj_img}
                    alt={`${projectsList[activeIndex].proj_name} project screenshot`}
                    width={50000}
                    height={5000}
                    className='mt-12 border-[1px] border-solid border-black rounded-2xl'
                />
                <div className='w-content h-content bg-blue-900 text-white'>
                    <p>{projectsList[activeIndex].proj_name}</p>
                    <p>{projectsList[activeIndex].proj_descr}</p>
                    <ul>
                        {projectsList[activeIndex].tech_used.map((tech, index) =>{ return (
                            <li key={index}>{tech}</li>
                        )})}
                    </ul>
                    <div className='flex '>
                        <Image 
                            src="/git.png"
                            width={20}
                            height={25}
                            alt="github logo"/>
                        <Image 
                            src="/public.png"
                            width={18}
                            height={15}
                            alt="earth"/>
                    </div>
                </div>
            </div>
            <div className='w-full h-16 flex items-center justify-center gap-x-4'>
                {projectsList && projectsList.map((project, index) => {
                    return (index != activeIndex ? <div key={index} className="w-12 h-[0.275rem] bg-[#D9D9D9]"></div> :
                        <div key={index} className="w-12 h-[0.275rem] bg-blue-900"></div>
                    )
                })}
            </div>
        </section>
    )
}