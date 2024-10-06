import '@/app/ui/global.css'
import '@/app/ui/googleicons.css'
import Navbar from './ui/Navbar'
import Hero from './ui/Hero'
import About from './ui/About'

export default function Home() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
    </>
  )
}
