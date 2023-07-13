"use client"
import { motion } from 'framer-motion'
import React from 'react'
type SkillsProps ={
  name: string,
  x:string,
  y:string
}
const Skills = ({name, x, y}:SkillsProps) =>{
  return(
    <motion.div className='flex items-center justify-center rounded-full font-semibold md:bg-black text-black bg-transparent md:text-white py-2 px-3 shadow-black cursor-pointer absolute lg:py-3 lg:px-6 md:text-sm md:py-1.5 md:px-5  sm:font-bold'
    whileHover={{scale:1.05}}
    initial={{x:0,y:0}}
    whileInView={{x:x,y:y}}
    transition={{duration:1.9}}
    viewport={{once:true}}
    >
        {name}


    </motion.div>
  
      
  )
  }



const Skill = () => {
  return (
   <>
     <motion.div
        whileInView={{ x: 0, opacity: 1 }}
        initial={{ x: -200, opacity: 0.1 }}
        transition={{  duration: 1 }}
        id="skills"
        className="text-xl text-center mt-10 md:mt-0 "
      >
        Skills
      </motion.div>
      <div className="text-center space-y-1">
        <h1 className="text-center text-5xl md:text-6xl sm:text-6xl font-semibold capitalize  md:mt-0 ">
        In the middle of difficulty lies opportunity
        </h1>
        <p className="text-gray-500">
          Web of Skills
        </p>
      </div>
      <div className='w-3/4 mx-auto  relative flex lg:h-screen md:h-[80vh] h-[50vh] items-center justify-center  bg-circularLightsm  md:bg-circularLight   '>
          <motion.div className='flex items-center justify-center rounded-full font-semibold bg-transparent text-black md:bg-black md:text-white shadow-black cursor-pointer lg:p-8 md:p-5 sm:p-6 sm:text-xs' whileHover={{scale:1.05}}>
            Web
          </motion.div>
          <Skills name="HTML" x="-23vw" y="2vw"/>
          <Skills name="CSS" x="-5vw" y="-10vw"/>
          <Skills name="ReactJS" x="20vw" y="6vw"/>
          <Skills name="NextJS" x="0vw" y="11vw"/>
          <Skills name="Astro" x="-20vw" y="-15vw"/>
          <Skills name="PostgresSQL" x="15vw" y="-12vw"/>
          <Skills name="PRISMA" x="31vw" y="-5vw"/>
          <Skills name="Supabase" x="-34vw" y="-12vw"/>
          <Skills name="Express" x="-25vw" y="18vw"/>
      </div>
   </>
  )
}

export default Skill