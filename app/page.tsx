'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  FadeIn, 
  StaggerContainer, 
  StaggerItem, 
  ParallaxElement,
  AnimatedCard
} from './components/AnimatedElements';
import ServiceShowcase from './components/ServiceShowcase';

// Sample service data for the showcase
const recordingServiceSamples = [
  {
    id: 'vocal-recording',
    title: 'Vocal Recording Session',
    description: 'Professional vocal recording with high-end microphones and signal chain in our acoustically treated vocal booth.',
    audioUrl: '/sample-audio/vocal-sample.mp3',
    audioTitle: 'Vocal Recording Sample',
    audioArtist: 'Sarah Johnson',
    imageUrl: '/images/services/vocal-recording.jpg'
  },
  {
    id: 'drum-recording',
    title: 'Drum Session',
    description: 'Full drum kit recording in our specialized drum room with premium microphones and preamps.',
    audioUrl: '/sample-audio/drum-sample.mp3',
    audioTitle: 'Drum Recording Sample',
    audioArtist: 'Mark Williams',
    imageUrl: '/images/services/drum-recording.jpg'
  },
  {
    id: 'full-band',
    title: 'Full Band Recording',
    description: 'Complete band tracking with isolated rooms and visual connection for the best performance and sound clarity.',
    audioUrl: '/sample-audio/band-sample.mp3',
    audioTitle: 'Band Recording Sample',
    audioArtist: 'The Elements',
    imageUrl: '/images/services/band-recording.jpg'
  },
  {
    id: 'string-ensemble',
    title: 'String Ensemble',
    description: 'String quartet or full string section recording in our large acoustic space with premium stereo microphone setups.',
    audioUrl: '/sample-audio/strings-sample.mp3',
    audioTitle: 'String Ensemble Sample',
    audioArtist: 'Metro String Quartet',
    imageUrl: '/images/services/string-recording.jpg'
  }
];

