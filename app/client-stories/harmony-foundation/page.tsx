'use client';

import React from 'react';
import Link from 'next/link';

export default function HarmonyFoundation() {
  const otherClientStories = [
    { name: 'Maya Rodriguez', link: '/client-stories/maya-rodriguez' },
    { name: 'Thomas Chen', link: '/client-stories/thomas-chen' },
    { name: 'Priya Sharma', link: '/client-stories/priya-sharma' },
    { name: 'Devon Williams', link: '/client-stories/devon-williams' },
    { name: 'Sofia Reyes', link: '/client-stories/sofia-reyes' },
    { name: 'Maria Gonzalez', link: '/client-stories/maria-gonzalez' },
    { name: 'Alex Johnson', link: '/client-stories/alex-johnson' },
    { name: 'CloudStream', link: '/client-stories/cloudstream' },
    { name: 'Echo Productions', link: '/client-stories/echo-productions' },
    { name: 'Elena Gonzalez', link: '/client-stories/elena-gonzalez' },
  ];

  const servicesUsed = [
    { name: 'Community Partnership', link: '/services/community' },
    { name: 'Education Platform', link: '/services/education' },
    { name: 'Studios & Facilities', link: '/services/studios' },
  ];

  return (
    <>
      {/* Page Banner */}
      <div className="relative h-96 bg-gradient-to-r from-primary-dark to-primary-DEFAULT overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/wiki-images/page-banners/client-banners/harmony-foundation-banner.jpg"
            alt="Harmony Foundation"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="container mx-auto px-4 h-full flex flex-col justify-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Harmony Foundation</h1>
          <p className="text-2xl mb-6">Non-Profit Music Education Organization</p>
          <div className="max-w-3xl text-xl italic">
            "Our partnership with Elemental Sound has transformed how we deliver music education to underserved communities. What began as a facility rental has evolved into a comprehensive program that's changing lives."
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Sidebar */}
          <aside className="lg:w-1/4">
            <div className="bg-light-DEFAULT p-6 rounded-lg shadow-md mb-8">
              <h3 className="text-xl font-bold border-b border-gray-200 pb-3 mb-4">Organization Profile</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="font-medium">Founded:</span>
                  <span>2010</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Mission:</span>
                  <span>Music Education Access</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Programs:</span>
                  <span>14 Active Initiatives</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Students Served:</span>
                  <span>2,500+ Annually</span>
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
              <h2 className="text-3xl font-bold mb-8 pb-2 border-b border-gray-200">Organization Overview</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                <div className="bg-light-DEFAULT rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-secondary-DEFAULT mb-2">145%</div>
                  <div className="text-gray-600">Program Capacity Increase</div>
                </div>
                <div className="bg-light-DEFAULT rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-secondary-DEFAULT mb-2">3.2x</div>
                  <div className="text-gray-600">Grant Funding Growth</div>
                </div>
                <div className="bg-light-DEFAULT rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-secondary-DEFAULT mb-2">87%</div>
                  <div className="text-gray-600">Student Retention Rate</div>
                </div>
                <div className="bg-light-DEFAULT rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-secondary-DEFAULT mb-2">12</div>
                  <div className="text-gray-600">New Corporate Partners</div>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-4">The Challenge</h3>
              <p className="text-gray-700 mb-8">
                The Harmony Foundation, dedicated to providing music education to underserved communities, was facing 
                significant challenges in scaling their impact. Founded with a mission to make music education accessible 
                to all, the organization had established several successful programs but struggled with limited facilities, 
                outdated equipment, and insufficient technological infrastructure to meet growing demand. Their primary 
                facility—a converted community center with basic recording capabilities and classroom spaces—was operating 
                at maximum capacity, with waiting lists for most programs. The foundation's leadership recognized that 
                without access to professional-grade facilities and equipment, they couldn't expand their reach or enhance 
                the quality of their educational offerings. Additionally, their small staff lacked expertise in emerging 
                music technologies that were increasingly important for preparing students for today's music landscape.
              </p>
              
              <h3 className="text-2xl font-bold mb-4">Background</h3>
              <p className="text-gray-700 mb-8">
                Established in 2010 by a group of music educators and community advocates, the Harmony Foundation began 
                with a simple after-school program providing piano and guitar lessons to 50 students in a rented church 
                basement. By 2015, they had secured their own facility through a community development grant and expanded 
                to serve over 500 students annually through a variety of programs including instrumental instruction, 
                ensemble performance, music theory, and basic recording techniques.
              </p>
              
              <p className="text-gray-700 mb-8">
                The foundation's growth was driven by a clear vision and passionate leadership, particularly from Executive 
                Director Marcus Johnson, a former middle school music teacher who witnessed firsthand how music education 
                cuts disproportionately affected underserved communities. Under his guidance, the foundation built strong 
                community relationships and secured consistent funding for core operations.
              </p>
              
              <p className="text-gray-700 mb-8">
                By 2019, however, the foundation had reached a critical inflection point. Student enrollment had plateaued 
                due to space constraints, and staff were turning away eager participants. More concerning was an emerging 
                gap between the foundation's educational offerings and the evolving music landscape. Students with aspirations 
                in contemporary music production, film scoring, podcast creation, and other modern audio fields couldn't 
                access the necessary training or equipment through existing programs. The foundation's dedicated but small 
                teaching staff lacked expertise in these areas, and the cost of acquiring professional-grade equipment and 
                expanding facilities seemed prohibitive for a non-profit organization.
              </p>
              
              <div className="bg-light-DEFAULT p-6 rounded-lg mb-8">
                <h3 className="text-2xl font-bold mb-4">Pain Points</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li><strong>Facility Limitations:</strong> Existing spaces couldn't accommodate growing demand</li>
                  <li><strong>Technology Gap:</strong> Limited access to contemporary music production equipment</li>
                  <li><strong>Expertise Constraints:</strong> Staff lacked training in emerging music technologies</li>
                  <li><strong>Financial Barriers:</strong> Insufficient capital for facility expansion or major equipment purchases</li>
                  <li><strong>Curriculum Outdated:</strong> Programming didn't fully prepare students for modern music landscape</li>
                  <li><strong>Scalability Challenges:</strong> Operational model couldn't efficiently reach more communities</li>
                </ul>
              </div>
              
              <div className="bg-light-DEFAULT p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Goals</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Expand program capacity to eliminate waiting lists and serve more students</li>
                  <li>Modernize curriculum to include contemporary music production and technology</li>
                  <li>Enhance the quality and relevance of educational offerings</li>
                  <li>Create pathways to professional opportunities in the broader music industry</li>
                  <li>Develop sustainable model for scaling impact without proportional facility investment</li>
                  <li>Build staff expertise in emerging music technologies and teaching methodologies</li>
                </ul>
              </div>
            </section>
            
            {/* Journey Section */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 pb-2 border-b border-gray-200">Partnership with Elemental Sound</h2>
              
              <div className="space-y-12">
                <div className="border-l-4 border-primary-DEFAULT pl-6">
                  <h3 className="text-2xl font-bold mb-4">Initial Exploration & Facility Access</h3>
                  <div className="text-gray-700 space-y-4">
                    <p>
                      The Harmony Foundation's relationship with Elemental Sound began when Executive Director Marcus Johnson 
                      attended an open house event while exploring potential partnerships to address their capacity challenges. 
                      Initially seeking only occasional facility access for advanced students, the conversation quickly expanded 
                      as Elemental Sound's community outreach team recognized broader opportunities for collaboration.
                    </p>
                    <p>
                      "We walked in thinking we might rent studio time for a few hours each month," recalls Johnson. "We walked 
                      out with a vision for completely transforming our educational model. What impressed us wasn't just the quality 
                      of the facilities, but Elemental Sound's genuine interest in community impact beyond commercial considerations."
                    </p>
                    <p>The exploratory phase established several key opportunities:</p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Regular access to recording studios and production suites for advanced student projects</li>
                      <li>Potential for specialized workshops led by industry professionals</li>
                      <li>Possibilities for staff development and training in emerging technologies</li>
                      <li>Integration of Elemental Sound's online learning resources into existing curriculum</li>
                      <li>Exploration of joint grant applications for educational initiatives</li>
                    </ul>
                    <p>
                      Following this initial exploration, the foundation implemented a pilot program providing weekly studio 
                      sessions for thirty advanced students, allowing them to experience professional production environments and 
                      work on recording projects beyond what was possible in the foundation's facilities.
                    </p>
                  </div>
                </div>
                
                <div className="border-l-4 border-primary-DEFAULT pl-6">
                  <h3 className="text-2xl font-bold mb-4">Curriculum Development & Staff Training</h3>
                  <div className="text-gray-700 space-y-4">
                    <p>
                      As the pilot program demonstrated immediate positive outcomes, the partnership expanded to address the 
                      foundation's curriculum gaps and staff development needs.
                    </p>
                    <p>
                      "The facility access alone was valuable, but what really transformed our organization was the knowledge transfer," 
                      explains Aisha Williams, the foundation's Education Director. "Elemental Sound didn't just give us access to spaces—
                      they helped us completely reimagine our educational approach for the modern music landscape."
                    </p>
                    <p>Key initiatives during this phase included:</p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Comprehensive staff training program for 12 teaching artists</li>
                      <li>Development of new curriculum modules in music production, sound design, and audio post-production</li>
                      <li>Creation of a structured certification pathway for students in technical disciplines</li>
                      <li>Implementation of Elemental Sound's online learning platform as supplemental resource</li>
                      <li>Establishment of mentor relationships between Elemental Sound professionals and foundation staff</li>
                    </ul>
                    <p>
                      This curriculum development process culminated in the launch of the foundation's "Future Producers" program, 
                      which created a structured pathway for students interested in contemporary music production. The program combined 
                      instruction at the foundation's facility with regular sessions at Elemental Sound's studios, providing a comprehensive 
                      education that bridged theory and professional practice.
                    </p>
                  </div>
                </div>
                
                <div className="border-l-4 border-primary-DEFAULT pl-6">
                  <h3 className="text-2xl font-bold mb-4">Resource Optimization & Expansion</h3>
                  <div className="text-gray-700 space-y-4">
                    <p>
                      With early programs demonstrating success, the partnership evolved to address the foundation's broader capacity 
                      constraints and resource limitations.
                    </p>
                    <p>
                      "We realized we were approaching our challenges from the wrong angle," notes Johnson. "Instead of focusing on 
                      how to expand our physical facility—which would have required millions in capital and years of fundraising—we 
                      began exploring how to optimize our existing resources through strategic access to Elemental Sound's infrastructure."
                    </p>
                    <p>This strategic shift led to several innovative approaches:</p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Redesign of foundation facility to focus on foundational education and daily instruction</li>
                      <li>Implementation of tiered access model to Elemental Sound facilities based on student advancement</li>
                      <li>Development of mobile recording capability to bring production education to additional communities</li>
                      <li>Creation of equipment sharing program to enhance foundation's technological resources</li>
                      <li>Establishment of regular studio residency blocks for student project completion</li>
                    </ul>
                    <p>
                      "This approach completely changed our capacity equation," explains Williams. "By focusing our facility on what 
                      it does best—daily instruction and community engagement—and leveraging Elemental Sound for specialized training 
                      and advanced production, we could serve significantly more students without a corresponding increase in our 
                      physical footprint."
                    </p>
                  </div>
                </div>
                
                <div className="border-l-4 border-primary-DEFAULT pl-6">
                  <h3 className="text-2xl font-bold mb-4">Community Impact & Visibility</h3>
                  <div className="text-gray-700 space-y-4">
                    <p>
                      As the partnership matured, its impact extended beyond direct educational services to create broader community 
                      visibility and opportunity pipelines for foundation students.
                    </p>
                    <p>
                      "What began as a facility access arrangement evolved into something much more powerful—a bridge between our students 
                      and the professional audio world," says Johnson. "Suddenly our young people weren't just learning in isolation; they 
                      were connecting with a vibrant community of professionals and seeing tangible pathways to careers in the industry."
                    </p>
                    <p>Key developments included:</p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Annual student showcase event hosted at Elemental Sound's performance venue</li>
                      <li>Creation of internship program for advanced students with Elemental Sound and partner organizations</li>
                      <li>Collaborative community projects bringing students and professionals together</li>
                      <li>Joint fundraising initiatives highlighting the educational partnership</li>
                      <li>Media coverage of innovative educational model and student success stories</li>
                    </ul>
                    <p>
                      The increased visibility significantly strengthened the foundation's fundraising capacity. "When potential donors 
                      could see our students working in professional environments and producing industry-quality work, it transformed 
                      their perception of what we were offering," notes Johnson. "It wasn't charity—it was investment in future talent."
                    </p>
                  </div>
                </div>
                
                <div className="border-l-4 border-primary-DEFAULT pl-6">
                  <h3 className="text-2xl font-bold mb-4">Sustainable Growth & Replication</h3>
                  <div className="text-gray-700 space-y-4">
                    <p>
                      By the third year of partnership, the collaboration had evolved into a sustainable model that enabled significant 
                      program expansion and created a template for potential replication in other communities.
                    </p>
                    <p>
                      "We've moved from thinking about our organization as a stand-alone entity to seeing ourselves as part of an 
                      ecosystem," explains Johnson. "This partnership model has allowed us to focus our resources on what we do best—
                      community engagement and foundational education—while leveraging Elemental Sound's specialized expertise and 
                      facilities for advanced training."
                    </p>
                    <p>Key elements of the sustainable model included:</p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Formalized agreement with tiered access system based on enrollment levels</li>
                      <li>Joint grant applications for specific educational initiatives</li>
                      <li>Revenue-sharing structure for collaborative programs and events</li>
                      <li>Documentation of program methodologies for potential replication</li>
                      <li>Co-developed impact measurement system tracking student outcomes</li>
                    </ul>
                    <p>
                      This model enabled the foundation to increase their annual student capacity from 500 to over 1,200 within three years, 
                      while significantly enhancing program quality and expanding into contemporary music fields. The success of this 
                      approach has attracted attention from other community organizations and music education nonprofits interested in 
                      implementing similar partnership models.
                    </p>
                  </div>
                </div>
              </div>
            </section>
            
            {/* Business Impact Section */}
            <section>
              <h2 className="text-3xl font-bold mb-8 pb-2 border-b border-gray-200">Impact Analysis</h2>
              
              <div className="space-y-10">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Program Growth & Capacity</h3>
                  <p className="text-gray-700 mb-4">
                    The partnership dramatically expanded the foundation's educational impact:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li><strong>Student capacity:</strong> Increased from 500 to 1,225 students annually (145% growth)</li>
                    <li><strong>Program diversity:</strong> Expanded from 4 to 14 distinct educational initiatives</li>
                    <li><strong>Geographic reach:</strong> Extended services to 5 additional underserved neighborhoods</li>
                    <li><strong>Advanced training:</strong> 218 students completed professional certification pathways</li>
                    <li><strong>Industry placement:</strong> 87% of certification graduates secured industry opportunities</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold mb-4">Financial Impact</h3>
                  <p className="text-gray-700 mb-4">
                    The partnership strengthened the foundation's financial health and sustainability:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li><strong>Grant funding:</strong> Increased from $380,000 to $1.2 million annually (3.2x growth)</li>
                    <li><strong>Corporate partnerships:</strong> Added 12 new corporate sponsors and supporters</li>
                    <li><strong>Cost efficiency:</strong> 42% reduction in per-student program cost</li>
                    <li><strong>Capital preservation:</strong> Avoided estimated $3.5 million in facility expansion costs</li>
                    <li><strong>Revenue diversification:</strong> Developed three new earned income streams through joint programs</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold mb-4">Educational Quality</h3>
                  <p className="text-gray-700 mb-4">
                    Program quality and outcomes showed significant improvement:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li><strong>Student retention:</strong> Increased from 65% to 87% annual continuation rate</li>
                    <li><strong>Portfolio quality:</strong> Student work consistently meeting industry-standard benchmarks</li>
                    <li><strong>College placement:</strong> 34 students secured music school scholarships in three years</li>
                    <li><strong>Industry recognition:</strong> Student projects featured in two national competitions</li>
                    <li><strong>Parent satisfaction:</strong> 92% "highly satisfied" rating in program evaluations</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold mb-4">Organizational Learning</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-light-DEFAULT p-6 rounded-lg">
                      <h4 className="text-xl font-bold mb-4">Strategic Insights</h4>
                      <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        <li>Strategic partnerships can be more effective than capital expansion for nonprofits</li>
                        <li>Educational impact is maximized when community engagement and professional access are combined</li>
                        <li>Technology access gaps significantly impact career pathways for underserved students</li>
                        <li>Creating visible pathways to professional opportunities improves student motivation</li>
                        <li>Cross-sector partnerships attract broader funding support than standalone programs</li>
                      </ul>
                    </div>
                    
                    <div className="bg-primary-DEFAULT/10 p-6 rounded-lg">
                      <h4 className="text-xl font-bold mb-4">Future Opportunities</h4>
                      <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        <li>Development of formalized replication model for other communities</li>
                        <li>Creation of student-run production services as social enterprise</li>
                        <li>Expansion into adjacent creative technology fields (game audio, VR/AR)</li>
                        <li>Establishment of alumni mentorship network for sustained impact</li>
                        <li>Implementation of longitudinal research study on career pathway effectiveness</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-light-DEFAULT p-8 rounded-lg">
                  <h3 className="text-2xl font-bold mb-4">Featured Initiative: "Future Producers"</h3>
                  <p className="text-gray-700 mb-6">
                    A showcase program demonstrating the full impact of the Harmony Foundation and Elemental Sound partnership:
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-xl font-bold mb-4">Program Structure</h4>
                      <p className="text-gray-700 mb-3">
                        "Future Producers" provides comprehensive production education through a structured pathway:
                      </p>
                      <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        <li>Three-phase curriculum over 18 months (Foundations, Production, Professional Practice)</li>
                        <li>Twice-weekly sessions at foundation facility for fundamentals training</li>
                        <li>Monthly studio intensives at Elemental Sound with professional mentors</li>
                        <li>Capstone project producing EP for emerging artists</li>
                        <li>Industry showcase with feedback from professionals</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-xl font-bold mb-4">Program Impact</h4>
                      <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        <li>87 graduates in first three program cohorts</li>
                        <li>92% program completion rate</li>
                        <li>21 graduates secured industry internships or entry-level positions</li>
                        <li>3 student productions received commercial radio airplay</li>
                        <li>Program model being adapted by two additional youth organizations</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            
            {/* CTA Section */}
            <div className="bg-primary-DEFAULT text-white p-8 rounded-lg mt-16 text-center">
              <h3 className="text-2xl font-bold mb-4">Partner with Elemental Sound for Community Impact</h3>
              <p className="text-lg mb-6">
                Discover how Elemental Sound's facilities, expertise, and educational resources can help your organization 
                expand its impact and create new opportunities for your community.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/services/community" className="btn bg-white text-primary-DEFAULT hover:bg-gray-100">
                  Explore Community Partnerships
                </Link>
                <Link href="/contact" className="btn btn-outline border-white text-white hover:bg-white hover:text-primary-DEFAULT">
                  Schedule a Consultation
                </Link>
              </div>
            </div>
          </article>
        </div>
      </main>
    </>
  );
} 