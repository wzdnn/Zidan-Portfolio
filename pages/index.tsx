/* eslint-disable @next/next/no-img-element */
import Header from "@/COMPONENTS/Header";
import Hero from "@/COMPONENTS/Hero";
import About from "@/COMPONENTS/About";
import Head from "next/head";
import WorkExperience from "@/COMPONENTS/WorkExperience";
import Skills from "@/COMPONENTS/Skills";
import Projects from "@/COMPONENTS/Projects";
import ContactMe from "@/COMPONENTS/ContactMe";
import Link from "next/link";

export default function Home() {
  return (
    <div className=" bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
      <Head>
        <title>Zidan Portofolio</title>
      </Head>

      <Header />

      <section id="hero" className="snap-center">
        <Hero />
      </section>

      <section id="about" className="snap-center">
        <About />
      </section>

      <section id="experience" className="snap-center">
        <WorkExperience />
      </section>

      <section id="skills" className="snap-start">
        <Skills />
      </section>

      <section id="projects" className="snap-start">
        <Projects />
      </section>

      <section id="contact" className="snap-start">
        <ContactMe />
      </section>

      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <img
              className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
              src="https://i.pinimg.com/originals/23/c4/cf/23c4cf69cdfdd33d6093c3bd68d6e680.png"
              alt="home"
            />
          </div>
        </footer>
      </Link>
    </div>
  );
}
