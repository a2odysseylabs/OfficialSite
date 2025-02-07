import React from "react";

import Adobe from "../assets/logos/adobe.svg";
import AWS from "../assets/logos/aws.svg";
import CPlusPlus from "../assets/logos/cplusplus.svg";
import Express from "../assets/logos/express.svg";
import Figma from "../assets/logos/figma.svg";
import FireBase from "../assets/logos/firebase.svg";
import Invision from "../assets/logos/invision.svg";
import MongoDB from "../assets/logos/mongodb.svg";
import NextJS from "../assets/logos/nextjs.svg";
import NodeJS from "../assets/logos/nodejs.svg";
import PostgreSQL from "../assets/logos/postgresql.svg";
import Python from "../assets/logos/python.svg";
import ReactSVG from "../assets/logos/react.svg";
import Sass from "../assets/logos/sass.svg";
import Sketch from "../assets/logos/sketch.svg";
import Storybook from "../assets/logos/storybook.svg";
import TailWind from "../assets/logos/tailwind.svg";
import TypeScript from "../assets/logos/typescript.svg";
import Vue from "../assets/logos/vue.svg";

// Map names to SVG imports
const logoMap = {
  adobe: Adobe,
  aws: AWS,
  cplusplus: CPlusPlus,
  express: Express,
  figma: Figma,
  firebase: FireBase,
  invision: Invision,
  mongodb: MongoDB,
  nextjs: NextJS,
  nodejs: NodeJS,
  postgresql: PostgreSQL,
  python: Python,
  react: ReactSVG,
  sass: Sass,
  sketch: Sketch,
  storybook: Storybook,
  tailwind: TailWind,
  typescript: TypeScript,
  vue: Vue,
};

export const TechLogo = ({ name, size = 25, className = "" }) => {
  const LogoComponent = logoMap[name];

  if (!LogoComponent) {
    console.warn(`TechLogos: No logo found for "${name}"`);
    return null;
  }

  return (
    <img 
      src={LogoComponent} 
      alt={`${name} logo`} 
      width={size} 
      height={size} 
      className={className} 
    />
  );
};

