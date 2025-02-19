import TechnologyUsed from "./components/TechnologyUsed"
import { libre_franklin } from './fonts'
import Image from "next/image"

export default function About(){

    return (
        <section id="about" className="mx-40">
            <h1 className="font-semibold text-2xl">About Me</h1>
            <div className="flex gap-20">
                <div className="basis-[80%]">
                    <p className={`mt-4 leading-[1.4rem] text-[1.1rem] ${libre_franklin.className} antialiased`}>Lorem ipsum dolor sit amet consectetur. Viverra odio orci tellus ornare blandit. Eros nisl vulputate suscipit lobortis lobortis sed ut. Mauris arcu diam ridiculus ut consectetur risus ornare posuere. Proin commodo dui ultricies senectus aliquam.</p>
                    <p className={`mt-4 leading-[1.4rem] text-[1.1rem] ${libre_franklin.className} antialiased`}>Here are some technologies I’ve worked with:</p>
                    <ul className="w-[50%] mt-5 grid grid-cols-2">
                        <TechnologyUsed technology="React.js"/>
                        <TechnologyUsed technology="React.js"/>
                        <TechnologyUsed technology="React.js"/>
                        <TechnologyUsed technology="React.js"/>
                        <TechnologyUsed technology="React.js"/>
                        <TechnologyUsed technology="React.js"/>
                    </ul>
                    <p className={`mt-4 leading-[1.4rem] text-[1.1rem] ${libre_franklin.className} antialiased`}>Outside of working, I’m interested in learning about Data Science. I also enjoy lifting weights, swimming, listening to music, and reading. </p>
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