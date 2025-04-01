'use client';

import React from 'react';
import Link from 'next/link';

export default function WestsideRecords() {
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
    { name: 'Metro Audio College', link: '/client-stories/metro-audio-college' },
    { name: 'Metro Theater', link: '/client-stories/metro-theater' },
    { name: 'Riverfront Festival', link: '/client-stories/riverfront-festival' },
  ];

  const servicesUsed = [
    { name: 'Studio Design', link: '/services/studio-design' },
    { name: 'Production Services', link: '/services/production' },
    { name: 'Artist Development', link: '/services/artist-development' },
  ];

  return (
    <>
      {/* Page Banner */}
      <div className="relative h-96 bg-gradient-to-r from-primary-dark to-primary-DEFAULT overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/wiki-images/page-banners/client-banners/westside-records-banner.jpg"
            alt="Westside Records"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="container mx-auto px-4 h-full flex flex-col justify-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Westside Records</h1>
          <p className="text-2xl mb-6">Independent Record Label</p>
          <div className="max-w-3xl text-xl italic">
            "Elemental Sound transformed our production capacity and sonic identity. Their integrated approach to studio design, technical workflow, and artist development has been instrumental in our label's growth and the success of our roster."
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Sidebar */}
          <aside className="lg:w-1/4">
            <div className="bg-light-DEFAULT p-6 rounded-lg shadow-md mb-8">
              <h3 className="text-xl font-bold border-b border-gray-200 pb-3 mb-4">Label Profile</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="font-medium">Established:</span>
                  <span>2009</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Artists:</span>
                  <span>18 on Roster</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Genres:</span>
                  <span>Indie / Electronic / Hip-Hop</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Location:</span>
                  <span>Metro City, Arts District</span>
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
              <h2 className="text-3xl font-bold mb-8 pb-2 border-b border-gray-200">Label Overview</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                <div className="bg-light-DEFAULT rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-secondary-DEFAULT mb-2">165%</div>
                  <div className="text-gray-600">Revenue Growth</div>
                </div>
                <div className="bg-light-DEFAULT rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-secondary-DEFAULT mb-2">73%</div>
                  <div className="text-gray-600">Production Efficiency</div>
                </div>
                <div className="bg-light-DEFAULT rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-secondary-DEFAULT mb-2">8</div>
                  <div className="text-gray-600">Charting Releases</div>
                </div>
                <div className="bg-light-DEFAULT rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-secondary-DEFAULT mb-2">11M+</div>
                  <div className="text-gray-600">Annual Streams</div>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-4">The Challenge</h3>
              <p className="text-gray-700 mb-8">
                Westside Records, an independent label founded in 2009, had established itself with a small but dedicated 
                roster of artists spanning indie rock, electronic, and hip-hop genres. By 2018, the label had achieved modest 
                success with several releases gaining regional attention and moderate streaming numbers. However, founder and 
                CEO Daniel West recognized that the label had reached a critical plateau. Production bottlenecks in their 
                limited studio space were constraining release schedules. The label's sonic identity lacked consistency across 
                releases, making it difficult to build a recognizable brand. Additionally, rising production standards in the 
                independent music space meant that Westside's recordings were falling behind competitors in terms of sonic 
                quality and innovation. To break through to the next level of industry recognition and commercial success, the 
                label needed to transform both its technical capabilities and creative approach while maintaining the authentic, 
                artist-focused ethos that had been its foundation.
              </p>
              
              <h3 className="text-2xl font-bold mb-4">Background</h3>
              <p className="text-gray-700 mb-8">
                Westside Records began in 2009 when musician and producer Daniel West converted a small commercial space in the 
                city's emerging arts district into a makeshift recording studio. Initially functioning as a personal production 
                space where West collaborated with friends and local musicians, the operation gradually evolved into a formal label 
                as these projects gained traction in the local scene.
              </p>
              
              <p className="text-gray-700 mb-8">
                The label's early identity was defined by its DIY ethos, community connections, and West's production style, which 
                blended vintage analog equipment with digital workflows. Early successes came through several EP releases that gained 
                college radio play and built a modest but loyal following for the label's core artists. This organic growth allowed 
                Westside to expand from its initial three-artist roster to representing eight artists by 2015.
              </p>
              
              <p className="text-gray-700 mb-8">
                As the label grew, West invested incrementally in studio equipment and converted additional space in the building to 
                accommodate more production work. The label added two staff members—a recording engineer and a marketing coordinator—and 
                began developing more structured release schedules and marketing strategies. By 2018, Westside had established itself as 
                a respected local label with occasional regional breakthrough moments, but remained far from the national recognition that 
                West envisioned.
              </p>
              
              <p className="text-gray-700 mb-8">
                "We'd built something special, but it felt like we were hitting a ceiling," explains West. "Our studio setup was maxed out, 
                with artists competing for limited recording time. Our releases sounded good but not exceptional, and we weren't developing 
                the distinctive sonic identity that makes people immediately recognize a track as coming from your label. We needed to evolve, 
                but as an independent operation, we had to be incredibly strategic about where and how we invested."
              </p>
              
              <div className="bg-light-DEFAULT p-6 rounded-lg mb-8">
                <h3 className="text-2xl font-bold mb-4">Pain Points</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li><strong>Production Bottlenecks:</strong> Limited studio space creating scheduling conflicts and delayed releases</li>
                  <li><strong>Inconsistent Sound Quality:</strong> Varied production approaches resulting in uneven sonic quality across releases</li>
                  <li><strong>Technical Limitations:</strong> Existing studio design creating acoustic issues and workflow inefficiencies</li>
                  <li><strong>Artist Development Gaps:</strong> Insufficient resources for nurturing artists' distinctive sounds and approaches</li>
                  <li><strong>Brand Identity Challenges:</strong> Lack of cohesive sonic signature across the label's catalog</li>
                  <li><strong>Competitive Disadvantage:</strong> Production values falling behind industry standards for similar independent labels</li>
                  <li><strong>Resource Constraints:</strong> Limited budget requiring highly strategic investment decisions</li>
                </ul>
              </div>
              
              <div className="bg-light-DEFAULT p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Goals</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Redesign studio facilities to maximize production capacity and sound quality</li>
                  <li>Develop consistent production workflows that enhance the label's sonic identity</li>
                  <li>Create systems for more effective artist development and creative collaboration</li>
                  <li>Establish technical standards that elevate production quality across all releases</li>
                  <li>Build infrastructure that supports growth without losing independent spirit</li>
                  <li>Increase production output while maintaining or improving quality</li>
                  <li>Enhance the label's market position and recognition in the independent music scene</li>
                </ul>
              </div>
            </section>
            
            {/* Journey Section */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 pb-2 border-b border-gray-200">Partnership with Elemental Sound</h2>
              
              <div className="space-y-12">
                <div className="border-l-4 border-primary-DEFAULT pl-6">
                  <h3 className="text-2xl font-bold mb-4">Comprehensive Needs Assessment & Vision Development</h3>
                  <div className="text-gray-700 space-y-4">
                    <p>
                      The partnership began when West attended a music industry workshop where Elemental Sound was presenting on 
                      emerging studio design approaches for independent producers. Impressed by their holistic understanding of both 
                      technical and creative aspects of music production, West arranged a meeting to discuss Westside's challenges.
                    </p>
                    <p>
                      "What immediately stood out about Elemental Sound was that they understood we weren't just looking for technical 
                      solutions—we needed an approach that would support our creative identity and business goals," recalls West. "They 
                      asked questions no other consultant had asked about our artistic vision, workflow preferences, and the signature 
                      sounds we wanted to develop."
                    </p>
                    <p>
                      Rather than immediately proposing equipment upgrades or acoustic treatments, Elemental Sound initiated a comprehensive 
                      assessment process that examined Westside Records as an integrated creative ecosystem:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Detailed analysis of the label's existing catalog, identifying sonic strengths and inconsistencies</li>
                      <li>In-depth interviews with artists about their creative processes and recording experiences</li>
                      <li>Technical evaluation of current studio spaces, equipment, and acoustic characteristics</li>
                      <li>Workflow mapping to identify production bottlenecks and inefficiencies</li>
                      <li>Comparative analysis against similar successful independent labels</li>
                      <li>Collaborative workshops with the Westside team to articulate their vision and sonic aspirations</li>
                    </ul>
                    <p>
                      This thorough assessment revealed opportunities that had been missed in previous improvement attempts. For example, 
                      it identified that certain characteristic equipment combinations had been used on the label's most successful releases, 
                      suggesting elements of a signature sound that could be more intentionally developed. It also highlighted that 
                      pre-production limitations were creating more significant bottlenecks than recording space limitations.
                    </p>
                    <p>
                      "The assessment process itself was incredibly valuable," says West. "It forced us to articulate what made our label 
                      special and what sonic aesthetics we wanted to build upon. It helped us realize we didn't just need better equipment—we 
                      needed a more cohesive approach to how we created music."
                    </p>
                  </div>
                </div>
                
                <div className="border-l-4 border-primary-DEFAULT pl-6">
                  <h3 className="text-2xl font-bold mb-4">Studio Design & Technical Infrastructure Development</h3>
                  <div className="text-gray-700 space-y-4">
                    <p>
                      Based on the assessment findings, Elemental Sound developed a comprehensive redesign plan for Westside's production 
                      facilities that would maximize their existing space while creating a distinctive creative environment aligned with 
                      the label's aesthetic vision.
                    </p>
                    <p>
                      "We didn't have the budget to build a world-class studio from scratch, so we needed innovative solutions that would 
                      make the most of what we had," explains West. "Elemental Sound's approach was to create a modular, flexible environment 
                      that could be reconfigured for different recording scenarios while maintaining consistent sonic characteristics."
                    </p>
                    <p>Key elements of the studio design included:</p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Reconfiguration of existing spaces to create a main recording room, two isolation booths, and a dedicated mixing suite</li>
                      <li>Custom acoustic treatment designed to address specific issues while enhancing the natural character of the rooms</li>
                      <li>Modular recording setups allowing quick adaptation for different session types</li>
                      <li>Innovative signal flow architecture integrating vintage analog equipment with modern digital systems</li>
                      <li>Development of standardized recording configurations optimized for different musical genres and instruments</li>
                      <li>Creation of a separate pre-production space to alleviate main studio bottlenecks</li>
                    </ul>
                    <p>
                      Rather than recommending a complete equipment overhaul, Elemental Sound helped identify the most strategic upgrades that would 
                      complement Westside's existing gear. This included selecting signature processing equipment that would contribute to the 
                      label's sonic identity and implementing modular monitoring systems that could provide consistent reference points across 
                      all production spaces.
                    </p>
                    <p>
                      "They had a remarkable ability to identify exactly which pieces of equipment would have the biggest impact on our sound," 
                      notes Chief Engineer Sarah Kim. "Instead of a shopping list of the latest gear, they focused on finding the specific tools 
                      that would enhance our distinctive production approach and integrate with our existing workflow."
                    </p>
                    <p>
                      The technical infrastructure was designed to support simultaneous work in multiple spaces, with networked systems allowing 
                      sessions to move seamlessly between rooms. This significantly increased the studio's capacity while maintaining consistent 
                      sound quality throughout the production process.
                    </p>
                  </div>
                </div>
                
                <div className="border-l-4 border-primary-DEFAULT pl-6">
                  <h3 className="text-2xl font-bold mb-4">Workflow Optimization & Production Methodology</h3>
                  <div className="text-gray-700 space-y-4">
                    <p>
                      With the physical infrastructure taking shape, Elemental Sound worked with the Westside team to develop optimized 
                      production workflows and methodologies that would maximize their new capabilities while reinforcing the label's 
                      distinctive sound.
                    </p>
                    <p>
                      "Having great spaces and equipment was only part of the equation," explains West. "We needed to develop systematic 
                      approaches to how we worked with artists and captured performances that would both elevate quality and increase efficiency."
                    </p>
                    <p>The workflow development process included:</p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Creation of custom session templates tailored to different musical genres and production styles</li>
                      <li>Development of standardized signal chains for common recording scenarios that embodied the label's sound</li>
                      <li>Implementation of structured pre-production processes to maximize studio time efficiency</li>
                      <li>Design of collaborative review protocols to provide consistent feedback throughout production</li>
                      <li>Establishment of quality control checkpoints at key stages of the production process</li>
                      <li>Creation of detailed documentation systems to capture successful approaches for future reference</li>
                    </ul>
                    <p>
                      A particularly innovative aspect was the development of "sonic reference points"—a library of sound examples that 
                      articulated specific aesthetic goals and production standards for different elements across various genres. This 
                      created a common language for discussing sonic choices and helped ensure consistency across different producers and engineers.
                    </p>
                    <p>
                      "The reference library completely transformed how we communicated about sound," notes Kim. "Instead of vague descriptions 
                      or trying to remember how something was achieved on a previous session, we had concrete examples and documentation of 
                      techniques that captured the qualities we were seeking."
                    </p>
                    <p>
                      Elemental Sound also helped develop a structured approach to mixing and mastering that preserved each artist's unique character 
                      while ensuring all releases met the label's quality standards and contributed to its recognizable sonic identity. This included 
                      creating relationship structures with select external mastering engineers who understood the label's aesthetic goals.
                    </p>
                  </div>
                </div>
                
                <div className="border-l-4 border-primary-DEFAULT pl-6">
                  <h3 className="text-2xl font-bold mb-4">Artist Development & Creative Collaboration</h3>
                  <div className="text-gray-700 space-y-4">
                    <p>
                      Recognizing that technical infrastructure alone wouldn't achieve Westside's goals, Elemental Sound worked with 
                      the label to develop enhanced artist development processes that would nurture distinctive creative voices within 
                      the label's overall sonic framework.
                    </p>
                    <p>
                      "We'd always prided ourselves on artist-centric relationships, but we needed more structured approaches to help 
                      artists develop their sound and translate their vision into recordings," explains West. "The goal was to create 
                      systems that supported creative growth without imposing formula."
                    </p>
                    <p>Key elements of the artist development program included:</p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Creation of artist-specific sonic profiles identifying signature elements of each artist's sound</li>
                      <li>Development of tailored pre-production processes adapting to different creative approaches</li>
                      <li>Implementation of collaborative workshops where artists could share techniques and inspiration</li>
                      <li>Establishment of regular listening sessions analyzing both Westside releases and external references</li>
                      <li>Design of iterative feedback processes that respected artistic vision while elevating production quality</li>
                      <li>Formation of producer-artist pairing strategies based on complementary strengths and approaches</li>
                    </ul>
                    <p>
                      A significant innovation was the creation of "sound development sessions"—dedicated studio time where artists could 
                      experiment with different recording and production approaches without the pressure of creating finished tracks. These 
                      sessions often led to breakthroughs in developing distinctive sounds that later defined successful releases.
                    </p>
                    <p>
                      "The development sessions were transformative for my process," shares Luna Chen, one of Westside's electronic artists. 
                      "Having space to explore without immediate expectations of finished tracks helped me discover sonic signatures that have 
                      become central to my sound. The structured feedback and access to production expertise accelerated my growth in ways that 
                      wouldn't have happened otherwise."
                    </p>
                    <p>
                      Elemental Sound also helped Westside develop frameworks for cross-roster collaboration, creating opportunities for artists 
                      to contribute to each other's projects. This not only generated exciting creative results but strengthened the sense of 
                      community among the label's roster and contributed to a more cohesive label identity.
                    </p>
                  </div>
                </div>
                
                <div className="border-l-4 border-primary-DEFAULT pl-6">
                  <h3 className="text-2xl font-bold mb-4">Knowledge Transfer & Team Development</h3>
                  <div className="text-gray-700 space-y-4">
                    <p>
                      To ensure sustainable long-term impact, Elemental Sound developed a comprehensive knowledge transfer program 
                      that built the Westside team's capabilities and created systems for ongoing evolution.
                    </p>
                    <p>
                      "We didn't want to be dependent on external expertise indefinitely," notes West. "We needed to internalize 
                      the knowledge and develop our team's capacity to maintain and evolve our approach as technology and musical 
                      trends changed."
                    </p>
                    <p>The knowledge transfer program included:</p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Intensive training sessions covering technical systems, production techniques, and creative approaches</li>
                      <li>Creation of comprehensive documentation for all studio configurations and signal chains</li>
                      <li>Development of decision-making frameworks for future equipment acquisition and studio evolution</li>
                      <li>Establishment of internal mentoring relationships to spread expertise throughout the team</li>
                      <li>Design of continuous learning protocols to keep the team current with emerging technologies and techniques</li>
                      <li>Formation of relationships with specialized external resources for specific technical needs</li>
                    </ul>
                    <p>
                      As the partnership matured, Elemental Sound transitioned from direct implementation to a consulting role, helping 
                      the Westside team evaluate new challenges and opportunities as they arose. This ensured the label could continue to 
                      evolve independently while having access to specialized expertise when needed.
                    </p>
                    <p>
                      "The knowledge transfer wasn't just technical—it included developing our team's confidence in making production decisions 
                      that aligned with our aesthetic goals," notes Kim. "We went from having good instincts to having systematic approaches 
                      for achieving the sounds we wanted, which transformed our ability to consistently deliver high-quality releases."
                    </p>
                    <p>
                      A particularly valuable outcome was the development of Westside's own production philosophy and methodology—a documented 
                      approach that articulated the label's perspective on recording and production. This became a valuable tool for onboarding 
                      new team members and communicating with external collaborators, ensuring consistent quality even as the label continued to grow.
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
                  <h3 className="text-2xl font-bold mb-4">Production Capacity & Efficiency</h3>
                  <p className="text-gray-700 mb-4">
                    The partnership dramatically enhanced Westside's production capabilities:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li><strong>Release output:</strong> Increased from 6-8 annual releases to 14-18 while improving quality</li>
                    <li><strong>Studio utilization:</strong> 73% improvement in effective studio time utilization</li>
                    <li><strong>Production timeline:</strong> Average project completion time reduced by 38% with higher quality outcomes</li>
                    <li><strong>Simultaneous production:</strong> Capacity increased from 1-2 active projects to 4-5 concurrent productions</li>
                    <li><strong>Technical issues:</strong> 82% reduction in session delays due to technical problems</li>
                    <li><strong>Resource optimization:</strong> 65% reduction in redundant recording and editing work</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold mb-4">Artist Success & Roster Growth</h3>
                  <p className="text-gray-700 mb-4">
                    Enhanced production values and artist development processes elevated artist outcomes:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li><strong>Charting releases:</strong> 8 releases entering genre-specific charts (up from 1 previously)</li>
                    <li><strong>Streaming performance:</strong> Average streaming per release increased by 215%</li>
                    <li><strong>Roster expansion:</strong> Growth from 8 to 18 artists with improved selection criteria</li>
                    <li><strong>Artist retention:</strong> 94% roster retention rate (up from 75%)</li>
                    <li><strong>Label applications:</strong> 340% increase in established artists seeking to join the label</li>
                    <li><strong>Cross-roster collaborations:</strong> 12 successful collaborative projects among label artists</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold mb-4">Business Growth & Market Position</h3>
                  <p className="text-gray-700 mb-4">
                    Improved production quality and distinctive sound elevated the label's market position:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li><strong>Revenue growth:</strong> 165% increase in overall label revenue over three years</li>
                    <li><strong>Alternative income:</strong> New revenue streams from production services and licensing</li>
                    <li><strong>Media coverage:</strong> 280% increase in feature stories in music publications</li>
                    <li><strong>Industry recognition:</strong> Two industry awards for label excellence</li>
                    <li><strong>Sync licensing:</strong> 420% growth in placements for film, television, and advertising</li>
                    <li><strong>Festival representation:</strong> 175% increase in artist bookings at major festivals</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold mb-4">Sonic Identity & Brand Development</h3>
                  <p className="text-gray-700 mb-4">
                    The label has established a distinctive sonic identity that enhances its market position:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li><strong>Brand recognition:</strong> 82% of surveyed industry professionals able to identify Westside releases by sound</li>
                    <li><strong>Audience perception:</strong> Significant improvement in listener association of specific sonic characteristics with the label</li>
                    <li><strong>Cross-genre consistency:</strong> Establishment of recognizable sonic elements that span diverse musical styles</li>
                    <li><strong>Critical recognition:</strong> Multiple reviews specifically noting the label's distinctive production approach</li>
                    <li><strong>Production requests:</strong> 340% increase in external artists requesting production in Westside's style</li>
                    <li><strong>Sound influence:</strong> Recognition of the label's approach influencing regional music production trends</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold mb-4">Team Development & Sustainability</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-light-DEFAULT p-6 rounded-lg">
                      <h4 className="text-xl font-bold mb-4">Internal Capabilities</h4>
                      <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        <li>Expansion from 3 to 8 full-time team members with specialized skills</li>
                        <li>Development of formal internship program with 5 successful transitions to staff</li>
                        <li>Establishment of continuous learning program for ongoing team development</li>
                        <li>Creation of comprehensive production documentation and knowledge base</li>
                        <li>Implementation of structured skills assessment and development pathways</li>
                      </ul>
                    </div>
                    
                    <div className="bg-primary-DEFAULT/10 p-6 rounded-lg">
                      <h4 className="text-xl font-bold mb-4">Future Growth Foundation</h4>
                      <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        <li>Scalable production systems capable of supporting continued roster expansion</li>
                        <li>Modular studio design allowing for incremental capacity increases</li>
                        <li>Development of label-specific production methodology documentation</li>
                        <li>Strategic equipment acquisition roadmap for future technological evolution</li>
                        <li>Creation of innovation processes to continuously evolve the label's sound</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-light-DEFAULT p-8 rounded-lg">
                  <h3 className="text-2xl font-bold mb-4">Featured Project: The Night Collection</h3>
                  <p className="text-gray-700 mb-6">
                    A showcase example of how the partnership transformed Westside's production capabilities and market impact:
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-xl font-bold mb-4">Project Overview</h4>
                      <p className="text-gray-700 mb-3">
                        "The Night Collection" was an ambitious project that brought together six Westside artists to create 
                        interconnected EPs exploring nocturnal themes across different musical genres. The project leveraged the 
                        label's enhanced production capabilities and collaborative methodologies:
                      </p>
                      <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        <li>Six distinct EPs with stylistic connections and shared sonic elements</li>
                        <li>Collaborative pre-production process developing thematic and sonic threads</li>
                        <li>Integrated recording approach utilizing all studio spaces simultaneously</li>
                        <li>Cross-genre artist collaborations creating unique hybrid tracks</li>
                        <li>Unified mastering approach ensuring cohesive sound across diverse styles</li>
                        <li>Innovative release strategy with coordinated rollout over three months</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-xl font-bold mb-4">Results & Recognition</h4>
                      <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        <li>Most commercially successful project in the label's history (240% above average)</li>
                        <li>Three tracks placed in influential editorial playlists across major platforms</li>
                        <li>Featured story in leading industry publication highlighting the production approach</li>
                        <li>Multiple sync placements including use in a premium television series</li>
                        <li>Nominated for "Best Independent Label Project" at industry awards</li>
                        <li>Established a new format that has been continued annually with different themes</li>
                      </ul>
                      <p className="text-gray-700 mt-4">
                        "The Night Collection became our statement project, showcasing not just our artists' talents but our distinctive 
                        approach to production," notes West. "It would have been impossible to execute before our partnership with 
                        Elemental Sound—both technically and creatively. The project embodied everything we'd been working toward: distinct 
                        artist voices unified by a recognizable label sound, creative collaboration producing something greater than the sum 
                        of its parts, and technical excellence that elevated every aspect of the music."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            
            {/* CTA Section */}
            <div className="bg-primary-DEFAULT text-white p-8 rounded-lg mt-16 text-center">
              <h3 className="text-2xl font-bold mb-4">Label & Production Development</h3>
              <p className="text-lg mb-6">
                Develop your label's sonic identity and production capabilities with Elemental Sound's integrated approach. 
                From studio design to artist development, we help independent labels create distinctive, compelling recordings 
                that stand out in today's music landscape.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/services/studio-design" className="btn bg-white text-primary-DEFAULT hover:bg-gray-100">
                  Explore Label Services
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