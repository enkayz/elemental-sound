'use client';

import React from 'react';
import Link from 'next/link';

export default function DevonWilliams() {
  const otherClientStories = [
    { name: 'Maya Rodriguez', link: '/client-stories/maya-rodriguez' },
    { name: 'Thomas Chen', link: '/client-stories/thomas-chen' },
    { name: 'Priya Sharma', link: '/client-stories/priya-sharma' },
    { name: 'Sofia Reyes', link: '/client-stories/sofia-reyes' },
    { name: 'Maria Gonzalez', link: '/client-stories/maria-gonzalez' },
  ];

  const servicesUsed = [
    { name: 'Silver Membership', link: '/services/membership' },
    { name: 'Equipment Rental', link: '/services/equipment-rental' },
    { name: 'Studio Space', link: '/services/studio-space' },
  ];

  return (
    <>
      {/* Page Banner */}
      <div className="relative h-96 bg-gradient-to-r from-primary-dark to-primary-DEFAULT overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/wiki-images/page-banners/client-banners/devon-williams-banner.jpg"
            alt="Devon Williams"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="container mx-auto px-4 h-full flex flex-col justify-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Devon Williams</h1>
          <p className="text-2xl mb-6">The Music Producer</p>
          <div className="max-w-3xl text-xl italic">
            "Elemental Sound provided the professional environment and equipment I needed to elevate my productions and attract higher-profile clients."
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
                  <span>29</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Occupation:</span>
                  <span>Music Producer & Beat Maker</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Experience:</span>
                  <span>7 years</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Technical Level:</span>
                  <span>Advanced</span>
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
                  <div className="text-3xl font-bold text-secondary-DEFAULT mb-2">$28K</div>
                  <div className="text-gray-600">Initial Value</div>
                </div>
                <div className="bg-light-DEFAULT rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-secondary-DEFAULT mb-2">$76K</div>
                  <div className="text-gray-600">Year 1 Value</div>
                </div>
                <div className="bg-light-DEFAULT rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-secondary-DEFAULT mb-2">$156K</div>
                  <div className="text-gray-600">Lifetime Value</div>
                </div>
                <div className="bg-light-DEFAULT rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-secondary-DEFAULT mb-2">171%</div>
                  <div className="text-gray-600">Additional Value</div>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-4">Background</h3>
              <p className="text-gray-700 mb-8">
                Devon Williams had established himself in the local hip-hop and R&B scene as a talented producer creating beats
                and producing tracks for emerging artists. Despite his reputation for quality production and innovative sound design,
                Devon was struggling to break through to the next level. His home studio setup, while functional, lacked the
                professional environment and high-end equipment needed to attract more established clients and command higher rates.
                He was also limited in his ability to record vocalists and live instruments, restricting the scope of projects
                he could take on.
              </p>
              
              <div className="bg-light-DEFAULT p-6 rounded-lg mb-8">
                <h3 className="text-2xl font-bold mb-4">Initial Pain Points</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Inadequate recording environment for vocals and live instruments</li>
                  <li>Limited access to high-end outboard gear for professional sound</li>
                  <li>Difficulty providing a professional client experience in home setup</li>
                  <li>Unable to accommodate sessions with multiple artists</li>
                  <li>Restricted by neighbors and noise complaints for late-night sessions</li>
                  <li>Struggling to compete with studios for higher-profile projects</li>
                </ul>
              </div>
              
              <div className="bg-light-DEFAULT p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Client Goals</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Elevate production quality to professional standards</li>
                  <li>Attract more established artists as clients</li>
                  <li>Expand service offerings to include full recording capabilities</li>
                  <li>Increase project fees and overall income</li>
                  <li>Build a network of industry connections</li>
                  <li>Create a more sustainable and scalable business model</li>
                </ul>
              </div>
            </section>
            
            {/* Journey Section */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 pb-2 border-b border-gray-200">Journey with Elemental Sound</h2>
              
              <div className="space-y-12">
                <div className="border-l-4 border-primary-DEFAULT pl-6">
                  <h3 className="text-2xl font-bold mb-4">Discovery & Assessment (Month 1)</h3>
                  <div className="text-gray-700 space-y-4">
                    <p>
                      Devon discovered Elemental Sound through a networking event for local music producers. After an initial
                      tour of the facilities, he scheduled a consultation with the membership team. Rather than a one-size-fits-all
                      approach, Elemental Sound conducted a comprehensive assessment of Devon's:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Existing workflow and production style</li>
                      <li>Client base and target market</li>
                      <li>Technical strengths and areas for development</li>
                      <li>Business goals and growth strategy</li>
                    </ul>
                    <p>
                      This personalized assessment allowed Elemental Sound to recommend a customized membership package that would
                      complement Devon's existing setup and address his specific challenges.
                    </p>
                  </div>
                </div>
                
                <div className="border-l-4 border-primary-DEFAULT pl-6">
                  <h3 className="text-2xl font-bold mb-4">Initial Integration (Months 2-3)</h3>
                  <div className="text-gray-700 space-y-4">
                    <p>
                      Devon started with a Silver Membership, which provided him with:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>32 hours per month of studio time in Recording Room B</li>
                      <li>Access to a professionally treated vocal booth</li>
                      <li>Use of high-end microphones and preamps</li>
                      <li>Limited access to the main control room for mixing</li>
                      <li>Ability to bring clients into a professional environment</li>
                    </ul>
                    <p>
                      During this phase, Devon focused on integrating Elemental Sound's resources into his existing workflow.
                      He continued creating beats and arrangements in his home studio, then brought clients to Elemental Sound
                      for vocal recording and final mixing. This hybrid approach allowed him to maximize efficiency while
                      significantly elevating the quality of his final product.
                    </p>
                  </div>
                </div>
                
                <div className="border-l-4 border-primary-DEFAULT pl-6">
                  <h3 className="text-2xl font-bold mb-4">Service Expansion (Months 4-7)</h3>
                  <div className="text-gray-700 space-y-4">
                    <p>
                      As clients responded positively to the improved quality and professional environment, Devon expanded his service offerings:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Added full vocal production packages featuring Elemental Sound's facilities</li>
                      <li>Began offering recording sessions for live instrumentalists</li>
                      <li>Created premium mixing packages utilizing Elemental Sound's control room</li>
                      <li>Developed collaborative sessions with multiple artists</li>
                      <li>Started hosting small listening sessions in the studio lounge</li>
                    </ul>
                    <p>
                      These expanded services allowed Devon to increase his rates by an average of 40% while attracting a higher
                      caliber of clients. The professional environment and equipment at Elemental Sound became a key selling point
                      in his marketing efforts.
                    </p>
                  </div>
                </div>
                
                <div className="border-l-4 border-primary-DEFAULT pl-6">
                  <h3 className="text-2xl font-bold mb-4">Network Development (Months 8-12)</h3>
                  <div className="text-gray-700 space-y-4">
                    <p>
                      Beyond the technical resources, Devon began to leverage Elemental Sound's community network:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Connected with session musicians who became regular collaborators</li>
                      <li>Formed relationships with other producers for knowledge exchange</li>
                      <li>Met engineers who provided specialized mixing and mastering services</li>
                      <li>Built connections with industry professionals who visited the facility</li>
                      <li>Participated in Elemental Sound's showcase events to feature his artists</li>
                    </ul>
                    <p>
                      This expanding network created both creative and business opportunities. Devon began collaborating with other
                      producers on projects, referring clients to complementary services within the Elemental Sound community, and
                      receiving referrals in return.
                    </p>
                  </div>
                </div>
                
                <div className="border-l-4 border-primary-DEFAULT pl-6">
                  <h3 className="text-2xl font-bold mb-4">Business Transformation (Months 13-18)</h3>
                  <div className="text-gray-700 space-y-4">
                    <p>
                      With a solid foundation in place, Devon implemented strategic changes to his business model:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Rebranded as a full-service production company rather than just a beat maker</li>
                      <li>Created tiered service packages with clear deliverables and pricing</li>
                      <li>Developed a roster of collaborators for specialized aspects of production</li>
                      <li>Established relationships with local labels and management companies</li>
                      <li>Positioned himself as a premium producer in the regional market</li>
                    </ul>
                    <p>
                      These changes transformed Devon's business from a one-person operation with fluctuating income to a
                      structured production service with consistent revenue streams and growth potential. His association with
                      Elemental Sound became a key component of his professional identity and value proposition.
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
                    Devon's partnership with Elemental Sound transformed his production business financially:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Revenue growth: 171% increase in annual revenue</li>
                    <li>Average project value: Increased from $800 to $2,200 per project</li>
                    <li>Client retention: Improved from 35% to 72% for repeat business</li>
                    <li>Premium services: Added high-margin services representing 40% of total revenue</li>
                    <li>Operating costs: Reduced home studio overhead while maximizing professional resources</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold mb-4">Production Quality Improvement</h3>
                  <p className="text-gray-700 mb-4">
                    The technical resources at Elemental Sound significantly elevated Devon's production quality:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Vocal recordings: Dramatically improved clarity, presence, and professional polish</li>
                    <li>Sonic palette: Expanded through access to vintage and boutique equipment</li>
                    <li>Mix quality: Enhanced through professional monitoring environment and outboard gear</li>
                    <li>Production scope: Broadened to include live instruments and ensemble recording</li>
                    <li>Competitive quality: Achieved parity with commercial releases in target market</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold mb-4">Client Base Evolution</h3>
                  <p className="text-gray-700 mb-4">
                    Devon's client profile transformed significantly:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Artist caliber: Shifted from primarily unsigned artists to established regional acts</li>
                    <li>Project scope: Expanded from single beats to full EP and album productions</li>
                    <li>Client geography: Extended beyond local to regional and some national clients</li>
                    <li>Industry recognition: Attracted label-backed projects and commercial opportunities</li>
                    <li>Client satisfaction: Consistently high ratings leading to strong referral business</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold mb-4">Before & After Comparison</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-light-DEFAULT p-6 rounded-lg">
                      <h4 className="text-xl font-bold mb-4">Before Elemental Sound</h4>
                      <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        <li>Limited to beat creation and basic production services</li>
                        <li>Unprofessional recording environment restricting client quality</li>
                        <li>Ceiling on rates due to technical and space limitations</li>
                        <li>Inconsistent work schedule dependent on client budgets</li>
                        <li>Local reputation without broader industry connections</li>
                      </ul>
                    </div>
                    
                    <div className="bg-primary-DEFAULT/10 p-6 rounded-lg">
                      <h4 className="text-xl font-bold mb-4">After Elemental Sound</h4>
                      <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        <li>Full-service production offerings commanding premium rates</li>
                        <li>Professional environment attracting higher-caliber clients</li>
                        <li>Structured pricing model with clear value proposition</li>
                        <li>Consistent project pipeline through reputation and referrals</li>
                        <li>Regional recognition with growing industry network</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-light-DEFAULT p-8 rounded-lg">
                  <h3 className="text-2xl font-bold mb-4">Featured Project: "Midnight City" EP</h3>
                  <p className="text-gray-700 mb-6">
                    A showcase project demonstrating Devon's enhanced capabilities through Elemental Sound:
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-xl font-bold mb-4">Project Approach</h4>
                      <p className="text-gray-700 mb-3">
                        Devon produced a 6-track EP for a regional R&B artist that showcased his expanded production capabilities:
                      </p>
                      <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        <li>Created initial beats and arrangements in his home studio</li>
                        <li>Recorded vocals in Elemental Sound's professional booth</li>
                        <li>Brought in session musicians for live instrument overdubs</li>
                        <li>Mixed the project in Elemental Sound's control room</li>
                        <li>Hosted a listening session for industry contacts in the studio lounge</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-xl font-bold mb-4">Project Impact</h4>
                      <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        <li>Project budget: $12,000 (4x Devon's previous average)</li>
                        <li>Streaming performance: Over 500,000 cumulative streams</li>
                        <li>Media coverage: Featured in three regional music publications</li>
                        <li>Industry attention: Led to meetings with two independent labels</li>
                        <li>Portfolio value: Became a showcase project attracting similar clients</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            
            {/* CTA Section */}
            <div className="bg-primary-DEFAULT text-white p-8 rounded-lg mt-16 text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Elevate Your Production Business?</h3>
              <p className="text-lg mb-6">
                Discover how Elemental Sound can help you access professional facilities, quality equipment, and valuable
                connections to take your music production to the next level.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/services/membership" className="btn bg-white text-primary-DEFAULT hover:bg-gray-100">
                  Explore Membership Options
                </Link>
                <Link href="/services/studio-space" className="btn btn-outline border-white text-white hover:bg-white hover:text-primary-DEFAULT">
                  View Studio Facilities
                </Link>
              </div>
            </div>
          </article>
        </div>
      </main>
    </>
  );
} 