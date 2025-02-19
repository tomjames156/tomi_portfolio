import Link from "next/link"
import Image from "next/image"
import gmail from "../../public/gmail logo.png"
import github from "../../public/github-logo.png"
import linkedin from "../../public/linkedin.png"

export default function Navbar(){
    return (
        <nav className="flex justify-between align-center bg-white px-12 py-4">
            <div className="flex-2 flex items-center gap-3">
                <Link href='/' className="font-bold text-[1.2rem]">tom1s1n</Link>
                <div>                
                    <div className="flex items-center justify-center gap-4">
                        <Link 
                            href="mailto:tomjames156@gmail.com"
                        >
                            <div>
                                <Image
                                    src={gmail}
                                    alt='Gmail Logo'
                                    width={25}
                                    height={25}
                                />
                            </div>
                        </Link>
                        <Link 
                            href="https://github.com/tomjames156/"
                            target="_blank"
                        >
                            <div>
                                <Image
                                    src={github}
                                    alt='Github Logo'
                                    width={20}
                                    height={20}
                                />
                            </div>
                        </Link>
                        <Link 
                            href="https://www.linkedin.com/in/tomisin-akinwande-981842247/"
                            target="_blank"
                        >
                            <div>
                                <Image
                                    src={linkedin}
                                    alt='Linkedin logo'
                                    width={18}
                                    height={18}
                                />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="flex-2 flex gap-12">
                <Link href='#about' className="font-medium">About</Link>
                <Link href='#projects' className="font-medium">Projects</Link>
                <Link href='#experience' className="font-medium">Experience</Link>
            </div>
        </nav>
    )
}