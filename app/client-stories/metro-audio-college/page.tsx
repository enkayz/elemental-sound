'use client';

import React from 'react';
import Link from 'next/link';

export default function MetroAudioCollege() {
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
    { name: 'Harmony Foundation', link: '/client-stories/harmony-foundation' },
    { name: 'Jordan Taylor', link: '/client-stories/jordan-taylor' },
  ];

  const servicesUsed = [
    { name: 'Education Partnership', link: '/services/education' },
    { name: 'Facility Access', link: '/services/studios' },
    { name: 'Curriculum Development', link: '/services/consulting' },
  ];

  return (
    <>
      {/* Page Banner */}
      <div className="relative h-96 bg-gradient-to-r from-primary-dark to-primary-DEFAULT overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/wiki-images/page-banners/client-banners/metro-audio-college-banner.jpg"
            alt="Metro Audio College"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="container mx-auto px-4 h-full flex flex-col justify-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Metro Audio College</h1>
          <p className="text-2xl mb-6">Educational Institution</p>
          <div className="max-w-3xl text-xl italic">
            "Our partnership with Elemental Sound has transformed our educational model, giving students real-world experience in professional environments while significantly enhancing our curriculum's relevance to industry needs."
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Sidebar */}
          <aside className="lg:w-1/4">
            <div className="bg-light-DEFAULT p-6 rounded-lg shadow-md mb-8">
              <h3 className="text-xl font-bold border-b border-gray-200 pb-3 mb-4">Institution Profile</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="font-medium">Founded:</span>
                  <span>1997</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Programs:</span>
                  <span>12 Audio & Music Courses</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Students:</span>
                  <span>450+ Annual Enrollment</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Location:</span>
                  <span>Metro City, Central Campus</span>
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
              <h2 className="text-3xl font-bold mb-8 pb-2 border-b border-gray-200">Institution Overview</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                <div className="bg-light-DEFAULT rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-secondary-DEFAULT mb-2">32%</div>
                  <div className="text-gray-600">Increase in Applications</div>
                </div>
                <div className="bg-light-DEFAULT rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-secondary-DEFAULT mb-2">87%</div>
                  <div className="text-gray-600">Industry Placement Rate</div>
                </div>
                <div className="bg-light-DEFAULT rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-secondary-DEFAULT mb-2">4</div>
                  <div className="text-gray-600">New Program Launches</div>
                </div>
                <div className="bg-light-DEFAULT rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-secondary-DEFAULT mb-2">94%</div>
                  <div className="text-gray-600">Student Satisfaction</div>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-4">The Challenge</h3>
              <p className="text-gray-700 mb-8">
                Metro Audio College, a well-established institution specializing in audio engineering, music production, and sound design education, 
                was facing significant challenges in maintaining relevance in a rapidly evolving industry. Despite a strong reputation built over more 
                than two decades, the college was experiencing concerning trends: declining enrollment in traditional programs, increasing questions from 
                prospective students about how curriculum aligned with current industry practices, and feedback from employers that graduates, while 
                technically proficient, often lacked experience with contemporary workflows and emerging technologies. Additionally, the substantial cost 
                of continuously updating facility equipment to match industry standards was straining the institution's financial resources. College 
                leadership recognized that their educational model needed modernization to prepare students for today's audio industry while maintaining 
                financial sustainability.
              </p>
              
              <h3 className="text-2xl font-bold mb-4">Background</h3>
              <p className="text-gray-700 mb-8">
                Founded in 1997, Metro Audio College began as a specialized training program for recording engineers when large commercial studios dominated 
                the industry. The college built its reputation on hands-on education with professional equipment, strong ties to local studios, and a faculty 
                of experienced industry professionals. For many years, this model served students well, with graduates successfully entering the workforce at 
                established recording facilities.
              </p>
              
              <p className="text-gray-700 mb-8">
                However, the audio industry underwent dramatic transformation over the following decades. The rise of project studios, digital audio workstations, 
                and new specialized fields like game audio, immersive sound, and podcast production significantly changed both the skills required of audio 
                professionals and the employment landscape they entered. Traditional career paths through established studios were increasingly replaced by 
                entrepreneurial models, specialized technical roles, and project-based work across multiple media forms.
              </p>
              
              <p className="text-gray-700 mb-8">
                By 2018, Metro Audio College was at a crossroads. While still respected for its fundamental audio education, the institution was struggling to 
                adapt quickly enough to industry changes. Student feedback increasingly highlighted concerns about learning outdated workflows or equipment that 
                didn't reflect current professional environments. Meanwhile, faculty members, many having built their careers in traditional studio environments, 
                needed support to update their knowledge in rapidly evolving specialties. The college faced the challenge of comprehensively modernizing its 
                educational approach while working within the constraints of an educational institution's budget cycle and physical infrastructure.
              </p>
              
              <div className="bg-light-DEFAULT p-6 rounded-lg mb-8">
                <h3 className="text-2xl font-bold mb-4">Pain Points</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li><strong>Curriculum Relevance:</strong> Programs struggling to keep pace with rapidly changing industry practices</li>
                  <li><strong>Equipment Costs:</strong> Unsustainable financial burden of continuously updating in-house technology</li>
                  <li><strong>Faculty Development:</strong> Instructors needing support to teach emerging audio specializations</li>
                  <li><strong>Industry Alignment:</strong> Growing gap between academic training and real-world professional requirements</li>
                  <li><strong>Practical Experience:</strong> Limited opportunities for students to work on professional-level projects</li>
                  <li><strong>Specialized Facilities:</strong> Inability to offer training in all emerging audio fields due to infrastructure limitations</li>
                </ul>
              </div>
              
              <div className="bg-light-DEFAULT p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Goals</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Modernize curriculum to reflect contemporary audio industry practices</li>
                  <li>Provide students with experience in professional-grade environments</li>
                  <li>Expand educational offerings into emerging specialized audio fields</li>
                  <li>Enhance faculty expertise in current technologies and workflows</li>
                  <li>Create sustainable model for accessing cutting-edge equipment and facilities</li>
                  <li>Strengthen employment outcomes and industry relevance of graduates</li>
                </ul>
              </div>
            </section>
            
            {/* Journey Section */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 pb-2 border-b border-gray-200">Partnership with Elemental Sound</h2>
              
              <div className="space-y-12">
                <div className="border-l-4 border-primary-DEFAULT pl-6">
                  <h3 className="text-2xl font-bold mb-4">Strategic Assessment & Partnership Development</h3>
                  <div className="text-gray-700 space-y-4">
                    <p>
                      The relationship between Metro Audio College and Elemental Sound began when the college's Dean of Academic Affairs attended 
                      an industry conference where Elemental Sound's education director was presenting on evolving audio workflows. Impressed by 
                      their approach to contemporary audio education, the dean initiated a conversation about potential collaboration. This led to 
                      a formal assessment process to identify strategic opportunities.
                    </p>
                    <p>
                      "From our first meetings, it was clear that Elemental Sound understood both where the industry was heading and the unique 
                      challenges educational institutions face in adapting to rapid change," explains Dr. Sarah Chen, President of Metro Audio College. 
                      "Rather than simply offering us access to facilities, they approached the relationship as a true educational partnership focused 
                      on student outcomes."
                    </p>
                    <p>The initial assessment process included:</p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Comprehensive review of existing curriculum and student feedback</li>
                      <li>Faculty interviews to identify knowledge gaps and development needs</li>
                      <li>Evaluation of current facilities and technology infrastructure</li>
                      <li>Analysis of regional industry needs and employment opportunities</li>
                      <li>Identification of potential collaborative projects and programs</li>
                    </ul>
                    <p>
                      This assessment led to the development of a strategic partnership framework that would address the college's core challenges 
                      while leveraging the respective strengths of both organizations. Rather than a traditional vendor relationship, the partnership 
                      was structured as an integrated educational collaboration with shared objectives and metrics.
                    </p>
                  </div>
                </div>
                
                <div className="border-l-4 border-primary-DEFAULT pl-6">
                  <h3 className="text-2xl font-bold mb-4">Curriculum Integration & Development</h3>
                  <div className="text-gray-700 space-y-4">
                    <p>
                      The first phase of implementation focused on updating and enhancing the college's curriculum to better align with current 
                      industry practices while integrating access to Elemental Sound's specialized facilities.
                    </p>
                    <p>
                      "We didn't want to simply add field trips to studios," notes Professor Mark Wilson, Department Chair of Audio Engineering. 
                      "The goal was to fundamentally reimagine how we structure learning experiences to blend theoretical foundation with practical 
                      application in professional environments."
                    </p>
                    <p>Key curriculum developments included:</p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Redesign of core audio engineering courses to integrate regular sessions at Elemental Sound facilities</li>
                      <li>Development of new specialized electives in emerging fields like immersive audio and game sound design</li>
                      <li>Creation of project-based learning modules paired with professional facility access</li>
                      <li>Implementation of standardized assessment rubrics aligned with industry expectations</li>
                      <li>Establishment of capstone project framework utilizing professional production environments</li>
                    </ul>
                    <p>
                      This curriculum integration transformed the student experience by creating a seamless flow between classroom instruction on 
                      campus and hands-on application in professional environments. Students began each module with foundational knowledge and 
                      skill development at the college, then applied these skills in Elemental Sound's facilities under conditions that mimicked 
                      professional workflows.
                    </p>
                    <p>
                      "The integrated approach means students aren't just 'visiting' professional studios—they're applying what they've learned in 
                      authentic contexts with real-world constraints and expectations," explains Wilson. "This creates deeper learning and better 
                      prepares them for the transition to professional work."
                    </p>
                  </div>
                </div>
                
                <div className="border-l-4 border-primary-DEFAULT pl-6">
                  <h3 className="text-2xl font-bold mb-4">Faculty Development & Industry Alignment</h3>
                  <div className="text-gray-700 space-y-4">
                    <p>
                      Parallel to curriculum development, the partnership addressed faculty knowledge development to ensure instructors remained 
                      at the forefront of industry practices and technologies.
                    </p>
                    <p>
                      "Many of our faculty built successful careers in traditional studio environments, but needed support to stay current with rapidly 
                      evolving specialties like immersive audio or interactive media," notes Dr. Chen. "The partnership created structured professional 
                      development pathways that kept our instructors at the cutting edge."
                    </p>
                    <p>The faculty development program included:</p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Specialized workshops on emerging technologies and workflows</li>
                      <li>Regular "industry immersion" days for faculty to work alongside Elemental Sound professionals</li>
                      <li>Collaborative research projects addressing evolving audio practices</li>
                      <li>Team-teaching opportunities with industry specialists</li>
                      <li>Access to Elemental Sound's professional development resources and training materials</li>
                    </ul>
                    <p>
                      This comprehensive approach ensured that faculty could authentically integrate contemporary practices into their teaching, 
                      enhancing the relevance and value of classroom instruction. It also created opportunities for instructors to maintain active 
                      professional practice alongside their teaching responsibilities.
                    </p>
                    <p>
                      "The development program has completely transformed my effectiveness as an instructor," shares Professor Rebecca Park, who 
                      teaches post-production audio. "I'm now confidently teaching workflows and technologies that are actually being used in the 
                      industry today, rather than what was standard five years ago when I last worked full-time in the field."
                    </p>
                  </div>
                </div>
                
                <div className="border-l-4 border-primary-DEFAULT pl-6">
                  <h3 className="text-2xl font-bold mb-4">Specialized Program Development</h3>
                  <div className="text-gray-700 space-y-4">
                    <p>
                      With core curriculum enhancement underway, the partnership expanded to develop entirely new specialized programs that 
                      addressed emerging industry needs and leveraged Elemental Sound's unique capabilities.
                    </p>
                    <p>
                      "The partnership allowed us to be much more responsive to industry evolution than we could have been independently," 
                      explains Dr. Chen. "Instead of a years-long process to develop new programs—by which time the technology might already 
                      be changing again—we could quickly create specialized offerings that met immediate industry needs."
                    </p>
                    <p>New programs developed through the partnership included:</p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Immersive Audio Certificate focused on spatial sound for film, gaming, and VR/AR applications</li>
                      <li>Podcast Production & Audio Storytelling program combining technical and content creation skills</li>
                      <li>Game Audio Specialization integrated with local game development studios</li>
                      <li>Audio for Extended Reality (XR) advanced certificate for emerging technologies</li>
                    </ul>
                    <p>
                      These programs were distinctive in their hybrid delivery model. Students received theoretical foundations and basic skills 
                      training at Metro Audio College, then completed intensive practicum experiences in Elemental Sound's specialized facilities. 
                      This approach allowed the college to offer cutting-edge programs without massive capital investment in rapidly evolving technologies.
                    </p>
                    <p>
                      "The Immersive Audio Certificate has been transformative for our students' career outcomes," notes Professor Wilson. "We've had 
                      graduates secure positions at major studios and technology companies specifically because they had hands-on experience with 
                      these systems that many other entry-level candidates lacked."
                    </p>
                  </div>
                </div>
                
                <div className="border-l-4 border-primary-DEFAULT pl-6">
                  <h3 className="text-2xl font-bold mb-4">Industry Integration & Career Development</h3>
                  <div className="text-gray-700 space-y-4">
                    <p>
                      As the partnership matured, it expanded beyond facility access and curriculum development to create deeper connections between 
                      students and the professional audio community, enhancing career pathways and employment outcomes.
                    </p>
                    <p>
                      "The most powerful impact has been the dissolution of the traditional boundary between education and industry," says Dr. Chen. 
                      "Our students are now integrating into professional networks and building relationships while still in school, which dramatically 
                      improves their transition to professional work."
                    </p>
                    <p>Key initiatives included:</p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Structured internship program placing advanced students with Elemental Sound and partner organizations</li>
                      <li>Professional mentorship matching for students in specialized programs</li>
                      <li>Client-commissioned projects completed by student teams under professional supervision</li>
                      <li>Industry showcase events highlighting student work to potential employers</li>
                      <li>Alumni network development connecting graduates with current students</li>
                    </ul>
                    <p>
                      These initiatives created tangible pathways from education to employment. Students built portfolios with professional-quality 
                      work, developed relationships with industry professionals, and gained authentic workplace experience before graduation. The 
                      result was a significant improvement in employment outcomes and starting positions for graduates.
                    </p>
                    <p>
                      "Before the partnership, most of our graduates were starting in entry-level assistant positions," explains Wilson. "Now we're 
                      seeing many secure associate-level roles or specialized positions immediately upon graduation, often with companies they 
                      connected with through partnership programs."
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
                  <h3 className="text-2xl font-bold mb-4">Educational Outcomes</h3>
                  <p className="text-gray-700 mb-4">
                    The partnership significantly enhanced the college's educational effectiveness:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li><strong>Student satisfaction:</strong> Increased from 76% to 94% "very satisfied" rating</li>
                    <li><strong>Program completion:</strong> Graduation rate improved from 84% to 92%</li>
                    <li><strong>Portfolio quality:</strong> 87% of student capstone projects meeting professional standards</li>
                    <li><strong>Technical proficiency:</strong> 35% improvement in industry assessment scores for graduates</li>
                    <li><strong>Job readiness:</strong> 92% of employers rating graduates as "well prepared" for professional work</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold mb-4">Institutional Growth</h3>
                  <p className="text-gray-700 mb-4">
                    The college experienced significant growth and enhanced market position:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li><strong>Enrollment growth:</strong> 32% increase in applications across all programs</li>
                    <li><strong>Program expansion:</strong> Successfully launched 4 new specialized certificate programs</li>
                    <li><strong>Student diversity:</strong> 45% increase in applications from underrepresented groups</li>
                    <li><strong>Market differentiation:</strong> Recognition as regional leader in contemporary audio education</li>
                    <li><strong>Industry partnerships:</strong> 11 new corporate relationships established through shared network</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold mb-4">Employment Outcomes</h3>
                  <p className="text-gray-700 mb-4">
                    Graduate career success showed marked improvement:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li><strong>Placement rate:</strong> Industry employment within 6 months increased from 72% to 87%</li>
                    <li><strong>Starting positions:</strong> 54% of graduates securing above entry-level roles (up from 23%)</li>
                    <li><strong>Career diversity:</strong> Graduates placed across 14 different audio-related industries</li>
                    <li><strong>Salary outcomes:</strong> 24% increase in average starting compensation</li>
                    <li><strong>Entrepreneurship:</strong> 28% of graduates successfully launching independent practices within 2 years</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold mb-4">Financial Sustainability</h3>
                  <p className="text-gray-700 mb-4">
                    The partnership created a more sustainable operational model:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li><strong>Equipment efficiency:</strong> 62% reduction in equipment obsolescence costs</li>
                    <li><strong>Resource allocation:</strong> Strategic focus of capital budget on core infrastructure</li>
                    <li><strong>Revenue diversification:</strong> 4 new revenue streams through professional certification programs</li>
                    <li><strong>Operational efficiency:</strong> Shared resources model reducing per-student instructional costs by 18%</li>
                    <li><strong>Strategic investment:</strong> Reallocation of resources to faculty development and student support</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold mb-4">Educational Innovation</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-light-DEFAULT p-6 rounded-lg">
                      <h4 className="text-xl font-bold mb-4">Key Learning Models</h4>
                      <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        <li>Integrated theory-to-practice curriculum structure improves skill retention</li>
                        <li>Professional context integration enhances student motivation and engagement</li>
                        <li>Hybrid resource access models create sustainable technical education</li>
                        <li>Faculty-practitioner collaboration improves educational relevance</li>
                        <li>Industry-embedded assessment provides more meaningful evaluation</li>
                      </ul>
                    </div>
                    
                    <div className="bg-primary-DEFAULT/10 p-6 rounded-lg">
                      <h4 className="text-xl font-bold mb-4">Future Opportunities</h4>
                      <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        <li>Development of flexible micro-credential pathways for working professionals</li>
                        <li>Creation of industry research partnerships for emerging audio technologies</li>
                        <li>Expansion of joint international programs with partner institutions</li>
                        <li>Implementation of AI and adaptive learning tools for technical foundations</li>
                        <li>Integration of entrepreneurship development across all program areas</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-light-DEFAULT p-8 rounded-lg">
                  <h3 className="text-2xl font-bold mb-4">Featured Initiative: Immersive Audio Program</h3>
                  <p className="text-gray-700 mb-6">
                    A showcase program demonstrating the full impact of the educational partnership model:
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-xl font-bold mb-4">Program Structure</h4>
                      <p className="text-gray-700 mb-3">
                        The Immersive Audio Certificate represented a new model of specialized education:
                      </p>
                      <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        <li>16-week intensive program combining campus-based fundamentals with facility-based application</li>
                        <li>Team-teaching approach pairing college faculty with industry specialists</li>
                        <li>Progressive project sequence building from technical exercises to client commissions</li>
                        <li>Access to multiple immersive audio formats and environments at Elemental Sound</li>
                        <li>Culminating in real-world project delivery for external client</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-xl font-bold mb-4">Program Impact</h4>
                      <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        <li>93% placement rate for graduates in immersive audio roles</li>
                        <li>Student projects selected for showcase at international audio convention</li>
                        <li>Program recognized with educational innovation award</li>
                        <li>Multiple industry partnerships developed through project collaborations</li>
                        <li>Established Metro Audio College as a leader in immersive audio education</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            
            {/* CTA Section */}
            <div className="bg-primary-DEFAULT text-white p-8 rounded-lg mt-16 text-center">
              <h3 className="text-2xl font-bold mb-4">Educational Partnership Opportunities</h3>
              <p className="text-lg mb-6">
                Discover how Elemental Sound can help your educational institution enhance student outcomes, modernize curriculum, 
                and create meaningful connections with the audio industry.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/services/education" className="btn bg-white text-primary-DEFAULT hover:bg-gray-100">
                  Explore Education Partnerships
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