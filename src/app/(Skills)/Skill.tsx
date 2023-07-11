"use client"
import { motion } from 'framer-motion'
import React from 'react'

const Skill = () => {
  return (
   <>
     <motion.div
        whileInView={{ x: 0, opacity: 1 }}
        initial={{ x: -200, opacity: 0.1 }}
        transition={{ type: "tween", duration: 2 }}
        id="about"
        className="text-xl text-center "
      >
        Skills
      </motion.div>
      <div className="text-center space-y-1">
        <h1 className="text-center text-6xl font-semibold ">
          PASSION FUELS PURPOSE.
        </h1>
        <p className="text-gray-500">
          I have enough skills to make the code run or to find ways to run it
        </p>
      </div>
   </>
  )
}

export default Skill