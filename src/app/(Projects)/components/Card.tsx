"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Github, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
type CardProps = {
  title: string;
  description: string;
  image: string;
  color:string,
  githubURL: string;
  websiteURL: string;
};
export default function Card({
  title,
  description,
  githubURL,
  image,
  websiteURL,
  color
}: CardProps) {
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
          className="card text-lg border-gray-500 border-2 shadow-2xl w-[70vw] lg:w-[50vw] lg:h-[300px] h-[400px]  bg-white rounded-md "
          variants={cardVariants}
        >
          <div className="grid grid-rows-2 md:grid-cols-4 gap-1 md:gap-5 lg:gap-8 ">
            <div className="md:col-span-2  h-full w-full p-6 ">
              <motion.div initial={{scale:1}} whileHover={{scale:1.7,y:2}} whileTap={{scale:1.7,y:2}} className="flex items-center border ">
                <Image
                  height={700}
                  width={500}
                  src={image}
                  className="object-center object-cover "
                  alt={"Project Image"}
                />
              </motion.div>
            </div>
            <div className=" md:col-span-2 px-2 md:px-0 md:h-full w-full">
              <h2 style={{color:color}}  className={cn("md:text-2xl capitalize text-lg ")}>{title}</h2>
              <p className="text-gray-400 text-xs md:text-[1rem] mt-2 mb-4 ">
                {description}
              </p>
              <div className="flex items-center space-x-4 mt-2">
                <Link
                  target="_blank"
                  href={githubURL}
                  className="bg-gray-300 p-2 text-slate-700 rounded-full cursor-pointer"
                >
                  <Github className="cursor-pointer" />
                </Link>
                <Link
                  target="_blank"
                  href={websiteURL}
                  className="bg-gray-300 p-2 text-slate-700 rounded-full cursor-pointer"
                >
                  <Globe />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
      <div className="border-b-2 border-gray-600 w-1/2 mx-auto md:translate-y-12 translate-y-14 "></div>
    </>
  );
}
