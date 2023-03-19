import { motion } from "framer-motion";
import React from "react";
import Skill from "./Skill";
import Skill1 from "./Skill1";
import Skill2 from "./Skill2";
import Skill3 from "./Skill3";
import Skill4 from "./Skill4";
import Skill5 from "./Skill5";
import Skill6 from "./Skill6";
import Skill7 from "./Skill7";
import Skill8 from "./Skill8";
import Skill9 from "./Skill9";
import Skill10 from "./Skill10";

type Props = {};

function Skills({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row 
      max-w-[2000px] px-10 justify-center mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>

      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
        Hover over a skill for currency profiency
      </h3>

      <div className="grid grid-cols-4 gap-5 items-center justify-center">
        <Skill />
        <Skill1 />
        <Skill2 />
        <Skill3 />
        <Skill4 />
        <Skill5 />
        <Skill6 />
        <Skill7 />
        <Skill8 />
        <Skill9 />
        <Skill10 />
      </div>
    </motion.div>
  );
}

export default Skills;
