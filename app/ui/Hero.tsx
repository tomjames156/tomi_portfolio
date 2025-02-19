import { libre_franklin } from './fonts'
import Link from 'next/link'

export default function Hero(){
    return (
        <section className='flex justify-center h-screen pt-60' id='hero'>
            <div className='max-w-[45%] flex-col text-center'>
                <p className='text-9xl wavehand'>👋🏾</p>
                <h1 className='text-4xl mt-10 font-bold'>Hi there, I’m Tomisin</h1>
                <h3 className='text-2xl mt-4 font-medium'>I love writing code</h3>
                <p className={`mt-4 leading-[1.4rem] text-[1.1rem] ${libre_franklin.className} antialiased`}>I’m a budding data scientist and and software engineering student from Abuja, Nigeria. I’m passionate about finding actionable insights from data and building innovative solutions to real-world problems.</p>
                <Link href="/resume.pdf" target='_blank' download={true} title="Download Resume" className='w-fit mt-10 mx-auto flex border-[0.1rem] border-blue-900 text-center align-center text-blue-900 pl-2 pr-4 py-0.5 rounded-md gap-[0.25rem] transition-all ease-in-out duration-100 hover:bg-blue-900 hover:text-white hover:border-[0.15rem]'>
                    <span className="material-symbols-rounded hover:[--font-FILL:1] hover:[--font-wght:600]">
                        download
                    </span>  
                    Resume       
                </Link>
            </div>
        </section>
    )
}