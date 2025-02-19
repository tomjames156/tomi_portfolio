"use client"

import { libre_franklin } from './fonts'
import { useState } from 'react'
import Link from 'next/link'
import gitLogoBlue from "../../public/git-blue.png"
import earthBlue from "../../public/earth-blue.png"
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
        <section className="mt-40 mx-40" id="projects">
            <h1 className="font-semibold text-2xl">Projects</h1>
            <div className='mt-12 relative w-full h-fit'>
                <Image
                    src={projectsSlides[activeIndex].proj_img}
                    alt={`${projectsSlides[activeIndex].proj_name} project screenshot`}
                    width={50000}
                    height={5000}
                    className='border-[1px] border-solid border-black rounded-2xl blur-sm w-full h-[35rem]'
                />
                <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-y-2 text-center bg-blue-900 text-white pt-8 pb-4 px-20 w-[38rem] rounded-xl'>
                    <p className='text-[1.9rem] font-medium'>{projectsSlides[activeIndex].proj_name}</p>
                    <p className={`${libre_franklin.className} antialiased`}>{projectsSlides[activeIndex].proj_descr}</p>
                    <p className='font-bold text-[0.9rem]'>{listItems(projectsSlides[activeIndex].tech_used)}</p>
                    <div className='flex gap-x-2 justify-center'>
                        {projectsSlides[activeIndex].github_link && <Link 
                            href={projectsSlides[activeIndex].github_link}
                            target='_blank'
                            title='GitHub Repository'
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
                            title='Live Site'
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
                    return (index != activeIndex ? <div key={index} className="w-12 h-[0.275rem] bg-[#D9D9D9] cursor-pointer hover:bg-gray-400 transition transition-all duration-100" onClick={() => {setActiveIndex(index)}}></div> :
                        <div key={index} className="w-12 h-[0.275rem] bg-blue-900 cursor-pointer" onClick={() => {setActiveIndex(index)}}></div>
                    )
                })}
            </div>
            <ul className='grid grid-cols-3 gap-x-4 gap-y-6 px-24'>
                {projectTiles.map((project, index) => {
                    return (
                    <li key={index} className='border-[1px] border-solid border-black rounded-xl py-5 px-4 flex flex-col cursor-default hover:-mt-2 hover:border-blue-900 hover:border-[3px] transition transition-all duration-200'>
                        <div className='flex gap-4 justify-end'>
                            {project.github_link && <Link 
                                href={project.github_link}
                                target='_blank'
                                className='hover:-mt-1 transition transition-all duration-10'
                            >
                                <Image
                                    src={gitLogoBlue}
                                    width={20}
                                    height={15}
                                    alt='Github Logo'
                                />
                            </Link>}
                            {project.live_site && <Link
                                href={project.live_site}
                                target='_blank'
                                className='hover:-mt-1 transition transition-all duration-10'
                            >
                                <Image
                                    src={earthBlue}
                                    width={18}
                                    height={15}
                                    alt='Earth Globe Blue'
                                />
                            </Link>}
                        </div>
                        <p className='font-bold text-lg mt-6'>{project.proj_name}</p>
                        <p className={`${libre_franklin.className} antialiased leading-[1.3rem] mt-6 mb-12`}>{project.proj_descr}</p>
                        <p className='text-sm'>{listItems(project.tech_used)}</p>
                    </li>)
                }) }
            </ul>
        </section>
    )
}