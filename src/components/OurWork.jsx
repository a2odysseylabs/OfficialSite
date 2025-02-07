import React from "react";
import { Link } from "react-router-dom";

import ProjectCard from "./ProjectCard";
import {
  useScroll,
  motion,
  useTransform,
} from 'framer-motion';

const OurWork = () => {
  const { scrollY } = useScroll();
  const y0 = useTransform(scrollY, [3000, 5000], [-300, 100]);
  const y1 = useTransform(scrollY, [3000, 5000], [0, 200]);

  const projects = [
    {
      title: "LumTags",
      description: "From wireframes to pixel-perfect mockups and rapid prototyping.",
      path: "/projects/lumtags",
    },
    {
      title: "F1nsight",
      description: "From wireframes to pixel-perfect mockups and rapid prototyping.",
      path: "/projects/f1nsight",
    },
    {
      title: "AiPhotoBooth",
      description: "From wireframes to pixel-perfect mockups and rapid prototyping.",
      path: "/projects/aiphotobooth",
    },
    // {
    //   title: "AIChatbot",
    //   description: "From wireframes to pixel-perfect mockups and rapid prototyping.",
    //   path: "/aichatbot",
    // },
  ];

  return (
    <section className="our-work relative w-full pt-24 pb-32" id="our-work">
      <motion.img
        src={`${process.env.PUBLIC_URL + "/images/work-gradient.png"}`}
        alt="gradient Layer"
        className="absolute object-cover w-full h-screen"
        style={{ y: y0 }}
      />
      <div className="container mx-auto relative p-4">
        <motion.img 
          src={`${process.env.PUBLIC_URL + "/images/pattern-dots.png"}`} 
          className="w-[500px] absolute left-1/3 "
          alt=""
          style={{ y: y1 }}
        />

        {/* Section Title */}
        <div className="text-right mb-12">
          <h2 className="section-title text-orange-400 mt-10">Our Work</h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Link to={project.path} key={index}>
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurWork;