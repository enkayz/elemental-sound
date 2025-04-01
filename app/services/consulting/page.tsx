'use client';

import React from 'react';
import Link from 'next/link';

export default function ConsultingPage() {
  const consultingServices = [
    {
      name: 'Production Consulting',
      description: 'Expert guidance on creative and technical aspects of music and audio production',
      features: [
        'Project planning and workflow development',
        'Sonic direction and reference analysis',
        'Production technique optimization',
        'Technology integration strategies',
        'Team coordination and management',
        'Quality control and feedback systems'
      ],
      startingPrice: '$125/hour',
      image: '/images/consulting/production-consulting.jpg'
    },
    {
      name: 'Technical Consulting',
      description: 'Specialized technical expertise for studios, venues, and audio infrastructure',
      features: [
        'Studio design and acoustics',
        'System integration and signal flow',
        'Equipment specification and procurement',
        'Maintenance planning and troubleshooting',
        'Software ecosystem development',
        'Technical staff training'
      ],
      startingPrice: '$150/hour',
      image: '/images/consulting/technical-consulting.jpg'
    },
    {
      name: 'Business Development',
      description: 'Strategic guidance for audio businesses, studios, and creative professionals',
      features: [
        'Business model development',
        'Market positioning and branding',
        'Service offering optimization',
        'Client acquisition strategies',
        'Operational efficiency analysis',
        'Financial planning for audio businesses'
      ],
      startingPrice: '$175/hour',
      image: '/images/consulting/business-consulting.jpg'
    }
  ];

  const consultingPackages = [
    {
      name: 'Production Review',
      description: 'Comprehensive evaluation and guidance for existing audio projects',
      includes: [
        'Detailed analysis of current project state',
        'Identification of technical and creative issues',
        'Targeted recommendations for improvement',
        'Reference comparisons and benchmarking',
        'Follow-up review of implemented changes',
        '90-minute session with senior producer'
      ],
      price: '$375',
      image: '/images/consulting/production-review.jpg'
    },
    {
      name: 'Studio Design Package',
      description: 'Complete solution for new studio development or renovation',
      includes: [
        'Site assessment and measurement',
        'Acoustic treatment plan',
        'Equipment specification list',
        'Signal flow and integration design',
        'Budget optimization guidance',
        'Implementation oversight options',
        '3D visualization of proposed space'
      ],
      price: 'Starting at $2,500',
      image: '/images/consulting/studio-design.jpg'
    },
    {
      name: 'Career Strategy Session',
      description: 'Personalized roadmap for audio professionals and creators',
      includes: [
        'Portfolio/work review and analysis',
        'Market positioning strategy',
        'Skill development planning',
        'Networking and opportunity mapping',
        'Business model consultation',
        'Action plan development',
        'Follow-up accountability check'
      ],
      price: '$450',
      image: '/images/consulting/career-strategy.jpg'
    },
    {
      name: 'Audio Business Accelerator',
      description: 'Comprehensive program for audio business growth and optimization',
      includes: [
        'Business model assessment',
        'Market analysis and competitive positioning',
        'Service offering optimization',
        'Pricing strategy development',
        'Operational efficiency audit',
        'Marketing and client acquisition plan',
        'Six sessions over three months'
      ],
      price: '$3,600',
      image: '/images/consulting/business-accelerator.jpg'
    }
  ];

  const clientTypes = [
    {
      type: 'Independent Creators',
      description: 'Artists, producers, and content creators seeking to level up their productions',
      examples: [
        'Recording artists developing sonic identity',
        'Independent producers refining workflow',
        'Content creators enhancing audio quality',
        'Beatmakers transitioning to professional production',
      ]
    },
    {
      type: 'Studios & Facilities',
      description: 'Recording studios, venues, and audio facilities optimizing their operations',
      examples: [
        'New studio startups and build-outs',
        'Established studios seeking modernization',
        'Performance venues improving sound quality',
        'Educational facilities developing audio programs',
      ]
    },
    {
      type: 'Audio Businesses',
      description: 'Companies operating in the audio sector looking to grow and optimize',
      examples: [
        'Production companies scaling operations',
        'Rental businesses expanding inventory',
        'Post-production facilities streamlining workflow',
        'Audio service providers developing new offerings',
      ]
    },
    {
      type: 'Institutions & Organizations',
      description: 'Larger entities incorporating audio production into their operations',
      examples: [
        'Educational institutions developing facilities',
        'Media companies establishing audio standards',
        'Performing arts organizations improving sound',
        'Corporate entities creating audio content',
      ]
    }
  ];

  const consultantProfiles = [
    {
      name: 'Michael Reynolds',
      title: 'Lead Production Consultant',
      specialties: ['Album Production', 'Sonic Identity Development', 'Workflow Optimization'],
      experience: '25+ years as producer and engineer with multiple platinum records',
      image: '/images/team/michael-reynolds.jpg',
    },
    {
      name: 'Sophia Chen',
      title: 'Technical Systems Specialist',
      specialties: ['Studio Design', 'System Integration', 'Audio Networking'],
      experience: '18 years designing high-end studios and performance venues',
      image: '/images/team/sophia-chen.jpg',
    },
    {
      name: 'David Okafor',
      title: 'Business Strategy Advisor',
      specialties: ['Business Model Development', 'Market Positioning', 'Growth Strategy'],
      experience: '15 years growing audio businesses and studio operations',
      image: '/images/team/david-okafor.jpg',
    }
  ];

  const consultingFAQs = [
    {
      question: 'How do I know which consulting service is right for me?',
      answer: 'We start with a complimentary 20-minute discovery call to understand your needs and recommend the appropriate service. Our modular approach allows us to tailor consulting services to your specific situation and goals.'
    },
    {
      question: 'Do you offer remote consulting services?',
      answer: 'Yes, most of our consulting services are available remotely via video conferencing, shared screens, and collaborative tools. For technical consulting involving physical spaces, we offer a hybrid approach with both remote and on-site components.'
    },
    {
      question: 'What is your consulting process?',
      answer: 'Our process typically includes discovery (understanding your needs), assessment (analyzing your current situation), recommendation (developing actionable strategies), implementation support, and follow-up evaluation. The specific process varies by service type and is customized to each client.'
    },
    {
      question: 'How quickly can I expect results?',
      answer: 'Results timeline varies by project type. Production reviews typically yield immediate improvements, while business development may show results over 3-6 months. During our initial consultation, we\'ll establish realistic expectations and milestones for your specific situation.'
    },
    {
      question: 'Do you offer ongoing consulting relationships?',
      answer: 'Yes, many clients benefit from ongoing relationships through retainer arrangements or scheduled check-ins. These continuing relationships allow for iterative improvements, accountability, and adaptation as your projects or business evolves.'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="relative h-96 bg-gradient-to-r from-primary-dark to-primary-DEFAULT overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/page-banners/consulting-banner.jpg"
            alt="Audio Consulting Services"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="container mx-auto px-4 h-full flex flex-col justify-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Audio Consulting Services</h1>
          <p className="text-xl md:text-2xl max-w-3xl">
            Expert guidance for productions, facilities, and audio businesses at any stage
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
                    Consulting Services
                  </a>
                </li>
                <li>
                  <a href="#packages" className="text-primary-DEFAULT hover:text-primary-dark">
                    Consulting Packages
                  </a>
                </li>
                <li>
                  <a href="#clients" className="text-primary-DEFAULT hover:text-primary-dark">
                    Who We Work With
                  </a>
                </li>
                <li>
                  <a href="#consultants" className="text-primary-DEFAULT hover:text-primary-dark">
                    Our Consultants
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
                  <Link href="/services/equipment" className="text-primary-DEFAULT hover:text-primary-dark">
                    Equipment Rental
                  </Link>
                </li>
                <li>
                  <Link href="/services/education" className="text-primary-DEFAULT hover:text-primary-dark">
                    Education Platform
                  </Link>
                </li>
              </ul>

              <div className="mt-8 p-4 bg-primary-DEFAULT text-white rounded-lg">
                <h4 className="font-bold text-lg mb-2">Ready to transform your sound?</h4>
                <p className="mb-4">Schedule a free discovery call to discuss your specific needs.</p>
                <Link 
                  href="/contact?subject=Consulting Inquiry" 
                  className="block text-center bg-white text-primary-DEFAULT hover:bg-gray-100 py-2 px-4 rounded-lg transition-colors font-medium"
                >
                  Schedule Discovery Call
                </Link>
              </div>
            </div>
          </aside>

          {/* Content Area */}
          <div className="lg:w-3/4">
            {/* Introduction Section */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-6">Expert Audio Consulting</h2>
              
              <div className="prose max-w-none text-gray-700">
                <p className="mb-4">
                  Elemental Sound's consulting services connect you with industry experts who provide 
                  strategic guidance and practical solutions for audio production, technical systems, 
                  and business development. Our team brings decades of experience across all facets of 
                  the audio industry to help you achieve your creative and professional goals.
                </p>
                <p className="mb-4">
                  Whether you're an independent creator looking to elevate your productions, a studio 
                  owner optimizing your facility, or an audio business seeking growth strategies, our 
                  consulting services provide tailored expertise to address your specific challenges 
                  and opportunities.
                </p>
                <p className="mb-6">
                  We offer both hourly consulting services and structured packages designed for specific 
                  needs, all delivered by consultants with real-world experience and proven track records 
                  in the industry.
                </p>
              </div>

              <div className="bg-light-DEFAULT p-6 rounded-lg mt-8">
                <h3 className="text-xl font-bold mb-4">Our Consulting Approach</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl mb-2">🔍</div>
                    <h4 className="font-semibold mb-1">Personalized Analysis</h4>
                    <p className="text-gray-700">Detailed assessment of your specific situation</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl mb-2">🛠️</div>
                    <h4 className="font-semibold mb-1">Practical Solutions</h4>
                    <p className="text-gray-700">Actionable strategies with clear implementation steps</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl mb-2">📈</div>
                    <h4 className="font-semibold mb-1">Measurable Results</h4>
                    <p className="text-gray-700">Focused on tangible outcomes and growth</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Services Section */}
            <section id="services" className="scroll-mt-6 mb-16">
              <h2 className="text-3xl font-bold mb-8">Consulting Services</h2>
              
              <div className="space-y-8">
                {consultingServices.map((service, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="flex flex-col md:flex-row">
                      {service.image && (
                        <div className="md:w-1/3">
                          <img 
                            src={service.image} 
                            alt={service.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}
                      <div className="p-6 md:w-2/3">
                        <h3 className="text-2xl font-bold mb-2">{service.name}</h3>
                        <p className="text-gray-700 mb-4">{service.description}</p>
                        <div className="text-lg font-semibold text-primary-DEFAULT mb-4">
                          Starting at {service.startingPrice}
                        </div>
                        <h4 className="font-semibold mb-2">Key Focus Areas:</h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
                          {service.features.map((feature, i) => (
                            <li key={i} className="flex items-start">
                              <span className="text-primary-DEFAULT mr-2">•</span>
                              <span className="text-gray-700">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <Link 
                          href="/contact?subject=Consulting Service Inquiry" 
                          className="inline-block px-6 py-2 bg-primary-DEFAULT hover:bg-primary-dark text-white rounded-lg transition-colors"
                        >
                          Learn More
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Packages Section */}
            <section id="packages" className="scroll-mt-6 mb-16">
              <h2 className="text-3xl font-bold mb-8">Consulting Packages</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {consultingPackages.map((pkg, index) => (
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
                        {pkg.price}
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
                        href="/contact?subject=Consulting Package Inquiry" 
                        className="block text-center bg-primary-DEFAULT hover:bg-primary-dark text-white py-2 px-4 rounded-lg transition-colors"
                      >
                        Book This Package
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-6 bg-light-DEFAULT rounded-lg">
                <h3 className="text-xl font-bold mb-4">Custom Consulting Solutions</h3>
                <p className="text-gray-700 mb-4">
                  Need a tailored consulting solution? We create custom consulting packages based on your 
                  specific needs, timeline, and budget. Our modular approach allows us to combine elements 
                  from different service areas into a cohesive solution for your unique situation.
                </p>
                <Link 
                  href="/contact?subject=Custom Consulting Inquiry"
                  className="inline-block bg-primary-DEFAULT hover:bg-primary-dark text-white py-2 px-6 rounded-lg transition-colors font-medium"
                >
                  Discuss Custom Solution
                </Link>
              </div>
            </section>

            {/* Client Types Section */}
            <section id="clients" className="scroll-mt-6 mb-16">
              <h2 className="text-3xl font-bold mb-8">Who We Work With</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {clientTypes.map((clientType, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-xl font-bold mb-3">{clientType.type}</h3>
                    <p className="text-gray-700 mb-4">{clientType.description}</p>
                    <h4 className="font-semibold mb-2">Examples:</h4>
                    <ul className="space-y-1">
                      {clientType.examples.map((example, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-primary-DEFAULT mr-2">•</span>
                          <span className="text-gray-700">{example}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Consultant Profiles Section */}
            <section id="consultants" className="scroll-mt-6 mb-16">
              <h2 className="text-3xl font-bold mb-8">Our Consultants</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {consultantProfiles.map((consultant, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                    {consultant.image && (
                      <img 
                        src={consultant.image} 
                        alt={consultant.name}
                        className="w-full h-64 object-cover"
                      />
                    )}
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-1">{consultant.name}</h3>
                      <div className="text-primary-DEFAULT font-medium mb-3">{consultant.title}</div>
                      <h4 className="font-semibold mb-2">Specialties:</h4>
                      <ul className="mb-4">
                        {consultant.specialties.map((specialty, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-primary-DEFAULT mr-2">•</span>
                            <span className="text-gray-700">{specialty}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="text-gray-700">
                        <span className="font-semibold">Experience:</span> {consultant.experience}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQ Section */}
            <section id="faqs" className="scroll-mt-6 mb-16">
              <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
              
              <div className="space-y-4">
                {consultingFAQs.map((faq, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-xl font-bold mb-2">{faq.question}</h3>
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Case Studies Section */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8">Success Stories</h2>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-4">Featured Client Success Stories</h3>
                  <p className="text-gray-700 mb-6">
                    Explore how our consulting services have helped clients achieve their goals:
                  </p>
                  
                  <div className="space-y-4">
                    <Link href="/client-stories/riverfront-festival" className="block p-4 border border-gray-200 rounded-lg hover:bg-light-DEFAULT transition-colors">
                      <h4 className="font-bold text-primary-DEFAULT">Riverfront Festival</h4>
                      <p className="text-gray-700">Technical consulting transformed sound quality and operational efficiency</p>
                    </Link>
                    
                    <Link href="/client-stories/westside-records" className="block p-4 border border-gray-200 rounded-lg hover:bg-light-DEFAULT transition-colors">
                      <h4 className="font-bold text-primary-DEFAULT">Westside Records</h4>
                      <p className="text-gray-700">Business consulting helped scale operations and optimize production workflow</p>
                    </Link>
                    
                    <Link href="/client-stories/metro-audio-college" className="block p-4 border border-gray-200 rounded-lg hover:bg-light-DEFAULT transition-colors">
                      <h4 className="font-bold text-primary-DEFAULT">Metro Audio College</h4>
                      <p className="text-gray-700">Educational program development and facility modernization</p>
                    </Link>
                  </div>
                  
                  <div className="mt-6">
                    <Link 
                      href="/client-stories" 
                      className="text-primary-DEFAULT hover:text-primary-dark font-medium"
                    >
                      View All Client Stories →
                    </Link>
                  </div>
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="bg-primary-DEFAULT text-white p-8 rounded-lg text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Audio Future?</h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Schedule your free 20-minute discovery call to discuss your goals and challenges.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  href="/contact?subject=Consulting Discovery Call" 
                  className="px-6 py-3 bg-white text-primary-DEFAULT hover:bg-gray-100 rounded-lg transition-colors font-medium"
                >
                  Schedule Discovery Call
                </Link>
                <Link 
                  href="/services" 
                  className="px-6 py-3 bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-DEFAULT rounded-lg transition-colors font-medium"
                >
                  Explore Other Services
                </Link>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
} 