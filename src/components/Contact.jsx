import { useState } from 'react';
import React from 'react'
import { FiMail, FiMapPin, FiPhone, FiSend, FiLinkedin, FiGithub } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // This would typically connect to a backend service
    // For demo purposes, we'll simulate a successful submission
    setFormStatus({
      submitted: true,
      success: true,
      message: 'Thank you! Your message has been received.'
    });
    
    // Reset the form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: <FiMail className="w-5 h-5" />,
      title: "Email",
      value: "anushkajain3985@gmail.com",
      link: null
    },
    {
      icon: <FiPhone className="w-5 h-5" />,
      title: "Phone",
      value: "+91 8269191128",
      link: null
    },
    {
      icon: <FiMapPin className="w-5 h-5" />,
      title: "Location",
      value: "Ghaziabad, India",
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: <FiLinkedin className="w-5 h-5" />,
      link: "https://www.linkedin.com/in/anushka-jain-7a7431249/"
    },
    {
      icon: <FiGithub className="w-5 h-5" />,
      link: "https://github.com/anushhka-jainn"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-indigo-600 font-medium mb-2 tracking-wider uppercase text-sm">Get In Touch</p>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Let's Connect</h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg">
            Have a project in mind or want to discuss potential opportunities? I'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="bg-indigo-50 w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center text-indigo-600">
                {item.icon}
              </div>
              <h3 className="font-bold text-lg mb-2 text-center">{item.title}</h3>
              {item.link ? (
                <a 
                  href={item.link} 
                  className="text-gray-600 hover:text-indigo-600 transition-colors block text-center"
                >
                  {item.value}
                </a>
              ) : (
                <p className="text-gray-600 text-center">{item.value}</p>
              )}
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-4xl mx-auto">
          <div className="grid md:grid-cols-5">
            <div className="md:col-span-2 bg-indigo-700 text-white p-8 md:p-12">
              <h3 className="text-2xl font-bold mb-6">Let's talk about your project</h3>
              <p className="mb-8 opacity-90">
                I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
              </p>
              
              <div className="space-y-4 mb-8">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-indigo-600/30 flex items-center justify-center mr-4">
                      {item.icon}
                    </div>
                    {item.link ? (
                      <a href={item.link} className="hover:underline">
                        {item.value}
                      </a>
                    ) : (
                      <span>{item.value}</span>
                    )}
                  </div>
                ))}
              </div>
              
              <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
              <div className="flex space-x-3">
                {socialLinks.map((item, index) => (
                  <a 
                    key={index} 
                    href={item.link} 
                    className="w-10 h-10 rounded-full bg-indigo-600/30 flex items-center justify-center hover:bg-indigo-600 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>
            
            <div className="md:col-span-3 p-8 md:p-12">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Send Me a Message</h3>
              
              {formStatus.submitted && (
                <div className={`mb-6 p-4 rounded-lg ${formStatus.success ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                  {formStatus.message}
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-colors"
                      placeholder="Anushka Jain"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-colors"
                      placeholder="hello@example.com"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-colors"
                    placeholder="Project Inquiry"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-colors"
                    placeholder="Hello Anushka, I'd like to talk about..."
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
                >
                  <FiSend className="mr-2" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;