'use client';

import React from 'react';
import Link from 'next/link';

export default function MobileRecordingPage() {
  const servicePackages = [
    {
      name: 'Event Recording',
      description: 'Professional audio capture for live events, conferences, and performances',
      features: [
        'Multi-track recording up to 32 channels',
        'Redundant recording systems',
        'Live sound reinforcement available',
        'Professional mixing and mastering',
        'Quick turnaround options',
        'Delivery in multiple formats'
      ],
      startingPrice: '$750',
      image: '/images/mobile-recording/event-recording.jpg'
    },
    {
      name: 'Location Recording',
      description: 'Studio-quality recording in any environment for music, film, and broadcast',
      features: [
        'Acoustically optimized mobile setup',
        'Premium microphone selection',
        'Full monitoring capabilities',
        'Multiple isolated spaces possible',
        'Professional crew included',
        'Same-day rough mix delivery'
      ],
      startingPrice: '$950',
      image: '/images/mobile-recording/location-recording.jpg'
    },
    {
      name: 'Podcast Production',
      description: 'Complete podcast recording solution for single or multi-person shows',
      features: [
        'Professional podcast equipment',
        'Remote guest integration',
        'Live streaming capability',
        'Episode editing and mixing',
        'Show notes and timestamps',
        'Distribution preparation'
      ],
      startingPrice: '$450',
      image: '/images/mobile-recording/podcast-recording.jpg'
    }
  ];

  const equipmentHighlights = [
    {
      category: 'Recording Systems',
      items: [
        {
          name: 'Sound Devices Scorpio',
          description: '32-channel premium mobile recorder',
          image: '/images/mobile-recording/scorpio.jpg'
        },
        {
          name: 'Pro Tools HDX Mobile',
          description: 'Professional recording and monitoring system',
          image: '/images/mobile-recording/protools-hdx.jpg'
        },
        {
          name: 'Zoom F8n Pro',
          description: 'Backup recording system',
          image: '/images/mobile-recording/zoom-f8n.jpg'
        }
      ]
    },
    {
      category: 'Microphones',
      items: [
        {
          name: 'Neumann KM184 Set',
          description: 'Premium small-diaphragm condensers',
          image: '/images/mobile-recording/km184.jpg'
        },
        {
          name: 'DPA 4099 Series',
          description: 'Instrument-specific microphones',
          image: '/images/mobile-recording/dpa-4099.jpg'
        },
        {
          name: 'Shure Axient Digital',
          description: 'Professional wireless systems',
          image: '/images/mobile-recording/axient.jpg'
        }
      ]
    },
    {
      category: 'Monitoring',
      items: [
        {
          name: 'Genelec 8351B',
          description: 'Point source monitors for critical listening',
          image: '/images/mobile-recording/genelec.jpg'
        },
        {
          name: 'Sennheiser HD 800S',
          description: 'Reference headphone monitoring',
          image: '/images/mobile-recording/hd800s.jpg'
        },
        {
          name: 'DirectOut PRODIGY.MP',
          description: 'Mobile monitoring system',
          image: '/images/mobile-recording/directout.jpg'
        }
      ]
    }
  ];

  const useCases = [
    {
      title: 'Live Music Events',
      description: 'From intimate jazz clubs to outdoor festivals, capture every performance with pristine audio quality.',
      image: '/images/mobile-recording/live-music.jpg',
      benefits: [
        'Multi-track recording for post-production flexibility',
        'Redundant systems ensure no moments are lost',
        'Integration with live sound systems',
        'Experienced crew familiar with live dynamics'
      ]
    },
    {
      title: 'Corporate Events',
      description: 'Professional audio recording for conferences, seminars, and corporate presentations.',
      image: '/images/mobile-recording/corporate.jpg',
      benefits: [
        'Crystal clear speech capture',
        'Multiple presenter support',
        'Audience question integration',
        'Quick turnaround for internal distribution'
      ]
    },
    {
      title: 'Podcast Production',
      description: 'Studio-quality podcast recording in your preferred location.',
      image: '/images/mobile-recording/podcast.jpg',
      benefits: [
        'Professional equipment setup',
        'Remote guest integration',
        'Live streaming capability',
        'Complete post-production services'
      ]
    },
    {
      title: 'Location Music Recording',
      description: 'Bring the studio to unique acoustic spaces for distinctive recordings.',
      image: '/images/mobile-recording/location-music.jpg',
      benefits: [
        'Acoustic space optimization',
        'Premium microphone selection',
        'Full monitoring capabilities',
        'Professional engineering team'
      ]
    }
  ];

  const processSteps = [
    {
      title: 'Initial Consultation',
      description: 'Discuss your project needs, location constraints, and technical requirements',
      icon: '💬'
    },
    {
      title: 'Site Survey',
      description: 'Evaluate the recording location and plan equipment and setup logistics',
      icon: '📍'
    },
    {
      title: 'Custom Solution Design',
      description: 'Create a tailored recording solution for your specific needs',
      icon: '✏️'
    },
    {
      title: 'Setup and Testing',
      description: 'Professional installation and thorough testing of all systems',
      icon: '🔧'
    },
    {
      title: 'Recording Session',
      description: 'Expert operation and monitoring throughout your event or session',
      icon: '🎵'
    },
    {
      title: 'Post-Production',
      description: 'Professional mixing, mastering, and delivery in your preferred format',
      icon: '🎚️'
    }
  ];

  const faqs = [
    {
      question: 'How much space do you need for setup?',
      answer: 'Space requirements vary by project. A typical setup needs about 100 square feet for equipment and crew, but we can adapt to smaller spaces when necessary.'
    },
    {
      question: 'What power requirements do you have?',
      answer: 'We typically need access to 2-3 dedicated 20-amp circuits. For locations with limited power, we can provide silent running battery/generator solutions.'
    },
    {
      question: 'How long does setup take?',
      answer: 'Setup time varies by project complexity. Small sessions might take 1-2 hours, while large events could require 4-6 hours or more. We always arrive with plenty of time for testing.'
    },
    {
      question: 'Can you handle outdoor recordings?',
      answer: 'Yes, we have extensive experience with outdoor recording and bring appropriate weather protection for all equipment. We also monitor weather forecasts and have contingency plans.'
    },
    {
      question: 'What about backup systems?',
      answer: 'All critical systems have redundant backups. We use multiple recording devices and maintain backup power supplies for uninterrupted operation.'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="relative h-96 bg-gradient-to-r from-primary-dark to-primary-DEFAULT overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/page-banners/mobile-recording-banner.jpg"
            alt="Mobile Recording Services"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="container mx-auto px-4 h-full flex flex-col justify-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Mobile Recording Services</h1>
          <p className="text-xl md:text-2xl max-w-3xl">
            Professional audio recording solutions that bring studio quality to any location
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
                  <a href="#packages" className="text-primary-DEFAULT hover:text-primary-dark">
                    Service Packages
                  </a>
                </li>
                <li>
                  <a href="#equipment" className="text-primary-DEFAULT hover:text-primary-dark">
                    Equipment
                  </a>
                </li>
                <li>
                  <a href="#use-cases" className="text-primary-DEFAULT hover:text-primary-dark">
                    Use Cases
                  </a>
                </li>
                <li>
                  <a href="#process" className="text-primary-DEFAULT hover:text-primary-dark">
                    Our Process
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
                  <Link href="/services/equipment" className="text-primary-DEFAULT hover:text-primary-dark">
                    Equipment Rental
                  </Link>
                </li>
                <li>
                  <Link href="/services/post-production" className="text-primary-DEFAULT hover:text-primary-dark">
                    Post-Production
                  </Link>
                </li>
                <li>
                  <Link href="/services/consulting" className="text-primary-DEFAULT hover:text-primary-dark">
                    Technical Consulting
                  </Link>
                </li>
              </ul>

              <div className="mt-8 p-4 bg-primary-DEFAULT text-white rounded-lg">
                <h4 className="font-bold text-lg mb-2">Ready to get started?</h4>
                <p className="mb-4">Let's discuss your mobile recording needs and create a custom solution.</p>
                <Link 
                  href="/contact?subject=Mobile Recording Inquiry" 
                  className="block text-center bg-white text-primary-DEFAULT hover:bg-gray-100 py-2 px-4 rounded-lg transition-colors font-medium"
                >
                  Schedule Consultation
                </Link>
              </div>
            </div>
          </aside>

          {/* Content Area */}
          <div className="lg:w-3/4">
            {/* Introduction Section */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-6">Professional Mobile Recording Solutions</h2>
              
              <div className="prose max-w-none text-gray-700">
                <p className="mb-4">
                  Elemental Sound's Mobile Recording Services bring professional studio quality to any location. 
                  Whether you're capturing a live performance, producing a podcast, or recording in a unique acoustic space, 
                  our experienced team and state-of-the-art equipment ensure exceptional results.
                </p>
                <p className="mb-4">
                  We understand that every project has unique requirements, which is why we offer customizable solutions 
                  that adapt to your specific needs. Our mobile recording capabilities combine premium equipment, 
                  experienced personnel, and proven workflows to deliver outstanding audio quality in any environment.
                </p>
                <p className="mb-6">
                  From intimate acoustic sessions to large-scale live events, we handle all technical aspects of the 
                  recording process, allowing you to focus on the creative elements of your project.
                </p>
              </div>

              <div className="bg-light-DEFAULT p-6 rounded-lg mt-8">
                <h3 className="text-xl font-bold mb-4">Service Highlights</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-4xl mb-2">32+</div>
                    <p className="text-gray-700">Simultaneous recording channels</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl mb-2">100%</div>
                    <p className="text-gray-700">Redundant systems</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl mb-2">24/7</div>
                    <p className="text-gray-700">Technical support</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Service Packages Section */}
            <section id="packages" className="scroll-mt-6 mb-16">
              <h2 className="text-3xl font-bold mb-8">Service Packages</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {servicePackages.map((pkg, index) => (
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
                        Starting at {pkg.startingPrice}
                      </div>
                      <h4 className="font-semibold mb-2">Includes:</h4>
                      <ul className="space-y-2 mb-6">
                        {pkg.features.map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-primary-DEFAULT mr-2">•</span>
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Link 
                        href="/contact?subject=Mobile Recording Package Inquiry" 
                        className="block text-center bg-primary-DEFAULT hover:bg-primary-dark text-white py-2 px-4 rounded-lg transition-colors"
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Equipment Section */}
            <section id="equipment" className="scroll-mt-6 mb-16">
              <h2 className="text-3xl font-bold mb-8">Professional Equipment</h2>
              
              <div className="space-y-12">
                {equipmentHighlights.map((category, index) => (
                  <div key={index}>
                    <h3 className="text-2xl font-bold mb-6">{category.category}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {category.items.map((item, i) => (
                        <div key={i} className="bg-white rounded-lg shadow-md overflow-hidden">
                          {item.image && (
                            <img 
                              src={item.image} 
                              alt={item.name}
                              className="w-full h-48 object-cover"
                            />
                          )}
                          <div className="p-4">
                            <h4 className="font-bold mb-2">{item.name}</h4>
                            <p className="text-gray-700">{item.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Use Cases Section */}
            <section id="use-cases" className="scroll-mt-6 mb-16">
              <h2 className="text-3xl font-bold mb-8">Use Cases</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {useCases.map((useCase, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                    {useCase.image && (
                      <img 
                        src={useCase.image} 
                        alt={useCase.title}
                        className="w-full h-48 object-cover"
                      />
                    )}
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2">{useCase.title}</h3>
                      <p className="text-gray-700 mb-4">{useCase.description}</p>
                      <h4 className="font-semibold mb-2">Key Benefits:</h4>
                      <ul className="space-y-2">
                        {useCase.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-primary-DEFAULT mr-2">•</span>
                            <span className="text-gray-700">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Process Section */}
            <section id="process" className="scroll-mt-6 mb-16">
              <h2 className="text-3xl font-bold mb-8">Our Process</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {processSteps.map((step, index) => (
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
              <h2 className="text-3xl font-bold mb-4">Ready to Record?</h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Let's discuss your project and create a custom recording solution that meets your needs.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  href="/contact?subject=Mobile Recording Inquiry" 
                  className="px-6 py-3 bg-white text-primary-DEFAULT hover:bg-gray-100 rounded-lg transition-colors font-medium"
                >
                  Schedule Consultation
                </Link>
                <Link 
                  href="/services/equipment" 
                  className="px-6 py-3 bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-DEFAULT rounded-lg transition-colors font-medium"
                >
                  View Equipment List
                </Link>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
} 