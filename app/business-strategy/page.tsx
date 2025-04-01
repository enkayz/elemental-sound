'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  FadeIn, 
  StaggerContainer, 
  StaggerItem,
  AnimatedCard,
  WaveformVisualizer 
} from '../components/AnimatedElements';
import { motion } from 'framer-motion';

export default function BusinessStrategy() {
  // State for interactive financial chart toggle
  const [activeChart, setActiveChart] = useState<'revenue' | 'growth' | 'investment'>('revenue');

  return (
    <>
      {/* Page Banner */}
      <section className="relative bg-gradient-to-r from-primary-dark to-primary-DEFAULT text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="bg-pattern w-full h-full bg-repeat"></div>
        </div>
        
        <div className="container mx-auto px-4 z-10 relative">
          <FadeIn direction="up" className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Business Strategy</h1>
            <p className="text-xl md:text-2xl">
              Transforming from a traditional recording studio into an integrated audio production ecosystem
            </p>
          </FadeIn>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="lg:w-1/4">
            <div className="bg-light-DEFAULT p-6 rounded-lg shadow-md sticky top-24">
              <h3 className="text-xl font-bold mb-4">On This Page</h3>
              <ul className="space-y-2 mb-8">
                <li><a href="#executive-summary" className="text-primary-DEFAULT hover:text-primary-dark transition-colors duration-200">Executive Summary</a></li>
                <li><a href="#core-pillars" className="text-primary-DEFAULT hover:text-primary-dark transition-colors duration-200">Core Strategic Pillars</a></li>
                <li><a href="#service-innovations" className="text-primary-DEFAULT hover:text-primary-dark transition-colors duration-200">Service Innovations</a></li>
                <li><a href="#integration" className="text-primary-DEFAULT hover:text-primary-dark transition-colors duration-200">Integration Strategy</a></li>
                <li><a href="#implementation" className="text-primary-DEFAULT hover:text-primary-dark transition-colors duration-200">Implementation Plan</a></li>
                <li><a href="#financial" className="text-primary-DEFAULT hover:text-primary-dark transition-colors duration-200">Financial Projections</a></li>
              </ul>
              
              <h3 className="text-xl font-bold mb-4">Related Pages</h3>
              <ul className="space-y-2">
                <li><Link href="/services" className="text-primary-DEFAULT hover:text-primary-dark transition-colors duration-200">Services Overview</Link></li>
                <li><Link href="/implementation" className="text-primary-DEFAULT hover:text-primary-dark transition-colors duration-200">Implementation Timeline</Link></li>
                <li><Link href="/implementation/marketing" className="text-primary-DEFAULT hover:text-primary-dark transition-colors duration-200">Marketing Strategy</Link></li>
                <li><Link href="/implementation/financial" className="text-primary-DEFAULT hover:text-primary-dark transition-colors duration-200">Financial Details</Link></li>
              </ul>

              {/* Audio sample of strategy overview */}
              <div className="mt-8 p-4 bg-white rounded-lg shadow-sm">
                <h4 className="font-bold mb-2">Listen to Our Strategy</h4>
                <p className="text-sm text-gray-600 mb-3">Hear our CEO explain our audio ecosystem vision</p>
                <WaveformVisualizer 
                  audioUrl="/sample-audio/strategy-overview.mp3" 
                  height={60}
                  waveColor="#e4e9ec"
                  progressColor="#2a5c8c"
                />
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <article className="lg:w-3/4">
            <FadeIn direction="up">
              <section id="executive-summary" className="mb-12">
                <h2 className="text-3xl font-bold mb-6">Executive Summary</h2>
                <p className="text-lg mb-4">
                  Elemental Sound is executing a transformative business strategy that evolves the company from a traditional recording studio into an integrated audio production ecosystem. Our approach is built on five core strategic pillars, with implementation across four cornerstone service innovations.
                </p>
                
                <p className="text-lg mb-6">
                  By creating a cohesive ecosystem with multiple client pathways, Elemental Sound will generate sustainable recurring revenue streams, extend market reach beyond geographical limitations, and establish category leadership in the audio production industry.
                </p>
                
                <div className="bg-light-DEFAULT border-l-4 border-primary-DEFAULT p-6 rounded-r-lg my-6">
                  <h4 className="text-xl font-bold mb-2 text-primary-DEFAULT">Strategy Snapshot</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Comprehensive 48-month implementation timeline</li>
                    <li>Revenue growth projections of 30-100% annually</li>
                    <li>Investment requirements of $725,000-1,350,000</li>
                    <li>Evolution from 80% studio services to diversified revenue mix</li>
                  </ul>
                </div>
              </section>
            </FadeIn>

            <section id="core-pillars" className="mb-12">
              <FadeIn direction="up">
                <h2 className="text-3xl font-bold mb-6">Core Strategic Pillars</h2>
              </FadeIn>
              
              <StaggerContainer staggerChildren={0.1} delay={0.1}>
                <StaggerItem>
                  <motion.div 
                    id="diversification" 
                    className="bg-white rounded-lg shadow-md p-6 mb-8"
                    whileHover={{ 
                      scale: 1.02, 
                      boxShadow: "0 8px 30px rgba(0, 0, 0, 0.12)"
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-2xl font-bold mb-3">1. Service Diversification</h3>
                    <p className="text-lg mb-4">
                      Transform the business from session-based recording to a comprehensive suite of integrated services that address creators' needs throughout their journey. This expansion allows us to capture more value from each client relationship while creating multiple entry points to our ecosystem.
                    </p>
                    
                    <div className="bg-light-DEFAULT p-4 rounded-lg">
                      <h4 className="font-bold mb-2">Key Implementation Elements:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Development of complementary service lines beyond core recording</li>
                        <li>Creation of service packages that span the creator journey</li>
                        <li>Emphasis on cross-service integration and complementary offerings</li>
                        <li>Specialized solutions for different market segments</li>
                      </ul>
                    </div>
                  </motion.div>
                </StaggerItem>
                
                <StaggerItem>
                  <motion.div 
                    id="revenue" 
                    className="bg-white rounded-lg shadow-md p-6 mb-8"
                    whileHover={{ 
                      scale: 1.02, 
                      boxShadow: "0 8px 30px rgba(0, 0, 0, 0.12)"
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-2xl font-bold mb-3">2. Recurring Revenue Development</h3>
                    <p className="text-lg mb-4">
                      Shift from transactional to relationship-based revenue models through memberships, subscriptions, and ongoing service packages. This transformation stabilizes cash flow, increases client retention, and provides predictable revenue for scaling operations.
                    </p>
                    
                    <div className="bg-light-DEFAULT p-4 rounded-lg">
                      <h4 className="font-bold mb-2">Key Implementation Elements:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Tiered membership program for studio access</li>
                        <li>Subscription-based educational platform</li>
                        <li>Retainer relationships with corporate and label clients</li>
                        <li>Package bundles that incentivize ongoing engagement</li>
                        <li>Value-added membership benefits that enhance retention</li>
                      </ul>
                    </div>
                  </motion.div>
                </StaggerItem>
                
                <StaggerItem>
                  <motion.div 
                    id="technology" 
                    className="bg-white rounded-lg shadow-md p-6 mb-8"
                    whileHover={{ 
                      scale: 1.02, 
                      boxShadow: "0 8px 30px rgba(0, 0, 0, 0.12)"
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-2xl font-bold mb-3">3. Technology Innovation</h3>
                    <p className="text-lg mb-4">
                      Invest in cutting-edge audio technologies that create competitive advantages and open new creative possibilities for clients. By positioning at the forefront of audio innovation, we create differentiation in the market and attract forward-thinking creators.
                    </p>
                    
                    <div className="bg-light-DEFAULT p-4 rounded-lg">
                      <h4 className="font-bold mb-2">Key Implementation Elements:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Immersive audio (Dolby Atmos, spatial audio) capabilities</li>
                        <li>AI-assisted production and mastering tools</li>
                        <li>Remote collaboration technologies and cloud integration</li>
                        <li>Virtual production environments and digital experiences</li>
                        <li>Next-generation audio formats and delivery systems</li>
                      </ul>
                    </div>
                  </motion.div>
                </StaggerItem>
                
                <StaggerItem>
                  <motion.div 
                    id="community" 
                    className="bg-white rounded-lg shadow-md p-6 mb-8"
                    whileHover={{ 
                      scale: 1.02, 
                      boxShadow: "0 8px 30px rgba(0, 0, 0, 0.12)"
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-2xl font-bold mb-3">4. Community Building</h3>
                    <p className="text-lg mb-4">
                      Develop a vibrant ecosystem of creators, educators, and industry professionals centered around Elemental Sound's physical and digital presence. This community becomes a powerful differentiator that adds value beyond technical services.
                    </p>
                    
                    <div className="bg-light-DEFAULT p-4 rounded-lg">
                      <h4 className="font-bold mb-2">Key Implementation Elements:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Member events and networking opportunities</li>
                        <li>Collaborative projects and knowledge sharing platforms</li>
                        <li>Mentor/mentee relationships within the community</li>
                        <li>Industry showcases and performance opportunities</li>
                        <li>Digital platforms for continued engagement</li>
                      </ul>
                    </div>
                  </motion.div>
                </StaggerItem>
                
                <StaggerItem>
                  <motion.div 
                    id="education" 
                    className="bg-white rounded-lg shadow-md p-6 mb-8"
                    whileHover={{ 
                      scale: 1.02, 
                      boxShadow: "0 8px 30px rgba(0, 0, 0, 0.12)"
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-2xl font-bold mb-3">5. Educational Leadership</h3>
                    <p className="text-lg mb-4">
                      Establish thought leadership through education platforms and knowledge sharing that drives both revenue and client development. Educational offerings create an entry point for new clients while enhancing the value proposition for existing ones.
                    </p>
                    
                    <div className="bg-light-DEFAULT p-4 rounded-lg">
                      <h4 className="font-bold mb-2">Key Implementation Elements:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Comprehensive online learning platform</li>
                        <li>Workshops and masterclasses with industry experts</li>
                        <li>Integration of educational elements across all services</li>
                        <li>Career development and professional pathways</li>
                        <li>Certification programs and skill verification</li>
                      </ul>
                    </div>
                  </motion.div>
                </StaggerItem>
              </StaggerContainer>
            </section>
            
            <FadeIn direction="up">
              <section id="service-innovations" className="mb-12">
                <h2 className="text-3xl font-bold mb-6">Service Innovations</h2>
                <p className="text-lg mb-6">
                  Implementation of our strategy is centered around four cornerstone service innovations that work together to create an integrated ecosystem:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <AnimatedCard className="bg-white rounded-lg shadow-md p-6 h-full">
                    <h3 className="text-2xl font-bold mb-3">Studio Membership Program</h3>
                    <p className="mb-4">
                      A tiered membership model that provides creators with flexible access to professional recording facilities, equipment, and community resources.
                    </p>
                    <Link href="/services/membership" className="btn btn-primary">Learn More</Link>
                  </AnimatedCard>
                  
                  <AnimatedCard className="bg-white rounded-lg shadow-md p-6 h-full">
                    <h3 className="text-2xl font-bold mb-3">Equipment Access Program</h3>
                    <p className="mb-4">
                      Rental and access services that allow creators to utilize professional gear without the capital investment, with options ranging from daily rentals to membership benefits.
                    </p>
                    <Link href="/services/equipment" className="btn btn-primary">Learn More</Link>
                  </AnimatedCard>
                  
                  <AnimatedCard className="bg-white rounded-lg shadow-md p-6 h-full">
                    <h3 className="text-2xl font-bold mb-3">Education Platform</h3>
                    <p className="mb-4">
                      A comprehensive learning ecosystem that combines online courses, live workshops, and hands-on training to develop the next generation of audio professionals.
                    </p>
                    <Link href="/services/education" className="btn btn-primary">Learn More</Link>
                  </AnimatedCard>
                  
                  <AnimatedCard className="bg-white rounded-lg shadow-md p-6 h-full">
                    <h3 className="text-2xl font-bold mb-3">Mobile Recording Service</h3>
                    <p className="mb-4">
                      Professional audio capture capabilities brought directly to artists and events, expanding our geographic reach and creating new client acquisition channels.
                    </p>
                    <Link href="/services/mobile-recording" className="btn btn-primary">Learn More</Link>
                  </AnimatedCard>
                </div>
              </section>
            </FadeIn>
            
            <FadeIn direction="up">
              <section id="integration" className="mb-12">
                <h2 className="text-3xl font-bold mb-6">Integration Strategy</h2>
                <p className="text-lg mb-4">
                  The power of our business model comes from the integration between service lines, creating a cohesive ecosystem rather than isolated offerings:
                </p>
                
                <div className="bg-white rounded-lg shadow-md p-6 mb-6 transition-all duration-300 hover:shadow-lg">
                  <h3 className="text-2xl font-bold mb-3">Client Journey Integration</h3>
                  <p className="mb-4">
                    Services are designed to support clients through their entire audio production journey, from education and skill development to professional production and distribution.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg shadow-md p-6 mb-6 transition-all duration-300 hover:shadow-lg">
                  <h3 className="text-2xl font-bold mb-3">Technical Integration</h3>
                  <p className="mb-4">
                    Consistent technical standards and seamless workflows between all service lines create efficiency and quality advantages for clients using multiple services.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg shadow-md p-6 mb-6 transition-all duration-300 hover:shadow-lg">
                  <h3 className="text-2xl font-bold mb-3">Community Integration</h3>
                  <p className="mb-4">
                    All services contribute to and benefit from the broader Elemental Sound community, creating network effects and increasing the value proposition for each client.
                  </p>
                </div>
              </section>
            </FadeIn>
            
            <FadeIn direction="up">
              <section id="implementation" className="mb-12">
                <h2 className="text-3xl font-bold mb-6">Implementation Plan</h2>
                <p className="text-lg mb-6">
                  Our strategy will be implemented in a phased approach over 48 months:
                </p>
                
                <div className="space-y-6">
                  <motion.div 
                    className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-300"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <h3 className="text-2xl font-bold mb-3">Phase 1: Foundation (Months 1-12)</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Launch initial membership program structure</li>
                      <li>Develop core educational content library</li>
                      <li>Establish equipment rental processes</li>
                      <li>Build community engagement framework</li>
                    </ul>
                  </motion.div>
                  
                  <motion.div 
                    className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-300"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <h3 className="text-2xl font-bold mb-3">Phase 2: Expansion (Months 13-24)</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Scale membership base and add premium tiers</li>
                      <li>Launch complete online education platform</li>
                      <li>Expand equipment inventory and access options</li>
                      <li>Implement mobile recording capabilities</li>
                    </ul>
                  </motion.div>
                  
                  <motion.div 
                    className="bg-white rounded-lg shadow-md p-6 border-l-4 border-purple-300"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <h3 className="text-2xl font-bold mb-3">Phase 3: Integration (Months 25-36)</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Implement cross-service packages and bundles</li>
                      <li>Develop advanced technology infrastructure</li>
                      <li>Establish professional certification programs</li>
                      <li>Create corporate and industry partnership program</li>
                    </ul>
                  </motion.div>
                  
                  <motion.div 
                    className="bg-white rounded-lg shadow-md p-6 border-l-4 border-orange-300"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <h3 className="text-2xl font-bold mb-3">Phase 4: Maturity (Months 37-48)</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Implement immersive audio and next-gen technology</li>
                      <li>Develop geographic expansion model</li>
                      <li>Establish industry-recognized credentials</li>
                      <li>Create scaled community leadership structure</li>
                    </ul>
                  </motion.div>
                </div>
                
                <div className="mt-8">
                  <Link href="/implementation" className="btn btn-primary">View Detailed Implementation Plan</Link>
                </div>
              </section>
            </FadeIn>
            
            <FadeIn direction="up">
              <section id="financial" className="mb-12">
                <h2 className="text-3xl font-bold mb-6">Financial Projections</h2>
                <p className="text-lg mb-4">
                  Our business strategy is projected to transform our revenue structure while delivering strong growth:
                </p>
                
                {/* Interactive financial tabs */}
                <div className="mb-6">
                  <div className="flex border-b border-gray-200 mb-4">
                    <button
                      className={`py-2 px-4 font-medium text-sm ${
                        activeChart === 'revenue'
                          ? 'text-primary-DEFAULT border-b-2 border-primary-DEFAULT'
                          : 'text-gray-500 hover:text-gray-700'
                      }`}
                      onClick={() => setActiveChart('revenue')}
                    >
                      Revenue Distribution
                    </button>
                    <button
                      className={`py-2 px-4 font-medium text-sm ${
                        activeChart === 'growth'
                          ? 'text-primary-DEFAULT border-b-2 border-primary-DEFAULT'
                          : 'text-gray-500 hover:text-gray-700'
                      }`}
                      onClick={() => setActiveChart('growth')}
                    >
                      Growth Projections
                    </button>
                    <button
                      className={`py-2 px-4 font-medium text-sm ${
                        activeChart === 'investment'
                          ? 'text-primary-DEFAULT border-b-2 border-primary-DEFAULT'
                          : 'text-gray-500 hover:text-gray-700'
                      }`}
                      onClick={() => setActiveChart('investment')}
                    >
                      Investment Requirements
                    </button>
                  </div>
                  
                  <div className="bg-white rounded-lg shadow-md p-6 mb-6 min-h-[220px]">
                    {activeChart === 'revenue' && (
                      <div>
                        <h3 className="text-2xl font-bold mb-3">Revenue Distribution Shift</h3>
                        <div className="flex flex-col md:flex-row gap-8 mb-4">
                          <div className="md:w-1/2">
                            <h4 className="font-bold mb-2">Current</h4>
                            <div className="h-10 bg-gray-200 rounded-full overflow-hidden">
                              <motion.div 
                                className="h-full bg-gradient-to-r from-blue-500 to-blue-700"
                                initial={{ width: 0 }}
                                animate={{ width: '80%' }}
                                transition={{ duration: 1, delay: 0.2 }}
                              >
                                <span className="flex h-full items-center justify-center text-xs text-white">80% Studio Services</span>
                              </motion.div>
                            </div>
                            <div className="h-10 bg-gray-200 rounded-full overflow-hidden mt-2">
                              <motion.div 
                                className="h-full bg-gradient-to-r from-green-500 to-green-700"
                                initial={{ width: 0 }}
                                animate={{ width: '15%' }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                              >
                                <span className="flex h-full items-center justify-center text-xs text-white">15% Post-Production</span>
                              </motion.div>
                            </div>
                            <div className="h-10 bg-gray-200 rounded-full overflow-hidden mt-2">
                              <motion.div 
                                className="h-full bg-gradient-to-r from-yellow-500 to-yellow-700"
                                initial={{ width: 0 }}
                                animate={{ width: '5%' }}
                                transition={{ duration: 0.6, delay: 0.6 }}
                              >
                                <span className="flex h-full items-center justify-center text-xs text-white">5% Education</span>
                              </motion.div>
                            </div>
                          </div>
                          
                          <div className="md:w-1/2">
                            <h4 className="font-bold mb-2">Year 3 Target</h4>
                            <div className="h-10 bg-gray-200 rounded-full overflow-hidden">
                              <motion.div 
                                className="h-full bg-gradient-to-r from-purple-500 to-purple-700"
                                initial={{ width: 0 }}
                                animate={{ width: '35%' }}
                                transition={{ duration: 1, delay: 0.8 }}
                              >
                                <span className="flex h-full items-center justify-center text-xs text-white">35% Membership/Access</span>
                              </motion.div>
                            </div>
                            <div className="h-10 bg-gray-200 rounded-full overflow-hidden mt-2">
                              <motion.div 
                                className="h-full bg-gradient-to-r from-blue-500 to-blue-700"
                                initial={{ width: 0 }}
                                animate={{ width: '25%' }}
                                transition={{ duration: 0.8, delay: 1.0 }}
                              >
                                <span className="flex h-full items-center justify-center text-xs text-white">25% Traditional Services</span>
                              </motion.div>
                            </div>
                            <div className="h-10 bg-gray-200 rounded-full overflow-hidden mt-2">
                              <motion.div 
                                className="h-full bg-gradient-to-r from-yellow-500 to-yellow-700"
                                initial={{ width: 0 }}
                                animate={{ width: '20%' }}
                                transition={{ duration: 0.6, delay: 1.2 }}
                              >
                                <span className="flex h-full items-center justify-center text-xs text-white">20% Education</span>
                              </motion.div>
                            </div>
                            <div className="h-10 bg-gray-200 rounded-full overflow-hidden mt-2">
                              <motion.div 
                                className="h-full bg-gradient-to-r from-red-500 to-red-700"
                                initial={{ width: 0 }}
                                animate={{ width: '20%' }}
                                transition={{ duration: 0.6, delay: 1.4 }}
                              >
                                <span className="flex h-full items-center justify-center text-xs text-white">20% Mobile/Special Projects</span>
                              </motion.div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {activeChart === 'growth' && (
                      <div>
                        <h3 className="text-2xl font-bold mb-3">Growth Projections</h3>
                        <div className="grid grid-cols-4 gap-4 max-w-2xl mx-auto">
                          <div className="text-center">
                            <div className="mb-2">Year 1</div>
                            <div className="relative h-48 bg-gray-200 rounded-t-lg mx-auto w-20">
                              <motion.div 
                                className="absolute bottom-0 w-full bg-green-500 rounded-t-lg"
                                initial={{ height: 0 }}
                                animate={{ height: '35%' }}
                                transition={{ duration: 1, delay: 0.2 }}
                              />
                            </div>
                            <div className="mt-2 text-sm font-semibold">30-40%</div>
                          </div>
                          
                          <div className="text-center">
                            <div className="mb-2">Year 2</div>
                            <div className="relative h-48 bg-gray-200 rounded-t-lg mx-auto w-20">
                              <motion.div 
                                className="absolute bottom-0 w-full bg-blue-500 rounded-t-lg"
                                initial={{ height: 0 }}
                                animate={{ height: '60%' }}
                                transition={{ duration: 1, delay: 0.4 }}
                              />
                            </div>
                            <div className="mt-2 text-sm font-semibold">50-70%</div>
                          </div>
                          
                          <div className="text-center">
                            <div className="mb-2">Year 3</div>
                            <div className="relative h-48 bg-gray-200 rounded-t-lg mx-auto w-20">
                              <motion.div 
                                className="absolute bottom-0 w-full bg-purple-500 rounded-t-lg"
                                initial={{ height: 0 }}
                                animate={{ height: '90%' }}
                                transition={{ duration: 1, delay: 0.6 }}
                              />
                            </div>
                            <div className="mt-2 text-sm font-semibold">80-100%</div>
                          </div>
                          
                          <div className="text-center">
                            <div className="mb-2">Years 4+</div>
                            <div className="relative h-48 bg-gray-200 rounded-t-lg mx-auto w-20">
                              <motion.div 
                                className="absolute bottom-0 w-full bg-indigo-500 rounded-t-lg"
                                initial={{ height: 0 }}
                                animate={{ height: '50%' }}
                                transition={{ duration: 1, delay: 0.8 }}
                              />
                            </div>
                            <div className="mt-2 text-sm font-semibold">40-60%</div>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {activeChart === 'investment' && (
                      <div>
                        <h3 className="text-2xl font-bold mb-3">Investment Requirements</h3>
                        <p className="mb-4">
                          Implementation of our full strategy requires phased investment:
                        </p>
                        <div className="space-y-4">
                          <div>
                            <div className="flex justify-between mb-1">
                              <span className="font-medium">Phase 1</span>
                              <span className="font-medium">$150,000-250,000</span>
                            </div>
                            <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
                              <motion.div 
                                className="h-full bg-gradient-to-r from-blue-400 to-blue-600"
                                initial={{ width: 0 }}
                                animate={{ width: '20%' }}
                                transition={{ duration: 1, delay: 0.2 }}
                              />
                            </div>
                          </div>
                          
                          <div>
                            <div className="flex justify-between mb-1">
                              <span className="font-medium">Phase 2</span>
                              <span className="font-medium">$225,000-350,000</span>
                            </div>
                            <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
                              <motion.div 
                                className="h-full bg-gradient-to-r from-green-400 to-green-600"
                                initial={{ width: 0 }}
                                animate={{ width: '30%' }}
                                transition={{ duration: 1, delay: 0.4 }}
                              />
                            </div>
                          </div>
                          
                          <div>
                            <div className="flex justify-between mb-1">
                              <span className="font-medium">Phase 3</span>
                              <span className="font-medium">$200,000-400,000</span>
                            </div>
                            <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
                              <motion.div 
                                className="h-full bg-gradient-to-r from-purple-400 to-purple-600"
                                initial={{ width: 0 }}
                                animate={{ width: '30%' }}
                                transition={{ duration: 1, delay: 0.6 }}
                              />
                            </div>
                          </div>
                          
                          <div>
                            <div className="flex justify-between mb-1">
                              <span className="font-medium">Phase 4</span>
                              <span className="font-medium">$150,000-350,000</span>
                            </div>
                            <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
                              <motion.div 
                                className="h-full bg-gradient-to-r from-orange-400 to-orange-600"
                                initial={{ width: 0 }}
                                animate={{ width: '20%' }}
                                transition={{ duration: 1, delay: 0.8 }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="mt-8">
                  <Link href="/implementation/financial" className="btn btn-primary">View Detailed Financial Projections</Link>
                </div>
              </section>
            </FadeIn>
          </article>
        </div>
      </div>
    </>
  );
} 