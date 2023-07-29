"use client"
import { motion } from 'framer-motion'
import React from 'react'
import Card from './components/Card';

const Project = () => {
  const food: [string, number, number][] = [
    ["🍅", 340, 10],
    ["🍊", 20, 40],
    ["🍋", 60, 90],

  ];
  return (
    <>
    <motion.div
    whileInView={{ y: 0, opacity: 1 }}
    initial={{ y: 0, opacity: 0 }}
    transition={{ type: "tween", duration: 3 }}
    viewport={{once:true}}
    className="text-xl text-center "
  >
    Projects
  </motion.div>
    <div className="text-center space-y-1">
    <h1 className="text-center text-5xl md:text-6xl sm:text-6xl font-semibold capitalize  md:mt-0 ">
    In the middle of difficulty lies opportunity
    </h1>
    <p className="text-gray-500">
      A proof of work
    </p>
  </div>
  <div>
    {
  food.map(([emoji, hueA, hueB]) => (
    <Card emoji={emoji} hueA={hueA} hueB={hueB} key={emoji} />
))
  }
  </div>
  </>
  )
}

export default Project








