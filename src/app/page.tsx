
import Navbar from './(Header)/Navbar'
import Herobody from './(Header)/Herobody'
import About from './(About)/About'
import Skill from './(Skills)/Skill'

export default function Home() {
  return (
<>
<div className='h-screen w-screen bg-primary-foreground'>
<Navbar/>
<Herobody/>
</div>
<div className='h-screen w-screen'>
  <About/>
</div>
<div className='h-screen w-screen'>
<Skill/>
</div>
</>
  )
}
