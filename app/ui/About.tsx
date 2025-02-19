import TechnologyUsed from "./components/TechnologyUsed"
import { libre_franklin } from './fonts'
import Image from "next/image"

export default function About(){

    return (
        <section id="about" className="mx-40">
            <h1 className="font-semibold text-2xl">About Me</h1>
            <div className="flex gap-20">
                <div className="basis-[80%]">
                    <p className={`mt-4 leading-[1.4rem] text-[1.1rem] ${libre_franklin.className} antialiased`}>I am studying for a Bachelor's of Science in Software engineering student at Nile University of Nigeria, Abuja. At the same time, I'm working towards a career in Data Science through learning from resources online.</p>
                    <p className={`mt-4 leading-[1.4rem] text-[1.1rem] ${libre_franklin.className} antialiased`}>Here are some technologies I’ve worked with:</p>
                    <ul className="w-[50%] mt-5 grid grid-cols-2">
                        <TechnologyUsed technology="Pandas"/>
                        <TechnologyUsed technology="Python"/>
                        <TechnologyUsed technology="FastAPI"/>
                        <TechnologyUsed technology="Django"/>
                        <TechnologyUsed technology="React"/>
                        <TechnologyUsed technology="JavaScript"/>
                    </ul>
                    <p className={`mt-4 leading-[1.4rem] text-[1.1rem] ${libre_franklin.className} antialiased`}>Outside of studying, I enjoy lifting weights, swimming, listening to music, watching movies and reading fantasy books. </p>
                </div>
                <div className="basis-[20%]">
                    <div>
                        <Image
                            src="/me.jpg"
                            alt='myself'
                            width={300}
                            height={150}
                            className="rounded-3xl"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}