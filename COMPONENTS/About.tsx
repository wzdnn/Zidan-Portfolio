import React from "react";
import about from "/public/photo2.jpg";
import Image from "next/image";
import { motion } from "framer-motion";

type Props = {};

function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <motion.img
        initial={{
          x: -200,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src="https://pbs.twimg.com/media/FreGK95aMAAGlv1?format=jpg&name=4096x4096"
        alt="fotoganteng"
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object cover md:rounded-lg md:w-64 md:h-95 xl:w-[400px] xl:h-[450px] mt-10"
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is A{" "}
          <span className="underline decoration-cyan-500/50"> Little</span>{" "}
          Background
        </h4>
        <p className="text-base">
          Hello, My full name is Zidan Zulkhairyan Mandalim, I was born in
          Pekanbaru on February 27, 2000, I am very interested in the field of
          software engineering, when I was in college I took the theme of my
          final project, namely data mining, where I made a web-app to classify
          letters in my place doing research and also I really like to make
          character illustrations in games, anime, and fantasy environments,
          lately Im more into experimenting with react js and next.js
        </p>
      </div>
    </motion.div>
  );
}

export default About;
