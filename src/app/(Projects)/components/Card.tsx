"use client";
import { motion } from "framer-motion";
import { Github } from "lucide-react";
import Image from "next/image";
interface Props {
  emoji: string;
  hueA: number;
  hueB: number;
}
export default function Card({ emoji, hueA, hueB }: Props) {
  const cardVariants = {
    offscreen: {
      y: 300,
    },
    onscreen: {
      y: 50,
      rotate: -10,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  const hue = (h: number) => `hsl(${h}, 100%, 50%)`;
  const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`;

  return (
    <>
    <motion.div
      className="card-container flex items-center -mb-12 justify-center overflow-hidden relative   "
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      <div className="absolute right-0 left-0 top-0 bottom-0 splash" />
      <motion.div
        whileHover={{ rotate: 0, scale: 1.1 }}
        className="card text-lg border-gray-500 border-2 shadow-2xl w-[65vw] lg:w-[50vw] lg:h-[300px] h-[230px]  bg-white rounded-md "
        variants={cardVariants}
      >
        <div className="grid grid-cols-4 ">
          <div className="col-span-2">hi</div>
          <div className=" col-span-2">
            <h2 className="text-2xl">Title</h2>
            <p className="text-gray-400">Hello there</p>
            <div>
              <Github className="cursor-pointer" />
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
    <div className="border-b-2 border-gray-600 w-1/2 mx-auto translate-y-12"></div>
    </>
  );
}
