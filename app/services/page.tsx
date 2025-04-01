'use client';

import React from 'react';
import Link from 'next/link';

export default function ServicesPage() {
  const services = [
    {
      title: 'Studio Membership Program',
      description: 'Our flagship membership program transforms traditional pay-per-session studio access into an ongoing relationship with predictable revenue and enhanced community engagement.',
      image: '/images/membership-preview.jpg',
      link: '/services/membership',
      features: [
        'Four membership tiers with escalating benefits',
        'Flexible studio access based on membership level',
        'Cross-service benefits and discounts',
        'Community integration and networking',
        'Professional development pathway'
      ],
      tiers: [
        'Creator Pass - Entry-level access ($99/month)',
        'Producer Pass - Expanded access ($249/month)',
        'Professional Pass - Premium access ($699/month)',
        'Studio Partner - Elite access ($1,499/month)'
      ]
    },
    {
      title: 'Equipment Rental Program',
      description: 'Professional audio equipment available for both on-site and off-site use, with flexible rental options and membership integration to remove barriers to access.',
      image: '/images/equipment-preview.jpg',
      link: '/services/equipment',
      features: [
        'Comprehensive inventory of professional equipment',
        'Both daily and weekly rental options',
        'Membership discounts and priority access',
        'Technical consultation for optimal selection',
        'Equipment bundle packages for specific needs'
      ],
      categories: [
        'Microphones & Preamps',
        'Portable Recorders & Field Kits',
        'Outboard Processors',
        'Monitoring Systems',
        'Instruments & Amplifiers'
      ]
    },
    {
      title: 'Education Platform',
      description: 'Comprehensive educational resources ranging from self-guided online courses to hands-on workshops and professional certification programs.',
      image: '/images/education-preview.jpg',
      link: '/services/education',
      features: [
        'Self-paced online courses with project-based learning',
        'In-person workshops and masterclasses',
        'Professional certification programs',
        'Membership integration with exclusive content',
        'Community forum for questions and feedback'
      ],
      offerings: [
        'Fundamentals Series - For beginners',
        'Specialist Tracks - Intermediate focused learning',
        'Master Series - Advanced techniques',
        'Certification Programs - Industry-recognized credentials'
      ]
    },
    {
      title: 'Mobile Recording Service',
      description: 'Professional-grade recording capabilities delivered to any location, from simple events to complex multi-day productions.',
      image: '/images/mobile-preview.jpg',
      link: '/services/mobile-recording',
      features: [
        'Flexible packages for any project scope',
        'Professional equipment and experienced engineers',
        'Multi-environment expertise (venues, homes, outdoors)',
        'Post-production services and delivery options',
        'Membership benefits and bundle discounts'
      ],
      packages: [
        'Event Capture - Live performances and events',
        'On-Location Studio - Full production capabilities',
        'Content Creator - Podcast and video optimized',
        'Custom Solutions - Tailored to specific needs'
      ]
    },
    {
      title: 'Community Platform',
      description: 'Digital and in-person community resources that facilitate connection, collaboration, and knowledge sharing among creators at all stages.',
      image: '/images/community-preview.jpg',
      link: '/services/community',
      features: [
        'Online forum for technical questions and collaboration',
        'Networking events and showcase opportunities',
        'Project collaboration facilitation',
        'Industry professional connections',
        'Exclusive member resources and opportunities'
      ],
      components: [
        'Digital Platform - Always available online resources',
        'In-Person Events - Regular meetups and showcases',
        'Collaboration Directory - Connect with complementary talents',
        'Resource Library - Community contributed knowledge base'
      ]
    }
  ];

  const integrationExamples = [
    {
      title: 'Education to Equipment',
      description: 'After completing our Microphone Selection & Technique course, members receive a discount on related microphone rentals to apply their new knowledge immediately.',
      path: 'Course → Equipment Rental'
    },
    {
      title: 'Membership to Mobile',
      description: 'Professional Pass members can apply a portion of their monthly studio hours toward Mobile Recording credits for on-location projects.',
      path: 'Studio Access → Mobile Recording'
    },
    {
      title: 'Community to Education',
      description: 'Popular topics from our community forum are developed into focused workshops, creating education that directly addresses member needs.',
      path: 'Community Discussion → Workshop Development'
    },
    {
      title: 'Equipment to Membership',
      description: 'Regular equipment renters are offered special membership trial rates, transitioning them into the broader ecosystem.',
      path: 'Equipment Rental → Membership Conversion'
    }
  ];

  return (
    <>
      {/* Hero Banner */}
      <div className="relative h-80 bg-gradient-to-r from-primary-dark to-primary-DEFAULT overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/page-banners/services-banner.jpg"
            alt="Services Banner"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="container mx-auto px-4 h-full flex flex-col justify-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl md:text-2xl">Comprehensive audio production ecosystem for creators at every level</p>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Sidebar */}
          <aside className="lg:w-1/4">
            <div className="bg-light-DEFAULT p-6 rounded-lg shadow-md mb-8 sticky top-6">
              <h3 className="text-xl font-bold border-b border-gray-200 pb-3 mb-4">Services</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/services/membership" className="text-primary-DEFAULT hover:text-primary-dark">
                    Studio Membership
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
                <li>
                  <Link href="/services/mobile-recording" className="text-primary-DEFAULT hover:text-primary-dark">
                    Mobile Recording
                  </Link>
                </li>
                <li>
                  <Link href="/services/community" className="text-primary-DEFAULT hover:text-primary-dark">
                    Community Platform
                  </Link>
                </li>
              </ul>

              <h3 className="text-xl font-bold border-b border-gray-200 pb-3 mb-4 mt-8">Service Integration</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/business-strategy#integration" className="text-primary-DEFAULT hover:text-primary-dark">
                    Integration Strategy
                  </Link>
                </li>
                <li>
                  <Link href="/services/bundles" className="text-primary-DEFAULT hover:text-primary-dark">
                    Service Bundles
                  </Link>
                </li>
                <li>
                  <Link href="/services/benefits" className="text-primary-DEFAULT hover:text-primary-dark">
                    Cross-Service Benefits
                  </Link>
                </li>
              </ul>

              <h3 className="text-xl font-bold border-b border-gray-200 pb-3 mb-4 mt-8">Client Examples</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/client-stories/maya-rodriguez" className="text-primary-DEFAULT hover:text-primary-dark">
                    Emerging Artist
                  </Link>
                </li>
                <li>
                  <Link href="/client-stories/thomas-chen" className="text-primary-DEFAULT hover:text-primary-dark">
                    Professional Producer
                  </Link>
                </li>
                <li>
                  <Link href="/client-stories/priya-sharma" className="text-primary-DEFAULT hover:text-primary-dark">
                    Content Creator
                  </Link>
                </li>
                <li>
                  <Link href="/client-stories" className="text-primary-DEFAULT hover:text-primary-dark">
                    All Client Stories
                  </Link>
                </li>
              </ul>
            </div>
          </aside>

          {/* Content Area */}
          <div className="lg:w-3/4">
            {/* Service Overview Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Service Ecosystem Overview</h2>
              <p className="text-gray-700 mb-4">
                Elemental Sound has transformed from a traditional recording studio into a comprehensive audio production ecosystem. 
                Our integrated service offerings are designed to support creators throughout their entire journey—from initial concept 
                to final production and distribution.
              </p>
              <p className="text-gray-700 mb-6">
                Each service is powerful on its own, but the true value comes from the seamless integration between offerings, 
                creating multiple pathways for clients to engage with our ecosystem based on their unique needs and career stage.
              </p>
              
              <div className="bg-light-DEFAULT border-l-4 border-primary-DEFAULT p-5 rounded-r-lg">
                <h4 className="text-xl font-bold text-primary-DEFAULT mb-2">Service Integration Philosophy</h4>
                <p className="text-gray-700">
                  Every service is designed with integration in mind. Clients can enter our ecosystem through any service and find 
                  natural pathways to other offerings that enhance their creative capabilities. This integration creates compound 
                  value through technical workflow efficiencies, community connections, and cross-service incentives.
                </p>
              </div>
            </section>

            {/* Core Services Section */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8">Core Services</h2>
              
              <div className="space-y-8">
                {services.map((service, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md p-6 transition-all hover:shadow-lg hover:-translate-y-1">
                    <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                    <p className="text-gray-700 mb-6">{service.description}</p>
                    
                    <div className="flex flex-col md:flex-row gap-8">
                      <div className="md:w-2/3">
                        <h4 className="text-xl font-bold mb-3">Key Features</h4>
                        <ul className="list-disc pl-5 space-y-1 text-gray-700 mb-6">
                          {service.features.map((feature, i) => (
                            <li key={i}>{feature}</li>
                          ))}
                        </ul>
                        
                        <h4 className="text-xl font-bold mb-3">
                          {service.tiers ? 'Membership Tiers' : 
                           service.categories ? 'Equipment Categories' : 
                           service.offerings ? 'Educational Offerings' : 
                           service.packages ? 'Service Packages' : 
                           'Components'}
                        </h4>
                        <ul className="list-disc pl-5 space-y-1 text-gray-700">
                          {(service.tiers || service.categories || service.offerings || service.packages || service.components).map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="md:w-1/3">
                        <div className="rounded-lg overflow-hidden shadow-sm mb-4 transition-transform hover:scale-102">
                          <img 
                            src={service.image} 
                            alt={service.title} 
                            className="w-full h-48 object-cover"
                          />
                        </div>
                        <Link 
                          href={service.link} 
                          className="block text-center bg-primary-DEFAULT hover:bg-primary-dark text-white py-3 px-4 rounded-lg transition-colors"
                        >
                          View {service.title.split(' ')[0]} Details
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Integration Examples Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Integration Examples</h2>
              <p className="text-gray-700 mb-8">
                The following examples demonstrate how our services connect to create valuable pathways through our ecosystem for clients at various stages.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {integrationExamples.map((example, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md p-6 transition-all hover:shadow-lg hover:-translate-y-1">
                    <h3 className="text-xl font-bold mb-2">{example.title}</h3>
                    <div className="text-sm font-medium text-primary-DEFAULT mb-4">{example.path}</div>
                    <p className="text-gray-700">{example.description}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* CTA Section */}
      <section className="bg-primary-DEFAULT text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Elevate Your Audio Production?</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Explore our service ecosystem and discover how Elemental Sound can support your creative journey from concept to completion.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/services/membership" className="btn bg-white text-primary-DEFAULT hover:bg-gray-100">
              Explore Membership Options
            </Link>
            <Link href="/contact" className="btn btn-outline border-white text-white hover:bg-white hover:text-primary-DEFAULT">
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
} 