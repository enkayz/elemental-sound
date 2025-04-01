'use client';

import React from 'react';
import Link from 'next/link';

export default function EducationPage() {
  const educationTracks = [
    {
      name: 'Fundamentals Series',
      description: 'Essential foundations for beginners entering the world of audio production',
      forLevel: 'Beginner',
      courses: [
        {
          title: 'Audio Production Basics',
          description: 'Introduction to core concepts, terminology, and workflows',
          duration: '6 weeks',
          format: 'Online, self-paced with weekly live sessions'
        },
        {
          title: 'Introduction to Recording',
          description: 'Fundamentals of capturing high-quality audio in any environment',
          duration: '4 weeks',
          format: 'Online, self-paced with practical assignments'
        },
        {
          title: 'Digital Audio Workstations 101',
          description: 'Get started with industry-standard production software',
          duration: '8 weeks',
          format: 'Online, includes hands-on projects'
        }
      ],
      image: '/images/education/fundamentals.jpg'
    },
    {
      name: 'Specialist Tracks',
      description: 'Focused training for intermediate learners developing specialized skills',
      forLevel: 'Intermediate',
      courses: [
        {
          title: 'Mixing Techniques',
          description: 'Professional approaches to balance, space, and clarity in your mixes',
          duration: '10 weeks',
          format: 'Online + optional in-studio sessions'
        },
        {
          title: 'Music Production Workflows',
          description: 'Streamlined approaches to the production process from concept to completion',
          duration: '8 weeks',
          format: 'Online with collaborative projects'
        },
        {
          title: 'Sound Design for Media',
          description: 'Creating and implementing sound for film, games, and interactive media',
          duration: '12 weeks',
          format: 'Online with industry projects'
        }
      ],
      image: '/images/education/specialist.jpg'
    },
    {
      name: 'Master Series',
      description: 'Advanced techniques and expert knowledge for serious professionals',
      forLevel: 'Advanced',
      courses: [
        {
          title: 'Advanced Mix Engineering',
          description: 'Elevated mixing techniques for professional outcomes across genres',
          duration: '12 weeks',
          format: 'Hybrid with required in-studio sessions'
        },
        {
          title: 'Mastering for Multiple Formats',
          description: 'Professional mastering approaches for streaming, vinyl, and other formats',
          duration: '8 weeks',
          format: 'Hybrid with in-studio practical sessions'
        },
        {
          title: 'Immersive Audio Production',
          description: 'Creating spatial audio experiences for Dolby Atmos, binaural, and other formats',
          duration: '10 weeks',
          format: 'Hybrid with specialized facility sessions'
        }
      ],
      image: '/images/education/master.jpg'
    },
    {
      name: 'Certification Programs',
      description: 'Industry-recognized credentials for career advancement',
      forLevel: 'Various',
      courses: [
        {
          title: 'Certified Studio Engineer',
          description: 'Comprehensive training in professional studio operations and engineering',
          duration: '6 months',
          format: 'Intensive hybrid program with required studio hours'
        },
        {
          title: 'Certified Production Specialist',
          description: 'Focused certification in professional music production techniques',
          duration: '4 months',
          format: 'Hybrid program with portfolio development'
        },
        {
          title: 'Audio Post-Production Certification',
          description: 'Specialized training for film, TV, and media post-production',
          duration: '5 months',
          format: 'Hybrid with industry placement opportunities'
        }
      ],
      image: '/images/education/certification.jpg'
    }
  ];

  const workshopEvents = [
    {
      title: 'Microphone Selection & Technique',
      description: 'Hands-on workshop covering microphone types, selection criteria, and placement techniques for various sources',
      duration: '1 day (8 hours)',
      upcoming: 'March 15, 2024',
      price: '$249',
      image: '/images/education/microphone-workshop.jpg'
    },
    {
      title: 'Mixing Pop Vocals',
      description: 'Professional techniques for achieving competitive, radio-ready vocal sounds in contemporary pop productions',
      duration: '2 days (weekend intensive)',
      upcoming: 'April 6-7, 2024',
      price: '$399',
      image: '/images/education/vocal-mixing-workshop.jpg'
    },
    {
      title: 'Live Sound Essentials',
      description: 'Practical training in live sound reinforcement, system setup, and troubleshooting for small to medium venues',
      duration: '2 days (weekend intensive)',
      upcoming: 'May 18-19, 2024',
      price: '$449',
      image: '/images/education/live-sound-workshop.jpg'
    },
    {
      title: 'Synthesizer Programming',
      description: 'Deep dive into synthesis techniques, sound design principles, and creative approaches to electronic music production',
      duration: '1 day (8 hours)',
      upcoming: 'June 22, 2024',
      price: '$299',
      image: '/images/education/synth-workshop.jpg'
    }
  ];

  const educationalApproach = [
    {
      title: 'Learn by Doing',
      description: 'Our project-based curriculum ensures you apply concepts immediately, building a portfolio while you learn',
      icon: '🛠️',
    },
    {
      title: 'Industry Relevance',
      description: 'Curriculum developed and taught by active professionals, focusing on current industry practices and standards',
      icon: '🏆',
    },
    {
      title: 'Flexible Learning Paths',
      description: 'Multiple formats and schedules to accommodate different learning styles and life commitments',
      icon: '🔄',
    },
    {
      title: 'Community Integration',
      description: 'Connect with fellow students and industry professionals through our community platform',
      icon: '👥',
    },
    {
      title: 'Career Development',
      description: 'Direct pathways from education to professional opportunities through our industry network',
      icon: '📈',
    },
    {
      title: 'Continued Support',
      description: 'Access to resources, refresher content, and community even after program completion',
      icon: '🤝',
    },
  ];

  const instructorHighlights = [
    {
      name: 'Sarah Johnson',
      title: 'Director of Education',
      expertise: 'Recording Engineering, Mixing, Production',
      credentials: 'Grammy-winning engineer with 15+ years of studio experience',
      image: '/images/team/sarah-johnson.jpg'
    },
    {
      name: 'Marcus Chen',
      title: 'Lead Production Instructor',
      expertise: 'Electronic Production, Sound Design, Workflow Optimization',
      credentials: 'Platinum-selling producer and remixer for major labels',
      image: '/images/team/marcus-chen.jpg'
    },
    {
      name: 'Elena Rodriguez',
      title: 'Post-Production Specialist',
      expertise: 'Film Audio, Game Sound, Spatial Audio',
      credentials: 'Award-winning sound designer with major film and game credits',
      image: '/images/team/elena-rodriguez.jpg'
    }
  ];

  const eduFAQs = [
    {
      question: 'How do I know which course is right for me?',
      answer: 'We offer a free skills assessment and consultation to help identify your current level and goals. This helps us recommend the most appropriate starting point and learning path.'
    },
    {
      question: 'Do I need my own equipment to take courses?',
      answer: 'For online components, you\'ll need basic computer equipment and DAW software (student discounts available). For hands-on components, all necessary equipment is provided in our facilities. Some courses include equipment loans as part of the package.'
    },
    {
      question: 'Are there any prerequisites for courses?',
      answer: 'Fundamentals Series courses have no prerequisites. Specialist and Master Series courses have recommended experience levels, but we assess each student individually. Certification programs have specific entry requirements detailed on each program page.'
    },
    {
      question: 'How much time should I commit each week?',
      answer: 'Most courses require 5-10 hours per week for online components. Intensive courses and certification programs require more substantial time commitments, detailed in each program description.'
    },
    {
      question: 'Do you offer financial assistance or payment plans?',
      answer: 'Yes, we offer payment plans for all programs and partial scholarships for qualifying students. We also have special rates for members of our studio membership program.'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="relative h-96 bg-gradient-to-r from-primary-dark to-primary-DEFAULT overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/page-banners/education-banner.jpg"
            alt="Education Platform"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="container mx-auto px-4 h-full flex flex-col justify-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Education Platform</h1>
          <p className="text-xl md:text-2xl max-w-3xl">
            Comprehensive learning pathways for audio professionals at every career stage
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
                  <a href="#tracks" className="text-primary-DEFAULT hover:text-primary-dark">
                    Learning Tracks
                  </a>
                </li>
                <li>
                  <a href="#workshops" className="text-primary-DEFAULT hover:text-primary-dark">
                    Workshops & Events
                  </a>
                </li>
                <li>
                  <a href="#approach" className="text-primary-DEFAULT hover:text-primary-dark">
                    Educational Approach
                  </a>
                </li>
                <li>
                  <a href="#instructors" className="text-primary-DEFAULT hover:text-primary-dark">
                    Our Instructors
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
                  <Link href="/services/studio" className="text-primary-DEFAULT hover:text-primary-dark">
                    Studio Recording
                  </Link>
                </li>
                <li>
                  <Link href="/services/equipment" className="text-primary-DEFAULT hover:text-primary-dark">
                    Equipment Rental
                  </Link>
                </li>
              </ul>

              <div className="mt-8 p-4 bg-primary-DEFAULT text-white rounded-lg">
                <h4 className="font-bold text-lg mb-2">Ready to start learning?</h4>
                <p className="mb-4">Schedule a consultation to find the right educational path for your goals.</p>
                <Link 
                  href="/contact?subject=Education Consultation" 
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
              <h2 className="text-3xl font-bold mb-6">Professional Audio Education</h2>
              
              <div className="prose max-w-none text-gray-700">
                <p className="mb-4">
                  Elemental Sound's Education Platform provides comprehensive learning pathways for audio 
                  professionals at every career stage. Our curriculum combines theoretical knowledge with 
                  practical skills development, delivered through multiple formats to accommodate different 
                  learning styles and schedules.
                </p>
                <p className="mb-4">
                  From foundational courses for beginners to advanced specialized training for professionals, 
                  our programs are designed and taught by active industry experts with real-world experience. 
                  This ensures our education remains relevant, practical, and aligned with current industry 
                  standards and practices.
                </p>
                <p className="mb-6">
                  The Education Platform integrates seamlessly with our other services, creating a comprehensive 
                  ecosystem where theory meets practice through studio access, equipment availability, and 
                  community connections.
                </p>
              </div>

              <div className="bg-light-DEFAULT p-6 rounded-lg mt-8">
                <h3 className="text-xl font-bold mb-4">Education Platform Highlights</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-4xl mb-2">40+</div>
                    <p className="text-gray-700">Courses and workshops</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl mb-2">15+</div>
                    <p className="text-gray-700">Industry expert instructors</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl mb-2">1,200+</div>
                    <p className="text-gray-700">Graduates each year</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Learning Tracks Section */}
            <section id="tracks" className="scroll-mt-6 mb-16">
              <h2 className="text-3xl font-bold mb-8">Learning Tracks</h2>
              
              <div className="space-y-12">
                {educationTracks.map((track, index) => (
                  <div key={index}>
                    <div className="flex items-center mb-4">
                      <h3 className="text-2xl font-bold">{track.name}</h3>
                      <span className="ml-3 px-3 py-1 bg-gray-200 text-gray-800 text-sm rounded-full">
                        {track.forLevel}
                      </span>
                    </div>
                    
                    <div className="flex flex-col lg:flex-row gap-6 mb-6">
                      <div className="lg:w-2/3">
                        <p className="text-gray-700 mb-6">{track.description}</p>
                        
                        <div className="space-y-4">
                          {track.courses.map((course, i) => (
                            <div key={i} className="bg-white rounded-lg shadow-md p-5">
                              <h4 className="text-xl font-bold mb-2">{course.title}</h4>
                              <p className="text-gray-700 mb-3">{course.description}</p>
                              <div className="flex flex-wrap gap-3 text-sm">
                                <span className="px-3 py-1 bg-primary-DEFAULT/10 text-primary-DEFAULT rounded-full">
                                  {course.duration}
                                </span>
                                <span className="px-3 py-1 bg-light-DEFAULT text-gray-700 rounded-full">
                                  {course.format}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="lg:w-1/3">
                        {track.image && (
                          <img 
                            src={track.image} 
                            alt={track.name}
                            className="w-full h-auto rounded-lg shadow-md"
                          />
                        )}
                        
                        <Link 
                          href={`/contact?subject=${encodeURIComponent(`${track.name} Inquiry`)}`}
                          className="block text-center mt-4 bg-primary-DEFAULT hover:bg-primary-dark text-white py-2 px-4 rounded-lg transition-colors"
                        >
                          Learn More About {track.name}
                        </Link>
                      </div>
                    </div>
                    
                    {index < educationTracks.length - 1 && (
                      <div className="border-b border-gray-200 pt-6"></div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Workshops Section */}
            <section id="workshops" className="scroll-mt-6 mb-16">
              <h2 className="text-3xl font-bold mb-8">Workshops & Events</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {workshopEvents.map((workshop, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                    {workshop.image && (
                      <img 
                        src={workshop.image} 
                        alt={workshop.title}
                        className="w-full h-48 object-cover"
                      />
                    )}
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2">{workshop.title}</h3>
                      <p className="text-gray-700 mb-4">{workshop.description}</p>
                      
                      <div className="flex flex-wrap gap-3 mb-4">
                        <span className="px-3 py-1 bg-light-DEFAULT text-gray-700 text-sm rounded-full">
                          {workshop.duration}
                        </span>
                        <span className="px-3 py-1 bg-primary-DEFAULT/10 text-primary-DEFAULT text-sm rounded-full">
                          Next: {workshop.upcoming}
                        </span>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <div className="text-lg font-semibold text-primary-DEFAULT">
                          {workshop.price}
                        </div>
                        <Link 
                          href={`/contact?subject=${encodeURIComponent(`${workshop.title} Workshop Registration`)}`}
                          className="px-5 py-2 bg-primary-DEFAULT hover:bg-primary-dark text-white rounded-lg transition-colors text-sm"
                        >
                          Register Now
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-6 bg-light-DEFAULT rounded-lg text-center">
                <h3 className="text-xl font-bold mb-4">Custom Workshops for Organizations</h3>
                <p className="text-gray-700 mb-6">
                  We offer customized workshops and training programs for organizations, 
                  studios, and educational institutions. Contact us to discuss your 
                  specific training needs and goals.
                </p>
                <Link 
                  href="/contact?subject=Custom Workshop Inquiry"
                  className="inline-block px-6 py-3 bg-primary-DEFAULT hover:bg-primary-dark text-white rounded-lg transition-colors font-medium"
                >
                  Inquire About Custom Training
                </Link>
              </div>
            </section>

            {/* Educational Approach Section */}
            <section id="approach" className="scroll-mt-6 mb-16">
              <h2 className="text-3xl font-bold mb-8">Our Educational Approach</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {educationalApproach.map((approach, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md p-6">
                    <div className="text-4xl mb-4">{approach.icon}</div>
                    <h3 className="text-xl font-bold mb-2">{approach.title}</h3>
                    <p className="text-gray-700">{approach.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Instructors Section */}
            <section id="instructors" className="scroll-mt-6 mb-16">
              <h2 className="text-3xl font-bold mb-8">Our Instructors</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {instructorHighlights.map((instructor, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                    {instructor.image && (
                      <img 
                        src={instructor.image} 
                        alt={instructor.name}
                        className="w-full h-64 object-cover"
                      />
                    )}
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-1">{instructor.name}</h3>
                      <div className="text-primary-DEFAULT font-medium mb-3">{instructor.title}</div>
                      <div className="text-gray-700 mb-2">
                        <span className="font-semibold">Expertise:</span> {instructor.expertise}
                      </div>
                      <div className="text-gray-700">
                        <span className="font-semibold">Credentials:</span> {instructor.credentials}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 text-center">
                <Link 
                  href="/about/team" 
                  className="inline-block px-6 py-3 bg-light-DEFAULT hover:bg-gray-200 text-gray-800 rounded-lg transition-colors font-medium"
                >
                  Meet Our Full Instructor Team
                </Link>
              </div>
            </section>

            {/* Member Benefits Section */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8">Membership Benefits</h2>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <p className="text-gray-700 mb-6">
                    Members of our Studio Membership Program receive exclusive benefits on educational offerings:
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="border rounded-lg p-5">
                      <h4 className="font-bold text-lg mb-3 text-primary-DEFAULT">Creator & Producer Pass</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span>
                          <span className="text-gray-700">10% discount on all courses and workshops</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span>
                          <span className="text-gray-700">Priority registration for limited-space events</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span>
                          <span className="text-gray-700">Access to member-only study sessions</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="border rounded-lg p-5">
                      <h4 className="font-bold text-lg mb-3 text-primary-DEFAULT">Professional & Partner Tiers</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span>
                          <span className="text-gray-700">20% discount on all educational offerings</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span>
                          <span className="text-gray-700">One free workshop per quarter</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span>
                          <span className="text-gray-700">Personalized learning path consultation</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span>
                          <span className="text-gray-700">Access to instructor office hours</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-6 text-center">
                    <Link 
                      href="/services/membership" 
                      className="inline-block px-6 py-3 bg-primary-DEFAULT hover:bg-primary-dark text-white rounded-lg transition-colors font-medium"
                    >
                      Explore Membership Options
                    </Link>
                  </div>
                </div>
              </div>
            </section>

            {/* FAQ Section */}
            <section id="faqs" className="scroll-mt-6 mb-16">
              <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
              
              <div className="space-y-4">
                {eduFAQs.map((faq, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-xl font-bold mb-2">{faq.question}</h3>
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* CTA Section */}
            <section className="bg-primary-DEFAULT text-white p-8 rounded-lg text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Advance Your Skills?</h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Take the next step in your audio career with our comprehensive educational offerings.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  href="/contact?subject=Education Consultation" 
                  className="px-6 py-3 bg-white text-primary-DEFAULT hover:bg-gray-100 rounded-lg transition-colors font-medium"
                >
                  Schedule a Consultation
                </Link>
                <Link 
                  href="/resources/course-catalog" 
                  className="px-6 py-3 bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-DEFAULT rounded-lg transition-colors font-medium"
                >
                  Download Course Catalog
                </Link>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
} 