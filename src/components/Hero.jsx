import { motion } from 'framer-motion'
import { image, img } from 'framer-motion/client'
import React from 'react'
import { FiArrowDown, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'
import { SiLeetcode } from "react-icons/si";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-white -z-10"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-indigo-100 rounded-full blur-3xl opacity-50 -z-10"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-50 -z-10"></div>
      
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-accent font-medium mb-2"><div className='pl-10'>Frontend Developer</div></p>
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-2 leading-tight">
             <div className='pl-10'> Hello, I'm </div>
              <div className="text-accent pl-10 mb-6">Anushka Jain</div>
            </h1>
            <p className="text-secondary text-lg mb-8 max-w-lg">
              <div className='pl-10'>
              I craft responsive and elegant web experiences with modern technologies to bring ideas to life.
              </div></p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a 
                href="#contact" 
                className="bg-accent hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-lg transition-colors flex items-center justify-center"
              >
                Let's Talk
              </a>
              <a 
                href="#projects" 
                className="bg-white hover:bg-gray-100 text-primary border border-gray-300 font-medium py-3 px-6 rounded-lg transition-colors flex items-center justify-center"
              >
                View Projects
              </a>
            </div>
            
            <div className="flex space-x-6">
              <a href="https://github.com/anushhka-jainn" className="text-secondary hover:text-accent transition-colors">
                <FiGithub className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/anushka-jain-7a7431249/" className="text-secondary hover:text-accent transition-colors">
                <FiLinkedin className="w-5 h-5" />
              </a>
              <a href="https://leetcode.com/u/anushhka_jainn/" className="text-secondary hover:text-accent transition-colors">
                <SiLeetcode className="w-5 h-5" />
               
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden md:block"
          >
            <div className="relative w-full aspect-square bg-gradient-to-br from-indigo-200 to-purple-200 rounded-full overflow-hidden flex items-center justify-center">
             
              <img 
                src="public/anushka_professional.jpg" 
                alt="Anushka Jain" 
                className="w-5/6 h-5/6 object-cover rounded-full" 
              />
            </div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        >
          <a href="#skills" className="text-secondary hover:text-accent transition-colors p-2">
            <span className="block text-sm mb-2">Scroll Down</span>
            <FiArrowDown className="w-5 h-5 animate-bounce mx-auto" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero