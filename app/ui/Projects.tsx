"use client"

import { libre_franklin } from './fonts'
import { useState } from 'react'
import Link from 'next/link'
import { projectsSlides, projectTiles } from '../lib/placeholder-data'
import Image from 'next/image'

export default function Projects(){

    const [activeIndex, setActiveIndex] = useState(1)

    const listItems = (arr: string[]) => {
        let list_str = ""
        for(let i = 0; i < arr.length; i++){
            if (i !== arr.length - 1){
                list_str += `${arr[i]}, `
            }else{
                list_str += arr[i]
            }
        }
        return list_str
    }

    const prevProject = () => {
        if (activeIndex > 0){
            setActiveIndex(activeIndex - 1)
        }else{
            setActiveIndex(projectsSlides.length - 1)
        }
    }

    const nextProject = () => {
        if (activeIndex < projectsSlides.length - 1){
            setActiveIndex(activeIndex + 1)
        }else{
            setActiveIndex(0)
        }
        
    }

    return (
        <section className="mt-40 mx-40">
            <h1 className="font-semibold text-2xl">Projects</h1>
            <div className='mt-12 relative w-full h-fit'>
                <Image
                    src={projectsSlides[activeIndex].proj_img}
                    alt={`${projectsSlides[activeIndex].proj_name} project screenshot`}
                    width={50000}
                    height={5000}
                    className='border-[1px] border-solid border-black rounded-2xl blur-sm'
                />
                <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-y-2 text-center bg-blue-900 text-white pt-8 pb-4 px-20 w-[38rem] rounded-xl'>
                    <p className='text-[1.9rem] font-medium'>{projectsSlides[activeIndex].proj_name}</p>
                    <p className={`${libre_franklin.className} antialiased`}>{projectsSlides[activeIndex].proj_descr}</p>
                    <p className='font-bold text-[0.9rem]'>{listItems(projectsSlides[activeIndex].tech_used)}</p>
                    <div className='flex gap-x-2 justify-center'>
                        {projectsSlides[activeIndex].github_link && <Link 
                            href={projectsSlides[activeIndex].github_link}
                            target='_blank'
                        >
                            <Image 
                                src="/git.png"
                                width={20}
                                height={25}
                                alt="github logo"/>
                        </Link>}
                        {projectsSlides[activeIndex].live_site && <Link
                            href={projectsSlides[activeIndex].live_site}
                            target='_blank'
                        >
                            <Image 
                                src="/public.png"
                                width={18}
                                height={15}
                                alt="earth"/>
                        </Link>}
                    </div>
                </div>
                <div className='absolute top-1/2 -left-2 -translate-y-1/2 material-symbols-rounded text-[6rem] cursor-pointer hover:-left-4 hover:scale-[1.15] transition-transform duration-200' onClick={prevProject}>
                    chevron_left
                </div>
                <div className='absolute top-1/2 -right-2
                -translate-y-1/2 material-symbols-rounded text-[6rem] cursor-pointer hover:-right-4 hover:scale-[1.15] transition-transform duration-200' onClick={nextProject}>
                    chevron_right
                </div>
            </div>
            <div className='w-full h-16 flex items-center justify-center gap-x-4'>
                {projectsSlides && projectsSlides.map((project, index) => {
                    return (index != activeIndex ? <div key={index} className="w-12 h-[0.275rem] bg-[#D9D9D9] cursor-pointer" onClick={() => {setActiveIndex(index)}}></div> :
                        <div key={index} className="w-12 h-[0.275rem] bg-blue-900 cursor-pointer" onClick={() => {setActiveIndex(index)}}></div>
                    )
                })}
            </div>
            <ul>
                {projectTiles.map((project, index) => {
                    return (
                    <li key={index}>
                        <p>{project.proj_name}</p>
                        <p>{project.proj_descr}</p>
                        <p>{listItems(project.tech_used)}</p>
                    </li>)
                }) }
            </ul>
        </section>
    )
}