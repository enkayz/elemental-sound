'use client';

import React from 'react';
import Link from 'next/link';

export default function ThomasChen() {
  const otherClientStories = [
    { name: 'Maya Rodriguez', link: '/client-stories/maya-rodriguez' },
    { name: 'Priya Sharma', link: '/client-stories/priya-sharma' },
    { name: 'Devon Williams', link: '/client-stories/devon-williams' },
    { name: 'Sofia Reyes', link: '/client-stories/sofia-reyes' },
    { name: 'Maria Gonzalez', link: '/client-stories/maria-gonzalez' },
  ];

  const servicesUsed = [
    { name: 'Gold Membership', link: '/services/membership' },
    { name: 'Equipment Rental', link: '/services/equipment-rental' },
    { name: 'Mobile Recording', link: '/services/mobile-recording' },
  ];

  return (
    <>
      {/* Page Banner */}
      <div className="relative h-96 bg-gradient-to-r from-primary-dark to-primary-DEFAULT overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/wiki-images/page-banners/client-banners/thomas-chen-banner.jpg"
            alt="Thomas Chen"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="container mx-auto px-4 h-full flex flex-col justify-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Thomas Chen</h1>
          <p className="text-2xl mb-6">The Professional Producer</p>
          <div className="max-w-3xl text-xl italic">
            "Partnering with Elemental Sound allowed me to scale my production business without the massive capital investment typically required."
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
                  <span>35</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Occupation:</span>
                  <span>Freelance Producer</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Experience:</span>
                  <span>12 years</span>
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
                  <div className="text-3xl font-bold text-secondary-DEFAULT mb-2">$75K</div>
                  <div className="text-gray-600">Initial Value</div>
                </div>
                <div className="bg-light-DEFAULT rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-secondary-DEFAULT mb-2">$137K</div>
                  <div className="text-gray-600">Year 1 Value</div>
                </div>
                <div className="bg-light-DEFAULT rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-secondary-DEFAULT mb-2">$305K</div>
                  <div className="text-gray-600">Lifetime Value</div>
                </div>
                <div className="bg-light-DEFAULT rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-secondary-DEFAULT mb-2">83%</div>
                  <div className="text-gray-600">Additional Value</div>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-4">Background</h3>
              <p className="text-gray-700 mb-8">
                Thomas Chen had established himself as a respected freelance producer in the indie music scene, working 
                primarily from a modest home studio. Despite his technical expertise and industry connections, Thomas 
                faced significant barriers to growth due to equipment limitations and the inability to handle larger or 
                more diverse projects. He was turning down potentially lucrative opportunities due to these constraints, 
                particularly projects requiring high-end gear or location recording capabilities.
              </p>
              
              <div className="bg-light-DEFAULT p-6 rounded-lg mb-8">
                <h3 className="text-2xl font-bold mb-4">Initial Pain Points</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Limited equipment inventory restricting project scope and client diversity</li>
                  <li>No ability to record ensembles or larger instruments (drums, piano)</li>
                  <li>Turning down location recording opportunities due to lack of mobile gear</li>
                  <li>Capital constraints preventing investment in specialized equipment</li>
                  <li>Limited physical space for recording larger groups or instruments</li>
                  <li>Inability to efficiently scale business without substantial investment</li>
                </ul>
              </div>
              
              <div className="bg-light-DEFAULT p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Client Goals</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Expand service offerings to include full-band recording</li>
                  <li>Add location recording capabilities to portfolio</li>
                  <li>Access high-end equipment for premium projects</li>
                  <li>Increase overall production capacity</li>
                  <li>Maintain competitive rates while improving production quality</li>
                  <li>Scale business without massive capital investment</li>
                </ul>
              </div>
            </section>
            
            {/* Journey Section */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 pb-2 border-b border-gray-200">Journey with Elemental Sound</h2>
              
              <div className="space-y-12">
                <div className="border-l-4 border-primary-DEFAULT pl-6">
                  <h3 className="text-2xl font-bold mb-4">Strategic Partnership (Months 1-2)</h3>
                  <div className="text-gray-700 space-y-4">
                    <p>
                      After exploring various solutions to his business constraints, Thomas discovered Elemental Sound's flexible 
                      membership and equipment rental programs. Rather than selling Thomas a standard package, the Elemental Sound 
                      team worked with him to develop a custom solution that would complement his existing setup and expand his capabilities.
                    </p>
                    <p>
                      They conducted a thorough assessment of Thomas's current equipment, space limitations, and business goals to 
                      identify the most strategic investments and partnerships that would maximize his return on investment.
                    </p>
                  </div>
                </div>
                
                <div className="border-l-4 border-primary-DEFAULT pl-6">
                  <h3 className="text-2xl font-bold mb-4">Resource Integration (Months 3-5)</h3>
                  <div className="text-gray-700 space-y-4">
                    <p>
                      Thomas enrolled in Elemental Sound's Gold Membership tier, which provided him with:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Priority access to professional recording spaces for larger projects</li>
                      <li>Significant discounts on equipment rentals</li>
                      <li>Introduction to Elemental Sound's network of session musicians</li>
                      <li>Collaborative opportunities with other producer members</li>
                    </ul>
                    <p>
                      This relationship allowed Thomas to immediately expand his service offerings without a massive upfront investment. 
                      He began booking larger projects, confident in his ability to deliver professional results through strategic 
                      use of Elemental Sound's resources.
                    </p>
                  </div>
                </div>
                
                <div className="border-l-4 border-primary-DEFAULT pl-6">
                  <h3 className="text-2xl font-bold mb-4">Business Expansion (Months 6-12)</h3>
                  <div className="text-gray-700 space-y-4">
                    <p>
                      With access to expanded resources, Thomas was able to reshape his business model:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Added full band recording services to his portfolio</li>
                      <li>Began renting specialized microphones and preamps for specific projects</li>
                      <li>Used Elemental Sound's Studio B for drum tracking</li>
                      <li>Partnered with Elemental Sound on mobile recording projects</li>
                      <li>Established a tiered pricing structure based on production needs</li>
                    </ul>
                    <p>
                      This hybrid approach allowed Thomas to maintain his independent brand while leveraging Elemental Sound's 
                      resources to handle projects beyond his previous capabilities. His client list expanded to include regional 
                      bands, corporate clients needing on-location recording, and artists requiring access to specialized instruments.
                    </p>
                  </div>
                </div>
                
                <div className="border-l-4 border-primary-DEFAULT pl-6">
                  <h3 className="text-2xl font-bold mb-4">Operational Optimization (Months 13-18)</h3>
                  <div className="text-gray-700 space-y-4">
                    <p>
                      As Thomas's business grew, he worked with Elemental Sound to optimize his operational model:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Established standard packages combining his services with Elemental Sound resources</li>
                      <li>Created efficient workflows between his studio and Elemental Sound facilities</li>
                      <li>Developed specialized expertise in mobile recording through equipment partnerships</li>
                      <li>Built a network of collaborators from the Elemental Sound community</li>
                    </ul>
                    <p>
                      This period saw Thomas transition from simply renting equipment to developing strategic partnerships that 
                      enhanced his business's efficiency and scalability. By focusing on his strengths while leveraging Elemental 
                      Sound's resources for complementary services, Thomas was able to dramatically increase his production capacity.
                    </p>
                  </div>
                </div>
                
                <div className="border-l-4 border-primary-DEFAULT pl-6">
                  <h3 className="text-2xl font-bold mb-4">Strategic Growth (Months 19-24)</h3>
                  <div className="text-gray-700 space-y-4">
                    <p>
                      Building on his success, Thomas expanded his business model through deeper integration with Elemental Sound:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Became an official partner for Elemental Sound's Mobile Recording division</li>
                      <li>Started leading specialized workshops for other members</li>
                      <li>Began splitting his time between his home studio and Elemental Sound facilities</li>
                      <li>Created a small team of associates who could access Elemental Sound resources</li>
                      <li>Developed a rental income stream by adding some of his specialized gear to Elemental Sound's inventory</li>
                    </ul>
                    <p>
                      This evolved relationship created a mutually beneficial arrangement where Thomas's expertise enhanced 
                      Elemental Sound's service offerings while their resources continued to support his business growth. His 
                      production company became known for its ability to handle diverse projects with flexible capacity and 
                      specialized expertise.
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
                    Thomas's partnership with Elemental Sound transformed his production business:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Revenue growth: 83% increase in annual revenue</li>
                    <li>Cost efficiency: Saved approximately $120,000 in equipment purchases</li>
                    <li>Project size: Average project value increased by 47%</li>
                    <li>Profit margin: Improved by 22% through strategic resource allocation</li>
                    <li>New revenue streams: Added location recording (31% of revenue) and educational content (12% of revenue)</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold mb-4">Business Development</h3>
                  <p className="text-gray-700 mb-4">
                    Beyond financial growth, Thomas experienced significant business evolution:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Client diversity: Expanded from solo artists to full bands, corporate clients, and educational institutions</li>
                    <li>Service expansion: Added location recording, ensemble tracking, and specialized production packages</li>
                    <li>Team growth: Scaled from solo operation to a network of 4 regular collaborators</li>
                    <li>Geographic reach: Extended service area from local to regional through mobile capabilities</li>
                    <li>Brand positioning: Shifted from budget-friendly producer to versatile full-service production company</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold mb-4">Operational Transformation</h3>
                  <p className="text-gray-700 mb-4">
                    Thomas's operational approach evolved significantly through his Elemental Sound partnership:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Flexible capacity: Ability to scale resources up or down based on project needs</li>
                    <li>Resource optimization: Strategic allocation of work between home studio and Elemental Sound facilities</li>
                    <li>Specialized focus: Concentration on creative and technical areas of strength while outsourcing others</li>
                    <li>Collaborative model: Integration of other professionals to expand capabilities</li>
                    <li>Risk management: Reduced financial exposure through partnership rather than ownership</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold mb-4">Before & After Comparison</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-light-DEFAULT p-6 rounded-lg">
                      <h4 className="text-xl font-bold mb-4">Before Elemental Sound</h4>
                      <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        <li>Limited to small projects in home studio</li>
                        <li>Turning down 30% of inquiries due to resource constraints</li>
                        <li>Equipment investment limiting cash flow</li>
                        <li>Growth dependent on major capital expenditure</li>
                        <li>Solo operation with capacity constraints</li>
                      </ul>
                    </div>
                    
                    <div className="bg-primary-DEFAULT/10 p-6 rounded-lg">
                      <h4 className="text-xl font-bold mb-4">After Elemental Sound</h4>
                      <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        <li>Handling diverse projects across multiple environments</li>
                        <li>Converting 85% of inquiries to clients</li>
                        <li>Strategic resource allocation improving financial performance</li>
                        <li>Scalable business model built on partnerships</li>
                        <li>Flexible team structure with specialized capabilities</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-light-DEFAULT p-8 rounded-lg">
                  <h3 className="text-2xl font-bold mb-4">Featured Project: Regional Orchestra Recording</h3>
                  <p className="text-gray-700 mb-6">
                    A showcase project demonstrating the expanded capabilities Thomas gained through his Elemental Sound partnership:
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-xl font-bold mb-4">Project Approach</h4>
                      <p className="text-gray-700 mb-3">
                        Thomas secured a contract to record a regional orchestra's performance series that previously would have been beyond his capabilities:
                      </p>
                      <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        <li>Utilized Elemental Sound's mobile recording equipment package</li>
                        <li>Collaborated with two other Elemental Sound members as assistant engineers</li>
                        <li>Implemented a multi-microphone setup capturing both ensemble and soloists</li>
                        <li>Used Elemental Sound's Studio A for post-production and mixing</li>
                        <li>Leveraged specialized software and plugins available through membership</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-xl font-bold mb-4">Project Impact</h4>
                      <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        <li>Contract value: $28,000 for complete series</li>
                        <li>Led to similar contracts with two additional orchestras</li>
                        <li>Established Thomas as a specialist in classical recording</li>
                        <li>Created promotional material showcasing expanded capabilities</li>
                        <li>Developed efficient operational model for future location recording projects</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            
            {/* CTA Section */}
            <div className="bg-primary-DEFAULT text-white p-8 rounded-lg mt-16 text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Scale Your Production Business?</h3>
              <p className="text-lg mb-6">
                Discover how Elemental Sound can help you expand your service offerings and increase production capacity
                without the traditional capital investment barriers.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/services/membership" className="btn bg-white text-primary-DEFAULT hover:bg-gray-100">
                  Explore Membership Options
                </Link>
                <Link href="/services/equipment-rental" className="btn btn-outline border-white text-white hover:bg-white hover:text-primary-DEFAULT">
                  View Equipment Rental
                </Link>
              </div>
            </div>
          </article>
        </div>
      </main>
    </>
  );
} 