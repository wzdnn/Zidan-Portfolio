/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import React from "react";

type Props = {};

export default function ExperienceCard({}: Props) {
  return (
    <article
      className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[300px] md:h-[600px] xl:w-[900px] 
    snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer overflow-hidden  "
    >
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full xl:w-[100px] xl:h-[100px]  object-center"
        src="https://fkip.uad.ac.id/wp-content/uploads/Logo-UAD-Berwarna.png"
        alt="Logo"
        width="100px"
        height="100px"
      />
      <div className="px-0 md:px-10 pt-10">
        <h4 className="text-4xl font-light">STUDENT EMPLOYEMENT</h4>
        <p className="font-bold text-2sm mt-1">BIMAWA UAD</p>

        <p className="uppercase py-5 text-gray-300">
          September 2020 - January 2023
        </p>
        <ul className="list-disc space-y-4 ml-5 text-sm">
          <li>As an technician in the field of communication and network</li>
          <li>Helping the bureaus online activities during the pandemic</li>
          <li>Examine and correcting documents submitted by students</li>
        </ul>
      </div>
    </article>
  );
}
