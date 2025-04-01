'use client';

import React from 'react';
import Link from 'next/link';

export default function JordanTaylor() {
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
  ];

  const servicesUsed = [
    { name: 'Acoustic Design', link: '/services/acoustic-design' },
    { name: 'Equipment Consultation', link: '/services/equipment' },
    { name: 'Voice Actor Pass', link: '/services/membership' },
  ];

  return (
    <>
      {/* Page Banner */}
      <div className="relative h-96 bg-gradient-to-r from-primary-dark to-primary-DEFAULT overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/wiki-images/page-banners/client-banners/jordan-taylor-banner.jpg"
            alt="Jordan Taylor"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="container mx-auto px-4 h-full flex flex-col justify-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Jordan Taylor</h1>
          <p className="text-2xl mb-6">Professional Voice Actor</p>
          <div className="max-w-3xl text-xl italic">
            "Elemental Sound transformed my home studio from a constant source of frustration into a professional workspace that's helped me land major clients and deliver consistently exceptional recordings."
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
                  <span className="font-medium">Specialization:</span>
                  <span>Animation & Commercial VO</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Experience:</span>
                  <span>7 years</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Location:</span>
                  <span>Home Studio, Metro City</span>
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
                  <div className="text-3xl font-bold text-secondary-DEFAULT mb-2">79%</div>
                  <div className="text-gray-600">Project Acceptance Rate</div>
                </div>
                <div className="bg-light-DEFAULT rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-secondary-DEFAULT mb-2">62%</div>
                  <div className="text-gray-600">Revenue Increase</div>
                </div>
                <div className="bg-light-DEFAULT rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-secondary-DEFAULT mb-2">3</div>
                  <div className="text-gray-600">Major Agency Signings</div>
                </div>
                <div className="bg-light-DEFAULT rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-secondary-DEFAULT mb-2">93%</div>
                  <div className="text-gray-600">First-Take Approval Rate</div>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-4">The Challenge</h3>
              <p className="text-gray-700 mb-8">
                Jordan Taylor was facing a critical crossroads in his voice acting career. After transitioning from part-time
                to full-time voice work three years ago, he had built a modest client base for commercial and e-learning projects.
                However, as he pursued higher-tier opportunities in animation, video games, and national advertising campaigns,
                he repeatedly encountered the same feedback: while his performance skills were excellent, his recording quality
                was inconsistent and below the standards required for premium projects. Working from a converted closet in his
                apartment, Jordan struggled with persistent technical issues including room resonances, inconsistent sound quality,
                and intrusive background noise that required extensive editing. These technical limitations were not only causing
                him to lose potential jobs but also consuming excessive time in post-processing, limiting his audition output and
                overall productivity.
              </p>
              
              <h3 className="text-2xl font-bold mb-4">Background</h3>
              <p className="text-gray-700 mb-8">
                Jordan's journey into voice acting began in his late twenties after a decade working in radio broadcasting.
                His natural vocal talents and on-air experience provided a solid foundation, and he quickly found work in local
                commercials and corporate narration. Early success encouraged him to pursue voice acting full-time, investing his
                savings in basic home recording equipment and converting a bedroom closet into a makeshift vocal booth.
              </p>
              
              <p className="text-gray-700 mb-8">
                While this setup was adequate for entry-level projects, Jordan's career aspirations pointed toward more demanding
                work in animation, video games, and national ad campaigns. He soon discovered that these opportunities required
                not only superior performance skills but also broadcast-quality audio that could stand alongside professional studio
                recordings. Despite investing in better microphones and preamps, the fundamental limitations of his recording space
                continued to compromise his deliverables.
              </p>
              
              <p className="text-gray-700 mb-8">
                After several promising opportunities fell through due to audio quality concerns, Jordan realized he needed
                professional help. His initial research into commercial studio construction revealed prohibitive costs—properly
                building out a professional home studio would require $15,000-$25,000, far beyond his available resources. Furthermore,
                as an apartment dweller, he faced significant constraints on structural modifications. With high-profile auditions
                continuing to be rejected despite strong performances, Jordan needed a solution that would elevate his technical
                capabilities without requiring a financial commitment that would put his career at risk.
              </p>
              
              <div className="bg-light-DEFAULT p-6 rounded-lg mb-8">
                <h3 className="text-2xl font-bold mb-4">Pain Points</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li><strong>Recording Quality:</strong> Inconsistent audio quality undermining strong performance skills</li>
                  <li><strong>Space Limitations:</strong> Apartment constraints preventing proper studio construction</li>
                  <li><strong>Financial Barriers:</strong> Professional studio costs exceeding available resources</li>
                  <li><strong>Technical Knowledge Gap:</strong> Uncertainty about acoustic treatment solutions</li>
                  <li><strong>Lost Opportunities:</strong> Premium projects rejecting submissions due to audio quality</li>
                  <li><strong>Inefficient Workflow:</strong> Excessive time spent fixing preventable audio issues</li>
                </ul>
              </div>
              
              <div className="bg-light-DEFAULT p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Goals</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Create a professional-quality recording environment within apartment constraints</li>
                  <li>Achieve broadcast-standard audio quality for premium project submissions</li>
                  <li>Develop a more efficient recording and submission workflow</li>
                  <li>Build technical knowledge for ongoing studio maintenance and troubleshooting</li>
                  <li>Access backup recording options for specialized project requirements</li>
                  <li>Establish technical credibility with high-tier clients and agents</li>
                </ul>
              </div>
            </section>
            
            {/* Journey Section */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 pb-2 border-b border-gray-200">Journey with Elemental Sound</h2>
              
              <div className="space-y-12">
                <div className="border-l-4 border-primary-DEFAULT pl-6">
                  <h3 className="text-2xl font-bold mb-4">Acoustic Assessment & Design Planning</h3>
                  <div className="text-gray-700 space-y-4">
                    <p>
                      Jordan discovered Elemental Sound through a voice actor community forum where several members recommended
                      their home studio design services. Initially skeptical about what could be accomplished within his constraints,
                      Jordan scheduled a consultation that began with a comprehensive assessment of his current setup.
                    </p>
                    <p>
                      "I expected a quick walkthrough and some basic tips," Jordan recalls. "Instead, they conducted a thorough
                      acoustic analysis of my space, using specialized equipment to measure room resonances, reflection points, and
                      external noise intrusion. They identified issues I didn't even know existed and, more importantly, demonstrated
                      how these problems were directly affecting my recordings."
                    </p>
                    <p>The assessment process included:</p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Detailed acoustic measurement of the existing recording space</li>
                      <li>Analysis of external and internal noise sources</li>
                      <li>Evaluation of current equipment and signal chain</li>
                      <li>Review of recent rejection samples to identify specific audio issues</li>
                      <li>Assessment of apartment limitations for structural modifications</li>
                    </ul>
                    <p>
                      Following this assessment, Elemental Sound's home studio specialist developed a customized studio design plan
                      that worked within Jordan's space, budget, and apartment constraints. Rather than a one-size-fits-all approach,
                      the plan prioritized improvements based on the specific requirements of voice acting work and addressed the
                      particular acoustical challenges of his space.
                    </p>
                    <p>
                      "The most impressive aspect was how they tailored the solution to my specific needs," notes Jordan. "They didn't
                      try to sell me on unnecessary equipment or unrealistic renovations. Instead, they focused on practical solutions
                      that would deliver the most significant improvements for voice recording specifically."
                    </p>
                  </div>
                </div>
                
                <div className="border-l-4 border-primary-DEFAULT pl-6">
                  <h3 className="text-2xl font-bold mb-4">Studio Implementation</h3>
                  <div className="text-gray-700 space-y-4">
                    <p>
                      With a clear plan established, Jordan worked with Elemental Sound to implement the home studio redesign in
                      phases, allowing him to continue working while progressively improving his recording environment.
                    </p>
                    <p>
                      "They created a staged implementation that respected both my budget and my need to keep working," explains Jordan.
                      "Each phase delivered noticeable improvements, which helped me secure better projects and reinvest in the next
                      stage of upgrades."
                    </p>
                    <p>The implementation process included:</p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Construction of a modular, non-permanent acoustical treatment system for the recording space</li>
                      <li>Strategic repositioning of existing equipment for optimal performance</li>
                      <li>Installation of specialized voice-focused acoustic panels and bass traps</li>
                      <li>Implementation of floating floor solution to reduce structural vibration</li>
                      <li>Setup of improved monitoring system for accurate playback assessment</li>
                    </ul>
                    <p>
                      Throughout the implementation, Elemental Sound provided hands-on guidance and education, ensuring Jordan understood
                      not just what was being done but why, building his technical knowledge for future self-sufficiency.
                    </p>
                    <p>
                      "They didn't just install things and leave—they turned the entire process into an educational experience," Jordan
                      says. "I learned about acoustic principles, signal flow optimization, and how to diagnose problems in my recordings.
                      This knowledge has been almost as valuable as the physical improvements."
                    </p>
                  </div>
                </div>
                
                <div className="border-l-4 border-primary-DEFAULT pl-6">
                  <h3 className="text-2xl font-bold mb-4">Workflow Optimization</h3>
                  <div className="text-gray-700 space-y-4">
                    <p>
                      With the physical space transformed, attention shifted to optimizing Jordan's technical workflow to maximize
                      efficiency and ensure consistent quality across all submissions.
                    </p>
                    <p>
                      "The physical space was just the beginning," notes Jordan. "What really transformed my productivity was the
                      workflow redesign. They helped me establish recording protocols and processing chains that eliminated the 
                      constant troubleshooting and rework that had been consuming so much of my time."
                    </p>
                    <p>Key workflow improvements included:</p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Creation of standardized session templates for different project types</li>
                      <li>Development of consistent signal chain presets for various voice styles</li>
                      <li>Implementation of efficient file naming and organization systems</li>
                      <li>Establishment of quality control protocols before submission</li>
                      <li>Setup of automated backup systems to protect client work</li>
                    </ul>
                    <p>
                      This systematic approach dramatically reduced the time Jordan spent on technical aspects of each project,
                      allowing him to focus on performance and take on more auditions and jobs.
                    </p>
                    <p>
                      "Before, I might spend an hour fixing audio issues for every 15 minutes of actual recording," explains Jordan.
                      "Now, I can record continuously with confidence, knowing that what I'm hearing is what the client will receive.
                      My output has more than doubled, which directly translates to more auditions and more bookings."
                    </p>
                  </div>
                </div>
                
                <div className="border-l-4 border-primary-DEFAULT pl-6">
                  <h3 className="text-2xl font-bold mb-4">Supplemental Studio Access</h3>
                  <div className="text-gray-700 space-y-4">
                    <p>
                      While Jordan's home studio now met the requirements for most projects, some specialized jobs required
                      facilities beyond what could be implemented in a residential setting. Recognizing this need, Elemental Sound
                      introduced Jordan to their Voice Actor Pass membership, providing access to their professional facilities as needed.
                    </p>
                    <p>
                      "Having access to their studios as a backup has been invaluable for certain projects," says Jordan. "When I need
                      to record directed sessions with multiple stakeholders or use specialized equipment for a particular sound, I can
                      book time in their voice-over suites without maintaining that infrastructure myself."
                    </p>
                    <p>The Voice Actor Pass provided several key advantages:</p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>On-demand access to professional studio spaces for client-directed sessions</li>
                      <li>Availability of specialized equipment for specific project requirements</li>
                      <li>Private space for recording sensitive or NDA-protected content</li>
                      <li>Professional environment for meeting with agents and high-profile clients</li>
                      <li>Backup recording location during home renovations or technical issues</li>
                    </ul>
                    <p>
                      This hybrid approach—a professional-quality home studio for daily work combined with access to commercial
                      facilities when needed—proved to be the ideal solution for Jordan's career stage.
                    </p>
                    <p>
                      "It's the perfect balance," notes Jordan. "I have independence and convenience for daily recording, but also
                      access to world-class facilities when a project demands it. This flexibility has allowed me to confidently
                      pursue any opportunity that comes my way."
                    </p>
                  </div>
                </div>
                
                <div className="border-l-4 border-primary-DEFAULT pl-6">
                  <h3 className="text-2xl font-bold mb-4">Career Expansion</h3>
                  <div className="text-gray-700 space-y-4">
                    <p>
                      The combination of improved recording quality, optimized workflow, and flexible facility access transformed
                      Jordan's career trajectory, opening doors to premium opportunities that had previously been inaccessible.
                    </p>
                    <p>
                      "The change in client response was immediate and dramatic," Jordan explains. "Suddenly, the feedback was focused
                      entirely on my performance rather than technical issues. Projects that would have been automatic rejections
                      before were now getting serious consideration, and my booking rate skyrocketed."
                    </p>
                    <p>Key career developments included:</p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Signing with three major voice talent agencies that had previously declined representation</li>
                      <li>Securing first major animation series role as a supporting character</li>
                      <li>Booking national commercial campaigns for two Fortune 500 brands</li>
                      <li>Establishing ongoing relationships with four production studios for regular work</li>
                      <li>Developing specialized expertise in video game and interactive media voiceover</li>
                    </ul>
                    <p>
                      Beyond individual bookings, the professional quality of Jordan's recordings and his technical reliability
                      changed how production companies viewed working with him.
                    </p>
                    <p>
                      "I've gone from being seen as a 'budget option' to a trusted professional who delivers broadcast-quality audio
                      consistently," says Jordan. "Directors and producers now confidently book remote sessions with me rather than
                      requiring in-studio recording, which has expanded my client base nationally and even internationally."
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
                    The transformation of Jordan's recording capabilities directly translated to financial growth:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li><strong>Revenue growth:</strong> 62% increase in annual income within first year</li>
                    <li><strong>Project value:</strong> 87% increase in average project fee</li>
                    <li><strong>ROI:</strong> Studio investment recouped within 4.7 months through increased bookings</li>
                    <li><strong>Efficient income:</strong> 40% reduction in time spent on technical issues and editing</li>
                    <li><strong>Recurring revenue:</strong> 68% increase in repeat client business</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold mb-4">Performance Metrics</h3>
                  <p className="text-gray-700 mb-4">
                    Jordan's technical improvements yielded measurable performance enhancements:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li><strong>Audition conversion:</strong> Increased from 12% to 31% booking rate</li>
                    <li><strong>First-take approval:</strong> 93% of submissions approved without revision requests</li>
                    <li><strong>Project acceptance:</strong> 79% of submissions meeting technical requirements on first review</li>
                    <li><strong>Production efficiency:</strong> Average project completion time reduced by 45%</li>
                    <li><strong>Daily output:</strong> Audition submission capacity increased from 8 to 18 per day</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold mb-4">Career Development</h3>
                  <p className="text-gray-700 mb-4">
                    Technical improvements catalyzed significant career advancement:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li><strong>Agency representation:</strong> Secured relationships with three premium talent agencies</li>
                    <li><strong>Project diversity:</strong> Expanded from primarily e-learning to animation, gaming, and national advertising</li>
                    <li><strong>Client tier:</strong> Transitioned from regional to national and international clients</li>
                    <li><strong>Industry recognition:</strong> Featured in industry publication as emerging voice talent</li>
                    <li><strong>Professional network:</strong> Established relationships with major production studios and directors</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold mb-4">Key Learnings</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-light-DEFAULT p-6 rounded-lg">
                      <h4 className="text-xl font-bold mb-4">Technical Insights</h4>
                      <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        <li>Technical quality often represents the primary barrier to career advancement for performers</li>
                        <li>Targeted acoustic treatment delivers better results than equipment upgrades for most voice actors</li>
                        <li>Standardized workflows dramatically reduce technical inconsistency in recordings</li>
                        <li>Hybrid studio access models provide maximum flexibility for freelance voice talent</li>
                        <li>Room acoustics have more impact on recording quality than microphone selection for most spaces</li>
                      </ul>
                    </div>
                    
                    <div className="bg-primary-DEFAULT/10 p-6 rounded-lg">
                      <h4 className="text-xl font-bold mb-4">Future Growth Opportunities</h4>
                      <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        <li>Development of remote directed session protocols for international client expansion</li>
                        <li>Creation of specialized character demo reels leveraging improved recording capabilities</li>
                        <li>Expansion into emerging technologies requiring high-quality voice recording (AI, XR)</li>
                        <li>Potential relocation with custom studio build once career stability is established</li>
                        <li>Development of production offerings for other voice actors as additional revenue stream</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-light-DEFAULT p-8 rounded-lg">
                  <h3 className="text-2xl font-bold mb-4">Featured Project: "Chronos Chronicles" Animated Series</h3>
                  <p className="text-gray-700 mb-6">
                    A showcase project that demonstrates the full impact of Jordan's studio transformation:
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-xl font-bold mb-4">Project Requirements</h4>
                      <p className="text-gray-700 mb-3">
                        This animated streaming series represented Jordan's first major character role, with demanding technical specifications:
                      </p>
                      <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        <li>Broadcast-quality audio matching studio-recorded cast members</li>
                        <li>Consistent technical quality across 26 episodes</li>
                        <li>Remote recording with live direction via Source Connect</li>
                        <li>Ability to maintain character consistency across multiple recording sessions</li>
                        <li>Fast-turnaround pickups and revisions during post-production</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-xl font-bold mb-4">Project Impact</h4>
                      <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        <li>Successfully delivered all episodes with no technical rejections</li>
                        <li>Character role expanded from supporting to recurring based on performance</li>
                        <li>Received specific praise from director for audio quality matching studio-recorded cast</li>
                        <li>Established relationship leading to two additional projects with same production company</li>
                        <li>Series success generated significant exposure and industry recognition</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            
            {/* CTA Section */}
            <div className="bg-primary-DEFAULT text-white p-8 rounded-lg mt-16 text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Voice Acting Career?</h3>
              <p className="text-lg mb-6">
                Discover how Elemental Sound's acoustic design services and voice actor membership can help you deliver
                professional-quality recordings and access premium opportunities.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/services/acoustic-design" className="btn bg-white text-primary-DEFAULT hover:bg-gray-100">
                  Explore Acoustic Design Services
                </Link>
                <Link href="/services/membership" className="btn btn-outline border-white text-white hover:bg-white hover:text-primary-DEFAULT">
                  Learn About Voice Actor Pass
                </Link>
              </div>
            </div>
          </article>
        </div>
      </main>
    </>
  );
} 