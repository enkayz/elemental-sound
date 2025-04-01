'use client';

import React from 'react';
import Link from 'next/link';

export default function StudioRecordingPage() {
  const studios = [
    {
      name: 'Studio A',
      description: 'Professional tracking room with large live room and isolation booths',
      features: [
        'Control room: 500 sq ft with SSL AWS 948 Console',
        'Live room: 800 sq ft with variable acoustics',
        'Three isolation booths for maximum separation',
        'Comprehensive microphone collection',
        'Variety of instruments including grand piano',
        'Premium outboard processing gear',
        'Professional engineer included'
      ],
      rate: '$150/hour',
      memberRate: 'Included in Professional/Partner tiers',
      image: '/wiki-images/studio-a.jpg'
    },
    {
      name: 'Studio B',
      description: 'Mid-sized hybrid studio with digital workflow and select analog equipment',
      features: [
        'Combined control/live room: 400 sq ft',
        'Isolated vocal/instrument booth',
        'Avid S3 Control Surface',
        'Pro Tools Ultimate & multiple DAWs',
        'Comprehensive plugin collection',
        'Selected outboard gear & preamps',
        'Engineer optional (+$50/hr)'
      ],
      rate: '$85/hour',
      memberRate: 'Included in Producer/Professional/Partner tiers',
      image: '/wiki-images/studio-b.jpg'
    },
    {
      name: 'Studio C',
      description: 'Compact production suite ideal for vocals, podcasts, and content creation',
      features: [
        'Production suite: 200 sq ft',
        'Treated acoustic environment',
        'Focused microphone selection',
        'MIDI production tools & controllers',
        'Audio interface & monitoring setup',
        'Podcast/voiceover configuration available',
        'Self-operated (engineer available for +$50/hr)'
      ],
      rate: '$60/hour',
      memberRate: 'Included in all membership tiers',
      image: '/wiki-images/studio-c.jpg'
    }
  ];

  const recordingPackages = [
    {
      name: 'Single Recording Session',
      description: 'One-time recording session for specific project needs',
      includes: [
        'Studio time based on your selected studio',
        'Basic setup and tear down time included',
        'Session files delivered via secure download',
        'Up to 30 days of project storage',
        'Engineering services available (included in Studio A)',
        'Basic editing and consolidated rough mix'
      ],
      rate: 'Starting at $60/hour',
      image: '/wiki-images/recording-packages/single-session.jpg'
    },
    {
      name: 'Album Package',
      description: 'Comprehensive package for full album productions',
      includes: [
        '40 hours of studio time (mix of Studios A & B)',
        'Professional engineering included',
        'Basic editing and consolidated session preparation',
        'Project management and scheduling assistance',
        'Extended project storage (90 days)',
        'Mix preparation and consulting',
        '10% discount on mixing and mastering services'
      ],
      rate: '$3,600 (save 25% over hourly rate)',
      image: '/wiki-images/recording-packages/album-package.jpg'
    },
    {
      name: 'Podcast Series',
      description: 'Efficient solution for podcast production',
      includes: [
        '4-hour blocks in Studio C',
        'Podcast-specific equipment setup',
        'Basic editing and episode preparation',
        'Episode storage and management',
        'Intro/outro integration',
        'Guidance on publishing workflow',
        'Remote guest integration available'
      ],
      rate: '$199 per 4-hour block',
      image: '/wiki-images/recording-packages/podcast-package.jpg'
    },
    {
      name: 'Demo Package',
      description: 'Affordable solution for artists developing their material',
      includes: [
        '8 hours in Studio B or C',
        'Focus on capturing 3-4 songs in demo quality',
        'Basic editing and simple mixing',
        'Consolidated files for future production',
        'Consultation on next development steps',
        'Quick turnaround (48-hour delivery)'
      ],
      rate: '$499 (inclusive of basic editing)',
      image: '/wiki-images/recording-packages/demo-package.jpg'
    }
  ];

  const availableGear = [
    {
      category: 'Microphones',
      items: [
        'Neumann U87, U47 FET, KM184 pair',
        'AKG C414, C451B pair',
        'Shure SM7B, SM57, SM58',
        'Royer R-121, R-101 pair',
        'Coles 4038 pair',
        'DPA 4099 series',
        'Earthworks piano system'
      ]
    },
    {
      category: 'Outboard Gear',
      items: [
        'Neve 1073 preamps (4 channels)',
        'API 512c preamps (4 channels)',
        'Universal Audio LA-2A compressors (2)',
        'Empirical Labs Distressor (2)',
        'Lexicon PCM96 reverb',
        'Bricasti M7 reverb',
        'Tube-Tech CL1B compressor'
      ]
    },
    {
      category: 'Instruments',
      items: [
        'Yamaha C7 grand piano',
        'Hammond B3 organ with Leslie',
        'Fender Rhodes Mark I',
        'Nord Stage 3',
        'Fender, Gibson, and Taylor guitars',
        'Fender Precision & Jazz basses',
        'Various drum kits and percussion'
      ]
    },
    {
      category: 'Digital Systems',
      items: [
        'Pro Tools HDX systems',
        'Logic Pro X',
        'Ableton Live Suite',
        'Universal Audio UAD systems',
        'Complete plugin collection',
        'Avid S3 and Artist control surfaces',
        'Dante networking infrastructure'
      ]
    }
  ];

  const additionalServices = [
    {
      name: 'Session Musicians',
      description: 'Professional players available across all instruments',
      rate: 'Starting at $250/session per musician'
    },
    {
      name: 'Vocal Production',
      description: 'Specialized vocal coaching and production during recording',
      rate: '$75/hour (in addition to studio time)'
    },
    {
      name: 'Arrangement Services',
      description: 'Professional arrangement consultation and services',
      rate: 'Starting at $350 per song'
    },
    {
      name: 'Production Consulting',
      description: 'Expert guidance on your project from experienced producers',
      rate: '$100/hour'
    },
    {
      name: 'Remote Session Management',
      description: 'Coordination of remote recording contributions to your project',
      rate: 'Starting at $200 per session'
    },
    {
      name: 'Pre-Production Planning',
      description: 'Structured preparation to maximize your studio time',
      rate: '$350 for comprehensive pre-production package'
    }
  ];

  const studioFAQs = [
    {
      question: 'How do I book studio time?',
      answer: 'You can book studio time through our online portal, by phone, or by email. For complex sessions, we recommend scheduling a brief consultation call to ensure we understand your needs.'
    },
    {
      question: 'What should I bring to my session?',
      answer: 'Bring your instruments (unless using ours), any reference tracks, your session plan, and backups of any digital files you\'ll need. For multiple musicians, we recommend everyone bring headphones. Everything else is provided.'
    },
    {
      question: 'Do you provide engineers?',
      answer: 'Yes, professional engineers are available for all studios. Engineering is included in Studio A rates and optional for Studios B and C at an additional $50/hour. Members at higher tiers receive discounted or included engineering services.'
    },
    {
      question: 'What is your cancellation policy?',
      answer: 'Cancellations made more than 48 hours in advance receive a full refund. Cancellations within 48 hours are subject to a 50% cancellation fee. Rescheduling is free with 24 hours notice.'
    },
    {
      question: 'How long do you keep my session files?',
      answer: 'Standard storage is 30 days after your session. Extended storage is available for members and package clients. We recommend bringing a hard drive for immediate backups of your files.'
    },
    {
      question: 'Are membership discounts available?',
      answer: 'Yes, all members receive studio time included in their membership tier, plus discounted rates for additional time. View our membership page for complete details on studio access by tier.'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="relative h-96 bg-gradient-to-r from-primary-dark to-primary-DEFAULT overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/wiki-images/page-banners/studio-recording-banner.jpg"
            alt="Studio Recording"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="container mx-auto px-4 h-full flex flex-col justify-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Studio Recording Services</h1>
          <p className="text-xl md:text-2xl max-w-3xl">
            Professional recording facilities with world-class equipment and experienced engineers
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
                  <a href="#studios" className="text-primary-DEFAULT hover:text-primary-dark">
                    Our Studios
                  </a>
                </li>
                <li>
                  <a href="#packages" className="text-primary-DEFAULT hover:text-primary-dark">
                    Recording Packages
                  </a>
                </li>
                <li>
                  <a href="#gear" className="text-primary-DEFAULT hover:text-primary-dark">
                    Equipment List
                  </a>
                </li>
                <li>
                  <a href="#additional" className="text-primary-DEFAULT hover:text-primary-dark">
                    Additional Services
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
                  <Link href="/services/membership" className="text-primary-DEFAULT hover:text-primary-dark">
                    Studio Membership
                  </Link>
                </li>
                <li>
                  <Link href="/services/post-production" className="text-primary-DEFAULT hover:text-primary-dark">
                    Mixing & Mastering
                  </Link>
                </li>
                <li>
                  <Link href="/services/equipment" className="text-primary-DEFAULT hover:text-primary-dark">
                    Equipment Rental
                  </Link>
                </li>
              </ul>

              <div className="mt-8 p-4 bg-primary-DEFAULT text-white rounded-lg">
                <h4 className="font-bold text-lg mb-2">Ready to book your session?</h4>
                <p className="mb-4">Contact us to schedule your recording time or request a studio tour.</p>
                <Link 
                  href="/contact?subject=Studio Booking Inquiry" 
                  className="block text-center bg-white text-primary-DEFAULT hover:bg-gray-100 py-2 px-4 rounded-lg transition-colors font-medium"
                >
                  Book Studio Time
                </Link>
              </div>
            </div>
          </aside>

          {/* Content Area */}
          <div className="lg:w-3/4">
            {/* Introduction Section */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-6">Professional Recording Studios</h2>
              
              <div className="prose max-w-none text-gray-700">
                <p className="mb-4">
                  Elemental Sound offers state-of-the-art recording facilities designed to meet the needs of 
                  professional and emerging artists alike. Our three distinct studios provide options for projects 
                  of any size, from full band recordings to podcasts and voice overs.
                </p>
                <p className="mb-4">
                  Each studio is equipped with premium gear, acoustically optimized spaces, and backed by our 
                  team of experienced engineers. Whether you're recording a full album, producing demos, or 
                  developing content, our studios provide the perfect environment for your creative vision.
                </p>
                <p className="mb-6">
                  We offer both traditional hourly bookings and comprehensive packages designed for specific 
                  project types, as well as membership options for regular studio access at significant savings.
                </p>
              </div>

              <div className="bg-light-DEFAULT p-6 rounded-lg mt-8">
                <h3 className="text-xl font-bold mb-4">Studio Highlights</h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="text-4xl mb-2">3</div>
                    <p className="text-gray-700">Professional studios</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl mb-2">75+</div>
                    <p className="text-gray-700">Microphones</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl mb-2">20+</div>
                    <p className="text-gray-700">Years of experience</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl mb-2">24/7</div>
                    <p className="text-gray-700">Available for members</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Studios Section */}
            <section id="studios" className="scroll-mt-6 mb-16">
              <h2 className="text-3xl font-bold mb-8">Our Studios</h2>
              
              <div className="space-y-8">
                {studios.map((studio, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="aspect-video overflow-hidden">
                      <img 
                        src={studio.image} 
                        alt={studio.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-2xl font-bold mb-2">{studio.name}</h3>
                      <p className="text-gray-700 mb-6">{studio.description}</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <h4 className="text-lg font-semibold mb-3">Features & Equipment</h4>
                          <ul className="space-y-2">
                            {studio.features.map((feature, i) => (
                              <li key={i} className="flex items-start">
                                <span className="text-primary-DEFAULT mr-2">•</span>
                                <span className="text-gray-700">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="text-lg font-semibold mb-3">Rates</h4>
                          <div className="bg-light-DEFAULT p-4 rounded-lg mb-4">
                            <div className="font-semibold">Standard Rate:</div>
                            <div className="text-xl text-primary-DEFAULT font-bold">{studio.rate}</div>
                          </div>
                          <div className="bg-light-DEFAULT p-4 rounded-lg">
                            <div className="font-semibold">Membership Access:</div>
                            <div className="text-primary-DEFAULT">{studio.memberRate}</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex justify-center mt-4">
                        <Link 
                          href="/contact?subject=Studio Booking Inquiry" 
                          className="px-6 py-3 bg-primary-DEFAULT hover:bg-primary-dark text-white rounded-lg transition-colors font-medium"
                        >
                          Book {studio.name}
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Recording Packages Section */}
            <section id="packages" className="scroll-mt-6 mb-16">
              <h2 className="text-3xl font-bold mb-8">Recording Packages</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {recordingPackages.map((pkg, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                    {pkg.image && (
                      <img 
                        src={pkg.image} 
                        alt={pkg.name}
                        className="w-full h-48 object-cover"
                      />
                    )}
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2">{pkg.name}</h3>
                      <p className="text-gray-700 mb-4">{pkg.description}</p>
                      <div className="text-lg font-semibold text-primary-DEFAULT mb-4">
                        {pkg.rate}
                      </div>
                      <h4 className="font-semibold mb-2">Package Includes:</h4>
                      <ul className="space-y-2 mb-6">
                        {pkg.includes.map((item, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-primary-DEFAULT mr-2">•</span>
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                      <Link 
                        href="/contact?subject=Recording Package Inquiry" 
                        className="block text-center bg-primary-DEFAULT hover:bg-primary-dark text-white py-2 px-4 rounded-lg transition-colors"
                      >
                        Book This Package
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-6 bg-light-DEFAULT rounded-lg">
                <h3 className="text-xl font-bold mb-4">Custom Packages</h3>
                <p className="text-gray-700 mb-4">
                  Need something specific? We offer custom packages tailored to your project requirements. 
                  Whether you need specialized equipment, flexible scheduling, or unique production needs, 
                  our team can create a custom solution for you.
                </p>
                <Link 
                  href="/contact?subject=Custom Recording Package Inquiry"
                  className="inline-block bg-primary-DEFAULT hover:bg-primary-dark text-white py-2 px-6 rounded-lg transition-colors font-medium"
                >
                  Request Custom Package
                </Link>
              </div>
            </section>

            {/* Equipment Section */}
            <section id="gear" className="scroll-mt-6 mb-16">
              <h2 className="text-3xl font-bold mb-8">Equipment & Instruments</h2>
              
              <div className="prose max-w-none text-gray-700 mb-8">
                <p>
                  Our studios feature a comprehensive selection of professional recording equipment, outboard gear, 
                  and instruments. Below is a highlight of our available gear across all studios. For a complete inventory 
                  or questions about specific equipment, please contact us.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {availableGear.map((category, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-xl font-bold mb-4 border-b pb-2">{category.category}</h3>
                    <ul className="space-y-2">
                      {category.items.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-primary-DEFAULT mr-2">•</span>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 text-center">
                <Link 
                  href="/contact?subject=Equipment Inquiry" 
                  className="inline-block px-6 py-3 bg-light-DEFAULT hover:bg-gray-200 text-gray-800 rounded-lg transition-colors font-medium"
                >
                  Request Complete Equipment List
                </Link>
              </div>
            </section>

            {/* Additional Services Section */}
            <section id="additional" className="scroll-mt-6 mb-16">
              <h2 className="text-3xl font-bold mb-8">Additional Services</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {additionalServices.map((service, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                    <p className="text-gray-700 mb-4">{service.description}</p>
                    <div className="text-primary-DEFAULT font-semibold">{service.rate}</div>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQ Section */}
            <section id="faqs" className="scroll-mt-6 mb-16">
              <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
              
              <div className="space-y-4">
                {studioFAQs.map((faq, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-xl font-bold mb-2">{faq.question}</h3>
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* CTA Section */}
            <section className="bg-primary-DEFAULT text-white p-8 rounded-lg text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Start Recording?</h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Book your session today or schedule a tour to see our facilities in person.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  href="/contact?subject=Studio Booking" 
                  className="px-6 py-3 bg-white text-primary-DEFAULT hover:bg-gray-100 rounded-lg transition-colors font-medium"
                >
                  Book a Session
                </Link>
                <Link 
                  href="/contact?subject=Studio Tour Request" 
                  className="px-6 py-3 bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-DEFAULT rounded-lg transition-colors font-medium"
                >
                  Schedule a Tour
                </Link>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
} 