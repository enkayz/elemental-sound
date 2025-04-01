'use client';

import React from 'react';
import Link from 'next/link';

export default function PostProductionPage() {
  const services = [
    {
      name: 'Mixing',
      description: 'Professional mixing services for music, podcasts, and audio content',
      features: [
        'Multi-track session organization',
        'Advanced processing and effects',
        'Spatial audio mixing',
        'Stem delivery options',
        'Multiple revision rounds',
        'Reference track matching'
      ],
      startingPrice: '$350/song',
      image: '/images/post-production/mixing.jpg'
    },
    {
      name: 'Mastering',
      description: 'Final polish and optimization for all distribution platforms',
      features: [
        'High-end analog and digital processing',
        'Loudness normalization',
        'Format-specific optimization',
        'Quality assurance',
        'Multiple format delivery',
        'Archival preparation'
      ],
      startingPrice: '$150/track',
      image: '/images/post-production/mastering.jpg'
    },
    {
      name: 'Sound Design',
      description: 'Custom sound creation and audio enhancement for media',
      features: [
        'Original sound creation',
        'Foley recording',
        'Sound library access',
        'Synthesis and processing',
        'Format conversion',
        'Audio restoration'
      ],
      startingPrice: '$75/hour',
      image: '/images/post-production/sound-design.jpg'
    },
    {
      name: 'Podcast Production',
      description: 'Complete post-production for podcast episodes and series',
      features: [
        'Episode editing',
        'Music integration',
        'Noise reduction',
        'Level balancing',
        'Show notes creation',
        'Distribution preparation'
      ],
      startingPrice: '$200/episode',
      image: '/images/post-production/podcast.jpg'
    }
  ];

  const facilities = [
    {
      name: 'Mix Room A',
      description: 'Primary mixing and mastering suite',
      equipment: [
        'Solid State Logic AWS 948',
        'PMC MB2 XBD-A Monitors',
        'Bricasti M7 Reverb',
        'Extensive Analog Outboard',
        'Pro Tools HDX System',
        'Dolby Atmos Certified'
      ],
      image: '/images/post-production/mix-room-a.jpg'
    },
    {
      name: 'Mix Room B',
      description: 'Secondary mixing and editing suite',
      equipment: [
        'Avid S4 Control Surface',
        'Genelec 8351B Monitors',
        'UAD Processing Suite',
        'Digital Outboard Rack',
        'Pro Tools HDX System',
        'Surround Sound Setup'
      ],
      image: '/images/post-production/mix-room-b.jpg'
    },
    {
      name: 'Mastering Suite',
      description: 'Dedicated mastering environment',
      equipment: [
        'Maselec Master Console',
        'Amphion Two18 Monitors',
        'Premium Analog Chain',
        'Digital Processing Suite',
        'Reference Monitoring Options',
        'Format Conversion Tools'
      ],
      image: '/images/post-production/mastering-suite.jpg'
    }
  ];

  const workflow = [
    {
      title: 'Project Planning',
      description: 'Define goals, timeline, and deliverables',
      icon: '📋'
    },
    {
      title: 'File Transfer',
      description: 'Secure upload of session files and materials',
      icon: '📤'
    },
    {
      title: 'Session Prep',
      description: 'Organization and technical preparation',
      icon: '🗂️'
    },
    {
      title: 'Initial Processing',
      description: 'First pass of mixing or mastering',
      icon: '🎚️'
    },
    {
      title: 'Client Review',
      description: 'Feedback and revision notes',
      icon: '👂'
    },
    {
      title: 'Refinement',
      description: 'Implementation of revisions',
      icon: '🔧'
    },
    {
      title: 'Final Delivery',
      description: 'Delivery in all required formats',
      icon: '✨'
    },
    {
      title: 'Archive',
      description: 'Secure backup of project files',
      icon: '💾'
    }
  ];

  const deliveryFormats = [
    {
      name: 'Digital Streaming',
      formats: [
        'WAV 24bit/48kHz',
        'MP3 320kbps',
        'AAC 256kbps',
        'Loudness normalized versions'
      ],
      icon: '🎵'
    },
    {
      name: 'Physical Media',
      formats: [
        'CD-ready masters',
        'Vinyl pre-masters',
        'DDP images',
        'Reference CDs'
      ],
      icon: '💿'
    },
    {
      name: 'Video/Film',
      formats: [
        'Broadcast WAV',
        'Stem mixes',
        'Surround mixes',
        'Dolby Atmos'
      ],
      icon: '🎬'
    },
    {
      name: 'Archive',
      formats: [
        'Session files',
        'Raw tracks',
        'Processing chains',
        'Project documentation'
      ],
      icon: '📦'
    }
  ];

  const faqs = [
    {
      question: 'What do I need to provide for mixing?',
      answer: 'For mixing, we need your multi-track session files (WAV or AIFF, 24-bit preferred), tempo/grid information, and reference tracks. We accept most DAW session formats and can work with consolidated or tracked-out sessions.'
    },
    {
      question: 'How many revisions are included?',
      answer: 'Our standard packages include two rounds of revisions. Additional revision rounds can be arranged at an hourly rate. We work closely with you to ensure the final product meets your vision.'
    },
    {
      question: 'What are your turnaround times?',
      answer: 'Standard turnaround for mixing is 5-7 business days per song, and 2-3 days for mastering. Rush delivery is available for an additional fee. Project timelines are always discussed and agreed upon during the planning phase.'
    },
    {
      question: 'Do you offer remote sessions?',
      answer: 'Yes, we offer remote attendance options for all services. Using high-quality streaming and communication tools, you can participate in real-time from anywhere in the world.'
    },
    {
      question: 'How do you handle file delivery?',
      answer: 'We use secure cloud storage for all file transfers, supporting files up to 100GB. All deliveries include both high-resolution files and distribution-ready formats.'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="relative h-96 bg-gradient-to-r from-primary-dark to-primary-DEFAULT overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/page-banners/post-production-banner.jpg"
            alt="Post-Production Services"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="container mx-auto px-4 h-full flex flex-col justify-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Post-Production Services</h1>
          <p className="text-xl md:text-2xl max-w-3xl">
            Professional mixing, mastering, and sound design services for music and media
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Sidebar */}
          <aside className="lg:w-1/4">
            <div className="bg-light-DEFAULT p-6 rounded-lg shadow-md mb-8 sticky top-6">
              <h3 className="text-xl font-bold border-b border-gray-200 pb-3 mb-4">Quick Navigation</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#services" className="text-primary-DEFAULT hover:text-primary-dark">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#facilities" className="text-primary-DEFAULT hover:text-primary-dark">
                    Facilities
                  </a>
                </li>
                <li>
                  <a href="#workflow" className="text-primary-DEFAULT hover:text-primary-dark">
                    Workflow
                  </a>
                </li>
                <li>
                  <a href="#formats" className="text-primary-DEFAULT hover:text-primary-dark">
                    Delivery Formats
                  </a>
                </li>
                <li>
                  <a href="#faqs" className="text-primary-DEFAULT hover:text-primary-dark">
                    FAQs
                  </a>
                </li>
              </ul>

              <h3 className="text-xl font-bold border-b border-gray-200 pb-3 mb-4 mt-8">Related Services</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/services/studio" className="text-primary-DEFAULT hover:text-primary-dark">
                    Studio Recording
                  </Link>
                </li>
                <li>
                  <Link href="/services/mobile-recording" className="text-primary-DEFAULT hover:text-primary-dark">
                    Mobile Recording
                  </Link>
                </li>
                <li>
                  <Link href="/services/consulting" className="text-primary-DEFAULT hover:text-primary-dark">
                    Production Consulting
                  </Link>
                </li>
              </ul>

              <div className="mt-8 p-4 bg-primary-DEFAULT text-white rounded-lg">
                <h4 className="font-bold text-lg mb-2">Ready to elevate your sound?</h4>
                <p className="mb-4">Let's discuss your project and create a custom post-production plan.</p>
                <Link 
                  href="/contact?subject=Post-Production Inquiry" 
                  className="block text-center bg-white text-primary-DEFAULT hover:bg-gray-100 py-2 px-4 rounded-lg transition-colors font-medium"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </aside>

          {/* Content Area */}
          <div className="lg:w-3/4">
            {/* Introduction Section */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-6">Professional Post-Production Solutions</h2>
              
              <div className="prose max-w-none text-gray-700">
                <p className="mb-4">
                  Elemental Sound's post-production services combine state-of-the-art facilities, experienced 
                  engineers, and premium equipment to deliver exceptional results for any audio project. Whether 
                  you're finishing a single track or an entire album, our team ensures your vision is realized 
                  with the highest quality standards.
                </p>
                <p className="mb-4">
                  Our comprehensive approach integrates technical excellence with creative insight, offering 
                  services ranging from mixing and mastering to sound design and podcast production. We work 
                  closely with each client to understand their goals and deliver results that exceed expectations.
                </p>
                <p className="mb-6">
                  With multiple specialized rooms and a wide array of analog and digital tools, we provide the 
                  flexibility to handle any project while maintaining consistent, professional results.
                </p>
              </div>

              <div className="bg-light-DEFAULT p-6 rounded-lg mt-8">
                <h3 className="text-xl font-bold mb-4">Service Highlights</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-4xl mb-2">500+</div>
                    <p className="text-gray-700">Projects completed annually</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl mb-2">20+</div>
                    <p className="text-gray-700">Years of experience</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl mb-2">24/7</div>
                    <p className="text-gray-700">Project support</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Services Section */}
            <section id="services" className="scroll-mt-6 mb-16">
              <h2 className="text-3xl font-bold mb-8">Post-Production Services</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {services.map((service, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                    {service.image && (
                      <img 
                        src={service.image} 
                        alt={service.name}
                        className="w-full h-48 object-cover"
                      />
                    )}
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                      <p className="text-gray-700 mb-4">{service.description}</p>
                      <div className="text-lg font-semibold text-primary-DEFAULT mb-4">
                        Starting at {service.startingPrice}
                      </div>
                      <h4 className="font-semibold mb-2">Includes:</h4>
                      <ul className="space-y-2 mb-6">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-primary-DEFAULT mr-2">•</span>
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Link 
                        href="/contact?subject=Post-Production Service Inquiry" 
                        className="block text-center bg-primary-DEFAULT hover:bg-primary-dark text-white py-2 px-4 rounded-lg transition-colors"
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Facilities Section */}
            <section id="facilities" className="scroll-mt-6 mb-16">
              <h2 className="text-3xl font-bold mb-8">Our Facilities</h2>
              
              <div className="space-y-8">
                {facilities.map((facility, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="flex flex-col md:flex-row">
                      {facility.image && (
                        <div className="md:w-1/3">
                          <img 
                            src={facility.image} 
                            alt={facility.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}
                      <div className="p-6 md:w-2/3">
                        <h3 className="text-2xl font-bold mb-2">{facility.name}</h3>
                        <p className="text-gray-700 mb-4">{facility.description}</p>
                        <h4 className="font-semibold mb-2">Key Equipment:</h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {facility.equipment.map((item, i) => (
                            <li key={i} className="flex items-start">
                              <span className="text-primary-DEFAULT mr-2">•</span>
                              <span className="text-gray-700">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Workflow Section */}
            <section id="workflow" className="scroll-mt-6 mb-16">
              <h2 className="text-3xl font-bold mb-8">Our Workflow</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {workflow.map((step, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md p-6 relative">
                    <div className="absolute top-4 left-4 w-8 h-8 bg-primary-DEFAULT text-white rounded-full flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                    <div className="ml-6">
                      <div className="text-3xl mb-4 mt-2">{step.icon}</div>
                      <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                      <p className="text-gray-700">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Delivery Formats Section */}
            <section id="formats" className="scroll-mt-6 mb-16">
              <h2 className="text-3xl font-bold mb-8">Delivery Formats</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {deliveryFormats.map((format, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md p-6">
                    <div className="text-4xl mb-4">{format.icon}</div>
                    <h3 className="text-xl font-bold mb-4">{format.name}</h3>
                    <ul className="space-y-2">
                      {format.formats.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-primary-DEFAULT mr-2">•</span>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQ Section */}
            <section id="faqs" className="scroll-mt-6 mb-16">
              <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
              
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-xl font-bold mb-2">{faq.question}</h3>
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* CTA Section */}
            <section className="bg-primary-DEFAULT text-white p-8 rounded-lg text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Perfect Your Sound?</h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Let's discuss your project and create a custom post-production plan that meets your needs.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  href="/contact?subject=Post-Production Inquiry" 
                  className="px-6 py-3 bg-white text-primary-DEFAULT hover:bg-gray-100 rounded-lg transition-colors font-medium"
                >
                  Start Your Project
                </Link>
                <Link 
                  href="/services/membership" 
                  className="px-6 py-3 bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-DEFAULT rounded-lg transition-colors font-medium"
                >
                  View Membership Benefits
                </Link>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
} 