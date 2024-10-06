import Link from "next/link"

export default function Navbar(){
    return (
        <nav className="flex justify-between align-center bg-white px-12 py-4">
            <div className="flex-2">
                <Link href='/' className="font-bold text-[1.2rem]">tom1s1n</Link>
            </div>
            <div className="flex-2 flex gap-12">
                <Link href='#about' className="font-medium">About</Link>
                <Link href='#projects' className="font-medium">Projects</Link>
                <Link href='#experience' className="font-medium">Experience</Link>
            </div>
        </nav>
    )
}