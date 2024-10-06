import { libre_franklin } from './fonts'

export default function Hero(){
    return (
        <section className='flex justify-center h-screen pt-60' id='hero'>
            <div className='max-w-[45%] flex-col text-center'>
                <p className='text-9xl wavehand'>👋🏾</p>
                <h1 className='text-4xl mt-10 font-bold'>Hi there, I’m Tomisin</h1>
                <h3 className='text-2xl mt-4 font-medium'>I love writing code</h3>
                <p className={`mt-4 leading-[1.4rem] text-[1.1rem] ${libre_franklin.className} antialiased`}>I’m a fullstack software engineer and software engineering student from Abuja, Nigeria. I’m passionate about building innovative software based solutions to real-world problems.</p>
                <button className='mt-10 mx-auto flex border-[0.15rem] border-blue-900 text-center align-center text-blue-900 px-4 py-0.5 rounded-md gap-[0.5rem]'>
                    <p>Say Hi</p>
                    <span className="material-symbols-rounded hover:[--font-FILL:1] hover:[--font-wght:600]">
                        mail
                    </span>         
                </button>
            </div>
        </section>
    )
}