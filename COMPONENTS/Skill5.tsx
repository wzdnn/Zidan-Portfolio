import React from "react";
import { motion } from "framer-motion";

type Props = {
  directionleft?: boolean;
};

function Skill({ directionleft }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{
          x: directionleft ? -200 : 200,
          opacity: 0,
        }}
        transition={{
          duration: 1.0,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        src="data:image/png;base64,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"
        width="50px"
        height="50px"
        className="rounded-full border border-gray-500 object-cover w-24 h-24 xl:w-32 xl:h-32
        filter group-hover:grayscale transition duration-300 ease-in-out"
      />
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold text-black opacity-100">70%</p>
        </div>
      </div>
    </div>
  );
}

export default Skill;
