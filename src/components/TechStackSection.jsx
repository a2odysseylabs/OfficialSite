import React from "react";
import classNames from "classnames";
import { FaBeer } from 'react-icons/fa';
import {
  useScroll,
  motion,
  useTransform,
} from 'framer-motion';

import {  ReactComponent as TechBG} from '../assets/tech-icon-bg.svg'; 

const TechStackSection = (props) => {
  const { className, title = "Our Tech Stack" } = props;

  const { scrollY } = useScroll();
  const y0 = useTransform(scrollY, [1000, 3000], [-400, 40]);
  const y01 = useTransform(scrollY, [1000, 3000], [0, 200]);
  const y1 = useTransform(scrollY, [1000, 3000], [0, 120]);
  const y2 = useTransform(scrollY, [1000, 3000], [0, 20]);
  const y3 = useTransform(scrollY, [1000, 3000], [0, 80]); 

  const techStack = [
    {
      category: "Design Tools",
      tools: ["Figma", "Adobe XD", "Sketch", "InVision", "Storybook"],
    },
    {
      category: "Frontend Development",
      tools: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Sass"],
    },
    {
      category: "Backend & Database",
      tools: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "Firebase"],
    },
  ];

  const techItem = (item, icon, y) => (
    <motion.div className="tech-stack-item center-items relative" style={{ y: y }}>
      <TechBG className="pr-3" />
      <div className="flex flex-col items-center absolute-center">
        {icon}
        {item}
      </div>
    </motion.div>
  )

  return (
    <section className={classNames(className, "tech-stack-section relative w-full h-[1400px] sm:h-[1000px] py-20")}>
      <motion.img
        src={`${process.env.PUBLIC_URL + "/images/tech-gradient.png"}`}
        alt="gradient Layer"
        className="absolute object-cover w-full h-screen pointer-events-none"
        style={{ y: y0, opacity: 0.5 }}
      />

      <div className="container mx-auto relative px-4">

        <motion.img src={`${process.env.PUBLIC_URL + "/images/pattern-dots.png"}`} className="w-[500px] absolute -left-16 top-0" alt="" style={{ y: y01 }}/>
        <motion.img src={`${process.env.PUBLIC_URL + "/images/pattern-dots.png"}`} className="w-[500px] absolute -right-16 bottom-0" alt="" style={{ y: y01 }}/>

        {/* Title Row */}
        <p className="section-title text-right mb-0 leading-none relative z-[1]">Tech Stack</p>
        <p className="text-sm text-right mb-8 text-purple-500">* includes, but not limitied to</p>

        {/* Tech Stack Columns */}
        <div className="flex">
          {techStack.map((stack, index) => (
            <motion.div
              key={index}
              className="tech-stack-item card-style w-[36%] sm:w-[37%] h-fit first:ml-0 -ml-4 sm:-ml-8 first:z-[1] last:z-[1] z-[2]"
              style={{ y: index === 0 ? y1 : index === 1 ? y2 : y3 }}
            >
              <h3 className="sm:text-xl font-semibold mb-4 text-center">
                {stack.category}
              </h3>
              <ul className="list-none md:grid md:grid-cols-2">
                {stack.tools.map((tool, idx) => (
                  <li key={idx} >
                    {techItem(tool, <FaBeer />)}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;