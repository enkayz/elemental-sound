'use client';

import React from 'react';
import Link from 'next/link';

export default function RiverfrontFestival() {
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
  ];

  const servicesUsed = [
    { name: 'Event Production', link: '/services/events' },
    { name: 'Live Sound', link: '/services/live-sound' },
    { name: 'Technical Consultation', link: '/services/consultation' },
  ];

  return (
    <>
      {/* Page Banner */}
      <div className="relative h-96 bg-gradient-to-r from-primary-dark to-primary-DEFAULT overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/wiki-images/page-banners/client-banners/riverfront-festival-banner.jpg"
            alt="Riverfront Festival"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="container mx-auto px-4 h-full flex flex-col justify-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Riverfront Festival</h1>
          <p className="text-2xl mb-6">Annual Music Event</p>
          <div className="max-w-3xl text-xl italic">
            "Elemental Sound turned our growing festival into a world-class event with flawless audio across multiple stages. Their expertise in outdoor acoustics and crowd management has elevated the experience for both artists and attendees."
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Sidebar */}
          <aside className="lg:w-1/4">
            <div className="bg-light-DEFAULT p-6 rounded-lg shadow-md mb-8">
              <h3 className="text-xl font-bold border-b border-gray-200 pb-3 mb-4">Event Profile</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="font-medium">Established:</span>
                  <span>2014</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Attendance:</span>
                  <span>25,000+ Annual</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Stages:</span>
                  <span>4 Performance Areas</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Location:</span>
                  <span>Metro City Waterfront</span>
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
            {/* Event Overview Section */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 pb-2 border-b border-gray-200">Event Overview</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                <div className="bg-light-DEFAULT rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-secondary-DEFAULT mb-2">142%</div>
                  <div className="text-gray-600">Attendance Growth</div>
                </div>
                <div className="bg-light-DEFAULT rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-secondary-DEFAULT mb-2">96%</div>
                  <div className="text-gray-600">Artist Satisfaction</div>
                </div>
                <div className="bg-light-DEFAULT rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-secondary-DEFAULT mb-2">63%</div>
                  <div className="text-gray-600">Reduced Sound Issues</div>
                </div>
                <div className="bg-light-DEFAULT rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-secondary-DEFAULT mb-2">4.8</div>
                  <div className="text-gray-600">Attendee Rating (out of 5)</div>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-4">The Challenge</h3>
              <p className="text-gray-700 mb-8">
                Riverfront Festival began in 2014 as a modest single-day music event with local artists and approximately 2,000 attendees. 
                By 2018, it had expanded to a three-day festival featuring regional and national acts with attendance exceeding 15,000. 
                This rapid growth created significant challenges for the festival's organizers. Sound quality across multiple stages had 
                become inconsistent, with frequent complaints about sound bleed between performance areas. Environmental factors such as 
                wind and water reflection from the adjacent river were causing unpredictable acoustic conditions. Additionally, the 
                festival's technical infrastructure had not scaled with its growth, leading to equipment failures, artist dissatisfaction, 
                and increasing neighborhood noise complaints. The organizers recognized that to continue growing and attract higher-profile 
                talent, they needed to address these fundamental production issues while working within the constraints of their outdoor urban venue.
              </p>
              
              <h3 className="text-2xl font-bold mb-4">Background</h3>
              <p className="text-gray-700 mb-8">
                Riverfront Festival was founded by a collective of local musicians and arts advocates with a vision to celebrate the 
                city's musical heritage while activating an underutilized waterfront park. The festival initially operated with borrowed 
                equipment, volunteer crews, and minimal infrastructure. Its early success was built on community spirit, local talent, 
                and an attractive location rather than technical excellence.
              </p>
              
              <p className="text-gray-700 mb-8">
                As attendance grew year over year, the festival expanded from one stage to four, extended from one day to three, and 
                began booking nationally recognized artists alongside local talent. While this growth boosted the festival's profile 
                and economic impact, it stretched the organizational capabilities of the founding team, particularly in technical 
                production areas.
              </p>
              
              <p className="text-gray-700 mb-8">
                By the fifth year, the festival had reached a critical juncture. Social media reviews increasingly mentioned sound 
                issues, from difficulty hearing performers to overwhelming volume in certain areas. Artists' technical riders were 
                becoming more complex and demanding. Neighborhood complaints about sound pollution were threatening the festival's 
                permits. Meanwhile, equipment rental costs were skyrocketing as the festival attempted to address these issues through 
                piecemeal solutions.
              </p>
              
              <p className="text-gray-700 mb-8">
                Festival Director Lisa Park explains: "We had grown from a hometown festival to a regional event almost overnight. 
                Our artistic vision and programming had evolved, but our technical infrastructure was still operating like we were 
                a small community event. We were at risk of losing everything we'd built because we couldn't deliver the quality 
                experience that artists and attendees increasingly expected."
              </p>
              
              <div className="bg-light-DEFAULT p-6 rounded-lg mb-8">
                <h3 className="text-2xl font-bold mb-4">Pain Points</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li><strong>Sound Quality Issues:</strong> Inconsistent audio experience across festival grounds with problematic "dead zones"</li>
                  <li><strong>Stage Interference:</strong> Sound bleed between stages disrupting performances and audience experience</li>
                  <li><strong>Environmental Challenges:</strong> Unpredictable wind patterns and water reflections affecting sound propagation</li>
                  <li><strong>Technical Limitations:</strong> Insufficient equipment and expertise for the festival's growing scale</li>
                  <li><strong>Artist Dissatisfaction:</strong> Inability to meet technical riders of higher-profile performers</li>
                  <li><strong>Community Relations:</strong> Increasing neighborhood complaints about noise pollution</li>
                  <li><strong>Operational Inefficiency:</strong> Rapidly escalating costs for rental equipment and emergency technical support</li>
                </ul>
              </div>
              
              <div className="bg-light-DEFAULT p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Goals</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Create consistent, high-quality sound experience across all festival areas</li>
                  <li>Eliminate sound interference between stages while maintaining appropriate volume levels</li>
                  <li>Develop solutions for environmental acoustic challenges specific to the waterfront location</li>
                  <li>Build technical infrastructure capable of supporting continued festival growth</li>
                  <li>Establish systems to meet or exceed technical requirements of national touring artists</li>
                  <li>Reduce community impact through improved sound containment and management</li>
                  <li>Increase operational efficiency and reduce emergency equipment rentals</li>
                </ul>
              </div>
            </section>
            
            {/* Journey Section */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 pb-2 border-b border-gray-200">Partnership with Elemental Sound</h2>
              
              <div className="space-y-12">
                <div className="border-l-4 border-primary-DEFAULT pl-6">
                  <h3 className="text-2xl font-bold mb-4">Comprehensive Site Assessment & Analysis</h3>
                  <div className="text-gray-700 space-y-4">
                    <p>
                      The partnership began when Festival Director Lisa Park attended an industry conference where Elemental Sound was 
                      presenting on acoustic optimization for outdoor events. Impressed by their approach to solving complex production 
                      challenges, she arranged a meeting to discuss the festival's struggles.
                    </p>
                    <p>
                      "What immediately impressed me was their desire to understand our festival as a whole entity—not just the 
                      technical components," recalls Park. "They wanted to know about our mission, our audience, the types of 
                      experiences we wanted to create, and our long-term vision before making any recommendations."
                    </p>
                    <p>
                      The initial engagement began with a comprehensive site assessment that went far beyond standard technical surveys. 
                      Elemental Sound conducted:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>3D acoustic mapping of the entire festival grounds using advanced modeling software</li>
                      <li>Environmental analysis tracking wind patterns, temperature gradients, and acoustic reflections from the river and surrounding buildings</li>
                      <li>Noise propagation studies showing sound travel into neighboring communities under various conditions</li>
                      <li>Review of previous years' technical setups, equipment specifications, and reported issues</li>
                      <li>Analysis of audience flow patterns and gathering points throughout the site</li>
                      <li>Interviews with past performers, sound engineers, and festival staff about their experiences</li>
                    </ul>
                    <p>
                      This detailed assessment revealed specific challenges that had been missed in previous planning, including 
                      predictable wind pattern shifts at sunset, previously unidentified acoustic reflection points from buildings 
                      across the river, and suboptimal stage orientations that were causing sound conflicts.
                    </p>
                    <p>
                      "The visualization of sound patterns across our site was eye-opening," says Technical Director Marco Reyes. 
                      "We could finally see exactly why certain areas had persistent problems despite our best efforts. Most importantly, 
                      we could model potential solutions before committing to any specific approach."
                    </p>
                  </div>
                </div>
                
                <div className="border-l-4 border-primary-DEFAULT pl-6">
                  <h3 className="text-2xl font-bold mb-4">Strategic Site Design & Layout Optimization</h3>
                  <div className="text-gray-700 space-y-4">
                    <p>
                      Based on the assessment findings, Elemental Sound developed a comprehensive site design that optimized the 
                      festival's layout for acoustic performance while enhancing the overall attendee experience. Rather than 
                      simply addressing individual sound systems, this approach considered the festival grounds as an integrated 
                      acoustic environment.
                    </p>
                    <p>Key elements of the redesign included:</p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Reorientation of main stages to minimize sound conflict between performance areas</li>
                      <li>Strategic positioning of secondary stages in acoustic "shadow zones" created by natural terrain features</li>
                      <li>Development of acoustic barriers using a combination of natural elements and temporary structures</li>
                      <li>Creation of dedicated quiet zones and sound buffer areas between performance spaces</li>
                      <li>Reconfigured audience flow patterns to enhance sound distribution while improving crowd management</li>
                      <li>Optimization of delay tower locations based on site acoustics rather than standard distance formulas</li>
                    </ul>
                    <p>
                      "The layout redesign involved some tough decisions," notes Park. "We had to move some stages from locations 
                      that had become traditional festival landmarks. But Elemental Sound helped us communicate the benefits of 
                      these changes to our audience, and the immediate improvement in sound quality justified every adjustment."
                    </p>
                    <p>
                      The site design process involved close collaboration between Elemental Sound's technical team and festival 
                      stakeholders, including artistic directors, operations managers, and city representatives. This collaborative 
                      approach ensured that technical solutions worked in harmony with other festival priorities rather than creating 
                      new conflicts.
                    </p>
                    <p>
                      "What impressed me was how they integrated acoustic considerations with practical operational needs," says 
                      Operations Manager Samantha Chen. "The redesign didn't just improve sound—it also enhanced security sightlines, 
                      reduced cross-traffic bottlenecks, and created more natural gathering areas. It was truly holistic thinking."
                    </p>
                  </div>
                </div>
                
                <div className="border-l-4 border-primary-DEFAULT pl-6">
                  <h3 className="text-2xl font-bold mb-4">Sound System Design & Environmental Adaptation</h3>
                  <div className="text-gray-700 space-y-4">
                    <p>
                      With the site layout optimized, Elemental Sound developed custom sound system designs for each performance area, 
                      specifically engineered to address the festival's unique environmental challenges while delivering exceptional 
                      audio quality.
                    </p>
                    <p>
                      "The waterfront location creates beautiful views but challenging acoustics," explains Reyes. "We needed systems 
                      that could adapt to changing conditions throughout the day and maintain consistent coverage despite environmental variables."
                    </p>
                    <p>Key elements of the sound system design included:</p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Custom-configured line arrays with coverage patterns optimized for each stage's specific location and audience area</li>
                      <li>Adaptive processing systems capable of real-time adjustment to changing environmental conditions</li>
                      <li>Sophisticated subwoofer arrays designed to minimize low-frequency propagation into surrounding neighborhoods</li>
                      <li>Strategic deployment of delay systems to ensure consistent coverage without excessive volume at front-of-house</li>
                      <li>Advanced monitoring solutions providing artists with clearer onstage sound at lower volumes</li>
                      <li>Networked audio distribution system allowing centralized management across all performance areas</li>
                    </ul>
                    <p>
                      A particularly innovative solution was the implementation of real-time environmental monitoring stations throughout 
                      the festival grounds. These stations tracked temperature, humidity, and wind conditions, allowing for automated adjustments 
                      to system tuning as environmental conditions changed throughout the day.
                    </p>
                    <p>
                      "The ability to adapt to changing conditions was game-changing," says Reyes. "In previous years, we'd have to compromise 
                      system tuning to work 'well enough' across all conditions. Now the systems automatically optimize for current conditions, 
                      whether it's a still morning, windy afternoon, or cool evening."
                    </p>
                    <p>
                      The design included sophisticated noise management strategies, with particular attention to low-frequency control—typically 
                      the most problematic element for community relations. By implementing cardioid subwoofer configurations and precise coverage 
                      control, the systems could deliver impactful bass response for audiences while significantly reducing off-site propagation.
                    </p>
                  </div>
                </div>
                
                <div className="border-l-4 border-primary-DEFAULT pl-6">
                  <h3 className="text-2xl font-bold mb-4">Technical Infrastructure & Operational Integration</h3>
                  <div className="text-gray-700 space-y-4">
                    <p>
                      Beyond the acoustic design, Elemental Sound helped develop a comprehensive technical infrastructure that would 
                      support the festival's continued growth while increasing operational efficiency and reliability.
                    </p>
                    <p>
                      "We needed to evolve from a patchwork of rental gear and temporary solutions to a cohesive technical ecosystem," 
                      explains Park. "The goal was to build capabilities that would scale with our growth while reducing the last-minute 
                      crises that had become all too common."
                    </p>
                    <p>Key infrastructure improvements included:</p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Standardized technical specifications across all stages to streamline setup and maintenance</li>
                      <li>Integrated power distribution system with backup redundancy for critical performance areas</li>
                      <li>Robust signal distribution network utilizing fiber optic infrastructure for reliability and flexibility</li>
                      <li>Centralized production management system allowing real-time monitoring of all technical elements</li>
                      <li>Comprehensive asset management solution to track equipment, maintenance needs, and performance history</li>
                      <li>Development of detailed emergency response protocols for various technical scenarios</li>
                    </ul>
                    <p>
                      Elemental Sound also worked closely with the festival team to develop more efficient operational workflows, 
                      from advance planning to on-site execution. This included creating standardized technical questionnaires for 
                      performers, establishing clear communication channels between production teams, and implementing structured 
                      handoff procedures between shifts.
                    </p>
                    <p>
                      "The operational improvements were just as valuable as the technical ones," notes Chen. "We now have systems 
                      that enable our team to work more effectively together, anticipate needs before they become problems, and 
                      respond quickly when unexpected issues arise."
                    </p>
                    <p>
                      A key component was the development of a technical advance process that allowed the festival to address artists' 
                      requirements well before they arrived on site. This reduced day-of-show conflicts and enabled more touring acts 
                      to use the festival's house systems rather than bringing their own equipment—increasing consistency while 
                      reducing changeover times between performances.
                    </p>
                  </div>
                </div>
                
                <div className="border-l-4 border-primary-DEFAULT pl-6">
                  <h3 className="text-2xl font-bold mb-4">Knowledge Transfer & Team Development</h3>
                  <div className="text-gray-700 space-y-4">
                    <p>
                      Recognizing that sustainable improvement required building internal capabilities, Elemental Sound developed 
                      a comprehensive training and knowledge transfer program for the festival's technical team.
                    </p>
                    <p>
                      "We didn't want to create dependency on external expertise," explains Park. "Our goal was to develop our 
                      own team's capabilities while establishing systems that would maintain high standards year after year."
                    </p>
                    <p>The team development program included:</p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Structured training sessions covering system design, operation, and troubleshooting</li>
                      <li>Creation of detailed documentation and operational playbooks for all technical areas</li>
                      <li>Mentorship pairing between Elemental Sound specialists and festival team members</li>
                      <li>Development of year-round professional growth plans for core technical staff</li>
                      <li>Implementation of post-event analysis protocols to capture lessons learned</li>
                    </ul>
                    <p>
                      This focus on knowledge transfer extended to creating relationships with local technical professionals who 
                      could provide consistent support for the festival. Rather than flying in specialists from around the country, 
                      Elemental Sound helped identify and develop regional talent who could become regular contributors to the event.
                    </p>
                    <p>
                      "The mentorship component was incredibly valuable," says Reyes. "Having experts work alongside our team not 
                      only transferred technical knowledge but also built confidence. By the second year, our crew was handling 
                      challenges that would have overwhelmed them previously."
                    </p>
                    <p>
                      The program also included creating pathways for technical interns from local educational institutions, 
                      establishing the festival as a training ground for the next generation of live sound professionals. This 
                      initiative has strengthened the festival's relationship with the broader community while creating a pipeline 
                      of future talent.
                    </p>
                  </div>
                </div>
              </div>
            </section>
            
            {/* Impact Analysis Section */}
            <section>
              <h2 className="text-3xl font-bold mb-8 pb-2 border-b border-gray-200">Impact Analysis</h2>
              
              <div className="space-y-10">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Technical Performance</h3>
                  <p className="text-gray-700 mb-4">
                    The partnership has dramatically improved the festival's technical capabilities and performance:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li><strong>Sound quality:</strong> 87% increase in positive mentions in attendee surveys</li>
                    <li><strong>Coverage consistency:</strong> Elimination of previously identified "dead zones" throughout festival grounds</li>
                    <li><strong>Inter-stage interference:</strong> 72% reduction in measurable sound bleed between performance areas</li>
                    <li><strong>Technical rider fulfillment:</strong> Now meeting 96% of artist technical requirements (up from 68%)</li>
                    <li><strong>System reliability:</strong> Zero main stage performance interruptions due to technical failures in two years</li>
                    <li><strong>Environmental adaptation:</strong> Consistent sound quality maintained despite 30% greater variation in weather conditions</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold mb-4">Audience Growth & Experience</h3>
                  <p className="text-gray-700 mb-4">
                    Enhanced production values have directly contributed to audience growth and satisfaction:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li><strong>Attendance growth:</strong> 142% increase over three years (15,000 to 36,500)</li>
                    <li><strong>Ticket sales timeline:</strong> Festival now reaches 85% capacity 60 days earlier than previous years</li>
                    <li><strong>Experience rating:</strong> Overall festival experience rated 4.8/5, with sound quality specifically at 4.7/5</li>
                    <li><strong>Return attendance:</strong> 68% of attendees now purchase tickets for multiple festival days (up from 42%)</li>
                    <li><strong>Social media sentiment:</strong> 215% increase in positive mentions of sound quality and overall production</li>
                    <li><strong>Audience diversity:</strong> Significant expansion of audience demographics across age groups and geographic origin</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold mb-4">Artist Relationships</h3>
                  <p className="text-gray-700 mb-4">
                    Improved technical capabilities have transformed relationships with performing artists:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li><strong>Artist satisfaction:</strong> 96% of performers rating technical experience as "excellent" (up from 52%)</li>
                    <li><strong>Talent caliber:</strong> 165% increase in applications from nationally recognized acts</li>
                    <li><strong>Technical advance:</strong> 73% reduction in day-of-show technical conflicts and special requests</li>
                    <li><strong>Artist feedback:</strong> Multiple performers citing sound quality in decisions to return in subsequent years</li>
                    <li><strong>Industry reputation:</strong> Festival now referenced as a production benchmark by touring management companies</li>
                    <li><strong>Exclusivity agreements:</strong> Five major artists selecting the festival for regional exclusivity contracts</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold mb-4">Community Relations</h3>
                  <p className="text-gray-700 mb-4">
                    Advanced sound management has significantly improved neighborhood relations:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li><strong>Noise complaints:</strong> 84% reduction in formal complaints from surrounding residential areas</li>
                    <li><strong>Permit compliance:</strong> Zero violations of sound ordinances over two festival cycles</li>
                    <li><strong>Monitoring data:</strong> Average sound levels at property boundaries reduced by 12dB while maintaining audience experience</li>
                    <li><strong>Community feedback:</strong> Local business association formally endorsing festival continuation and expansion</li>
                    <li><strong>Government relations:</strong> Festival now highlighted by city tourism department as exemplary cultural event</li>
                    <li><strong>Longer operating hours:</strong> City approval for extended performance times based on improved sound management</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold mb-4">Operational Efficiency</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-light-DEFAULT p-6 rounded-lg">
                      <h4 className="text-xl font-bold mb-4">Resource Optimization</h4>
                      <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        <li>36% reduction in overall production costs despite expanded capabilities</li>
                        <li>65% decrease in last-minute equipment rentals and emergency services</li>
                        <li>42% reduction in crew overtime due to improved planning and workflows</li>
                        <li>Standardized equipment specifications enabling more competitive vendor bids</li>
                        <li>Consistent infrastructure enabling multi-year contracts with favorable terms</li>
                      </ul>
                    </div>
                    
                    <div className="bg-primary-DEFAULT/10 p-6 rounded-lg">
                      <h4 className="text-xl font-bold mb-4">Team Development</h4>
                      <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        <li>87% retention rate of core technical staff across festival cycles</li>
                        <li>Creation of year-round positions for three previously seasonal technical roles</li>
                        <li>Development of intern-to-staff pipeline with four successful transitions</li>
                        <li>Establishment of ongoing training program with regional technical colleges</li>
                        <li>Formation of technical knowledge base and standardized procedures</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-light-DEFAULT p-8 rounded-lg">
                  <h3 className="text-2xl font-bold mb-4">Featured Innovation: Environmental Adaptive Processing</h3>
                  <p className="text-gray-700 mb-6">
                    A showcase example of the partnership's innovative approach to solving complex production challenges:
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-xl font-bold mb-4">Challenge & Solution</h4>
                      <p className="text-gray-700 mb-3">
                        The waterfront location created unpredictable acoustic conditions that could change dramatically throughout 
                        the day, with afternoon winds and evening temperature inversions causing particular challenges. Traditional 
                        approaches required constant manual adjustments or compromise settings that were never optimal.
                      </p>
                      <p className="text-gray-700">
                        Elemental Sound developed an environmental adaptive processing system that combined:
                      </p>
                      <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        <li>Distributed environmental monitoring stations tracking temperature, humidity, and wind velocity</li>
                        <li>Advanced signal processing with algorithmic response to changing conditions</li>
                        <li>Real-time measurement microphones providing continuous feedback on system performance</li>
                        <li>Machine learning components that improved response accuracy over time</li>
                        <li>Cloud-based data storage enabling analysis and refinement between festival cycles</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-xl font-bold mb-4">Results & Impact</h4>
                      <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        <li>Consistent sound coverage maintained despite up to 18mph wind variations</li>
                        <li>Evening sound quality preserved during temperature inversions that previously caused severe issues</li>
                        <li>98% reduction in mid-performance system adjustments by engineers</li>
                        <li>System performance data creating valuable insights for future festival planning</li>
                        <li>Technology now being adapted for use in other outdoor performance contexts</li>
                        <li>Festival recognized with innovation award from industry association</li>
                      </ul>
                      <p className="text-gray-700 mt-4">
                        "The adaptive system has been revolutionary," notes Reyes. "We're no longer fighting the environment—the system 
                        works with changing conditions to maintain consistent sound regardless of weather variations. It's transformed 
                        how we approach outdoor production."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            
            {/* CTA Section */}
            <div className="bg-primary-DEFAULT text-white p-8 rounded-lg mt-16 text-center">
              <h3 className="text-2xl font-bold mb-4">Festival & Event Production Solutions</h3>
              <p className="text-lg mb-6">
                Elevate your event with Elemental Sound's comprehensive production services. From intimate gatherings to 
                major festivals, our team delivers exceptional audio experiences tailored to your unique environment and audience.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/services/events" className="btn bg-white text-primary-DEFAULT hover:bg-gray-100">
                  Explore Event Services
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