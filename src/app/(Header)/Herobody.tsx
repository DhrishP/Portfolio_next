'use client'
import React from 'react'
import { Button } from "@/components/ui/button"
import {LeafyGreen,MoveDown} from 'lucide-react'
import {motion} from 'framer-motion'
const Herobody = () => {
  return (
    <>
   <div id='home' className='w-full md:h-[80vh] sm:h-[60vh] flex flex-col-reverse sm:flex-row  '>
    
    <div
    className='sm:w-1/2 space-y-1 flex flex-col items-center justify-center'
    >
        <h3 className='md:text-5xl mt-10 sm:text-4xl text-3xl font-semibold'>Dhrish Parekh👋</h3>
        <div className='flex items-center justify-center space-x-1 '>
          <h5 className='w-24 font-extralight h-0.5 bg-gray-400 '></h5>
          <h4 className='md:text-lg'>Fullstack Developer</h4>
        </div>
        <div className='space-y-7'>
        <p className='text-gray-500 font-light '>Turning vision into reality with coding <br className='md:hidden' />  and designing using <br className='hidden md:block' /> awesome technologies.I also write to <br /> document my life journey.</p>
        
        <Button className='hover:bg-white hover:border-black hover:text-black border duration-150 transition ease-out'>
          <h2>Say hello</h2>
          <LeafyGreen className="ml-2 h-6 w-4"/>
          </Button>
          </div>
    </div>
    <div className='sm:w-1/2 md:h-[60vh] h-[30vh]  flex items-center justify-center'>
        <div className='h-32 w-32 justify-center flex items-center border border-gray-400 rounded-full'>
              wo
        </div>
    </div>
    
   </div>
   <motion.div animate={{y:-100,opacity:1}} transition={{type:"tween",duration:1}}
   initial={{y:200,opacity:0.2}} className='flex items-center mt-10 md:mt-0  sm:mt-4   justify-center space-x-2 '>
      <div className='flex justify-center md:h-16 border-4 h-14  border-black md:w-8 w-8 rounded-full'>
          <div className='w-0.5 h-3 mt-2 animate-bounce md:border-4 border-2 border-black'></div>
      </div>
      <div className='flex items-center' >Scroll down <MoveDown className="mr-2 h-4 w-4 animate-pulse"/></div>
   </motion.div>
  </>
  )
}

export default Herobody