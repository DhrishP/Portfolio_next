
import Navbar from './(Header)/Navbar'
import Herobody from './(Header)/Herobody'
import About from './(About)/About'
import Skill from './(Skills)/Skill'
import Project from './(Projects)/Project'
import Contact from './(Contact)/Contact'
import Appfooter from '@/components/app-footer'

export default function Home() {
  return (
    <>
      <div className='h-screen w-screen bg-primary-foreground'>
        <Navbar/>
        <Herobody/>
        <Appfooter/>
      </div>
      <div className='h-full md:h-[85vh] w-screen'>
        <About/>
      </div>
      <div className='h-full w-screen'>
        <Skill/>
      </div>
      <div className='h-full w-screen'>
        <Project/>
      </div>
      <div className='h-full translate-y-24 w-screen'>
        <Contact/>
      </div>

    </>
  )
}
