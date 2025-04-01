'use client';

import React from 'react';
import Link from 'next/link';

export default function ElenaGonzalez() {
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
  ];

  const servicesUsed = [
    { name: 'Expert Pass', link: '/services/membership' },
    { name: 'Sound Design Lab', link: '/services/sound-design' },
    { name: 'Creative Tools', link: '/services/software' },
  ];

  return (
    <>
      {/* Page Banner */}
      <div className="relative h-96 bg-gradient-to-r from-primary-dark to-primary-DEFAULT overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/wiki-images/page-banners/client-banners/elena-gonzalez-banner.jpg"
            alt="Elena Gonzalez"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="container mx-auto px-4 h-full flex flex-col justify-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Elena Gonzalez</h1>
          <p className="text-2xl mb-6">Sound Designer & Audio Artist</p>
          <div className="max-w-3xl text-xl italic">
            "Elemental Sound has completely transformed my approach to sound design. Having access to their specialized tools and labs has elevated my creative process beyond what I ever thought possible."
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
                  <span>Game Audio & Interactive Media</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Experience:</span>
                  <span>9+ years</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Location:</span>
                  <span>Metro City</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Notable Work:</span>
                  <span>"Echoes of Eternity" (Game)</span>
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
                  <div className="text-3xl font-bold text-secondary-DEFAULT mb-2">3</div>
                  <div className="text-gray-600">Award-Winning Projects</div>
                </div>
                <div className="bg-light-DEFAULT rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-secondary-DEFAULT mb-2">72%</div>
                  <div className="text-gray-600">Revenue Growth</div>
                </div>
                <div className="bg-light-DEFAULT rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-secondary-DEFAULT mb-2">62%</div>
                  <div className="text-gray-600">Project Capacity Increase</div>
                </div>
                <div className="bg-light-DEFAULT rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-secondary-DEFAULT mb-2">5</div>
                  <div className="text-gray-600">New Major Clients</div>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-4">The Challenge</h3>
              <p className="text-gray-700 mb-8">
                Elena Gonzalez had established herself as a talented sound designer for indie games and interactive media, 
                but she faced significant barriers to scaling her career to the next level. With a background in music 
                composition and a self-taught approach to sound design, Elena had developed a distinctive creative style 
                that attracted indie developers. However, as her reputation grew, she began receiving opportunities for 
                larger projects with AAA game studios and interactive installation artists that required more advanced 
                technical capabilities, specialized recording facilities, and immersive audio expertise. Working from her 
                home studio with limited equipment and acoustic treatment, Elena struggled to meet the technical requirements 
                of these premium projects, limiting her career growth and forcing her to turn down potentially career-defining 
                opportunities.
              </p>
              
              <h3 className="text-2xl font-bold mb-4">Background</h3>
              <p className="text-gray-700 mb-8">
                Elena's journey into sound design began as a classically trained composer who discovered a passion for 
                interactive audio while collaborating on a friend's indie game project. Her musical background and intuitive 
                approach to sound creation quickly earned her recognition in the indie game community, where her work on 
                several critically acclaimed titles established her reputation for evocative soundscapes and innovative 
                adaptive audio systems.
              </p>
              
              <p className="text-gray-700 mb-8">
                By 2019, Elena had built a comfortable freelance career creating sound design for indie games, art 
                installations, and occasional commercial projects. Her home studio, while modest, was sufficient for many 
                of her typical projects. However, the nature of her work began to change as her portfolio grew. She started 
                receiving inquiries for projects requiring specialized audio recording capabilities like Foley stages, 
                immersive audio mixing environments, and advanced motion capture integration—facilities and equipment 
                far beyond what she could establish as an independent creator.
              </p>
              
              <p className="text-gray-700 mb-8">
                The turning point came when Elena was offered a sound design role for "Echoes of Eternity," an ambitious 
                indie game with AAA-level audio requirements, including full binaural audio, procedural sound systems, and 
                an adaptive orchestral score. While creatively perfect for her sensibilities, the technical requirements 
                far exceeded her capabilities. With limited options for accessing professional-grade facilities in her region, 
                Elena faced the real possibility of having to decline the project—until a colleague mentioned Elemental Sound's 
                specialized services for sound designers.
              </p>
              
              <div className="bg-light-DEFAULT p-6 rounded-lg mb-8">
                <h3 className="text-2xl font-bold mb-4">Pain Points</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li><strong>Technical Limitations:</strong> Home studio lacked specialized equipment needed for advanced sound design</li>
                  <li><strong>Acoustic Constraints:</strong> Residential setting prevented accurate monitoring for spatial audio</li>
                  <li><strong>Resource Access:</strong> No access to Foley stages or specialized recording environments</li>
                  <li><strong>Workflow Bottlenecks:</strong> Limited ability to record multiple sound sources simultaneously</li>
                  <li><strong>Learning Barriers:</strong> Difficulty accessing training on emerging audio technologies</li>
                  <li><strong>Client Presentation:</strong> Lacked professional environment to present work to high-tier clients</li>
                </ul>
              </div>
              
              <div className="bg-light-DEFAULT p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Goals</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Access professional-grade sound design facilities without massive capital investment</li>
                  <li>Develop expertise in emerging audio technologies like spatial audio and procedural generation</li>
                  <li>Build capabilities to handle larger, more technically demanding projects</li>
                  <li>Create a more efficient workflow for complex sound design assignments</li>
                  <li>Establish relationships with higher-tier clients in gaming and interactive media</li>
                  <li>Maintain creative independence while expanding technical capabilities</li>
                </ul>
              </div>
            </section>
            
            {/* Journey Section */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 pb-2 border-b border-gray-200">Journey with Elemental Sound</h2>
              
              <div className="space-y-12">
                <div className="border-l-4 border-primary-DEFAULT pl-6">
                  <h3 className="text-2xl font-bold mb-4">Discovery & Initial Assessment</h3>
                  <div className="text-gray-700 space-y-4">
                    <p>
                      Elena's introduction to Elemental Sound came at a critical juncture in her career, just as she was 
                      considering whether to accept or decline the "Echoes of Eternity" project. After an initial consultation, 
                      Elemental Sound conducted a thorough assessment of her existing workflow, technical capabilities, and 
                      the requirements for her upcoming projects.
                    </p>
                    <p>
                      "I was immediately struck by how well they understood the specific challenges of game audio," Elena recalls. 
                      "They weren't just offering generic studio space—they had specialized tools and environments specifically 
                      designed for interactive sound design that I hadn't seen anywhere else."
                    </p>
                    <p>The assessment process included:</p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Review of Elena's existing sound design workflow and tools</li>
                      <li>Analysis of technical requirements for the "Echoes of Eternity" project</li>
                      <li>Evaluation of skill gaps and learning opportunities</li>
                      <li>Identification of specialized equipment and environments needed</li>
                      <li>Development of a customized plan for integrating Elemental Sound's resources</li>
                    </ul>
                    <p>
                      This assessment revealed that while Elena had strong creative foundations, she would benefit significantly 
                      from access to Elemental Sound's Sound Design Lab, which included specialized recording environments, 
                      spatial audio mixing capabilities, and expert mentorship in game audio production.
                    </p>
                  </div>
                </div>
                
                <div className="border-l-4 border-primary-DEFAULT pl-6">
                  <h3 className="text-2xl font-bold mb-4">Technical Expansion (Months 1-3)</h3>
                  <div className="text-gray-700 space-y-4">
                    <p>
                      Elena began with the Expert Pass membership, which provided priority access to Elemental Sound's 
                      specialized facilities. The initial phase focused on expanding her technical capabilities to meet the 
                      immediate requirements of the "Echoes of Eternity" project.
                    </p>
                    <p>
                      "The learning curve was steep but incredibly exhilarating," Elena explains. "Within weeks, I was working 
                      with binaural recording setups I had only read about before, and receiving guidance from sound designers 
                      who had worked on some of my favorite games."
                    </p>
                    <p>Key elements of this phase included:</p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Training on spatial audio mixing techniques and technologies</li>
                      <li>Access to the Foley stage for creating custom game sound effects</li>
                      <li>Mentorship in middleware integration (FMOD, Wwise) for adaptive audio</li>
                      <li>Hands-on experience with ambisonic recording equipment</li>
                      <li>Development of efficient asset management workflows for large projects</li>
                    </ul>
                    <p>
                      With this foundation in place, Elena was able to confidently commit to the "Echoes of Eternity" project, 
                      knowing she had both the technical resources and expertise to deliver at the required level.
                    </p>
                  </div>
                </div>
                
                <div className="border-l-4 border-primary-DEFAULT pl-6">
                  <h3 className="text-2xl font-bold mb-4">Creative Experimentation (Months 4-8)</h3>
                  <div className="text-gray-700 space-y-4">
                    <p>
                      As Elena became comfortable with the technical facilities, her focus shifted to creative experimentation 
                      using Elemental Sound's unique sound design resources.
                    </p>
                    <p>
                      "What truly transformed my work wasn't just the technical capabilities, but the creative possibilities they 
                      unlocked," notes Elena. "Having access to their modular synthesis lab, experimental processing tools, and 
                      massive sound library allowed me to develop entirely new approaches to sound creation."
                    </p>
                    <p>This creative exploration included:</p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Development of custom procedural audio systems for dynamic environments</li>
                      <li>Experimentation with biometric sensors to create reactive sound experiences</li>
                      <li>Creation of custom field recording expeditions for unique sound sources</li>
                      <li>Cross-discipline collaborations with other Elemental Sound members</li>
                      <li>Workshops on cutting-edge sound design techniques with industry leaders</li>
                    </ul>
                    <p>
                      This period of experimentation resulted in Elena developing a signature approach to adaptive audio that became 
                      central to her work on "Echoes of Eternity" and subsequent projects. Her innovative use of procedural audio 
                      to create evolving soundscapes gained particular attention within the game audio community.
                    </p>
                  </div>
                </div>
                
                <div className="border-l-4 border-primary-DEFAULT pl-6">
                  <h3 className="text-2xl font-bold mb-4">Client Growth & Project Expansion (Months 9-18)</h3>
                  <div className="text-gray-700 space-y-4">
                    <p>
                      As word of Elena's work on "Echoes of Eternity" spread through the industry, she began receiving inquiries 
                      from higher-tier clients. Elemental Sound's professional facilities became a key asset in securing and executing 
                      these projects.
                    </p>
                    <p>
                      "Having access to Elemental Sound completely changed how I approached client relationships," Elena explains. 
                      "I could confidently pitch for projects that would have been technically impossible before, and bring clients 
                      into a professional environment that immediately elevated their perception of my capabilities."
                    </p>
                    <p>Key developments during this phase included:</p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Securing contracts with two AAA game studios for specialized sound design work</li>
                      <li>Developing an ongoing relationship with an acclaimed interactive installation artist</li>
                      <li>Creating sound for a VR experience that premiered at a major film festival</li>
                      <li>Establishing a reputation for excellence in spatial audio implementation</li>
                      <li>Building a team of collaborators for larger projects through Elemental Sound's network</li>
                    </ul>
                    <p>
                      The successful completion of "Echoes of Eternity" became a pivotal showcase for Elena's expanded capabilities. 
                      The game received multiple awards for its audio design, including "Best Audio" at an independent game festival, 
                      significantly raising Elena's profile in the industry.
                    </p>
                  </div>
                </div>
                
                <div className="border-l-4 border-primary-DEFAULT pl-6">
                  <h3 className="text-2xl font-bold mb-4">Knowledge Sharing & Community Leadership (Years 2-3)</h3>
                  <div className="text-gray-700 space-y-4">
                    <p>
                      As Elena's career flourished, her relationship with Elemental Sound evolved to include knowledge sharing 
                      and community leadership. She began contributing to the community that had supported her growth, further 
                      enhancing her professional standing.
                    </p>
                    <p>
                      "One of the most rewarding aspects of my partnership with Elemental Sound has been the opportunity to give 
                      back to the community," says Elena. "As my expertise has grown, I've been able to mentor emerging sound 
                      designers and contribute to the collective knowledge base."
                    </p>
                    <p>These contributions included:</p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Leading workshops on game audio implementation for Elemental Sound members</li>
                      <li>Developing specialized templates and tools for the community resource library</li>
                      <li>Mentoring three emerging sound designers through formal programs</li>
                      <li>Collaborating on a research project exploring new spatial audio techniques</li>
                      <li>Co-authoring a technical paper on procedural audio systems</li>
                    </ul>
                    <p>
                      This leadership role not only strengthened Elena's connection to the audio community but also bolstered 
                      her reputation as a thought leader in interactive audio, leading to speaking engagements at industry 
                      conferences and guest lectures at educational institutions.
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
                  <h3 className="text-2xl font-bold mb-4">Career Growth & Financial Impact</h3>
                  <p className="text-gray-700 mb-4">
                    Elena's partnership with Elemental Sound transformed her career trajectory:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li><strong>Revenue growth:</strong> 72% increase in annual income over three years</li>
                    <li><strong>Project value:</strong> Average project budget increased by 185%</li>
                    <li><strong>Client tier:</strong> Successfully transitioned from indie-only to mix of indie and AAA projects</li>
                    <li><strong>Investment efficiency:</strong> Access to estimated $1.2M in equipment for fraction of ownership cost</li>
                    <li><strong>Career opportunities:</strong> Received job offers from three major game studios (declined in favor of independence)</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold mb-4">Creative & Technical Impact</h3>
                  <p className="text-gray-700 mb-4">
                    The partnership enabled significant evolution in Elena's creative approach and technical capabilities:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li><strong>Technical skills:</strong> Mastered 7 new audio technologies and workflows</li>
                    <li><strong>Creative range:</strong> Expanded from primarily 2D indie games to VR, AAA, and installation art</li>
                    <li><strong>Output quality:</strong> Achieved measurably higher technical standards in frequency response and spatialization</li>
                    <li><strong>Industry recognition:</strong> 3 award-winning projects within 2 years</li>
                    <li><strong>Creative signature:</strong> Developed distinctive approach to procedural and adaptive audio</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold mb-4">Operational Improvements</h3>
                  <p className="text-gray-700 mb-4">
                    The partnership significantly improved Elena's operational effectiveness:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li><strong>Project capacity:</strong> 62% increase in concurrent project capability</li>
                    <li><strong>Production efficiency:</strong> 40% reduction in time required for complex sound asset creation</li>
                    <li><strong>Collaboration ability:</strong> Successfully managed first multi-person team projects</li>
                    <li><strong>Resource utilization:</strong> Optimized balance between home studio and specialized facilities</li>
                    <li><strong>Client management:</strong> Improved presentation capabilities led to 95% pitch success rate</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold mb-4">Key Learnings</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-light-DEFAULT p-6 rounded-lg">
                      <h4 className="text-xl font-bold mb-4">Professional Insights</h4>
                      <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        <li>Technical capability ceiling is often the primary barrier to creative freelancer growth</li>
                        <li>Access to specialized facilities creates opportunities for tier advancement</li>
                        <li>Community knowledge sharing accelerates professional development</li>
                        <li>Professional presentation environments significantly impact client acquisition</li>
                        <li>Balancing technical skills with creative signature is key to standing out</li>
                      </ul>
                    </div>
                    
                    <div className="bg-primary-DEFAULT/10 p-6 rounded-lg">
                      <h4 className="text-xl font-bold mb-4">Future Growth Opportunities</h4>
                      <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        <li>Expansion into audio system design and consultation for game developers</li>
                        <li>Creation of signature sound libraries and tools for the broader community</li>
                        <li>Exploration of cross-disciplinary projects between games and experimental media</li>
                        <li>Development of educational content based on accumulated expertise</li>
                        <li>Formation of a specialized audio collective for larger-scale projects</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-light-DEFAULT p-8 rounded-lg">
                  <h3 className="text-2xl font-bold mb-4">Featured Project: "Echoes of Eternity"</h3>
                  <p className="text-gray-700 mb-6">
                    The project that marked Elena's transformational partnership with Elemental Sound:
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-xl font-bold mb-4">Project Approach</h4>
                      <p className="text-gray-700 mb-3">
                        "Echoes of Eternity" required a comprehensive sound design approach that pushed beyond conventional game audio:
                      </p>
                      <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        <li>Created over 4,000 original sound assets using Elemental Sound's Foley stage and field recording equipment</li>
                        <li>Developed proprietary procedural audio system for environmental sounds that react to player actions</li>
                        <li>Implemented full binaural audio mix for heightened immersion</li>
                        <li>Designed adaptive music system that seamlessly transitions based on gameplay emotional states</li>
                        <li>Conducted playtesting sessions in Elemental Sound's reference listening environment</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-xl font-bold mb-4">Project Impact</h4>
                      <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        <li>Won "Best Audio Design" at Independent Game Festival</li>
                        <li>Critically acclaimed for its innovative approach to interactive audio</li>
                        <li>Generated three additional client relationships through industry recognition</li>
                        <li>Featured as a case study in a prominent game audio publication</li>
                        <li>Established Elena's reputation as a leader in procedural and adaptive audio</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            
            {/* CTA Section */}
            <div className="bg-primary-DEFAULT text-white p-8 rounded-lg mt-16 text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Sound Design Career?</h3>
              <p className="text-lg mb-6">
                Discover how Elemental Sound's specialized facilities and community can help you elevate your creative 
                capabilities and take on more ambitious projects.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/services/membership" className="btn bg-white text-primary-DEFAULT hover:bg-gray-100">
                  Explore Expert Pass
                </Link>
                <Link href="/services/sound-design" className="btn btn-outline border-white text-white hover:bg-white hover:text-primary-DEFAULT">
                  Visit Sound Design Lab
                </Link>
              </div>
            </div>
          </article>
        </div>
      </main>
    </>
  );
} 