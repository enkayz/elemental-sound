'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function ClientStories() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  
  // Effect to handle anchor navigation and scroll to section
  useEffect(() => {
    // Get the hash from the URL (if any)
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      // If there's a hash, set the active category
      setActiveCategory(hash);
      
      // Scroll to the section with some delay to ensure rendering
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, []);

  const clientStories = [
    {
      id: 1,
      name: 'Maya Rodriguez',
      type: 'The Emerging Artist',
      category: 'emerging-artists',
      description: 'From bedroom demos to professional releases with the Creator Pass membership',
      image: '/wiki-images/thumbs/maya-rodriguez-thumb.jpg',
      link: '/client-stories/maya-rodriguez',
      tags: ['Studio Membership', 'Education']
    },
    {
      id: 2,
      name: 'Thomas Chen',
      type: 'The Professional Producer',
      category: 'professional-producers',
      description: 'Expanded service offerings through equipment rental and mobile recording',
      image: '/wiki-images/thumbs/thomas-chen-thumb.jpg',
      link: '/client-stories/thomas-chen',
      tags: ['Equipment Rental', 'Mobile Recording']
    },
    {
      id: 3,
      name: 'Priya Sharma',
      type: 'The Content Creator',
      category: 'content-creators',
      description: 'Transformed teaching into a multimedia business with education resources',
      image: '/wiki-images/thumbs/priya-sharma-thumb.jpg',
      link: '/client-stories/priya-sharma',
      tags: ['Education Platform', 'Equipment Rental']
    },
    {
      id: 4,
      name: 'Devon Williams',
      type: 'The DIY Band Leader',
      category: 'emerging-artists',
      description: 'Elevated production quality and expanded client base through studio access',
      image: '/wiki-images/thumbs/devon-williams-thumb.jpg',
      link: '/client-stories/devon-williams',
      tags: ['Equipment Rental', 'Education']
    },
    {
      id: 5,
      name: 'Sofia Reyes',
      type: 'The Genre-Blending Artist',
      category: 'emerging-artists',
      description: 'Built a thriving interview series with professional equipment and training',
      image: '/wiki-images/thumbs/sofia-reyes-thumb.jpg',
      link: '/client-stories/sofia-reyes',
      tags: ['Mobile Recording', 'Membership']
    },
    {
      id: 6,
      name: 'Maria Gonzalez',
      type: 'The Film Composer',
      category: 'professional-producers',
      description: 'Expanded offerings and increased revenue through mobile recording partnership',
      image: '/wiki-images/thumbs/maria-gonzalez-thumb.jpg',
      link: '/client-stories/maria-gonzalez',
      tags: ['Professional Pass', 'Equipment Rental']
    },
    {
      id: 7,
      name: 'Alex Johnson',
      type: 'The Mixing Engineer',
      category: 'industry-professionals',
      description: 'Developed a thriving career through networking and studio collaborations',
      image: '/wiki-images/thumbs/alex-johnson-thumb.jpg',
      link: '/client-stories/alex-johnson',
      tags: ['Professional Pass', 'Equipment Rental']
    },
    {
      id: 8,
      name: 'CloudStream',
      type: 'The Streaming Platform',
      category: 'businesses-organizations',
      description: 'Built a high-quality music streaming platform with technical consultation',
      image: '/wiki-images/thumbs/cloudstream-thumb.jpg',
      link: '/client-stories/cloudstream',
      tags: ['Mobile Recording', 'Enterprise Partnership']
    },
    {
      id: 9,
      name: 'Echo Productions',
      type: 'The Production Company',
      category: 'businesses-organizations',
      description: 'Scaled audio services for film and television through equipment partnerships',
      image: '/wiki-images/thumbs/echo-productions-thumb.jpg',
      link: '/client-stories/echo-productions',
      tags: ['Corporate Membership', 'Equipment Access']
    },
    {
      id: 10,
      name: 'Elena Gonzalez',
      type: 'The Event Producer',
      category: 'industry-professionals',
      description: 'Created award-winning sound design with specialized training and resources',
      image: '/wiki-images/thumbs/elena-gonzalez-thumb.jpg',
      link: '/client-stories/elena-gonzalez',
      tags: ['Mobile Recording', 'Equipment Rental']
    },
    {
      id: 11,
      name: 'Harmony Foundation',
      type: 'The Non-Profit Organization',
      category: 'businesses-organizations',
      description: 'Expanded music education program through community partnership initiatives',
      image: '/wiki-images/thumbs/harmony-foundation-thumb.jpg',
      link: '/client-stories/harmony-foundation',
      tags: ['Education Platform', 'Community Access']
    },
    {
      id: 12,
      name: 'Jordan Taylor',
      type: 'The Voice Actor',
      category: 'industry-professionals',
      description: 'Built a professional home studio with equipment and acoustic consultation',
      image: '/wiki-images/thumbs/jordan-taylor-thumb.jpg',
      link: '/client-stories/jordan-taylor',
      tags: ['Acoustic Design', 'Equipment Consultation']
    },
    {
      id: 13,
      name: 'Metro Audio College',
      type: 'The Educational Institution',
      category: 'educators',
      description: 'Enhanced student experience through facility and curriculum partnerships',
      image: '/wiki-images/thumbs/metro-audio-college-thumb.jpg',
      link: '/client-stories/metro-audio-college',
      tags: ['Education Platform', 'Institution Partnership']
    },
    {
      id: 14,
      name: 'Metro Theater',
      type: 'The Performance Venue',
      category: 'venues-events',
      description: 'Transformed sound system and recording capabilities for live performances',
      image: '/wiki-images/thumbs/metro-theater-thumb.jpg',
      link: '/client-stories/metro-theater',
      tags: ['Mobile Recording', 'Corporate Membership']
    },
    {
      id: 15,
      name: 'Riverfront Festival',
      type: 'The Music Festival',
      category: 'venues-events',
      description: 'Upgraded audio experience for multiple stages with equipment and expertise',
      image: '/wiki-images/thumbs/riverfront-festival-thumb.jpg',
      link: '/client-stories/riverfront-festival',
      tags: ['Mobile Recording', 'Event Partnership']
    },
    {
      id: 16,
      name: 'Westside Records',
      type: 'The Independent Label',
      category: 'businesses-organizations',
      description: 'Expanded production capabilities through studio access and artist development',
      image: '/wiki-images/thumbs/westside-records-thumb.jpg',
      link: '/client-stories/westside-records',
      tags: ['Corporate Membership', 'Studio Access']
    },
  ];

  const categories = [
    { id: 'all', name: 'All Client Stories' },
    { id: 'emerging-artists', name: 'Emerging Artists' },
    { id: 'professional-producers', name: 'Professional Producers' },
    { id: 'content-creators', name: 'Content Creators' },
    { id: 'industry-professionals', name: 'Industry Professionals' },
    { id: 'businesses-organizations', name: 'Businesses & Organizations' },
    { id: 'venues-events', name: 'Venues & Events' },
    { id: 'educators', name: 'Educational Institutions' },
  ];

  // Organize stories by category
  const storiesByCategory = categories.reduce((acc, category) => {
    if (category.id !== 'all') {
      acc[category.id] = clientStories.filter(story => story.category === category.id);
    }
    return acc;
  }, {} as Record<string, typeof clientStories>);

  return (
    <>
      {/* Hero Section */}
      <div className="relative h-80 bg-gradient-to-r from-primary-dark to-primary-DEFAULT overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/wiki-images/page-banners/clients-banner.jpg"
            alt="Client Stories Banner"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="container mx-auto px-4 h-full flex flex-col justify-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Client Stories</h1>
          <p className="text-xl md:text-2xl">Real businesses, real results</p>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Sidebar */}
          <aside className="lg:w-1/4">
            <div className="bg-light-DEFAULT p-6 rounded-lg shadow-md mb-8 sticky top-6">
              <h3 className="text-xl font-bold border-b border-gray-200 pb-3 mb-4">Client Categories</h3>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="#all" 
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveCategory('all');
                      window.history.pushState(null, '', '#all');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className={`block px-2 py-1 rounded ${
                      activeCategory === 'all'
                        ? 'bg-primary-DEFAULT text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    All Client Stories
                  </a>
                </li>
                {categories.slice(1).map((category) => (
                  <li key={category.id}>
                    <a
                      href={`#${category.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        setActiveCategory(category.id);
                        window.history.pushState(null, '', `#${category.id}`);
                        const element = document.getElementById(category.id);
                        if (element) element.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className={`block px-2 py-1 rounded ${
                        activeCategory === category.id
                          ? 'bg-primary-DEFAULT text-white'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      {category.name}
                    </a>
                  </li>
                ))}
              </ul>

              <h3 className="text-xl font-bold border-b border-gray-200 pb-3 mb-4 mt-8">Services</h3>
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
              </ul>

              <h3 className="text-xl font-bold border-b border-gray-200 pb-3 mb-4 mt-8">Related Pages</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/services" className="text-primary-DEFAULT hover:text-primary-dark">
                    Service Ecosystem
                  </Link>
                </li>
                <li>
                  <Link href="/business-strategy" className="text-primary-DEFAULT hover:text-primary-dark">
                    Business Strategy
                  </Link>
                </li>
                <li>
                  <Link href="/implementation" className="text-primary-DEFAULT hover:text-primary-dark">
                    Implementation Plan
                  </Link>
                </li>
              </ul>
            </div>
          </aside>

          {/* Content Area */}
          <div className="lg:w-3/4">
            <section id="all" className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Client Journey Overviews</h2>
              <p className="text-gray-700 mb-4">
                Discover how diverse clients across various backgrounds and skill levels have leveraged Elemental Sound's service 
                ecosystem to achieve their creative and professional goals. Each story showcases real-world applications of our 
                services and the tangible impact on client success.
              </p>
              <p className="text-gray-700 mb-8">
                These case studies demonstrate how our integrated approach creates value by meeting clients where they are in 
                their journey and providing targeted solutions to their specific challenges.
              </p>
            </section>

            {/* Display all category sections */}
            {categories.slice(1).map((category) => (
              <section id={category.id} key={category.id} className="mb-12">
                <h2 className="text-3xl font-bold mb-4 pt-4 border-t-2 border-gray-200">
                  {category.name}
                </h2>
                <p className="text-gray-700 mb-8">
                  {category.id === 'emerging-artists' && 'Independent musicians and emerging artists who utilized Elemental Sound\'s services to enhance their creative output and career development.'}
                  {category.id === 'professional-producers' && 'Established audio professionals who expanded their capabilities and service offerings through Elemental Sound\'s ecosystem.'}
                  {category.id === 'content-creators' && 'Media creators who leveraged Elemental Sound\'s services to enhance their content quality and expand their creative capabilities.'}
                  {category.id === 'industry-professionals' && 'Audio industry professionals who utilized Elemental Sound\'s ecosystem to expand their business capabilities and service offerings.'}
                  {category.id === 'businesses-organizations' && 'Companies and organizations that partnered with Elemental Sound to develop audio solutions for their specific business needs.'}
                  {category.id === 'venues-events' && 'Performance venues and events that enhanced their offerings and created new revenue streams through professional audio solutions.'}
                  {category.id === 'educators' && 'Educational organizations that enhanced their teaching capabilities and student experience through audio technology partnerships.'}
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
                  {storiesByCategory[category.id].map((client) => (
                    <div key={client.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all">
                      <div className="h-48 relative">
                        <img 
                          src={client.image} 
                          alt={client.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-1">{client.name}</h3>
                        <span className="text-gray-600 text-sm block mb-2">{client.type}</span>
                        
                        <div className="flex flex-wrap gap-2 mb-3">
                          {client.tags.map((tag, index) => (
                            <span 
                              key={index} 
                              className="inline-block px-2 py-1 bg-primary-DEFAULT/10 text-primary-DEFAULT text-xs rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        
                        <p className="text-gray-700 mb-4 text-sm">{client.description}</p>
                        
                        <Link 
                          href={client.link} 
                          className="block text-center bg-primary-DEFAULT hover:bg-primary-dark text-white py-2 px-4 rounded transition-colors"
                        >
                          Read Story
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            ))}

            {/* Submit Your Story Section */}
            <section className="mt-16">
              <h2 className="text-3xl font-bold mb-6">Share Your Story</h2>
              <p className="text-gray-700 mb-8">
                Are you an Elemental Sound client with a success story to share? We'd love to hear how our services have 
                helped you achieve your audio goals.
              </p>
              
              <div className="bg-light-DEFAULT p-8 rounded-lg shadow-md text-center">
                <h3 className="text-2xl font-bold mb-3">Submit Your Story</h3>
                <p className="mb-4 text-gray-700">
                  Share how Elemental Sound has helped you achieve your audio goals and be featured in our client stories section.
                </p>
                <Link 
                  href="/contact?subject=Client%20Story%20Submission" 
                  className="inline-block bg-primary-DEFAULT hover:bg-primary-dark text-white py-2 px-6 rounded-lg transition-colors"
                >
                  Submit Your Story
                </Link>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* CTA Section */}
      <section className="bg-primary-DEFAULT text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Write Your Success Story?</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Join our community of creators and access the tools, spaces, and knowledge to elevate your audio production.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/services/membership" className="btn bg-white text-primary-DEFAULT hover:bg-gray-100">
              Explore Membership Options
            </Link>
            <Link href="/contact" className="btn btn-outline border-white text-white hover:bg-white hover:text-primary-DEFAULT">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
} 