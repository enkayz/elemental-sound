'use client';

import React from 'react';
import Link from 'next/link';

export default function MariaGonzalez() {
  const otherClientStories = [
    { name: 'Maya Rodriguez', link: '/client-stories/maya-rodriguez' },
    { name: 'Thomas Chen', link: '/client-stories/thomas-chen' },
    { name: 'Priya Sharma', link: '/client-stories/priya-sharma' },
    { name: 'Devon Williams', link: '/client-stories/devon-williams' },
    { name: 'Sofia Reyes', link: '/client-stories/sofia-reyes' },
  ];

  const servicesUsed = [
    { name: 'Platinum Membership', link: '/services/membership' },
    { name: 'Business Consultation', link: '/services/consultation' },
    { name: 'Mobile Recording', link: '/services/mobile-recording' },
    { name: 'Equipment Purchase Program', link: '/services/equipment' },
  ];

  return (
    <>
      {/* Page Banner */}
      <div className="relative h-96 bg-gradient-to-r from-primary-dark to-primary-DEFAULT overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/wiki-images/page-banners/client-banners/maria-gonzalez-banner.jpg"
            alt="Maria Gonzalez"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="container mx-auto px-4 h-full flex flex-col justify-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Maria Gonzalez</h1>
          <p className="text-2xl mb-6">The Independent Studio Owner</p>
          <div className="max-w-3xl text-xl italic">
            "Elemental Sound's expertise helped me transform my struggling home studio into a thriving business serving over 50 clients annually."
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
                  <span>37</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Occupation:</span>
                  <span>Studio Owner & Engineer</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Experience:</span>
                  <span>9 years</span>
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
                  <div className="text-3xl font-bold text-secondary-DEFAULT mb-2">$25K</div>
                  <div className="text-gray-600">Initial Revenue</div>
                </div>
                <div className="bg-light-DEFAULT rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-secondary-DEFAULT mb-2">$175K</div>
                  <div className="text-gray-600">Year 1 Revenue</div>
                </div>
                <div className="bg-light-DEFAULT rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-secondary-DEFAULT mb-2">$420K</div>
                  <div className="text-gray-600">Year 2 Revenue</div>
                </div>
                <div className="bg-light-DEFAULT rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-secondary-DEFAULT mb-2">1580%</div>
                  <div className="text-gray-600">Growth in 2 Years</div>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-4">Background</h3>
              <p className="text-gray-700 mb-8">
                Maria Gonzalez started her home recording studio "Soundwave Studios" five years ago after leaving her position 
                as an assistant engineer at a larger facility. Despite her extensive technical knowledge and musical background,
                her studio struggled to attract and retain clients beyond her immediate network. Operating out of a converted
                garage with limited equipment, Maria found herself caught in a cycle of low-budget projects that couldn't 
                generate enough revenue for meaningful expansion. She was considering giving up on her dream and returning to
                working for others when she discovered Elemental Sound's business consultation and membership programs.
              </p>
              
              <div className="bg-light-DEFAULT p-6 rounded-lg mb-8">
                <h3 className="text-2xl font-bold mb-4">Initial Pain Points</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Limited equipment preventing higher-end projects</li>
                  <li>Inadequate acoustic treatment compromising recording quality</li>
                  <li>Inability to handle multiple clients or larger ensembles</li>
                  <li>Inconsistent client flow creating financial instability</li>
                  <li>Lack of specialized gear for diverse recording needs</li>
                  <li>No clear business model or pricing strategy</li>
                  <li>Minimal marketing presence and professional network</li>
                </ul>
              </div>
              
              <div className="bg-light-DEFAULT p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Client Goals</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Transform hobby studio into a sustainable business</li>
                  <li>Develop a clear business model and service offerings</li>
                  <li>Upgrade facilities to accommodate professional projects</li>
                  <li>Establish recurring revenue streams beyond one-off projects</li>
                  <li>Build a reputation as a specialized boutique studio</li>
                  <li>Create a network of industry connections and referrals</li>
                  <li>Achieve financial stability through studio operations</li>
                </ul>
              </div>
            </section>
            
            {/* Journey Section */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 pb-2 border-b border-gray-200">Journey with Elemental Sound</h2>
              
              <div className="space-y-12">
                <div className="border-l-4 border-primary-DEFAULT pl-6">
                  <h3 className="text-2xl font-bold mb-4">Business Assessment & Strategy (Months 1-2)</h3>
                  <div className="text-gray-700 space-y-4">
                    <p>
                      Maria's journey began with Elemental Sound's comprehensive business consultation service, which provided:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Complete technical assessment of her existing equipment and facilities</li>
                      <li>Market analysis of the local recording studio landscape</li>
                      <li>Financial review of her current business model and pricing</li>
                      <li>Identification of potential specialty niches based on her strengths</li>
                      <li>Development of a phased growth plan with realistic milestones</li>
                    </ul>
                    <p>
                      This systematic evaluation helped Maria understand that her technical skills were not the issue—it was her business
                      approach and studio limitations that were holding her back. The consultation revealed an underserved market for
                      acoustic instrument recording in her region, particularly for classical and jazz musicians who needed high-quality
                      documentation of live performances. This insight helped shape her subsequent business decisions.
                    </p>
                  </div>
                </div>
                
                <div className="border-l-4 border-primary-DEFAULT pl-6">
                  <h3 className="text-2xl font-bold mb-4">Facility Redesign & Equipment Upgrade (Months 3-6)</h3>
                  <div className="text-gray-700 space-y-4">
                    <p>
                      With a clear strategic direction, Maria leveraged Elemental Sound's Equipment Purchase Program to make critical improvements:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Comprehensive acoustic treatment designed specifically for her space</li>
                      <li>Strategic equipment purchases focused on acoustic recording</li>
                      <li>Installation of a specialized microphone locker with premium options</li>
                      <li>Creation of a flexible space that could accommodate small ensembles</li>
                      <li>Optimized control room design for accurate monitoring</li>
                      <li>Integration of mobile recording capabilities to serve on-location needs</li>
                    </ul>
                    <p>
                      Rather than attempting to compete with larger studios across all services, Maria focused her investment on creating
                      an exceptional acoustic recording environment. The Equipment Purchase Program allowed her to acquire professional
                      gear through an affordable payment structure that aligned with her projected revenue growth. Elemental Sound's
                      technical team provided hands-on assistance with the studio design and equipment integration, ensuring every dollar
                      was strategically invested.
                    </p>
                  </div>
                </div>
                
                <div className="border-l-4 border-primary-DEFAULT pl-6">
                  <h3 className="text-2xl font-bold mb-4">Service Development & Specialization (Months 7-9)</h3>
                  <div className="text-gray-700 space-y-4">
                    <p>
                      With her newly enhanced facility, Maria worked with Elemental Sound's business team to develop structured service offerings:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Premium acoustic recording packages for classical and jazz musicians</li>
                      <li>Recurring monthly sessions for local music schools and universities</li>
                      <li>Live concert recording services using Elemental Sound's mobile equipment</li>
                      <li>Archival and restoration services for existing recordings</li>
                      <li>Specialized post-production packages for acoustic material</li>
                      <li>Bundle offerings that combined studio time with mixing and mastering</li>
                    </ul>
                    <p>
                      This service structuring helped Maria move away from hourly billing to more profitable package-based pricing,
                      increasing her average project value by 380%. Her Platinum Membership at Elemental Sound allowed her to supplement
                      her services by booking their larger facilities when needed, enabling her to take on projects that would have
                      been impossible in her studio alone.
                    </p>
                  </div>
                </div>
                
                <div className="border-l-4 border-primary-DEFAULT pl-6">
                  <h3 className="text-2xl font-bold mb-4">Marketing & Network Development (Months 10-14)</h3>
                  <div className="text-gray-700 space-y-4">
                    <p>
                      With her technical foundation and service offerings in place, Maria leveraged Elemental Sound's community to build her client base:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Professional portfolio development showcasing her specialized recording capabilities</li>
                      <li>Integration with Elemental Sound's referral network for overflow projects</li>
                      <li>Participation in industry events and demonstrations hosted at Elemental Sound</li>
                      <li>Collaborative marketing with complementary service providers</li>
                      <li>Strategic partnerships with local music education institutions</li>
                      <li>Development of a content strategy highlighting client success stories</li>
                    </ul>
                    <p>
                      Maria's association with Elemental Sound lent credibility to her rebranded studio. Rather than competing with
                      larger facilities, she positioned Soundwave Studios as a boutique alternative specializing in acoustic excellence.
                      Her participation in Elemental Sound's community events connected her with clients she would never have encountered
                      through her previous isolated approach.
                    </p>
                  </div>
                </div>
                
                <div className="border-l-4 border-primary-DEFAULT pl-6">
                  <h3 className="text-2xl font-bold mb-4">Business Expansion & Team Development (Months 15-24)</h3>
                  <div className="text-gray-700 space-y-4">
                    <p>
                      With steady growth in both clients and revenue, Maria scaled her operation with continued support from Elemental Sound:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Expansion to a larger commercial facility with multiple recording spaces</li>
                      <li>Hiring of part-time technical staff trained through Elemental Sound's education program</li>
                      <li>Development of intern program with local universities</li>
                      <li>Creation of a secondary revenue stream through equipment rental</li>
                      <li>Addition of post-production services for projects not recorded at her facility</li>
                      <li>Launch of specialized workshops leveraging her classical recording expertise</li>
                    </ul>
                    <p>
                      Maria's business transformation culminated in a move to a dedicated commercial space, tripling her studio's
                      capacity while maintaining her acoustic recording specialty. The expanded facility allowed her to serve
                      multiple clients simultaneously and offer complementary services that increased the lifetime value of each
                      client relationship. Throughout this expansion, Elemental Sound's business mentorship program provided
                      guidance on managing growth without compromising quality or taking on unsustainable debt.
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
                    Maria's studio transformation resulted in dramatic financial improvements:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Revenue growth: From $25,000 to $420,000 annually within two years</li>
                    <li>Average project value: Increased from $750 to $3,600</li>
                    <li>Profit margin: Improved from 18% to 42% through optimized service packages</li>
                    <li>Recurring revenue: 65% of business now comes from repeat clients and contracts</li>
                    <li>Diversified income: Added equipment rental, workshops, and post-production services</li>
                    <li>Asset value: Studio property and equipment now valued at $380,000</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold mb-4">Operational Transformation</h3>
                  <p className="text-gray-700 mb-4">
                    The business structure and operations evolved substantially:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Capacity increase: From one room serving one client to three rooms serving multiple clients</li>
                    <li>Booking rate: Improved from 30% to 85% studio utilization</li>
                    <li>Team growth: From solo operation to four part-time staff plus interns</li>
                    <li>Service expansion: From recording-only to full production services</li>
                    <li>Client retention: 78% of clients return for additional projects</li>
                    <li>Project timeline: Reduced average project completion time by 40%</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold mb-4">Market Position</h3>
                  <p className="text-gray-700 mb-4">
                    Soundwave Studios established a distinctive position in the market:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Reputation: Recognized as the premier acoustic recording facility in the region</li>
                    <li>Partnerships: Established formal relationships with two universities and three music schools</li>
                    <li>Industry standing: Featured in regional industry publications and events</li>
                    <li>Client diversity: Portfolio expanded from local bands to professional ensembles and institutions</li>
                    <li>Competitive advantage: Clearly differentiated services from general-purpose studios</li>
                    <li>Regional reach: Now attracts clients from a 200-mile radius</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold mb-4">Before & After Comparison</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-light-DEFAULT p-6 rounded-lg">
                      <h4 className="text-xl font-bold mb-4">Before Elemental Sound</h4>
                      <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        <li>Single-room converted garage with limited capacity</li>
                        <li>Struggling to attract clients beyond personal connections</li>
                        <li>Barely breaking even with inconsistent project flow</li>
                        <li>Competing unsuccessfully against larger studios</li>
                        <li>No clear business identity or specialization</li>
                      </ul>
                    </div>
                    
                    <div className="bg-primary-DEFAULT/10 p-6 rounded-lg">
                      <h4 className="text-xl font-bold mb-4">After Elemental Sound</h4>
                      <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        <li>Professional multi-room facility with specialized capabilities</li>
                        <li>Established client base including institutions and professional musicians</li>
                        <li>Profitable business with multiple revenue streams</li>
                        <li>Complementary relationship with larger studios through specialization</li>
                        <li>Recognized brand identity as acoustic recording specialists</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-light-DEFAULT p-8 rounded-lg">
                  <h3 className="text-2xl font-bold mb-4">Featured Project: Symphony Orchestra Recording Series</h3>
                  <p className="text-gray-700 mb-6">
                    A signature achievement demonstrating the transformation of Maria's business capabilities:
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-xl font-bold mb-4">Project Approach</h4>
                      <p className="text-gray-700 mb-3">
                        Maria secured a contract to record the regional symphony orchestra's entire season:
                      </p>
                      <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        <li>Combined Soundwave Studio's specialized microphone collection with Elemental Sound's mobile recording setup</li>
                        <li>Developed a custom recording approach for the specific acoustics of the concert hall</li>
                        <li>Created both stereo and multi-track recordings to support diverse release formats</li>
                        <li>Implemented an efficient post-production workflow using both facilities</li>
                        <li>Designed comprehensive archival and distribution systems for the orchestra</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-xl font-bold mb-4">Project Impact</h4>
                      <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        <li>Generated $86,000 in revenue from a single client relationship</li>
                        <li>Led to similar contracts with two additional performance organizations</li>
                        <li>Provided content for a critically acclaimed commercial release</li>
                        <li>Created a showcase of Soundwave Studios' capabilities for potential clients</li>
                        <li>Established Maria as a leading expert in orchestral recording</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            
            {/* CTA Section */}
            <div className="bg-primary-DEFAULT text-white p-8 rounded-lg mt-16 text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Studio Business?</h3>
              <p className="text-lg mb-6">
                Discover how Elemental Sound's business consultation and membership programs can help you transform
                your recording studio into a thriving, sustainable business with specialized capabilities.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/services/consultation" className="btn bg-white text-primary-DEFAULT hover:bg-gray-100">
                  Schedule a Business Consultation
                </Link>
                <Link href="/services/membership" className="btn btn-outline border-white text-white hover:bg-white hover:text-primary-DEFAULT">
                  Explore Membership Options
                </Link>
              </div>
            </div>
          </article>
        </div>
      </main>
    </>
  );
} 