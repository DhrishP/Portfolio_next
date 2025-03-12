"use client";
import { motion } from "framer-motion";
import React from "react";
import Card from "./components/Card";
import ProjectData from "../../../data/data.json";

const Project = () => {
  return (
    <>
      <motion.div
      id="projects"
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: 0, opacity: 0 }}
        transition={{ type: "tween", duration: 3 }}
        viewport={{ once: true }}
        className="text-xl text-center "
      >
        Projects
      </motion.div>
      <div className="text-center space-y-1">
        <h1 className="text-center text-5xl md:text-6xl sm:text-6xl font-semibold capitalize  md:mt-0 ">
        Problems and Paradigms
        </h1>
        <p className="text-gray-500">Weaving the web, one solution at a time</p>
      </div>
      <div>
        {ProjectData.map((proj) => (
          <Card
            key={proj.id}
            description={proj.description}
            title={proj.title}
            color={proj.color}
            image={proj.ImageUrl}
            githubURL={proj.github}
            websiteURL={proj.websiteUrl}
          />
        ))}
      </div>
    </>
  );
};

export default Project;
