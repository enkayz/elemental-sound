'use client';

import React from 'react';
import Link from 'next/link';

export default function AlexJohnson() {
  const otherClientStories = [
    { name: 'Maya Rodriguez', link: '/client-stories/maya-rodriguez' },
    { name: 'Thomas Chen', link: '/client-stories/thomas-chen' },
    { name: 'Priya Sharma', link: '/client-stories/priya-sharma' },
    { name: 'Devon Williams', link: '/client-stories/devon-williams' },
    { name: 'Sofia Reyes', link: '/client-stories/sofia-reyes' },
    { name: 'Maria Gonzalez', link: '/client-stories/maria-gonzalez' },
  ];

  const servicesUsed = [
    { name: 'Professional Pass', link: '/services/membership' },
    { name: 'Equipment Rental', link: '/services/equipment-rental' },
    { name: 'Education Platform', link: '/services/education' },
  ];

  return (
    <>
      {/* Page Banner */}
      <div className="relative h-96 bg-gradient-to-r from-primary-dark to-primary-DEFAULT overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/wiki-images/page-banners/client-banners/alex-johnson-banner.jpg"
            alt="Alex Johnson"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="container mx-auto px-4 h-full flex flex-col justify-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Alex Johnson</h1>
          <p className="text-2xl mb-6">Freelance Mixing Engineer</p>
          <div className="max-w-3xl text-xl italic">
            "The Professional Pass completely changed my business model. Instead of compromising on quality or going deep into debt building a private facility, I now have access to exactly what I need, when I need it."
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
                  <span className="font-medium">Specialization:</span>
                  <span>Pop, R&B, Hip-Hop, Electronic</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Occupation:</span>
                  <span>Freelance Mixing Engineer</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Experience:</span>
                  <span>8+ years</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Technical Level:</span>
                  <span>Expert</span>
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
                  <div className="text-3xl font-bold text-secondary-DEFAULT mb-2">68%</div>
                  <div className="text-gray-600">Revenue Growth</div>
                </div>
                <div className="bg-light-DEFAULT rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-secondary-DEFAULT mb-2">42%</div>
                  <div className="text-gray-600">Project Value Increase</div>
                </div>
                <div className="bg-light-DEFAULT rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-secondary-DEFAULT mb-2">380%</div>
                  <div className="text-gray-600">ROI vs. Private Studio</div>
                </div>
                <div className="bg-light-DEFAULT rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-secondary-DEFAULT mb-2">94%</div>
                  <div className="text-gray-600">Client Retention</div>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-4">The Challenge</h3>
              <p className="text-gray-700 mb-8">
                After working as a staff engineer at a major studio for eight years, Alex Johnson took the leap into full-time
                freelance mixing in 2019. While he had the skills and client connections to build a sustainable business, he faced
                significant challenges in delivering consistently high-quality work without access to the professional-grade equipment
                and acoustically treated spaces he had relied on as a staff engineer. Working from a modest home studio limited
                the types of projects he could accept and created bottlenecks in his workflow. The substantial capital investment
                required to build a comparable private facility was prohibitive, especially during the transition to freelance work.
                Alex needed a solution that would provide flexible access to professional equipment and spaces without the massive
                upfront costs of ownership.
              </p>
              
              <h3 className="text-2xl font-bold mb-4">Background</h3>
              <p className="text-gray-700 mb-8">
                Alex Johnson built his reputation as a mixing engineer during his eight-year tenure at Anthem Studios, a major
                commercial facility where he worked with numerous chart-topping artists across multiple genres. His technical
                precision and musical sensibility earned him a dedicated client base and several industry accolades, including
                credits on two Grammy-nominated albums. When Anthem Studios was acquired by a larger company in 2019, Alex took
                the opportunity to transition to full-time freelance work, bringing several loyal clients with him.
              </p>
              
              <p className="text-gray-700 mb-8">
                Alex converted a spare bedroom in his apartment into a basic project studio with quality nearfield monitors,
                a powerful computer, and essential plugins. While this setup was adequate for preparatory work, it lacked the
                professional monitoring environment, acoustic treatment, and specialized hardware necessary for final mixes that
                would compete with major commercial releases. For the first six months of freelance work, Alex cobbled together
                solutions by renting time at various studios on an as-needed basis, but this approach was expensive, inconsistent,
                and often limited by availability constraints.
              </p>
              
              <div className="bg-light-DEFAULT p-6 rounded-lg mb-8">
                <h3 className="text-2xl font-bold mb-4">Pain Points</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li><strong>Capital Constraints:</strong> Unable to afford the substantial investment for a professional studio</li>
                  <li><strong>Space Limitations:</strong> Apartment setting imposed physical and acoustic constraints</li>
                  <li><strong>Workflow Inefficiency:</strong> Constantly moving between different facilities disrupted productivity</li>
                  <li><strong>Client Experience:</strong> Lacked professional environment for client sessions</li>
                  <li><strong>Technical Gaps:</strong> Limited access to specialized equipment needed for certain projects</li>
                  <li><strong>Scaling Challenges:</strong> Difficulty growing business without consistent access to professional facilities</li>
                </ul>
              </div>
              
              <div className="bg-light-DEFAULT p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Goals</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Secure reliable access to professional-grade monitoring environments</li>
                  <li>Expand technical capabilities without massive capital investment</li>
                  <li>Create a more efficient workflow between preparation and finalization phases</li>
                  <li>Establish a professional environment for client sessions</li>
                  <li>Maintain ability to compete with mixes from major commercial studios</li>
                  <li>Build a sustainable business model with room for growth</li>
                </ul>
              </div>
            </section>
            
            {/* Journey Section */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 pb-2 border-b border-gray-200">Journey with Elemental Sound</h2>
              
              <div className="space-y-12">
                <div className="border-l-4 border-primary-DEFAULT pl-6">
                  <h3 className="text-2xl font-bold mb-4">Discovery Phase</h3>
                  <div className="text-gray-700 space-y-4">
                    <p>
                      Alex's introduction to Elemental Sound came through a former colleague who had joined their team as a studio
                      manager. Initially skeptical of membership models based on previous experiences with restrictive terms and hidden
                      costs, Alex was hesitant but agreed to tour the facilities and discuss options.
                    </p>
                    <p>
                      "My first impression was that this wasn't just another rental studio," Alex recalls. "They had clearly designed
                      the entire ecosystem around the needs of working professionals. The variety of spaces, the quality of the gear,
                      and most importantly, the flexibility of the booking system all stood out immediately."
                    </p>
                    <p>
                      What ultimately convinced Alex was Elemental Sound's approach to membership structure. Rather than a one-size-fits-all
                      model, the Professional Pass was specifically tailored for independent engineers and producers, with booking
                      priorities, equipment access, and pricing structured to support a viable freelance business model.
                    </p>
                    <p>
                      "They walked me through a detailed cost analysis comparing membership to either building my own facility or
                      continuing with ad hoc studio rentals," says Alex. "The numbers were compelling, but what really sold me was
                      the flexibility—I could scale my usage up or down based on my project load without being locked into a rigid commitment."
                    </p>
                  </div>
                </div>
                
                <div className="border-l-4 border-primary-DEFAULT pl-6">
                  <h3 className="text-2xl font-bold mb-4">Initial Engagement (Months 1-3)</h3>
                  <div className="text-gray-700 space-y-4">
                    <p>
                      Alex began with a three-month trial of the Professional Pass to validate the concept before committing to an
                      annual membership. During this period, he worked with Elemental Sound's team to establish his optimal workflow
                      between his home setup and their facilities.
                    </p>
                    <p>
                      "I was impressed with how they approached this as a partnership rather than just a transaction," Alex notes.
                      "They took the time to understand my specific workflow, the types of projects I handled, and even the plugins
                      and software I used to ensure seamless compatibility between my home setup and their systems."
                    </p>
                    <p>This collaborative approach included:</p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>A comprehensive technical assessment of Alex's existing workflow</li>
                      <li>Tailored recommendations for which studio spaces best suited different project types</li>
                      <li>Creation of standardized session templates for efficient transitions between spaces</li>
                      <li>Development of a booking strategy optimized for Alex's typical project timeline</li>
                      <li>Introduction to complementary equipment rental options for home studio enhancement</li>
                    </ul>
                    <p>
                      "By the end of the trial period, I had developed a rhythm that allowed me to be significantly more productive
                      than before," Alex explains. "I could do prep work at home, book the main mix room for critical mixing decisions,
                      then finalize and present to clients in their reference listening space—all while maintaining perfect recall and
                      continuity between sessions."
                    </p>
                  </div>
                </div>
                
                <div className="border-l-4 border-primary-DEFAULT pl-6">
                  <h3 className="text-2xl font-bold mb-4">Expanding Capabilities (Months 4-8)</h3>
                  <div className="text-gray-700 space-y-4">
                    <p>
                      After committing to the annual Professional Pass, Alex began leveraging more aspects of the membership to expand
                      his service offerings:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Participated in Elemental Sound's immersive audio certification program</li>
                      <li>Started utilizing the Dolby Atmos mixing room for specialized projects</li>
                      <li>Incorporated high-end analog processing into his workflow through equipment rental</li>
                      <li>Began collaborating with other members on selected projects</li>
                      <li>Used the professional recording spaces for occasional overdub sessions</li>
                    </ul>
                    <p>
                      "Access to the Atmos room was game-changing," notes Alex. "Without Elemental Sound, I would have been completely
                      priced out of the immersive audio market as an independent engineer. Instead, I was able to quickly develop
                      competency and start offering these services to clients, opening an entirely new revenue stream."
                    </p>
                  </div>
                </div>
                
                <div className="border-l-4 border-primary-DEFAULT pl-6">
                  <h3 className="text-2xl font-bold mb-4">Client Integration & Growth (Months 9-12)</h3>
                  <div className="text-gray-700 space-y-4">
                    <p>
                      By the end of his first year, Alex had fully integrated Elemental Sound into both his workflow and client relationships:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Brought clients directly to Elemental Sound for supervised listening sessions</li>
                      <li>Leveraged studio access as a selling point in proposals for new projects</li>
                      <li>Established regular booking patterns optimized for his project timeline</li>
                      <li>Utilized equipment rental for specialized project requirements</li>
                      <li>Participated in community events to expand his professional network</li>
                    </ul>
                    <p>
                      "The client-facing aspect became increasingly valuable," Alex explains. "Being able to bring clients into a
                      world-class listening environment made a tangible difference in their perception of my services. They could
                      hear the nuance in my work more clearly, leading to more efficient feedback cycles and ultimately higher satisfaction."
                    </p>
                  </div>
                </div>
                
                <div className="border-l-4 border-primary-DEFAULT pl-6">
                  <h3 className="text-2xl font-bold mb-4">Long-Term Evolution (Years 2-3)</h3>
                  <div className="text-gray-700 space-y-4">
                    <p>
                      As Alex's relationship with Elemental Sound evolved, the impact on his business became increasingly significant.
                      In the second year, his business underwent substantial evolution:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li><strong>Service Expansion:</strong> Added immersive mixing as a premium service offering</li>
                      <li><strong>Client Growth:</strong> Increased client base by 35% through enhanced capabilities</li>
                      <li><strong>Project Scale:</strong> Successfully competed for and secured larger budget projects</li>
                      <li><strong>Rate Increase:</strong> Implemented 20% rate increase based on enhanced deliverables</li>
                      <li><strong>Collaboration:</strong> Developed partnerships with other Elemental Sound members</li>
                    </ul>
                    <p>By the third year, Alex had refined his operations further:</p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li><strong>Home Studio Enhancement:</strong> Strategically upgraded home facility to complement studio access</li>
                      <li><strong>Specialized Focus:</strong> Developed reputation for excellence in specific technical areas</li>
                      <li><strong>Workflow Optimization:</strong> Created efficient hybrid workflow between home and Elemental facilities</li>
                      <li><strong>Knowledge Expansion:</strong> Completed multiple advanced certifications through education platform</li>
                      <li><strong>Community Engagement:</strong> Began mentoring emerging engineers in the Elemental community</li>
                    </ul>
                    <p>
                      "Three years in, I can definitively say that joining Elemental Sound was the key strategic decision that enabled
                      my successful transition to freelance work," reflects Alex. "Instead of being limited by my individual resources,
                      I've been able to leverage collective infrastructure to deliver work that competes with major studios while maintaining
                      the independence and flexibility that drove me to freelance in the first place."
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
                    Alex's partnership with Elemental Sound transformed his financial outlook as a freelancer:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li><strong>Revenue growth:</strong> 68% increase over three years</li>
                    <li><strong>Project value:</strong> 42% increase in average project budget</li>
                    <li><strong>Rate structure:</strong> Successfully implemented tiered pricing model</li>
                    <li><strong>Investment efficiency:</strong> 380% ROI compared to private studio build-out</li>
                    <li><strong>New revenue streams:</strong> Added immersive audio and other specialized services</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold mb-4">Operational Impact</h3>
                  <p className="text-gray-700 mb-4">
                    The partnership significantly improved Alex's operational capabilities:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li><strong>Project capacity:</strong> 35% increase in monthly project throughput</li>
                    <li><strong>Workflow efficiency:</strong> Reduced average project timeline by 22%</li>
                    <li><strong>Technical capabilities:</strong> Added 4 new specialized service offerings</li>
                    <li><strong>Quality consistency:</strong> Eliminated technical compromises in deliverables</li>
                    <li><strong>Resource flexibility:</strong> Scaled access up or down based on project needs</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold mb-4">Client Impact</h3>
                  <p className="text-gray-700 mb-4">
                    Alex's enhanced capabilities positively affected his client relationships:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li><strong>Client retention:</strong> 94% client retention rate</li>
                    <li><strong>Referral business:</strong> 42% of new clients from existing client referrals</li>
                    <li><strong>Satisfaction metrics:</strong> 4.9/5 average client satisfaction rating</li>
                    <li><strong>Project conversion:</strong> 68% proposal-to-project conversion rate</li>
                    <li><strong>Client experience:</strong> Enhanced through professional listening environment</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold mb-4">Key Learnings</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-light-DEFAULT p-6 rounded-lg">
                      <h4 className="text-xl font-bold mb-4">For Freelance Engineers</h4>
                      <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        <li>Flexible access models create viable alternatives to large capital investments</li>
                        <li>Workflow integration between home and professional facilities maximizes productivity</li>
                        <li>Client-facing environments significantly impact perceived value and efficiency</li>
                        <li>Specialized capabilities enable freelancers to compete for premium projects</li>
                        <li>Community connection creates opportunities beyond direct service relationships</li>
                      </ul>
                    </div>
                    
                    <div className="bg-primary-DEFAULT/10 p-6 rounded-lg">
                      <h4 className="text-xl font-bold mb-4">Future Growth Opportunities</h4>
                      <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        <li>Expansion into post-production and soundtracks through specialized studio access</li>
                        <li>Development of educational content in partnership with Elemental Sound</li>
                        <li>Creation of signature processing chains leveraging available equipment</li>
                        <li>Exploration of remote mixing supervision capabilities</li>
                        <li>Formation of a collective entity with complementary Elemental members</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-light-DEFAULT p-8 rounded-lg">
                  <h3 className="text-2xl font-bold mb-4">Featured Project: "Horizons" Album</h3>
                  <p className="text-gray-700 mb-6">
                    A showcase project demonstrating Alex's enhanced capabilities through Elemental Sound:
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-xl font-bold mb-4">Project Approach</h4>
                      <p className="text-gray-700 mb-3">
                        Alex secured the opportunity to mix a high-profile artist's album that required both stereo and Dolby Atmos deliverables:
                      </p>
                      <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        <li>Initial mix preparation in home studio using standardized templates</li>
                        <li>Critical mix decisions made in Elemental Sound's premium mix room</li>
                        <li>Utilized vintage analog gear through equipment rental program</li>
                        <li>Conducted client feedback sessions in reference listening environment</li>
                        <li>Completed Atmos mix in specialized immersive audio suite</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-xl font-bold mb-4">Project Impact</h4>
                      <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        <li>Album received critical acclaim for sonic quality</li>
                        <li>Project fee represented 3.5x Alex's previous average</li>
                        <li>Atmos mix featured in spatial audio promotion by streaming service</li>
                        <li>Led to three additional projects with the same record label</li>
                        <li>Established Alex as a go-to engineer for immersive audio projects</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            
            {/* CTA Section */}
            <div className="bg-primary-DEFAULT text-white p-8 rounded-lg mt-16 text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Elevate Your Professional Audio Career?</h3>
              <p className="text-lg mb-6">
                Discover how Elemental Sound's Professional Pass can give you access to world-class facilities
                without the burden of massive capital investment.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/services/membership" className="btn bg-white text-primary-DEFAULT hover:bg-gray-100">
                  Explore Professional Pass
                </Link>
                <Link href="/services/education" className="btn btn-outline border-white text-white hover:bg-white hover:text-primary-DEFAULT">
                  View Certification Programs
                </Link>
              </div>
            </div>
          </article>
        </div>
      </main>
    </>
  );
} 