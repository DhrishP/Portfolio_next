
import Navbar from './(Header)/Navbar'
import Herobody from './(Header)/Herobody'
import About from './(About)/About'
import Skill from './(Skills)/Skill'
import Project from './(Projects)/Project'

export default function Home() {
  return (
<>
<div className='h-screen w-screen bg-primary-foreground'>
<Navbar/>
<Herobody/>
</div>
<div className='h-full md:h-[85vh] w-screen'>
  <About/>
</div>
<div className='h-full w-screen'>
<Skill/>
</div>
<div className='h-screen w-screen'>
    <Project/>
</div>
</>
  )
}
