'use client';

import React from 'react';
import Link from 'next/link';

export default function MayaRodriguez() {
  const otherClientStories = [
    { name: 'Thomas Chen', link: '/client-stories/thomas-chen' },
    { name: 'Priya Sharma', link: '/client-stories/priya-sharma' },
    { name: 'Devon Williams', link: '/client-stories/devon-williams' },
    { name: 'Sofia Reyes', link: '/client-stories/sofia-reyes' },
    { name: 'Maria Gonzalez', link: '/client-stories/maria-gonzalez' },
  ];

  const servicesUsed = [
    { name: 'Silver Membership', link: '/services/membership' },
    { name: 'Education Platform', link: '/services/education' },
    { name: 'Equipment Rental', link: '/services/equipment-rental' },
  ];

  return (
    <>
      {/* Page Banner */}
      <div className="relative h-96 bg-gradient-to-r from-primary-dark to-primary-DEFAULT overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/wiki-images/page-banners/client-banners/maya-rodriguez-banner.jpg"
            alt="Maya Rodriguez"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="container mx-auto px-4 h-full flex flex-col justify-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Maya Rodriguez</h1>
          <p className="text-2xl mb-6">The Emerging Artist</p>
          <div className="max-w-3xl text-xl italic">
            "Elemental Sound gave me access to studio-quality equipment and expert guidance that transformed my music from bedroom demos to professional releases."
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
                  <span>24</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Occupation:</span>
                  <span>Singer-Songwriter</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Experience:</span>
                  <span>3 years</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Technical Level:</span>
                  <span>Beginner</span>
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
                  <div className="text-3xl font-bold text-secondary-DEFAULT mb-2">$0</div>
                  <div className="text-gray-600">Initial Value</div>
                </div>
                <div className="bg-light-DEFAULT rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-secondary-DEFAULT mb-2">$22K</div>
                  <div className="text-gray-600">Year 1 Value</div>
                </div>
                <div className="bg-light-DEFAULT rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-secondary-DEFAULT mb-2">$64K</div>
                  <div className="text-gray-600">Lifetime Value</div>
                </div>
                <div className="bg-light-DEFAULT rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-secondary-DEFAULT mb-2">340%</div>
                  <div className="text-gray-600">Additional Value</div>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-4">Background</h3>
              <p className="text-gray-700 mb-8">
                Maya Rodriguez is a singer-songwriter who began creating music in her bedroom using entry-level equipment. 
                Despite strong songwriting and vocal abilities, the technical limitations of her setup created a significant gap 
                between her creative vision and the quality of her recordings. After releasing several self-produced singles online 
                with minimal traction, Maya recognized that her production quality was holding back her potential as an artist.
              </p>
              
              <div className="bg-light-DEFAULT p-6 rounded-lg mb-8">
                <h3 className="text-2xl font-bold mb-4">Initial Pain Points</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Poor recording quality despite strong songwriting and performance</li>
                  <li>Limited technical knowledge of audio production</li>
                  <li>Inability to afford professional studio time for full projects</li>
                  <li>Lack of access to quality instruments and recording equipment</li>
                  <li>No guidance on professional recording and production techniques</li>
                  <li>Difficulty creating competitive releases in a crowded market</li>
                </ul>
              </div>
              
              <div className="bg-light-DEFAULT p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Client Goals</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Improve recording and production quality to professional standards</li>
                  <li>Develop technical skills in audio production and engineering</li>
                  <li>Release a professionally produced EP</li>
                  <li>Increase streaming numbers and audience engagement</li>
                  <li>Build a sustainable approach to creating professional recordings</li>
                  <li>Connect with industry professionals and other musicians</li>
                </ul>
              </div>
            </section>
            
            {/* Journey Section */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 pb-2 border-b border-gray-200">Journey with Elemental Sound</h2>
              
              <div className="space-y-12">
                <div className="border-l-4 border-primary-DEFAULT pl-6">
                  <h3 className="text-2xl font-bold mb-4">Discovery Phase (Month 1)</h3>
                  <div className="text-gray-700 space-y-4">
                    <p>
                      Maya discovered Elemental Sound through a free "Recording Basics" workshop she attended after searching 
                      for affordable ways to improve her recordings. The workshop provided immediate actionable tips that made 
                      a noticeable difference in her home recordings.
                    </p>
                    <p>
                      Following the workshop, Maya scheduled a consultation to discuss her goals and challenges. Rather than 
                      pushing expensive services, the Elemental Sound team recommended starting with targeted education to build 
                      her foundation, along with small equipment rentals to address her immediate quality issues.
                    </p>
                  </div>
                </div>
                
                <div className="border-l-4 border-primary-DEFAULT pl-6">
                  <h3 className="text-2xl font-bold mb-4">Initial Service Engagement (Months 2-3)</h3>
                  <div className="text-gray-700 space-y-4">
                    <p>
                      Maya enrolled in Elemental Sound's "Home Recording Essentials" course, which provided structured learning 
                      specifically tailored to singer-songwriters. During this phase, she also began renting basic equipment 
                      upgrades, including:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>A professional condenser microphone</li>
                      <li>A higher-quality audio interface</li>
                      <li>Acoustic treatment panels for her recording space</li>
                    </ul>
                    <p>
                      These modest investments immediately improved her recording quality, confirming the value of the service 
                      and building her confidence to continue developing her skills.
                    </p>
                  </div>
                </div>
                
                <div className="border-l-4 border-primary-DEFAULT pl-6">
                  <h3 className="text-2xl font-bold mb-4">Skill Development (Months 4-7)</h3>
                  <div className="text-gray-700 space-y-4">
                    <p>
                      As her technical knowledge grew, Maya upgraded to a Silver Membership, which gave her access to:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>A small recording booth for vocal tracking</li>
                      <li>Advanced courses on vocal production and mixing</li>
                      <li>Dedicated time with an engineer for technical guidance</li>
                      <li>Community events with other musicians</li>
                    </ul>
                    <p>
                      This more immersive experience accelerated her learning curve and allowed her to re-record several of 
                      her songs with dramatically improved quality. She released two singles during this period that performed 
                      significantly better than her previous releases, with positive listener feedback specifically mentioning 
                      the improved sound quality.
                    </p>
                  </div>
                </div>
                
                <div className="border-l-4 border-primary-DEFAULT pl-6">
                  <h3 className="text-2xl font-bold mb-4">Project Development (Months 8-10)</h3>
                  <div className="text-gray-700 space-y-4">
                    <p>
                      With growing confidence in her technical abilities and access to better resources, Maya began work on 
                      her first professional EP. She used a combination of:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Home recording for initial demos and some final elements</li>
                      <li>Elemental Sound's facilities for critical recordings (vocals, acoustic guitar)</li>
                      <li>Collaboration with other Elemental Sound members for additional instrumentation</li>
                      <li>Mentorship from staff engineers on mixing decisions</li>
                    </ul>
                    <p>
                      This hybrid approach allowed her to maintain creative control while accessing the resources needed for 
                      professional quality. The EP was completed over three months, with Maya handling the majority of the 
                      production herself – a significant evolution from her starting point.
                    </p>
                  </div>
                </div>
                
                <div className="border-l-4 border-primary-DEFAULT pl-6">
                  <h3 className="text-2xl font-bold mb-4">Growth and Expansion (Months 11-18)</h3>
                  <div className="text-gray-700 space-y-4">
                    <p>
                      Following the release of her EP "Echoes & Silences," which received positive reviews and was picked up by 
                      several influential playlists, Maya's career gained significant momentum:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>She began receiving offers for live performances and festival slots</li>
                      <li>Her streaming numbers increased by over 300%</li>
                      <li>She developed connections with other artists in the Elemental Sound community</li>
                      <li>She started producing demos for other emerging artists</li>
                      <li>She secured a development deal with an independent label</li>
                    </ul>
                    <p>
                      Throughout this growth period, Maya maintained her Silver Membership, using it as a reliable foundation 
                      for her expanding career while continuing to develop her home studio setup based on knowledge gained 
                      through the service.
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
                    Maya's journey with Elemental Sound transformed her financially as an artist:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Increased streaming revenue: 380% growth in monthly income</li>
                    <li>Performance income: From $0 to $1,800 average monthly from live shows</li>
                    <li>Production work: Additional $800 monthly from producing for other artists</li>
                    <li>Development deal: $15,000 advance for her next project</li>
                    <li>Cost efficiency: Saved approximately $12,000 compared to traditional studio costs</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold mb-4">Career Development</h3>
                  <p className="text-gray-700 mb-4">
                    Beyond financial metrics, Maya experienced significant career advancement:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Professional network growth: Connections with 20+ industry professionals</li>
                    <li>Technical skill development: From beginner to intermediate producer</li>
                    <li>Media coverage: Featured in 3 music blogs as an emerging artist</li>
                    <li>Playlist placements: 14 editorial playlist inclusions</li>
                    <li>Audience growth: Social media following increased by 240%</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold mb-4">Creative Evolution</h3>
                  <p className="text-gray-700 mb-4">
                    Maya's creative process transformed significantly through her Elemental Sound experience:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Expanded sonic palette through access to diverse instruments and equipment</li>
                    <li>Improved arrangement skills through collaboration with other musicians</li>
                    <li>Developed confidence in production decisions and mixing techniques</li>
                    <li>Created a distinctive sound identity that sets her work apart</li>
                    <li>Integrated technical considerations earlier in the songwriting process</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold mb-4">Before & After Comparison</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-light-DEFAULT p-6 rounded-lg">
                      <h4 className="text-xl font-bold mb-4">Before Elemental Sound</h4>
                      <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        <li>Poor recording quality limiting listener engagement</li>
                        <li>Releases generated minimal streaming income</li>
                        <li>No live performance opportunities</li>
                        <li>Limited to bedroom production capabilities</li>
                        <li>No industry connections or community</li>
                      </ul>
                    </div>
                    
                    <div className="bg-primary-DEFAULT/10 p-6 rounded-lg">
                      <h4 className="text-xl font-bold mb-4">After Elemental Sound</h4>
                      <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        <li>Professional-quality releases competitive in the marketplace</li>
                        <li>Sustainable monthly income from multiple sources</li>
                        <li>Regular live performance opportunities</li>
                        <li>Hybrid production approach combining home and studio work</li>
                        <li>Growing network of industry contacts and collaborators</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-light-DEFAULT p-8 rounded-lg">
                  <h3 className="text-2xl font-bold mb-4">Featured Project: "Echoes & Silences" EP</h3>
                  <p className="text-gray-700 mb-6">
                    Maya's debut EP showcases her artistic and technical growth through her partnership with Elemental Sound:
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-xl font-bold mb-4">Production Approach</h4>
                      <p className="text-gray-700 mb-3">
                        The 5-track EP was created using a hybrid production model:
                      </p>
                      <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        <li>Initial production and arrangements created in Maya's home studio</li>
                        <li>Vocals recorded in Elemental Sound's vocal booth</li>
                        <li>Acoustic instruments recorded in the main studio space</li>
                        <li>Additional musicians sourced through the Elemental Sound community</li>
                        <li>Mixing completed by Maya with mentorship from staff engineers</li>
                        <li>Mastering handled by Elemental Sound's recommended partner</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-xl font-bold mb-4">Project Performance</h4>
                      <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        <li>120,000+ streams across platforms in first three months</li>
                        <li>Featured on Spotify's "Fresh Finds" and "Indie Rising" playlists</li>
                        <li>Positive reviews in three online music publications</li>
                        <li>Led to booking agency representation</li>
                        <li>Attracted interest from independent label (resulting in development deal)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            
            {/* CTA Section */}
            <div className="bg-primary-DEFAULT text-white p-8 rounded-lg mt-16 text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Music?</h3>
              <p className="text-lg mb-6">
                Discover how Elemental Sound can help you bridge the gap between bedroom demos and professional releases 
                through education, equipment access, and expert guidance.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/services/membership" className="btn bg-white text-primary-DEFAULT hover:bg-gray-100">
                  Explore Membership Options
                </Link>
                <Link href="/services/education" className="btn btn-outline border-white text-white hover:bg-white hover:text-primary-DEFAULT">
                  Browse Educational Programs
                </Link>
              </div>
            </div>
          </article>
        </div>
      </main>
    </>
  );
} 