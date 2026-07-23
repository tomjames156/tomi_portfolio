'use client'

import { contactMediums } from "../lib/placeholder-data"
import x from "../../public/x.png"
import github from "../../public/github-logo.png"
import linkedin from "../../public/linkedin.png"
import Link from "next/link"
import Image from "next/image"
import ContactItem from "./components/ContactItem"

export default function Contact() {

    return (
        <section id="contact" className="mt-20 mx-5 sm:mx-10 lg:mx-20 xl:mx-40 dark:text-white">
                <h1 className="font-semibold text-[1.4rem] xs:text-2xl">Contact Me</h1>
                <p className="mt-4 mb-4">You can reach out to me via any of these platforms</p>
                <div className="flex flex-col gap-4 xs:flex-row xs:gap-10">{
                    contactMediums.map((medium, index) => ( 
                        <ContactItem key={index} contact_medium={medium.contact_medium} link={medium.link} sub_text={medium.sub_text} main_text={medium.main_text} />
                    ))
                }
                </div>
                <p className="mt-8 mb-4">Connect with me on my socials</p>
                <div className="flex items-center gap-8">
                        <Link
                            href="https://x.com/tomisnakinwande"
                            target="_blank"
                        >
                            <Image 
                                className="hover:scale-110 transition transition-all duration-200
                                rounded-md"
                                src={x}
                                alt='X/Twitter Logo'
                                width={35}
                                height={35}
                            />
                        </Link>
                        <Link 
                            href="https://github.com/tomjames156/"
                            target="_blank"
                            className="dark:bg-white dark:rounded-full"
                        >
                            <Image
                                className="hover:scale-110 transition transition-all duration-200"
                                src={github}
                                alt='Github Logo'
                                width={30}
                                height={30}
                            />
                        </Link>
                        <Link 
                            href="https://www.linkedin.com/in/tomisin-akinwande-981842247/"
                            target="_blank"
                        >
                            <Image
                                className="hover:-mt-2 transition transition-all duration-200"
                                src={linkedin}
                                alt='Linkedin logo'
                                width={28}
                                height={28}
                            />
                        </Link>
                </div>
        </section>
    )
}
