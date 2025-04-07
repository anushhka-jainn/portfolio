import { motion } from 'framer-motion'
import React from 'react'
import { 
  FiCode, FiLayout, FiDatabase, FiTool, 
  FiGitBranch, FiSmartphone, FiPackage, FiLayers 
} from 'react-icons/fi'

const Skills = () => {
  const skills = [
    {
      category: "Frontend",
      icon: <FiLayout className="w-6 h-6" />,
      skills: ["React", "JavaScript", "Bootstrap", "HTML5", "CSS3", "Tailwind CSS"]
    },
    {
      category: "Languages",
      icon: <FiCode className="w-6 h-6" />,
      skills: ["C++","JavaScript", "HTML", "CSS", "Python", "SQL","Java"]
    },
    
    
    {
      category: "Tools",
      icon: <FiGitBranch className="w-6 h-6" />,
      skills: ["Git", "GitHub", "Postman", "VS Code"]
    },
    {
      category: "Backend",
      icon: <FiDatabase className="w-6 h-6" />,
      skills: ["MongoDB", "Node.js", "Express"]
    },
    {
      category: "Responsive Design",
      icon: <FiSmartphone className="w-6 h-6" />,
      skills: [ "Media Queries", "Flexbox", "Grid", "Responsive Images"]
    }
    
    
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  }

  return (
    <section id="skills" className="section-padding bg-white">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-25 ">
          <p className="text-accent font-medium mb-7 text-4xl mt-8">What I Know</p>
          <div className="section-title text-2xl font-sans mb-5 ">Technical Skills</div>
          <p className="text-secondary">
            I specialize in frontend development with a focus on creating modern, 
            responsive, and user-friendly web applications.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {skills.map((item, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-4 text-accent bg-indigo-50 p-3 rounded-lg inline-block">
                {item.icon}
              </div>
              <h3 className="font-display text-lg font-bold mb-4">{item.category}</h3>
              <div className="flex flex-wrap gap-2">
                {item.skills.map((skill, idx) => (
                  <span 
                    key={idx} 
                    className="bg-gray-100 text-secondary text-sm px-3 py-1 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills