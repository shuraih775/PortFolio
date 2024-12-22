import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { MdPushPin } from "react-icons/md";


const Contact = () => {
  const [formData, setFormData] = useState({ from_name: '', email_id: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send('service_1f45nu5', 'template_l20jbv8', formData, {
      publicKey: 'd7Nf3ovfJ6-vyeCXG',
    })
      .then((result) => {
        alert('Message sent successfully!');
      }, (error) => {
        alert('Error sending message.');
      });
  };

  return (
    <>
    <style>
        {`
          @media (min-width: 950px) {
            .custom-form {
              margin-left: 35rem !important;
            }
            .custom-hang{
              display:block;
            }
          }
          @media (max-width: 950px) {
            .custom-form {
              margin-left: 0 !important;
            }
            .custom-hang{
              display:none;
            }
          }
        `}
      </style>
    <section id="contact" className="py-20 w-full bg-gradient-to-r from-blue-100 to-blue-50 dark:from-gray-900 dark:to-gray-800 text-center px-4">
      
      <motion.h2 
        className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-10 mr-auto ml-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Contact Me
      </motion.h2>

      <div className="flex flex-col md:flex-row max-w-6xl  mx-auto  relative">
      <MdPushPin className='absolute top-5 left-2 text-red-600 custom-hang' style={{ fontSize: '25px', zIndex: 10 }} />


      <motion.div
          className="custom-hang md:w-1/3 sm:left-10 absolute top-0 left-0 h-full p-12 bg-blue-50 dark:bg-gray-900 rounded-lg shadow-5xl text-left"
          initial={{ rotate: -4, x: -20 }}
          animate={{ rotate: [0, -2, 2, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          style={{
            transformOrigin: "top left",
            marginLeft: "-20px",  
          }}
        >
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            Hello! I'm a passionate software engineer with a love for building engaging and efficient applications. With expertise in both frontend and backend technologies, I aim to create solutions that are not only functional but also user-friendly. Whether you're interested in collaborating on a project or just want to say hi, feel free to reach out through the contact form. I'd love to connect!
          </p>
        </motion.div>
        
         <form
          onSubmit={handleSubmit}
          className="w-full  bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg flex-grow md:w-1/4 lg:ml-[35%] md:ml-[35%] custom-form"
          
        >  <div className="space-y-6">
            <input 
              type="text" 
              id="from_name" 
              value={formData.from_name}
              onChange={handleChange}
              placeholder="Your Name" 
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
            />
            <input 
              type="email" 
              id="email_id" 
              value={formData.email_id}
              onChange={handleChange}
              placeholder="Your Email" 
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
            />
            <textarea 
              id="message" 
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg h-32 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
            ></textarea>
            <motion.button 
              type="submit" 
              className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:bg-teal-400 dark:text-gray-900 dark:hover:bg-teal-300 dark:focus:ring-offset-gray-800"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </div>
        </form>
      </div>
    </section></>
  );
};

export default Contact;
