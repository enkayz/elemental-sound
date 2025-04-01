'use client';

import React from 'react';
import Link from 'next/link';

export default function PriyaSharma() {
  const otherClientStories = [
    { name: 'Maya Rodriguez', link: '/client-stories/maya-rodriguez' },
    { name: 'Thomas Chen', link: '/client-stories/thomas-chen' },
    { name: 'Devon Williams', link: '/client-stories/devon-williams' },
    { name: 'Sofia Reyes', link: '/client-stories/sofia-reyes' },
    { name: 'Maria Gonzalez', link: '/client-stories/maria-gonzalez' },
  ];

  const servicesUsed = [
    { name: 'Education Platform', link: '/services/education' },
    { name: 'Studio Membership', link: '/services/membership' },
    { name: 'Equipment Rental', link: '/services/equipment-rental' },
  ];

  return (
    <>
      {/* Page Banner */}
      <div className="relative h-96 bg-gradient-to-r from-primary-dark to-primary-DEFAULT overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/wiki-images/page-banners/client-banners/priya-sharma-banner.jpg"
            alt="Priya Sharma"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="container mx-auto px-4 h-full flex flex-col justify-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Priya Sharma</h1>
          <p className="text-2xl mb-6">The Content Creator</p>
          <div className="max-w-3xl text-xl italic">
            "Elemental Sound transformed my teaching from local classes to a global multimedia education platform that reaches thousands of students."
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Sidebar */}
          <aside className="lg:w-1/4">
            <div className="bg-light-DEFAULT p-6 rounded-lg shadow-md mb-8">
              <h3 className="text-xl font-bold border-b border-gray-200 pb-3 mb-4">Client Profile</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="font-medium">Age:</span>
                  <span>42</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Occupation:</span>
                  <span>Music Educator & Content Creator</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Experience:</span>
                  <span>15 years</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Technical Level:</span>
                  <span>Intermediate</span>
                </div>
              </div>
            </div>

            <div className="bg-light-DEFAULT p-6 rounded-lg shadow-md mb-8">
              <h3 className="text-xl font-bold border-b border-gray-200 pb-3 mb-4">Other Client Stories</h3>
              <ul className="space-y-2">
                {otherClientStories.map((client, index) => (
                  <li key={index}>
                    <Link href={client.link} className="text-primary-DEFAULT hover:text-primary-dark">
                      {client.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-light-DEFAULT p-6 rounded-lg shadow-md mb-8">
              <h3 className="text-xl font-bold border-b border-gray-200 pb-3 mb-4">Services Used</h3>
              <ul className="space-y-2">
                {servicesUsed.map((service, index) => (
                  <li key={index}>
                    <Link href={service.link} className="text-primary-DEFAULT hover:text-primary-dark">
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Main Content */}
          <article className="lg:w-3/4">
            {/* Client Overview Section */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 pb-2 border-b border-gray-200">Client Overview</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                <div className="bg-light-DEFAULT rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-secondary-DEFAULT mb-2">$46K</div>
                  <div className="text-gray-600">Initial Value</div>
                </div>
                <div className="bg-light-DEFAULT rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-secondary-DEFAULT mb-2">$128K</div>
                  <div className="text-gray-600">Year 1 Value</div>
                </div>
                <div className="bg-light-DEFAULT rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-secondary-DEFAULT mb-2">$245K</div>
                  <div className="text-gray-600">Lifetime Value</div>
                </div>
                <div className="bg-light-DEFAULT rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-secondary-DEFAULT mb-2">178%</div>
                  <div className="text-gray-600">Additional Value</div>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-4">Background</h3>
              <p className="text-gray-700 mb-8">
                Priya Sharma is an experienced music educator who had built a respected local teaching practice focused on 
                Indian classical music and fusion styles. With a Ph.D. in ethnomusicology and 15 years of teaching experience, 
                Priya had developed a unique curriculum that was attracting students from across the region. However, she 
                recognized that her traditional teaching model had significant limitations in terms of scale, reach, and 
                revenue potential. She wanted to transform her expertise into digital content and courses but lacked the 
                technical knowledge and equipment to create professional educational media.
              </p>
              
              <div className="bg-light-DEFAULT p-6 rounded-lg mb-8">
                <h3 className="text-2xl font-bold mb-4">Initial Pain Points</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Limited knowledge of audio/video production for educational content</li>
                  <li>No access to quality recording equipment for demonstration videos</li>
                  <li>Poor sound quality in early self-produced tutorials</li>
                  <li>Inability to capture nuanced instrumental techniques visually</li>
                  <li>Limited technical understanding of online course platforms</li>
                  <li>Difficulty scaling teaching business beyond in-person sessions</li>
                </ul>
              </div>
              
              <div className="bg-light-DEFAULT p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Client Goals</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Develop professional-quality educational content</li>
                  <li>Create a comprehensive online course curriculum</li>
                  <li>Establish a multimedia platform for global music education</li>
                  <li>Generate passive income streams through digital products</li>
                  <li>Build a sustainable online educational business</li>
                  <li>Preserve and share traditional musical knowledge</li>
                </ul>
              </div>
            </section>
            
            {/* Journey Section */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 pb-2 border-b border-gray-200">Journey with Elemental Sound</h2>
              
              <div className="space-y-12">
                <div className="border-l-4 border-primary-DEFAULT pl-6">
                  <h3 className="text-2xl font-bold mb-4">Educational Foundation (Months 1-3)</h3>
                  <div className="text-gray-700 space-y-4">
                    <p>
                      Priya began her journey with Elemental Sound through their Education Platform, where she enrolled 
                      in courses specifically focused on content creation:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>"Audio Production for Content Creators" foundational course</li>
                      <li>"Video Production Essentials" workshop series</li>
                      <li>"Creating Engaging Educational Content" specialized curriculum</li>
                    </ul>
                    <p>
                      The education team recognized Priya's unique position as both a student and an educator with specialized 
                      knowledge. They paired her with a mentor who had experience in educational content creation, providing 
                      personalized guidance that accelerated her learning curve significantly.
                    </p>
                  </div>
                </div>
                
                <div className="border-l-4 border-primary-DEFAULT pl-6">
                  <h3 className="text-2xl font-bold mb-4">Technical Development (Months 4-6)</h3>
                  <div className="text-gray-700 space-y-4">
                    <p>
                      As her understanding of production techniques grew, Priya upgraded to a Bronze Membership, 
                      giving her access to:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Dedicated multi-camera video recording space</li>
                      <li>Professional audio equipment optimized for instrument recording</li>
                      <li>Hands-on support from technical staff during initial sessions</li>
                      <li>Post-production workstations with educational software licenses</li>
                    </ul>
                    <p>
                      During this phase, Priya focused on developing her technical skills and creating prototype content. 
                      She experimented with different recording setups, camera angles, and teaching approaches to determine 
                      the most effective methods for communicating complex musical concepts through video.
                    </p>
                  </div>
                </div>
                
                <div className="border-l-4 border-primary-DEFAULT pl-6">
                  <h3 className="text-2xl font-bold mb-4">Content Creation (Months 7-12)</h3>
                  <div className="text-gray-700 space-y-4">
                    <p>
                      With a solid foundation in place, Priya began systematic content production:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Recorded over 200 instructional videos covering her curriculum</li>
                      <li>Created demonstration performances of traditional compositions</li>
                      <li>Developed supplementary audio files for practice and reference</li>
                      <li>Built a content library organized by skill level and musical concept</li>
                      <li>Produced introductory materials for marketing purposes</li>
                    </ul>
                    <p>
                      During this intensive production phase, Priya maintained a consistent schedule of studio time at 
                      Elemental Sound, developing an efficient workflow that maximized her productivity. The technical 
                      team provided ongoing support, helping her solve production challenges and improve quality continuously.
                    </p>
                  </div>
                </div>
                
                <div className="border-l-4 border-primary-DEFAULT pl-6">
                  <h3 className="text-2xl font-bold mb-4">Platform Development (Months 13-18)</h3>
                  <div className="text-gray-700 space-y-4">
                    <p>
                      With a substantial content library created, Priya worked with Elemental Sound's network of digital 
                      specialists to develop and launch her educational platform:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Selected appropriate hosting and delivery systems for courses</li>
                      <li>Structured content into progressive curriculum paths</li>
                      <li>Integrated assessment tools and interactive components</li>
                      <li>Developed payment and subscription systems</li>
                      <li>Created marketing assets using Elemental Sound's resources</li>
                    </ul>
                    <p>
                      Elemental Sound's community became valuable during this phase, as Priya connected with web developers, 
                      digital marketers, and business consultants who were part of the membership network. These collaborations 
                      helped her navigate the technical and business aspects of launching an educational platform.
                    </p>
                  </div>
                </div>
                
                <div className="border-l-4 border-primary-DEFAULT pl-6">
                  <h3 className="text-2xl font-bold mb-4">Business Expansion (Months 19-24)</h3>
                  <div className="text-gray-700 space-y-4">
                    <p>
                      Following the successful launch of her platform "Classical Connections," Priya experienced rapid growth:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Reached over 2,500 students across 45 countries</li>
                      <li>Generated sustainable monthly subscription revenue</li>
                      <li>Attracted partnership offers from music institutions</li>
                      <li>Developed additional course categories based on student feedback</li>
                      <li>Began training assistant instructors to scale operations</li>
                    </ul>
                    <p>
                      As her business expanded, Priya maintained her relationship with Elemental Sound, continuing to use the 
                      facilities for new content production while also becoming a contributor to their education platform. 
                      This mutually beneficial arrangement allowed her to maintain high production quality while accessing new 
                      audiences through Elemental Sound's network.
                    </p>
                  </div>
                </div>
              </div>
            </section>
            
            {/* Business Impact Section */}
            <section>
              <h2 className="text-3xl font-bold mb-8 pb-2 border-b border-gray-200">Business Impact Analysis</h2>
              
              <div className="space-y-10">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Financial Impact</h3>
                  <p className="text-gray-700 mb-4">
                    Priya's educational business was transformed through her partnership with Elemental Sound:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Revenue growth: 178% increase in annual revenue</li>
                    <li>Recurring revenue: 85% of income shifted to subscription model</li>
                    <li>Market expansion: Customer base grown from local (approx. 40 students) to global (2,500+ students)</li>
                    <li>Pricing leverage: Average student value increased by 65% through premium content offerings</li>
                    <li>Diversified income: Added supplementary revenue through instrument guides, notation books, and backing tracks</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold mb-4">Educational Impact</h3>
                  <p className="text-gray-700 mb-4">
                    Beyond financial metrics, Priya's educational reach expanded dramatically:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Knowledge preservation: Documented extensive traditional techniques previously passed only through direct teaching</li>
                    <li>Cultural reach: Made specialized musical training accessible globally</li>
                    <li>Student diversity: Expanded from primarily adult students to all age ranges</li>
                    <li>Instructional depth: Created detailed visual documentation of techniques difficult to communicate verbally</li>
                    <li>Pedagogical innovation: Developed new teaching methods optimized for digital delivery</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold mb-4">Business Transformation</h3>
                  <p className="text-gray-700 mb-4">
                    Priya's business model evolved significantly through her Elemental Sound experience:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Scalable system: From time-limited teaching capacity to unlimited student potential</li>
                    <li>Asset creation: Built a valuable content library with long-term earning potential</li>
                    <li>Brand development: Established recognized expertise in a specialized educational niche</li>
                    <li>Team expansion: Grew from solo teacher to small team with specialized roles</li>
                    <li>Institutional partnerships: Formed relationships with music schools and cultural organizations</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold mb-4">Before & After Comparison</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-light-DEFAULT p-6 rounded-lg">
                      <h4 className="text-xl font-bold mb-4">Before Elemental Sound</h4>
                      <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        <li>Limited to in-person teaching (40 students maximum capacity)</li>
                        <li>Geographically restricted to local market</li>
                        <li>Income directly tied to teaching hours</li>
                        <li>No significant digital assets or content</li>
                        <li>Expertise limited by physical teaching constraints</li>
                      </ul>
                    </div>
                    
                    <div className="bg-primary-DEFAULT/10 p-6 rounded-lg">
                      <h4 className="text-xl font-bold mb-4">After Elemental Sound</h4>
                      <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        <li>Global digital platform reaching thousands of students</li>
                        <li>Unrestricted geographic market access</li>
                        <li>Subscription and product-based revenue separate from teaching time</li>
                        <li>Extensive library of valuable educational content</li>
                        <li>Globally recognized expertise in specialized musical tradition</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-light-DEFAULT p-8 rounded-lg">
                  <h3 className="text-2xl font-bold mb-4">Featured Project: Classical Connections Platform</h3>
                  <p className="text-gray-700 mb-6">
                    Priya's flagship educational platform showcases the transformation of her teaching business:
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-xl font-bold mb-4">Platform Approach</h4>
                      <p className="text-gray-700 mb-3">
                        The comprehensive educational system was developed using Elemental Sound's resources:
                      </p>
                      <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        <li>Multi-tiered curriculum from beginner to advanced levels</li>
                        <li>High-definition video demonstrations with multiple camera angles</li>
                        <li>Professional audio recordings of all musical examples</li>
                        <li>Interactive notation and theory resources</li>
                        <li>Community features connecting students globally</li>
                        <li>Live virtual masterclass capabilities</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-xl font-bold mb-4">Platform Impact</h4>
                      <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        <li>2,500+ active students across 45 countries</li>
                        <li>Featured in major music education publications</li>
                        <li>Partnership with three major conservatories</li>
                        <li>Cultural preservation grant received for documentation work</li>
                        <li>91% student satisfaction rating across all courses</li>
                        <li>Growing network of certified assistant instructors</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            
            {/* CTA Section */}
            <div className="bg-primary-DEFAULT text-white p-8 rounded-lg mt-16 text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Teaching Into a Global Platform?</h3>
              <p className="text-lg mb-6">
                Discover how Elemental Sound can help you create professional educational content and expand your teaching
                business beyond physical limitations.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/services/education" className="btn bg-white text-primary-DEFAULT hover:bg-gray-100">
                  Explore Education Platform
                </Link>
                <Link href="/services/membership" className="btn btn-outline border-white text-white hover:bg-white hover:text-primary-DEFAULT">
                  View Membership Options
                </Link>
              </div>
            </div>
          </article>
        </div>
      </main>
    </>
  );
} 