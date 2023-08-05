"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MoveRight,Component,Server ,Asterisk} from "lucide-react";
import DialogModal from "@/components/ui/dialogmodal";
const About = () => {
  return (
    <>
    <div id="about"></div>
      <motion.div
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: 200, opacity: 0 }}
        transition={{ type: "tween", duration: 2 }}
        
        className="text-xl text-center "
      >
        About & Services
      </motion.div>
      <div className="text-center space-y-1">
        <h1 className="text-center text-6xl font-semibold ">
          PASSION FUELS PURPOSE.
        </h1>
        <p className="text-gray-500">
          I am a fullstack developer and I always try my best to make clients
          happy
        </p>
      </div>
      <div className="mt-10  flex space-y-3 sm:space-y-1 md:space-y-0 flex-col md:flex-row justify-evenly  items-center">
        <motion.div
          whileInView={{ opacity: 1, x: 0,y:0 }}
          initial={{ opacity: 0.2, x: -200 ,y:0}}
          transition={{ type: "tween", duration: 1.2 }}
          viewport={{once:true}}
          className="  cursor-pointer w-3/4  md:w-1/4 h-1/6 rounded-2xl shadow-xl"
        >
          <Card>
            <CardHeader className="">
              <CardTitle>Front-End Development</CardTitle>
              <CardDescription>Designing cool websites</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 ">
              <Component/>
              <h2 className="text-gray-600">I can try to make put your imagination into reality</h2>
              </div>
            </CardContent>
            <DialogModal title="Front-End Development" check1="lorem" check2="ipsum" check3="yoo" check4="lol">
            <CardFooter className="">
              <div>
                <div className="flex items-center justify-center">
                  {" "}
                  <h3 className="hover:animate-pulse">View more</h3>
                  <MoveRight className="w-5 ml-1 text-gray-500 " />
                </div>
              </div>
            </CardFooter>
            </DialogModal>
          </Card>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0.2, y: 200 }}
          transition={{ type: "tween", duration: 1.2 }}
          viewport={{once:true}}
          className="  cursor-pointer w-3/4  md:w-1/4 h-1/6 rounded-2xl shadow-xl"
        >
          <Card>
            <CardHeader className="">
              <CardTitle>Back-end development</CardTitle>
              <CardDescription>Handling your data and API</CardDescription>
            </CardHeader>
            <CardContent>
            <div className="space-y-2 ">
              <Server/>
              <h2 className="text-gray-600">Handling API calls or Putting user data into databases</h2>
              </div>
            </CardContent>
            <DialogModal title="Back-end development"  check1="lorem" check2="ipsum" check3="yoo" check4="lol">
            <CardFooter>
              <div className="flex items-center justify-center">
                {" "}
                <h3 className="hover:animate-pulse">View more</h3>
                <MoveRight className="w-5 ml-1 text-gray-500 " />
              </div>
            </CardFooter>
            </DialogModal>
          </Card>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 ,y:0}}
          initial={{ opacity: 0.2, x: 200,y:0 }}
          transition={{ type: "tween", duration: 1.2 }}
          viewport={{once:true}}
          className="  cursor-pointer w-3/4  md:w-1/4 h-1/6 rounded-2xl shadow-xl"
        >
          <Card>
            <CardHeader className="">
              <CardTitle>Full-Stack Development</CardTitle>
              <CardDescription>Creating Websites to scale</CardDescription>
            </CardHeader>
            <CardContent>
            <div className="space-y-2 ">
              <Asterisk/>
              <h2 className="text-gray-600">Fully-fledged client and server interactive app</h2>
              </div>
            </CardContent>
            <DialogModal title="Full-Stack Development"  check1="lorem" check2="ipsum" check3="yoo" check4="lol">
            <CardFooter>
              <div className="flex items-center justify-center">
                {" "}
                <h3 className="hover:animate-pulse">View more</h3>
                <MoveRight className="w-5 ml-1 text-gray-500 " />
              </div>
            </CardFooter>
            </DialogModal>
          </Card>
        </motion.div>
      </div>
    </>
  );
};

export default About;
