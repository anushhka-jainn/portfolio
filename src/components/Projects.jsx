import { useState } from 'react'
import React from 'react'
import { motion } from 'framer-motion'
import { FiExternalLink, FiGithub } from 'react-icons/fi'

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all')
  
  const projects = [
    {
      title: "MedAI",
      description: "A web application designed to empower users by simplifying healthcare access and understanding.This project combines three core features: a Report Analyzer, a Doctor Finder, and a Disease Predictor, with an integrated mental wellness chatbot",
      image: "./medaiphoto.png",
      tags: ["react", "Springboot", "tailwind", "Python", "MySQL"],
      
      codeUrl: "https://github.com/anushhka-jainn/MedAI",
      featured: true
    },
    {
      title: "LiveSketch",
      description: "Developed a real-time collaborative sketching platform enabling multiple users to draw together seamlessly. ",
      image: "./livesketchphoto.jpg",
      tags: ["react", "next.js", "Node.js", "Express.js", "WebSockets", "Turborepo", "PostgreSQL", " Prisma ORM", "Typescript"],
      
      codeUrl: "https://github.com/tyagi077/live-sketch",
      featured: true
    },
    {
      title: "PassOP",
      description: "Developed a robust web Application for managing and organizing user credentials securely.Features include editing, saving, and deleting passwords. ",
      image: "./passopphoto.png",
      tags: ["react.js", "MongoDB", "Express.js", "ailwind CSS"],
      demoUrl: "https://pass-manager-theta.vercel.app/",
      codeUrl: "https://github.com/anushhka-jainn/PassManager",
      featured: false
    }
  ]
  
  const filters = [
    { name: 'All', key: 'all' },
    { name: 'Featured', key: 'featured' },
    { name: 'React', key: 'react' },
    { name: 'Next.js', key: 'next.js' },
    { name: 'Tailwind', key: 'tailwind' }
  ]
  
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : activeFilter === 'featured'
      ? projects.filter(project => project.featured)
      : projects.filter(project => project.tags.includes(activeFilter))
  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }
  
  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  }

  return (
    <section id="projects" className="section-padding bg-gray-50">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-accent font-medium mb-7 mt-8 text-4xl">My Work</p>
          <div className="section-title text-2xl font-sans mb-5">Featured Projects</div>
          <p className="text-secondary mb-8">
            Explore my latest projects showcasing my technical skills and creative approach to problem-solving.
          </p>
          
          <div className="flex flex-wrap justify-center gap-3">
            {filters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeFilter === filter.key
                    ? 'bg-accent text-white'
                    : 'bg-white text-secondary hover:bg-gray-100'
                }`}
              >
                {filter.name}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {filteredProjects.map((project, index) => (
            <motion.div 
              key={index}
              variants={item}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-48 object-cover transition-transform hover:scale-105 duration-500" 
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-secondary mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, idx) => (
                    <span 
                      key={idx} 
                      className="bg-indigo-50 text-accent text-xs px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between">
                  <a 
                    href={project.demoUrl} 
                    className="flex items-center text-primary hover:text-accent transition-colors text-sm font-medium"
                  >
                    <FiExternalLink className="mr-1" /> Live Demo
                  </a>
                  <a 
                    href={project.codeUrl} 
                    className="flex items-center text-primary hover:text-accent transition-colors text-sm font-medium"
                  >
                    <FiGithub className="mr-1" /> View Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {filteredProjects.length === 0 && (
          <div className="text-center text-secondary py-10">
            No projects found with the selected filter.
          </div>
        )}
      </div>
    </section>
  )
}

export default Projects