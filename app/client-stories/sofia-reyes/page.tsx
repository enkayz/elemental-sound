'use client';

import React from 'react';
import Link from 'next/link';

export default function SofiaReyes() {
  const otherClientStories = [
    { name: 'Maya Rodriguez', link: '/client-stories/maya-rodriguez' },
    { name: 'Thomas Chen', link: '/client-stories/thomas-chen' },
    { name: 'Priya Sharma', link: '/client-stories/priya-sharma' },
    { name: 'Devon Williams', link: '/client-stories/devon-williams' },
    { name: 'Maria Gonzalez', link: '/client-stories/maria-gonzalez' },
  ];

  const servicesUsed = [
    { name: 'Bronze Membership', link: '/services/membership' },
    { name: 'Education Platform', link: '/services/education' },
    { name: 'Equipment Rental', link: '/services/equipment-rental' },
  ];

  return (
    <>
      {/* Page Banner */}
      <div className="relative h-96 bg-gradient-to-r from-primary-dark to-primary-DEFAULT overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/wiki-images/page-banners/client-banners/sofia-reyes-banner.jpg"
            alt="Sofia Reyes"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="container mx-auto px-4 h-full flex flex-col justify-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Sofia Reyes</h1>
          <p className="text-2xl mb-6">The Podcast Host</p>
          <div className="max-w-3xl text-xl italic">
            "Elemental Sound transformed my amateur podcast into a professional media brand that now reaches over 50,000 listeners per episode."
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
                  <span>31</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Occupation:</span>
                  <span>Journalist & Podcast Host</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Experience:</span>
                  <span>2 years</span>
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
                  <div className="text-3xl font-bold text-secondary-DEFAULT mb-2">$84K</div>
                  <div className="text-gray-600">Year 1 Value</div>
                </div>
                <div className="bg-light-DEFAULT rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-secondary-DEFAULT mb-2">$236K</div>
                  <div className="text-gray-600">Lifetime Value</div>
                </div>
                <div className="bg-light-DEFAULT rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-secondary-DEFAULT mb-2">450%</div>
                  <div className="text-gray-600">Additional Value</div>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-4">Background</h3>
              <p className="text-gray-700 mb-8">
                Sofia Reyes began her podcast "Cultural Conversations" as a passion project while working as a freelance journalist. 
                Her insightful interviews with local artists and community leaders quickly gained a small but dedicated following. 
                Despite her strong content and interviewing skills, the technical quality of her podcast was significantly holding back 
                its growth. Recording in her apartment with entry-level equipment resulted in inconsistent audio quality, particularly 
                when interviewing guests remotely. As interest in her podcast grew, Sofia recognized that poor production quality was 
                becoming a barrier to attracting higher-profile guests and sponsorship opportunities.
              </p>
              
              <div className="bg-light-DEFAULT p-6 rounded-lg mb-8">
                <h3 className="text-2xl font-bold mb-4">Initial Pain Points</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Poor audio quality limiting listener growth and retention</li>
                  <li>Limited technical knowledge of audio production and equipment</li>
                  <li>Inadequate setup for professional guest interviews</li>
                  <li>No dedicated recording space with proper acoustics</li>
                  <li>Inconsistent sound quality between episodes</li>
                  <li>Inability to produce promotional materials and supplementary content</li>
                </ul>
              </div>
              
              <div className="bg-light-DEFAULT p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Client Goals</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Improve audio quality to professional standards</li>
                  <li>Develop technical skills in podcast production</li>
                  <li>Create a consistent and professional format</li>
                  <li>Attract higher-profile guests and larger audience</li>
                  <li>Develop a sustainable business model with sponsorships</li>
                  <li>Expand from audio-only to multimedia content</li>
                </ul>
              </div>
            </section>
            
            {/* Journey Section */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 pb-2 border-b border-gray-200">Journey with Elemental Sound</h2>
              
              <div className="space-y-12">
                <div className="border-l-4 border-primary-DEFAULT pl-6">
                  <h3 className="text-2xl font-bold mb-4">Education Foundation (Months 1-2)</h3>
                  <div className="text-gray-700 space-y-4">
                    <p>
                      Sofia began her journey with Elemental Sound by enrolling in their specialized "Podcast Production Fundamentals" course.
                      Unlike generic online tutorials, this structured program provided:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Hands-on training with professional podcast equipment</li>
                      <li>Personalized feedback on voice technique and microphone usage</li>
                      <li>Practical instruction in recording remote interviews</li>
                      <li>Guidance on developing a consistent production workflow</li>
                      <li>Introduction to audio editing techniques specific to interview formats</li>
                    </ul>
                    <p>
                      This targeted education quickly filled gaps in Sofia's technical knowledge and gave her practical skills she could
                      immediately apply to improve her podcast quality. The instructors recognized her journalistic background and tailored
                      the instruction to leverage her interviewing strengths while addressing her technical weaknesses.
                    </p>
                  </div>
                </div>
                
                <div className="border-l-4 border-primary-DEFAULT pl-6">
                  <h3 className="text-2xl font-bold mb-4">Equipment Upgrade & Training (Months 3-4)</h3>
                  <div className="text-gray-700 space-y-4">
                    <p>
                      With a stronger understanding of audio production needs, Sofia worked with Elemental Sound's equipment specialists 
                      to develop a professional recording setup. Rather than recommending the most expensive gear, they focused on creating
                      a cost-effective solution tailored to her specific needs:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Professional-grade dynamic microphone optimized for her voice</li>
                      <li>Portable audio interface with two inputs for in-person guests</li>
                      <li>Basic acoustic treatment for her home recording space</li>
                      <li>Headphones suitable for monitoring during recording and editing</li>
                      <li>Software setup for remote interview recording</li>
                    </ul>
                    <p>
                      Elemental Sound provided hands-on training with this equipment, ensuring Sofia could operate it confidently. They also
                      helped her develop a pre-recording checklist and audio testing protocol to ensure consistent quality across episodes.
                    </p>
                  </div>
                </div>
                
                <div className="border-l-4 border-primary-DEFAULT pl-6">
                  <h3 className="text-2xl font-bold mb-4">Professional Recording Access (Months 5-8)</h3>
                  <div className="text-gray-700 space-y-4">
                    <p>
                      As her podcast gained momentum, Sofia upgraded to a Bronze Membership, which provided her with:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>16 hours monthly in the podcast recording studio</li>
                      <li>Access to a dual-microphone setup for in-person interviews</li>
                      <li>Professional call recording system for remote guests</li>
                      <li>Basic video recording capabilities for select interviews</li>
                      <li>Assistance from staff engineers for complex sessions</li>
                    </ul>
                    <p>
                      With access to professional facilities, Sofia began recording higher-profile interviews in the studio while continuing
                      to produce regular episodes from her improved home setup. This hybrid approach allowed her to maximize resources while
                      significantly elevating the overall production quality. She established a clear distinction between standard episodes
                      and "special editions" featuring notable guests recorded in the professional studio.
                    </p>
                  </div>
                </div>
                
                <div className="border-l-4 border-primary-DEFAULT pl-6">
                  <h3 className="text-2xl font-bold mb-4">Brand Development & Expansion (Months 9-12)</h3>
                  <div className="text-gray-700 space-y-4">
                    <p>
                      With consistently professional audio quality established, Sofia worked with Elemental Sound to expand her podcast into a multimedia brand:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Added video recording for select interviews using the studio's multi-camera setup</li>
                      <li>Created promotional clips and audiograms for social media marketing</li>
                      <li>Developed a visual identity with consistent graphics and thumbnails</li>
                      <li>Produced bonus content for subscribers and supporters</li>
                      <li>Built a website featuring episode highlights and guest information</li>
                    </ul>
                    <p>
                      This expansion transformed "Cultural Conversations" from a simple podcast into a multimedia platform with multiple
                      content formats and distribution channels. The professional production quality attracted several sponsors, creating
                      a sustainable revenue stream that allowed Sofia to reduce her freelance journalism work and focus more on the podcast.
                    </p>
                  </div>
                </div>
                
                <div className="border-l-4 border-primary-DEFAULT pl-6">
                  <h3 className="text-2xl font-bold mb-4">Business Growth & Sustainability (Months 13-18)</h3>
                  <div className="text-gray-700 space-y-4">
                    <p>
                      Building on the solid foundation of professional production and expanded content offerings, Sofia's podcast experienced dramatic growth:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Audience increased from 3,000 to over 50,000 monthly listeners</li>
                      <li>Secured three major corporate sponsors and numerous episode sponsors</li>
                      <li>Launched a membership program for exclusive content and early access</li>
                      <li>Developed a live event series recorded at Elemental Sound</li>
                      <li>Hired a part-time producer to assist with growing production demands</li>
                    </ul>
                    <p>
                      This growth transformed the podcast from a passion project into Sofia's primary career focus and main source of income.
                      Through continued access to Elemental Sound's facilities and expertise, she maintained professional production quality
                      while scaling her operations and expanding her content offerings.
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
                    Sofia's podcast transformed from a hobby to a thriving business:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Revenue growth: From $0 to $7,000+ monthly through sponsorships and memberships</li>
                    <li>Sponsor value: Average sponsorship deals increased from $300 to $2,500 per episode</li>
                    <li>Membership income: Created recurring revenue stream of $3,200 monthly</li>
                    <li>Event revenue: Added $15,000+ annually through live podcast recordings</li>
                    <li>Career transition: Podcast became primary income source, replacing freelance work</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold mb-4">Audience Development</h3>
                  <p className="text-gray-700 mb-4">
                    Professional quality and expanded offerings dramatically increased the podcast's reach:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Listener growth: 1,566% increase in average monthly listeners</li>
                    <li>Engagement metrics: Average listening time improved from 64% to 87% of episode length</li>
                    <li>Audience diversity: Expanded from local to national and international reach</li>
                    <li>Demographics: Broadened appeal across age groups and professional backgrounds</li>
                    <li>Platform expansion: Added video audience of 15,000+ subscribers</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold mb-4">Content Evolution</h3>
                  <p className="text-gray-700 mb-4">
                    The podcast's content evolved significantly through improved production capabilities:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Format refinement: Developed consistent segments and production elements</li>
                    <li>Guest caliber: Attracted high-profile artists, authors, and thought leaders</li>
                    <li>Content diversity: Added video interviews, panel discussions, and live events</li>
                    <li>Production quality: Achieved broadcast-standard audio across all episodes</li>
                    <li>Multimedia expansion: Created complementary content across multiple platforms</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold mb-4">Before & After Comparison</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-light-DEFAULT p-6 rounded-lg">
                      <h4 className="text-xl font-bold mb-4">Before Elemental Sound</h4>
                      <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        <li>Amateur production quality limiting audience growth</li>
                        <li>Limited to local guests and personal connections</li>
                        <li>No revenue model or sponsorship opportunities</li>
                        <li>Inconsistent release schedule and format</li>
                        <li>Secondary priority to freelance journalism career</li>
                      </ul>
                    </div>
                    
                    <div className="bg-primary-DEFAULT/10 p-6 rounded-lg">
                      <h4 className="text-xl font-bold mb-4">After Elemental Sound</h4>
                      <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        <li>Professional broadcast quality attracting premium sponsors</li>
                        <li>Access to national and international thought leaders as guests</li>
                        <li>Multiple revenue streams creating sustainable business</li>
                        <li>Consistent, branded format across multiple media platforms</li>
                        <li>Primary career focus with team support and growth strategy</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-light-DEFAULT p-8 rounded-lg">
                  <h3 className="text-2xl font-bold mb-4">Featured Initiative: "Voices of the City" Series</h3>
                  <p className="text-gray-700 mb-6">
                    A showcase project demonstrating how Elemental Sound's resources allowed Sofia to expand her podcast's scope and impact:
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-xl font-bold mb-4">Project Approach</h4>
                      <p className="text-gray-700 mb-3">
                        Sofia created a 12-episode special series focusing on community leaders and cultural change-makers:
                      </p>
                      <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        <li>Recorded in-studio with professional video and audio capture</li>
                        <li>Featured panel discussions with multiple guests</li>
                        <li>Incorporated ambient recordings from community locations</li>
                        <li>Included live musical performances from local artists</li>
                        <li>Culminated in a live audience recording at a cultural center</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-xl font-bold mb-4">Project Impact</h4>
                      <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        <li>Became the podcast's most popular series with over 750,000 cumulative downloads</li>
                        <li>Attracted a major media partner for distribution and promotion</li>
                        <li>Secured a $45,000 series sponsorship from a cultural foundation</li>
                        <li>Led to a speaking tour for Sofia at journalism and podcasting conferences</li>
                        <li>Won a regional broadcasting award for community-focused content</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            
            {/* CTA Section */}
            <div className="bg-primary-DEFAULT text-white p-8 rounded-lg mt-16 text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Podcast?</h3>
              <p className="text-lg mb-6">
                Discover how Elemental Sound can help you elevate your podcast with professional production quality,
                specialized training, and access to state-of-the-art recording facilities.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/services/membership" className="btn bg-white text-primary-DEFAULT hover:bg-gray-100">
                  Explore Membership Options
                </Link>
                <Link href="/services/education" className="btn btn-outline border-white text-white hover:bg-white hover:text-primary-DEFAULT">
                  Browse Podcast Courses
                </Link>
              </div>
            </div>
          </article>
        </div>
      </main>
    </>
  );
} 