export default function Home() {
  const businessPillars = [
    {
      id: 1,
      title: 'Service Diversification',
      description: 'Comprehensive services for creators\' entire journey',
      link: '/business-strategy#diversification',
    },
    {
      id: 2,
      title: 'Recurring Revenue',
      description: 'Relationship-based models replacing transactional approaches',
      link: '/business-strategy#revenue',
    },
    {
      id: 3,
      title: 'Technology Innovation',
      description: 'Cutting-edge audio technologies creating competitive advantages',
      link: '/business-strategy#technology',
    },
    {
      id: 4,
      title: 'Community Building',
      description: 'Vibrant ecosystem of creators and professionals',
      link: '/business-strategy#community',
    },
    {
      id: 5,
      title: 'Educational Leadership',
      description: 'Establishing thought leadership through knowledge sharing',
      link: '/business-strategy#education',
    },
  ];

  const services = [
    {
      id: 1,
      title: 'Studio Membership',
      description: 'Access to professional facilities and a creative community',
      features: [
        'Multiple studio spaces for every need',
        'Flexible membership tiers',
        'Professional development pathway',
        'Vibrant creator community'
      ],
      price: '$99/month',
      image: '/images/membership-preview.jpg',
      link: '/services/membership',
    },
    {
      id: 2,
      title: 'Equipment Rental',
      description: 'Professional audio gear without the capital investment',
      features: [
        'Extensive inventory of premium equipment',
        'Technical support and guidance',
        'Flexible rental periods',
        'Member discounts available'
      ],
      price: '$25/day',
      image: '/images/equipment-preview.jpg',
      link: '/services/equipment-rental',
    },
    {
      id: 3,
      title: 'Education Platform',
      description: 'Develop your skills with expert instruction',
      features: [
        'Comprehensive curriculum for all levels',
        'Hands-on workshops and certification',
        'On-demand and live learning options',
        'Industry-recognized credentials'
      ],
      price: '$49/month',
      image: '/images/education-preview.jpg',
      link: '/services/education',
    },
    {
      id: 4,
      title: 'Mobile Recording',
      description: 'Professional audio capture capabilities brought directly to artists and events',
      features: [
        'Broadcast-quality location recording',
        'Expert technical team',
        'Custom solutions for any environment',
        'Seamless studio integration'
      ],
      price: '$350/session',
      image: '/images/mobile-preview.jpg',
      link: '/services/mobile-recording',
    },
  ];

  const clientStories = [
    {
      id: 1,
      name: 'Maya Rodriguez',
      type: 'The Emerging Artist',
      description: 'From bedroom demos to professional releases with the Creator Pass membership',
      image: '/images/clients/client-maya.jpg',
      link: '/client-stories/maya-rodriguez',
    },
    {
      id: 2,
      name: 'Thomas Chen',
      type: 'The Professional Producer',
      description: 'Expanded service offerings through equipment rental and mobile recording',
      image: '/images/clients/client-thomas.jpg',
      link: '/client-stories/thomas-chen',
    },
    {
      id: 3,
      name: 'Priya Sharma',
      type: 'The Content Creator',
      description: 'Transformed teaching into a multimedia business with education resources',
      image: '/images/clients/client-priya.jpg',
      link: '/client-stories/priya-sharma',
    },
  ];

  return (
    <>
      {/* Hero Section with Parallax */}
      <section className="relative bg-gradient-to-r from-primary-dark to-primary-DEFAULT text-white py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/hero-home.jpg"
            alt="Elemental Sound Studio"
            fill
            style={{ objectFit: 'cover' }}
            priority
            className="opacity-40"
          />
        </div>
        
        <ParallaxElement speed={0.3} className="absolute inset-0 opacity-10 z-0">
          <div className="absolute inset-0 bg-pattern bg-repeat"></div>
        </ParallaxElement>
        
        <div className="container mx-auto px-4 z-10 relative">
          <FadeIn direction="up" duration={0.7} className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-shadow">
              Transforming Audio Production
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100 text-shadow">
              Professional solutions for every creator, from emerging artists to established studios
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <FadeIn delay={0.2} direction="up">
                <Link href="/services" className="btn btn-secondary">
                  Explore Services
                </Link>
              </FadeIn>
              <FadeIn delay={0.3} direction="up">
                <Link href="/client-stories" className="btn btn-outline border-white text-white hover:bg-white hover:text-primary-DEFAULT">
                  Read Success Stories
                </Link>
              </FadeIn>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Business Strategy Section */}
      <section className="section bg-white">
        <div className="container">
          <FadeIn direction="up" className="text-center">
            <h2 className="section-title">Our Integrated Audio Ecosystem</h2>
            <p className="section-subtitle">
              Elemental Sound is transforming the traditional recording studio model into a comprehensive audio production ecosystem. 
              Our strategy leverages cutting-edge technology, community development, and educational leadership to create multiple 
              revenue streams and extend our market reach beyond geographical limitations.
            </p>
          </FadeIn>

          <StaggerContainer staggerChildren={0.1} delay={0.2} className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-12">
            {businessPillars.map((pillar) => (
              <StaggerItem key={pillar.id} direction="up">
                <AnimatedCard className="bg-light-DEFAULT rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-bold mb-2">{pillar.title}</h3>
                  <p className="text-gray-600 mb-4">{pillar.description}</p>
                  <Link href={pillar.link} className="text-primary-DEFAULT font-medium hover:text-primary-dark">
                    Learn more →
                  </Link>
                </AnimatedCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Services Section */}
      <section className="section bg-light-DEFAULT">
        <div className="container">
          <FadeIn direction="up" className="text-center">
            <h2 className="section-title">Our Core Services</h2>
          </FadeIn>

          <StaggerContainer staggerChildren={0.1} delay={0.2} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {services.map((service) => (
              <StaggerItem key={service.id} direction="up">
                <AnimatedCard className="bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col">
                  <div className="h-48 relative">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <ul className="mb-4 ml-5 list-disc text-gray-600">
                      {service.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                    <p className="italic mb-4 mt-auto">From <span className="font-bold text-secondary-DEFAULT">{service.price}</span></p>
                    <Link href={service.link} className="btn btn-primary w-full text-center">
                      Learn More
                    </Link>
                  </div>
                </AnimatedCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
          
          <ServiceShowcase 
            title="Recording Services" 
            description="High-quality recording options featuring state-of-the-art equipment and experienced engineers."
            serviceType="Recording"
            servicePath="/services/recording"
            samples={recordingServiceSamples}
            className="mb-12"
          />
        </div>
      </section>

      {/* Client Stories Section */}
      <section className="section bg-white">
        <div className="container">
          <FadeIn direction="up" className="text-center">
            <h2 className="section-title">Client Success Stories</h2>
          </FadeIn>

          <StaggerContainer staggerChildren={0.1} delay={0.2} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {clientStories.map((client) => (
              <StaggerItem key={client.id} direction="up">
                <AnimatedCard className="bg-light-DEFAULT rounded-lg shadow-md overflow-hidden h-full flex flex-col">
                  <div className="h-48 relative">
                    <img 
                      src={client.image} 
                      alt={client.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="text-xl font-bold mb-1">{client.name}</h3>
                    <p className="text-secondary-DEFAULT font-semibold mb-2">{client.type}</p>
                    <p className="text-gray-600 mb-4">{client.description}</p>
                    <Link href={client.link} className="btn btn-primary w-full text-center mt-auto">
                      Read Story
                    </Link>
                  </div>
                </AnimatedCard>
              </StaggerItem>
            ))}

            <StaggerItem>
              <AnimatedCard className="bg-light-DEFAULT rounded-lg shadow-md overflow-hidden flex items-center h-full">
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-2">Explore All Success Stories</h3>
                  <p className="text-gray-600 mb-4">Discover how creators of all types have transformed their work through our ecosystem</p>
                  <Link href="/client-stories" className="btn btn-primary">
                    View All Stories
                  </Link>
                </div>
              </AnimatedCard>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-DEFAULT text-white py-16">
        <FadeIn direction="up" className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-secondary-DEFAULT">Ready to Transform Your Audio Experience?</h2>
            <p className="text-xl mb-8 text-light-DEFAULT">
              Join our community of creators and access professional audio solutions tailored to your needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn bg-secondary-DEFAULT text-primary-dark hover:bg-secondary-dark">
                Contact Us Today
              </Link>
              <Link href="/services/membership" className="btn btn-outline border-white text-white hover:bg-white hover:text-primary-DEFAULT">
                Explore Memberships
              </Link>
            </div>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
