'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FadeIn, StaggerContainer, StaggerItem, AnimatedCard } from '../components/AnimatedElements';
import { motion } from 'framer-motion';

export default function Contact() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    service: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      // Reset form after success
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
          service: ''
        });
        setFormStatus('idle');
      }, 3000);
    }, 1500);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <>
      {/* Page Banner */}
      <motion.section 
        className="relative bg-gradient-to-r from-primary-dark to-primary-DEFAULT text-white py-20 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 opacity-20">
          <motion.div 
            className="bg-pattern w-full h-full bg-repeat"
            animate={{ 
              backgroundPosition: ["0px 0px", "100px 100px"],
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 20, 
              ease: "linear" 
            }}
          ></motion.div>
        </div>
        
        <div className="container mx-auto px-4 z-10 relative">
          <FadeIn direction="up" className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl md:text-2xl">
              Get in touch with our team to discuss your audio project needs
            </p>
          </FadeIn>
        </div>
      </motion.section>

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8 mb-16">
          {/* Contact Form */}
          <div className="lg:w-2/3">
            <FadeIn direction="up">
              <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
              <p className="mb-8">
                Whether you're interested in recording services, equipment rental, or have questions about our educational programs, we're here to help. Fill out the form below and a member of our team will get back to you within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <StaggerContainer staggerChildren={0.1} delay={0.2}>
                  <StaggerItem>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block mb-2 font-medium">Name</label>
                        <motion.div whileTap={{ scale: 0.98 }}>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-DEFAULT focus:border-primary-DEFAULT transition-all duration-200"
                            placeholder="Your name"
                            required
                          />
                        </motion.div>
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block mb-2 font-medium">Email</label>
                        <motion.div whileTap={{ scale: 0.98 }}>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-DEFAULT focus:border-primary-DEFAULT transition-all duration-200"
                            placeholder="Your email address"
                            required
                          />
                        </motion.div>
                      </div>
                    </div>
                  </StaggerItem>
                
                  <StaggerItem>
                    <div>
                      <label htmlFor="service" className="block mb-2 font-medium">I'm interested in</label>
                      <motion.div 
                        className="relative"
                        whileTap={{ scale: 0.98 }}
                      >
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg appearance-none focus:ring-2 focus:ring-primary-DEFAULT focus:border-primary-DEFAULT transition-all duration-200"
                        >
                          <option value="">Select a service</option>
                          <option value="recording">Recording Services</option>
                          <option value="equipment">Equipment Rental</option>
                          <option value="education">Educational Programs</option>
                          <option value="membership">Studio Membership</option>
                          <option value="mobile">Mobile Recording</option>
                          <option value="other">Other</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                          </svg>
                        </div>
                      </motion.div>
                    </div>
                  </StaggerItem>
                
                  <StaggerItem>
                    <div>
                      <label htmlFor="subject" className="block mb-2 font-medium">Subject</label>
                      <motion.div whileTap={{ scale: 0.98 }}>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-DEFAULT focus:border-primary-DEFAULT transition-all duration-200"
                          placeholder="Subject of your message"
                          required
                        />
                      </motion.div>
                    </div>
                  </StaggerItem>
                
                  <StaggerItem>
                    <div>
                      <label htmlFor="message" className="block mb-2 font-medium">Message</label>
                      <motion.div whileTap={{ scale: 0.99 }}>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          rows={6}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-DEFAULT focus:border-primary-DEFAULT transition-all duration-200"
                          placeholder="Tell us about your project or question"
                          required
                        ></textarea>
                      </motion.div>
                    </div>
                  </StaggerItem>
                
                  <StaggerItem>
                    <div className="flex items-center justify-between">
                      <motion.button
                        type="submit"
                        className="btn btn-primary px-8 py-3 text-lg flex items-center gap-2"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        disabled={formStatus === 'submitting'}
                      >
                        {formStatus === 'submitting' ? (
                          <>
                            <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Sending...
                          </>
                        ) : formStatus === 'success' ? (
                          <>
                            <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            Message Sent!
                          </>
                        ) : (
                          'Send Message'
                        )}
                      </motion.button>
                      
                      <Link href="/faq" className="text-primary-DEFAULT hover:text-primary-dark transition-colors duration-200">
                        <span className="border-b border-primary-DEFAULT">View our FAQ</span>
                      </Link>
                    </div>
                  </StaggerItem>
                </StaggerContainer>
                
                {formStatus === 'success' && (
                  <motion.div 
                    className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mt-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <p>Thank you for your message! We'll be in touch soon.</p>
                  </motion.div>
                )}
                
                {formStatus === 'error' && (
                  <motion.div 
                    className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mt-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <p>There was an error sending your message. Please try again later.</p>
                  </motion.div>
                )}
              </form>
            </FadeIn>
          </div>
          
          {/* Contact Info */}
          <div className="lg:w-1/3">
            <FadeIn direction="up" delay={0.2}>
              <div className="sticky top-24">
                <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
                
                <div className="space-y-8">
                  <AnimatedCard className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex items-start">
                      <div className="bg-primary-light p-3 rounded-full mr-4">
                        <svg className="h-6 w-6 text-primary-DEFAULT" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-1">Studio Address</h3>
                        <p className="text-gray-600">
                          123 Audio Lane<br />
                          Nashville, TN 37203<br />
                          United States
                        </p>
                        <a 
                          href="https://maps.google.com" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-primary-DEFAULT hover:text-primary-dark mt-2 inline-block"
                        >
                          Get Directions
                        </a>
                      </div>
                    </div>
                  </AnimatedCard>
                
                  <AnimatedCard className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex items-start">
                      <div className="bg-primary-light p-3 rounded-full mr-4">
                        <svg className="h-6 w-6 text-primary-DEFAULT" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-1">Phone</h3>
                        <p className="text-gray-600">(615) 555-1234</p>
                        <p className="text-gray-500 text-sm mt-1">Monday - Friday: 9am - 7pm</p>
                        <p className="text-gray-500 text-sm">Saturday: 10am - 4pm</p>
                      </div>
                    </div>
                  </AnimatedCard>
                
                  <AnimatedCard className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex items-start">
                      <div className="bg-primary-light p-3 rounded-full mr-4">
                        <svg className="h-6 w-6 text-primary-DEFAULT" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-1">Email</h3>
                        <a href="mailto:info@elementalsound.com" className="text-gray-600 hover:text-primary-DEFAULT transition-colors duration-200">
                          info@elementalsound.com
                        </a>
                        <p className="text-gray-500 text-sm mt-2">For booking inquiries:</p>
                        <a href="mailto:booking@elementalsound.com" className="text-gray-600 hover:text-primary-DEFAULT transition-colors duration-200">
                          booking@elementalsound.com
                        </a>
                      </div>
                    </div>
                  </AnimatedCard>
                </div>
                
                <div className="mt-8">
                  <h3 className="text-xl font-bold mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    <motion.a 
                      href="https://twitter.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-primary-light hover:bg-primary-DEFAULT text-primary-DEFAULT hover:text-white p-3 rounded-full transition-colors duration-200"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </motion.a>
                    <motion.a 
                      href="https://facebook.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-primary-light hover:bg-primary-DEFAULT text-primary-DEFAULT hover:text-white p-3 rounded-full transition-colors duration-200"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                      </svg>
                    </motion.a>
                    <motion.a 
                      href="https://instagram.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-primary-light hover:bg-primary-DEFAULT text-primary-DEFAULT hover:text-white p-3 rounded-full transition-colors duration-200"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                      </svg>
                    </motion.a>
                    <motion.a 
                      href="https://youtube.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-primary-light hover:bg-primary-DEFAULT text-primary-DEFAULT hover:text-white p-3 rounded-full transition-colors duration-200"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
                      </svg>
                    </motion.a>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
        
        {/* Map Section */}
        <FadeIn direction="up">
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Find Us</h2>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <div className="h-[400px] relative">
                <Image 
                  src="/images/map-placeholder.jpg" 
                  alt="Studio Location Map" 
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 1200px"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div 
                    className="bg-white p-4 rounded-lg shadow-lg max-w-sm text-center"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                  >
                    <h3 className="text-lg font-bold mb-2">Elemental Sound Studios</h3>
                    <p className="text-gray-600 mb-4">123 Audio Lane, Nashville, TN 37203</p>
                    <a 
                      href="https://maps.google.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn btn-primary inline-block"
                    >
                      Open in Google Maps
                    </a>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
        
        {/* FAQ Section */}
        <FadeIn direction="up">
          <div className="mb-16">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-lg max-w-2xl mx-auto">
                Find quick answers to common questions about our services, booking process, and facilities.
              </p>
            </div>
            
            <StaggerContainer className="max-w-3xl mx-auto" staggerChildren={0.1} delay={0.2}>
              <StaggerItem>
                <motion.div 
                  className="bg-white rounded-lg shadow-md p-6 mb-4"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <h3 className="text-xl font-bold mb-2">How far in advance should I book studio time?</h3>
                  <p className="text-gray-600">
                    For standard recording sessions, we recommend booking 2-3 weeks in advance. For larger projects or specific engineers, 4-6 weeks is advised. Last-minute availability can sometimes be accommodated for members.
                  </p>
                </motion.div>
              </StaggerItem>
              
              <StaggerItem>
                <motion.div 
                  className="bg-white rounded-lg shadow-md p-6 mb-4"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <h3 className="text-xl font-bold mb-2">Do you offer equipment rental outside of studio sessions?</h3>
                  <p className="text-gray-600">
                    Yes, we have a comprehensive equipment rental program. Members receive priority access and discounted rates. All rentals include basic insurance and technical support.
                  </p>
                </motion.div>
              </StaggerItem>
              
              <StaggerItem>
                <motion.div 
                  className="bg-white rounded-lg shadow-md p-6 mb-4"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <h3 className="text-xl font-bold mb-2">What are the benefits of becoming a studio member?</h3>
                  <p className="text-gray-600">
                    Members enjoy priority booking, discounted rates, access to exclusive events, free education resources, equipment rental privileges, and become part of our creative community.
                  </p>
                </motion.div>
              </StaggerItem>
            </StaggerContainer>
            
            <div className="text-center mt-8">
              <Link href="/faq" className="btn btn-primary">
                View All FAQs
              </Link>
            </div>
          </div>
        </FadeIn>
        
        {/* Call to Action */}
        <motion.div 
          className="bg-gradient-to-r from-primary-DEFAULT to-primary-dark text-white p-12 rounded-2xl text-center relative overflow-hidden"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <div className="absolute inset-0 opacity-20">
            <motion.div 
              className="bg-pattern w-full h-full bg-repeat"
              animate={{ 
                backgroundPosition: ["0px 0px", "100px 100px"],
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 20, 
                ease: "linear" 
              }}
            ></motion.div>
          </div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Create Something Amazing?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Book a tour of our facilities or schedule a consultation with our team to discuss your project needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a 
                href="tel:+16155551234" 
                className="btn btn-light"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Call Us: (615) 555-1234
              </motion.a>
              <motion.button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="btn btn-accent"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send a Message
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
} 