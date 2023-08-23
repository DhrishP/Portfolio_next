"use client"
import { motion } from 'framer-motion'
import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

const Contact = () => {
  return (
    <>
    <motion.div
    whileInView={{ y: 0, opacity: 1 }}
    initial={{ y: 0, opacity: 0 }}
    transition={{ type: "tween", duration: 3 }}
    viewport={{ once: true }}
    className="text-xl text-center "
  >
    Contact
  </motion.div>
  <div className="text-center space-y-1">
    <h1 className="text-center text-5xl md:text-6xl sm:text-6xl font-semibold capitalize  md:mt-0 ">
    It's not what you know, it's who you know.
    </h1>
    <p className="text-gray-500">Let's Connect😀</p>
  </div>
  <motion.div initial={{x:0,y:100}} whileInView={{x:0,y:0}} viewport={{once:true}}
  transition={{duration:1,type:'tween'}}
   className='grid mt-10 md:grid-cols-3 h-full lg:gap-6 lg:mx-10 md:mx-6 sm:mx-4 mx-3'>
    <div className='flex items-center justify-center space-x-4'>
      <div className='hidden md:block'>
      <Image src="/images/savy2.png" alt='yes' width={250} height={500} />
</div>
     
    </div>
    <div className='flex items-center flex-col justify-center w-full h-full'>
      
<form action="https://formsubmit.co/cc9e32fafc72f282ca8d7e86196eeefb" method='POST'>
  <div className="relative z-0 w-full mb-6 group">
      <input type="email" name="email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-muted-foreground peer" placeholder=" " required />
      <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-focus:dark:text-primary-foreground peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email Address</label>
  </div>
  <div className="relative z-0 w-full mb-6 group">
      <input type="password" name="name" id="name_of_person" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-muted-foreground peer" placeholder="" required />
      <label htmlFor="name_of_person" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-focus:dark:text-primary-foreground peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">NickName</label>
  </div>

  <div className="">
    <textarea name='info' cols={40} rows={10} placeholder=' Anything you want to send ... ' className='border-gray-300 border bg-primary-foreground rounded-lg font-mono' />
  </div>
    <Button className='hover:bg-muted hover:text-primary hover:border-primary border' type='submit' size={'sm'} >Submit</Button>
</form>

    </div>
    <div className='place-items-start justify-items-start md:ml-10 content-center ' >
    <Image className='hidden md:block' src="/images/cowboy.png" alt='' width={300} height={500}  />
    
    </div>
  </motion.div>
  </>
  )
}

export default Contact