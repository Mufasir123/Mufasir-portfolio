import React from 'react';
import fashions from "../assets/fashions.png"
import apple from "../assets/apple.png"
import simple from "../assets/simple.png"
import { AiFillGithub, AiOutlineGithub } from 'react-icons/ai'
import Reveal from './Reveal';

const projects = [
    {
      img: fashions,
      title: "Shahid Fashions",
      description: "Developed an eCommerce website using React, featuring a dynamic and responsive user interface.",
      links: {
        site: "https://shahid-fashions.vercel.app/",
        github: "https://github.com/Mufasir123/ShahidFashions",
      },
    },
    {
      img: apple,
      title: "Apple web clone",
      description: "Developed an Apple-inspired website, gaining valuable experience in creating smooth and engaging animations.",
      links: {
        site: "https://apple-web-clone-jade.vercel.app/",
        github: "https://github.com/Mufasir123/apple-web-clone",
      },
    },
    {
      img: simple,
      title: "Simple E-commerse app",
      description: "Developed a basic eCommerce app with core features like product search and add-to-cart functionality",
      links: {
        site: "https://simple-e-com-app.vercel.app/",
        github: "https://github.com/Mufasir123/Simple-E-com-App",
      },
    },
  ]

const Portfolio = () => {
  return (
    <div className='max-w-[1000px] mx-auto p-6 md:my-20' id="portfolio">
        <h2 className='text-3xl font-bold text-gray-200 mb-8'>Projects</h2>
        {projects.map((project, index) => (
            <Reveal>
            <div key={index} 
            className={`flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} mb-12`}>
                <div className='w-full md:w-1/2 p-4'>
                    <img
                        src={project.img}
                        alt={project.title}
                        className='w-full h-full object-cover rounded-lg shadow-lg'
                    />
                </div>
                <div className='w-full md:w-1/2 p-4 flex flex-col justify-center'>
                    <h3 className='text-2xl font-semibold text-gray-200 mb-4'>{project.title}</h3>
                    <p className='text-gray-300 mb-4'>{project.description}</p>
                    <div className='flex space-x-4'>
                        <a href={project.links.site}
                            className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700
                                        transition duration-300'>
                            View Site
                        </a>
                        <a href={project.links.github}
                            className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700
                                        transition duration-300'>
                            <AiOutlineGithub/>
                        </a>

                    </div>

                </div>

            </div>
            </Reveal>
        ))}
        
    </div>
  )
}

export default Portfolio