'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function About() {
  const teamMembers = [
    {
      id: 1,
      name: 'Alex Rivera',
      role: 'Founder & CEO',
      bio: 'Former studio owner and recording engineer with 15+ years in the industry. Alex founded Elemental Sound to create the collaborative audio environment he always wished existed.',
      image: '/images/team-alex.jpg',
    },
    {
      id: 2,
      name: 'Maya Johnson',
      role: 'Chief Operations Officer',
      bio: 'Music business veteran with experience managing major recording facilities and developing artist services programs. Maya oversees all operational aspects of Elemental Sound.',
      image: '/images/team-maya.jpg',
    },
    {
      id: 3,
      name: 'James Wilson',
      role: 'Technical Director',
      bio: 'Audio engineer and systems specialist who has designed recording setups for major studios across the country. James ensures our technical infrastructure exceeds professional standards.',
      image: '/images/team-james.jpg',
    },
    {
      id: 4,
      name: 'Dr. Alicia Martinez',
      role: 'Education Director',
      bio: 'Former university professor with a PhD in Audio Engineering and extensive curriculum development experience. Alicia designs our educational programs and certification pathways.',
      image: '/images/team-alicia.jpg',
    },
  ];

  const values = [
    {
      id: 1,
      title: 'Authentic Inclusivity',
      description: 'We actively work to make audio production accessible across socioeconomic boundaries, creating pathways for diverse voices to be heard.',
      icon: '/icons/inclusivity.svg',
    },
    {
      id: 2,
      title: 'Knowledge Sharing',
      description: 'We believe in breaking down the walls of "industry secrets." Our educational approach emphasizes transparency and practical skills development.',
      icon: '/icons/education.svg',
    },
    {
      id: 3,
      title: 'Community Building',
      description: 'Audio creation thrives in collaborative environments. We foster connections between creators, facilitating relationships that enhance creative outcomes.',
      icon: '/icons/community.svg',
    },
    {
      id: 4,
      title: 'Sustainable Growth',
      description: 'We build business models that create lasting value for our clients while supporting the long-term health of our organization and the broader creative ecosystem.',
      icon: '/icons/sustainability.svg',
    },
  ];
  
  const facilityAreas = [
    {
      id: 1,
      title: 'Recording Studios',
      description: 'Professional recording spaces designed for flexibility and exceptional sound quality.',
      image: '/images/studio-a.jpg',
    },
    {
      id: 2,
      title: 'Equipment Library',
      description: 'Comprehensive collection of premium audio gear available for both in-house use and rental.',
      image: '/images/equipment-preview.jpg',
    },
    {
      id: 3,
      title: 'Education Center',
      description: 'Dedicated learning spaces for workshops, courses, and hands-on training sessions.',
      image: '/images/education-preview.jpg',
    },
    {
      id: 4,
      title: 'Community Space',
      description: 'Collaborative environment for networking, events, and creative interaction.',
      image: '/images/community-preview.jpg',
    },
  ];

  const partners = [
    {
      id: 1,
      name: 'Metro University School of Music',
      type: 'Educational Partner',
      description: 'Curriculum collaboration and student opportunities',
      image: '/images/education-preview.jpg',
    },
    {
      id: 2,
      name: 'Premium Audio Manufacturers',
      type: 'Equipment Partners',
      description: 'Demo facility and educational workshops',
      image: '/images/equipment-preview.jpg',
    },
    {
      id: 3,
      name: 'Urban Sound Festival',
      type: 'Community Partner',
      description: 'Official recording partner and workshop provider',
      image: '/images/community-preview.jpg',
    },
    {
      id: 4,
      name: 'Youth Audio Foundation',
      type: 'Nonprofit Partner',
      description: 'Supporting the next generation of audio professionals',
      image: '/images/education-preview.jpg',
    },
  ];

  const departments = [
    {
      id: 1,
      title: 'Studio & Equipment Team',
      description: 'Our technical experts maintain our extensive equipment inventory, manage studio operations, and provide hands-on support to clients. With backgrounds ranging from vintage gear restoration to cutting-edge digital workflows, this team ensures every piece of equipment performs at its peak.',
    },
    {
      id: 2,
      title: 'Education & Community Team',
      description: 'Comprised of experienced educators, course developers, and community managers, this team creates and delivers our educational content while fostering meaningful connections within our membership community. They bring diverse perspectives from traditional music education, online learning design, and community building.',
    },
    {
      id: 3,
      title: 'Mobile Recording Team',
      description: 'Specialists in adapting to challenging recording environments, our mobile team brings studio-quality sound to any location. With backgrounds in live event recording, location sound for film, and concert production, they solve complex audio challenges on the spot.',
    },
    {
      id: 4,
      title: 'Client Success Team',
      description: 'Dedicated to ensuring our members and clients maximize the value of their Elemental Sound experience, this team combines technical knowledge with exceptional service to support creators at every stage of their journey.',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary-DEFAULT text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Elemental Sound</h1>
            <p className="text-xl mb-0">
              We're transforming how creators access professional audio resources through innovation, community, and education.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section bg-white">
        <div className="container">
          <h2 className="section-title">Our Core Values</h2>
          <p className="section-subtitle">
            The principles that guide everything we do at Elemental Sound
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {values.map((value) => (
              <div key={value.id} className="bg-light-DEFAULT rounded-lg shadow-md p-6 text-center">
                <div className="w-16 h-16 mx-auto bg-primary-DEFAULT/10 rounded-full flex items-center justify-center mb-4">
                  <img src={value.icon} alt={value.title} className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section bg-light-DEFAULT">
        <div className="container">
          <h2 className="section-title">Our Team</h2>
          <p className="section-subtitle">
            Elemental Sound is powered by industry veterans and innovative thinkers united by a passion for audio excellence and creative empowerment.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {teamMembers.map((member) => (
              <div key={member.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-64 relative">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-primary-DEFAULT font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-6 text-center">Department Teams</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {departments.map((dept) => (
                <div key={dept.id} className="bg-white rounded-lg shadow-md p-6">
                  <h4 className="text-xl font-bold mb-3">{dept.title}</h4>
                  <p className="text-gray-600">{dept.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Facility Section */}
      <section className="section bg-white">
        <div className="container">
          <h2 className="section-title">Our Facility</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12 items-center">
            <div>
              <div className="relative h-96 w-full rounded-lg overflow-hidden shadow-lg my-8">
                <img
                  src="/images/studio-a.jpg"
                  alt="Elemental Sound Facility"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div>
              <p className="text-gray-700 mb-4">
                Located in a renovated industrial building with over 12,000 square feet of space, our facility has been designed to support the full range of our services while creating an inspiring environment for creators.
              </p>
              <p className="text-gray-700">
                The design balances technical precision with creative comfort, featuring acoustically treated spaces alongside collaborative areas that encourage interaction and community building.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {facilityAreas.map((area) => (
              <div key={area.id} className="bg-light-DEFAULT rounded-lg shadow-md overflow-hidden">
                <div className="h-48 relative">
                  <img 
                    src={area.image} 
                    alt={area.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{area.title}</h3>
                  <p className="text-gray-600">{area.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="section bg-light-DEFAULT">
        <div className="container">
          <h2 className="section-title">Our Partners</h2>
          <p className="section-subtitle">
            We collaborate with industry-leading organizations to enhance our offerings and extend our impact
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {partners.map((partner) => (
              <div key={partner.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 relative">
                  <img 
                    src={partner.image} 
                    alt={partner.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{partner.name}</h3>
                  <p className="text-gray-600">{partner.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section bg-white">
        <div className="container">
          <h2 className="section-title">Contact Us</h2>
          <p className="section-subtitle">
            Have questions about our services or want to schedule a tour? Reach out to our team.
          </p>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="bg-light-DEFAULT rounded-lg shadow-md p-6 text-center">
                <h3 className="text-xl font-bold mb-4">Visit Our Studio</h3>
                <p className="text-gray-600">
                  Unit 10-12, 45 Ladner St<br />
                  O'Connor, WA<br />
                  Australia
                </p>
              </div>
              
              <div className="bg-light-DEFAULT rounded-lg shadow-md p-6 text-center">
                <h3 className="text-xl font-bold mb-4">Call or Email</h3>
                <p className="text-gray-600 mb-2">
                  <strong>Phone:</strong> 1800 ELEMENTAL
                </p>
                <p className="text-gray-600 mb-2">
                  <strong>Email:</strong> info@elementalsound.com
                </p>
                <p className="text-gray-600">
                  <strong>Hours:</strong> 24 hours a day, 7 days a week
                </p>
              </div>
              
              <div className="bg-light-DEFAULT rounded-lg shadow-md p-6 text-center">
                <h3 className="text-xl font-bold mb-4">Connect Online</h3>
                <div className="flex justify-center space-x-4">
                  <a href="#" className="text-primary-DEFAULT hover:text-primary-dark">
                    <span className="sr-only">Instagram</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="#" className="text-primary-DEFAULT hover:text-primary-dark">
                    <span className="sr-only">YouTube</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="#" className="text-primary-DEFAULT hover:text-primary-dark">
                    <span className="sr-only">Twitter</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a href="#" className="text-primary-DEFAULT hover:text-primary-dark">
                    <span className="sr-only">LinkedIn</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <Link href="/contact" className="btn btn-primary mx-2">
                Send Us a Message
              </Link>
              <Link href="/services/membership" className="btn btn-outline mx-2">
                Schedule a Tour
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-DEFAULT text-white py-16">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join the Elemental Sound Community</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Whether you're an established professional or just beginning your creative journey, we have resources, equipment, and community to support your vision.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/services/membership" className="btn bg-white text-primary-DEFAULT hover:bg-gray-100">
              Explore Membership
            </Link>
            <Link href="/services" className="btn btn-outline border-white text-white hover:bg-white hover:text-primary-DEFAULT">
              Browse Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
} 