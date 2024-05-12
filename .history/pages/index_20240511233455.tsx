
import About from "../components/About";
import ContactMe from "../components/ContactMe";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import React from 'react';
import WorkExperiance from "../components/WorkExperiance";
import { PhoneIcon, MapPinIcon, EnvelopeIcon, ChevronDoubleUpIcon } from '@heroicons/react/24/solid'
import Head from 'next/head';
import { Experience, PageInfo, Project, Skill, Social } from "@/typings";
import { GetStaticProps } from "next";
import { fetchPageInfo } from "@/utils/fetchPageInfo";
import { fetchExperiences } from "@/utils/fetchExperiences";
import { fetchSkills } from "@/utils/fetchSkills";
import { fetchProjects } from "@/utils/fetchProjects";
import { fetchSocials } from "@/utils/fetchSocials";

type Props = {
  pageInfo: PageInfo
  experiences: Experience[]
  skills: Skill[]
  projects: Project[]
  socials: Social[]
}


export default function Home({pageInfo, experiences, skills, projects, socials,}:Props) {
  return (
    <div className=" bg-[rgb(36,36,36)] text-white h-screen
    snap-y snap-mandatory overflow-y-scroll 
    overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#778A35]/80">
        <Head>
          <title>Zerubabel&aposs Portfolio</title>
        </Head>
        
        <Header socials = {socials}/>

        <section id="hero" className=" snap-start">
          <Hero pageInfo = {pageInfo}/>
        </section>

        <section id='about' className=" snap-center">
          <About pageInfo = {pageInfo}/>
        </section>
          
        <section id='experiance' className=" snap-center">
          <WorkExperiance experienc/>
        </section>

        <section id="skills" className=" snap-start">
          <Skills/>
        </section>

        <section id="projects" className=" snap-start">
          <Projects />
        </section>

        <section id="contact" className=" snap-start">
          <ContactMe/>
        </section>
        <footer className="sticky bottom-12 w-full cursor-pointer">
          <div className=" flex items-center justify-end">
           <a href="#hero"> <ChevronDoubleUpIcon className="w-10 h-10 mr-5 float-right items-center text-[#778A35] filter 
           hover:bg-[#778a35] hover:text-gray-800 bg-slate-200 rounded-full"/></a>
          </div>
        </footer>

    </div>
  )
}

export const getStaticProps : GetStaticProps<Props> = async() => {
  const pageInfo: PageInfo = await fetchPageInfo()
  const experiences: Experience[] = await fetchExperiences()
  const skills: Skill[] = await fetchSkills()
  const projects: Project[] = await fetchProjects()
  const socials: Social[] = await fetchSocials()

  return{
    props:{
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
    },
    revalidate: 5,
  }
}