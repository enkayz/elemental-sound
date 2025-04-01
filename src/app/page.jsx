'use client';

import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import ClientStoryCard from '@/components/ClientStoryCard';
import BusinessPillar from '@/components/BusinessPillar';

export default function Home() {
  const services = [
    {
      title: 'Studio Membership',
      description: 'Access to professional facilities and a creative community',
      imageSrc: '/images/equipment-preview.jpg',
      features: [
        'Multiple studio spaces for every need',
        'Flexible membership tiers',
        'Professional development pathway',
        'Vibrant creator community'
      ],
      price: '$99/month',
      link: '/services/membership'
    },
    {
      title: 'Equipment Rental',
      description: 'Professional audio gear without the capital investment',
      imageSrc: '/images/equipment-preview.jpg',
      features: [
        'Extensive inventory of premium equipment',
        'Technical support and guidance',
        'Flexible rental periods',
        'Member discounts available'
      ],
      price: '$25/day',
      link: '/services/equipment-rental'
    },
    {
      title: 'Education Platform',
      description: 'Develop your skills with expert instruction',
      imageSrc: '/images/education-preview.jpg',
      features: [
        'Comprehensive curriculum for all levels',
        'Hands-on workshops and certification',
        'On-demand and live learning options',
        'Industry-recognized credentials'
      ],
      price: '$49/month',
      link: '/services/education'
    },
    {
      title: 'Mobile Recording',
      description: 'Professional audio capture capabilities brought directly to artists and events',
      imageSrc: '/images/mobile-preview.jpg',
      features: [
        'Broadcast-quality location recording',
        'Expert technical team',
        'Custom solutions for any environment',
        'Seamless studio integration'
      ],
      price: '$350/session',
      link: '/services/mobile-recording'
    }
  ];

  const businessPillars = [
    {
      title: 'Service Diversification',
      description: 'Comprehensive services for creators\' entire journey',
      linkHref: '/business-strategy#diversification'
    },
    {
      title: 'Recurring Revenue',
      description: 'Relationship-based models replacing transactional approaches',
      linkHref: '/business-strategy#revenue'
    },
    {
      title: 'Technology Innovation',
      description: 'Cutting-edge audio technologies creating competitive advantages',
      linkHref: '/business-strategy#technology'
    },
    {
      title: 'Community Building',
      description: 'Vibrant ecosystem of creators and professionals',
      linkHref: '/business-strategy#community'
    },
    {
      title: 'Educational Leadership',
      description: 'Establishing thought leadership through knowledge sharing',
      linkHref: '/business-strategy#education'
    }
  ];

  const clientStories = [
    {
      name: 'Maya Rodriguez',
      type: 'The Emerging Artist',
      description: 'From bedroom demos to professional releases with the Creator Pass membership',
      imageSrc: '/images/client-maya-thumb.jpg',
      link: '/client-stories/maya-rodriguez'
    },
    {
      name: 'Thomas Chen',
      type: 'The Professional Producer',
      description: 'Expanded service offerings through equipment rental and mobile recording',
      imageSrc: '/images/client-thomas-thumb.jpg',
      link: '/client-stories/thomas-chen'
    },
    {
      name: 'Priya Sharma',
      type: 'The Content Creator',
      description: 'Transformed teaching into a multimedia business with education resources',
      imageSrc: '/images/client-priya-thumb.jpg',
      link: '/client-stories/priya-sharma'
    }
  ];

  return (
    <>
      <Hero />
      
      <div className="container mx-auto px-4 py-12">
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center text-primary-DEFAULT">Our Integrated Audio Ecosystem</h2>
          <p className="text-lg max-w-4xl mx-auto text-center mb-12 text-gray-700">
            Elemental Sound is transforming the traditional recording studio model into a comprehensive audio production ecosystem. 
            Our strategy leverages cutting-edge technology, community development, and educational leadership to create multiple 
            revenue streams and extend our market reach beyond geographical limitations.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {businessPillars.map((pillar, index) => (
              <BusinessPillar
                key={index}
                title={pillar.title}
                description={pillar.description}
                linkHref={pillar.linkHref}
              />
            ))}
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center text-primary-DEFAULT">Our Core Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                imageSrc={service.imageSrc}
                features={service.features}
                price={service.price}
                link={service.link}
              />
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-12 text-center text-primary-DEFAULT">Client Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {clientStories.map((story, index) => (
              <ClientStoryCard
                key={index}
                name={story.name}
                type={story.type}
                description={story.description}
                imageSrc={story.imageSrc}
                link={story.link}
              />
            ))}
            <ClientStoryCard
              viewAll
              link="/client-stories"
            />
          </div>
        </section>
      </div>
    </>
  );
} 