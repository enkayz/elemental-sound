'use client';

import React from 'react';
import Link from 'next/link';

export default function MetroTheater() {
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
  ];

  const servicesUsed = [
    { name: 'Venue Acoustics', link: '/services/acoustics' },
    { name: 'Sound System Design', link: '/services/systems' },
    { name: 'Live Event Support', link: '/services/live-events' },
  ];

  return (
    <>
      {/* Page Banner */}
      <div className="relative h-96 bg-gradient-to-r from-primary-dark to-primary-DEFAULT overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/wiki-images/page-banners/client-banners/metro-theater-banner.jpg"
            alt="Metro Theater"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="container mx-auto px-4 h-full flex flex-col justify-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Metro Theater</h1>
          <p className="text-2xl mb-6">Performance Venue</p>
          <div className="max-w-3xl text-xl italic">
            "Elemental Sound transformed our historic venue into a world-class performance space without compromising our architectural heritage. Their acoustic solutions have made our theater a destination for artists and audiences alike."
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Sidebar */}
          <aside className="lg:w-1/4">
            <div className="bg-light-DEFAULT p-6 rounded-lg shadow-md mb-8">
              <h3 className="text-xl font-bold border-b border-gray-200 pb-3 mb-4">Venue Profile</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="font-medium">Established:</span>
                  <span>1932</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Capacity:</span>
                  <span>850 seats</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Events:</span>
                  <span>200+ Annual Performances</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Location:</span>
                  <span>Downtown Metro City</span>
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
              <h2 className="text-3xl font-bold mb-8 pb-2 border-b border-gray-200">Venue Overview</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                <div className="bg-light-DEFAULT rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-secondary-DEFAULT mb-2">78%</div>
                  <div className="text-gray-600">Increase in Bookings</div>
                </div>
                <div className="bg-light-DEFAULT rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-secondary-DEFAULT mb-2">94%</div>
                  <div className="text-gray-600">Audience Satisfaction</div>
                </div>
                <div className="bg-light-DEFAULT rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-secondary-DEFAULT mb-2">52%</div>
                  <div className="text-gray-600">Revenue Growth</div>
                </div>
                <div className="bg-light-DEFAULT rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-secondary-DEFAULT mb-2">4.8</div>
                  <div className="text-gray-600">Artist Rating (out of 5)</div>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-4">The Challenge</h3>
              <p className="text-gray-700 mb-8">
                Metro Theater, a historic performance venue dating back to 1932, was facing a crisis of relevance and sustainability. 
                Despite its rich history and architectural significance, the theater was struggling with declining bookings, audience 
                complaints about sound quality, and increasing difficulty attracting premier performing artists. As a historically 
                protected building, major structural modifications were severely restricted, yet the venue needed to compete with 
                modern performance spaces offering superior acoustics and technical capabilities. The theater's management faced 
                the complex challenge of preserving the venue's historic character while creating a world-class acoustic environment 
                that would satisfy contemporary performers and audiences.
              </p>
              
              <h3 className="text-2xl font-bold mb-4">Background</h3>
              <p className="text-gray-700 mb-8">
                Originally built as an ornate movie palace during the golden age of cinema, Metro Theater was later converted to a 
                live performance venue in the 1970s. The building featured stunning Art Deco architecture with elaborate plasterwork, 
                chandeliers, and decorative elements that earned it historical landmark status. While these architectural features 
                made the theater a visual gem, they created significant acoustic challenges, including echo, uneven sound distribution, 
                and poor intelligibility.
              </p>
              
              <p className="text-gray-700 mb-8">
                Over the decades, various attempts had been made to improve the theater's acoustics through conventional methods, 
                including adding heavy curtains, installing basic sound absorption panels, and upgrading sound equipment. However, 
                these piecemeal solutions had proven inadequate and sometimes even counterproductive. The venue's beautiful high 
                ceilings and ornate wall decorations—protected by landmark status—created persistent reverberation issues that 
                standard approaches couldn't address without compromising the historic architecture.
              </p>
              
              <p className="text-gray-700 mb-8">
                By 2019, Metro Theater was at a critical juncture. Bookings had declined by 35% over five years, with notable 
                performers increasingly choosing other venues. Audience surveys revealed that while patrons loved the building's 
                ambiance, 62% expressed dissatisfaction with sound quality. The operating budget was strained by declining 
                ticket sales, making it difficult to invest in improvements. The venue's board recognized that without finding a 
                solution that balanced acoustic excellence with historical preservation, the theater's long-term viability was at risk.
              </p>
              
              <div className="bg-light-DEFAULT p-6 rounded-lg mb-8">
                <h3 className="text-2xl font-bold mb-4">Pain Points</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li><strong>Acoustic Challenges:</strong> Significant reverberation, echo, and uneven sound distribution throughout the space</li>
                  <li><strong>Architectural Constraints:</strong> Historical preservation requirements limiting modification options</li>
                  <li><strong>Technical Limitations:</strong> Outdated sound reinforcement system unable to compensate for acoustic issues</li>
                  <li><strong>Artist Hesitancy:</strong> Increasing reluctance from performers to book the venue due to sound issues</li>
                  <li><strong>Audience Complaints:</strong> Growing dissatisfaction with sound quality affecting repeat attendance</li>
                  <li><strong>Revenue Decline:</strong> Decreasing bookings and ticket sales threatening financial sustainability</li>
                </ul>
              </div>
              
              <div className="bg-light-DEFAULT p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Goals</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Transform acoustic performance while preserving historical architecture</li>
                  <li>Create consistent sound quality throughout all seating areas</li>
                  <li>Develop technical infrastructure to support diverse performance types</li>
                  <li>Increase venue attractiveness to premier performing artists</li>
                  <li>Improve audience satisfaction and attendance rates</li>
                  <li>Establish Metro Theater as a destination venue known for acoustic excellence</li>
                </ul>
              </div>
            </section>
            
            {/* Journey Section */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 pb-2 border-b border-gray-200">Partnership with Elemental Sound</h2>
              
              <div className="space-y-12">
                <div className="border-l-4 border-primary-DEFAULT pl-6">
                  <h3 className="text-2xl font-bold mb-4">Comprehensive Assessment & Acoustic Modeling</h3>
                  <div className="text-gray-700 space-y-4">
                    <p>
                      After several disappointing consultations with conventional acoustic firms, Metro Theater's Executive Director, 
                      Eleanor Reeves, approached Elemental Sound based on their reputation for innovative solutions in challenging spaces. 
                      The engagement began with a thorough assessment process unlike any the theater had previously experienced.
                    </p>
                    <p>
                      "From our first meeting, Elemental Sound's approach was refreshingly different," recalls Reeves. "Rather than immediately 
                      telling us what couldn't be done due to our historical status, they focused on understanding the specific acoustic behaviors 
                      of our space and exploring what could be achieved within our constraints."
                    </p>
                    <p>The assessment process included:</p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Comprehensive acoustic measurement and analysis using advanced spatial modeling technology</li>
                      <li>Detailed architectural review in collaboration with historical preservation specialists</li>
                      <li>Interviews with performers, sound engineers, and audience members about their experiences</li>
                      <li>Analysis of performance types and technical requirements across different artistic disciplines</li>
                      <li>3D acoustic simulation to predict behavior under various treatment scenarios</li>
                    </ul>
                    <p>
                      This thorough process revealed complex acoustic patterns and reflection points that had been missed in previous assessments. 
                      By creating detailed computer models of the space, Elemental Sound demonstrated how sound waves were interacting with architectural 
                      features and identified strategic intervention points that could dramatically improve acoustics without altering protected elements.
                    </p>
                    <p>
                      "The visualization of sound in our space was eye-opening," says Technical Director Marcus Chen. "For the first time, we could 
                      actually see the specific problem areas and understand why previous solutions had fallen short. Most importantly, we could 
                      visualize potential solutions before implementing them."
                    </p>
                  </div>
                </div>
                
                <div className="border-l-4 border-primary-DEFAULT pl-6">
                  <h3 className="text-2xl font-bold mb-4">Custom Acoustic Design & Historical Integration</h3>
                  <div className="text-gray-700 space-y-4">
                    <p>
                      Based on the assessment findings, Elemental Sound developed a customized acoustic design approach that addressed the venue's 
                      specific challenges while respecting its historical integrity. Rather than applying standard solutions, they created a system 
                      of custom-designed elements that worked in harmony with the existing architecture.
                    </p>
                    <p>Key elements of the acoustic design included:</p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Custom-fabricated acoustic panels designed to match and complement historic decorative elements</li>
                      <li>Strategically positioned diffusion elements integrated into existing architectural features</li>
                      <li>Innovative "acoustic scrim" technology allowing sound treatment behind historically protected surfaces</li>
                      <li>Variable acoustic systems that could be adjusted for different performance types</li>
                      <li>Targeted treatment of primary reflection points identified through spatial analysis</li>
                    </ul>
                    <p>
                      "What impressed us most was how the acoustic elements were designed to enhance rather than compete with our historic features," 
                      notes Reeves. "In many cases, the treatments actually highlighted architectural details that had previously gone unnoticed. The 
                      historical preservation board, which we expected to be a major hurdle, actually praised the design approach."
                    </p>
                    <p>
                      The design process involved close collaboration between acoustic engineers, architectural historians, and theater staff. 
                      Mockups and prototypes were created to test both acoustic performance and visual integration before final implementation. 
                      This iterative approach ensured that each element would meet both technical requirements and aesthetic standards.
                    </p>
                    <p>
                      "The level of customization was remarkable," adds Chen. "Nothing was off-the-shelf. Each acoustic panel was specifically 
                      designed for its location in our space, both in terms of acoustic performance and visual integration with our Art Deco elements."
                    </p>
                  </div>
                </div>
                
                <div className="border-l-4 border-primary-DEFAULT pl-6">
                  <h3 className="text-2xl font-bold mb-4">Sound System Design & Technical Infrastructure</h3>
                  <div className="text-gray-700 space-y-4">
                    <p>
                      In parallel with the acoustic treatment design, Elemental Sound developed a comprehensive sound reinforcement system that would 
                      complement the physical acoustic improvements while providing the technical capabilities demanded by contemporary performers.
                    </p>
                    <p>
                      "We needed technology that would work with our improved acoustics, not fight against them," explains Chen. "Elemental Sound designed 
                      an integrated approach where the physical acoustics and sound reinforcement system functioned as a unified whole."
                    </p>
                    <p>The technical system design included:</p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Custom-configured line array system designed specifically for the venue's dimensions and acoustic properties</li>
                      <li>Distributed fill speakers precisely positioned to ensure consistent coverage in all seating areas</li>
                      <li>Discreet subwoofer integration providing even low-frequency response throughout the space</li>
                      <li>Digital signal processing with venue-specific tuning and optimization</li>
                      <li>Flexible routing system accommodating everything from solo acoustic performances to full theatrical productions</li>
                      <li>Architectural integration that concealed modern technology within historic elements</li>
                    </ul>
                    <p>
                      A key innovation was the development of preset configurations that could instantly optimize both the physical acoustic elements and 
                      the sound reinforcement system for different types of performances. These presets allowed the venue to quickly transition between 
                      orchestral concerts, amplified music performances, theatrical productions, and spoken word events.
                    </p>
                    <p>
                      "The system's versatility has been transformative for our programming," notes Reeves. "We can now confidently accommodate a symphony 
                      orchestra on Friday, a rock concert on Saturday, and a speaking engagement on Sunday, knowing that each will sound optimal in our space."
                    </p>
                  </div>
                </div>
                
                <div className="border-l-4 border-primary-DEFAULT pl-6">
                  <h3 className="text-2xl font-bold mb-4">Implementation & Calibration</h3>
                  <div className="text-gray-700 space-y-4">
                    <p>
                      The implementation phase was carefully planned to minimize disruption to the theater's performance schedule. Elemental Sound developed 
                      a phased approach that allowed for gradual installation and testing, with major work scheduled during the venue's annual summer maintenance period.
                    </p>
                    <p>
                      "The installation team showed remarkable sensitivity to our building," recalls Reeves. "They treated our historic features with the same 
                      care a conservator would use with an artwork. At the same time, they maintained incredible precision in positioning acoustic elements 
                      exactly where the models indicated they needed to be."
                    </p>
                    <p>The implementation process included:</p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Custom fabrication of all acoustic elements in specialized workshops</li>
                      <li>Coordination with historical preservation specialists during all installation phases</li>
                      <li>Progressive testing and measurement to verify real-world performance against acoustic models</li>
                      <li>Fine-tuning of both physical elements and digital processing based on test results</li>
                      <li>Training programs for technical staff on system operation and maintenance</li>
                    </ul>
                    <p>
                      Following physical installation, Elemental Sound conducted an extensive calibration process to optimize the integrated acoustic 
                      environment. This included testing under various conditions, from empty hall to full audience, and with different types of source 
                      material ranging from solo acoustic instruments to full ensembles.
                    </p>
                    <p>
                      "The calibration process was eye-opening," says Chen. "Elemental Sound brought in musicians to perform while measurements were taken, 
                      then made subtle adjustments based on both the data and the performers' feedback. It wasn't just technical—it was genuinely musical."
                    </p>
                    <p>
                      The final phase included creating detailed documentation and training for the venue's technical team, ensuring they could maintain 
                      optimal performance and adapt configurations for specific events. This knowledge transfer was crucial for long-term sustainability and empowered 
                      the in-house team to fully utilize the system's capabilities.
                    </p>
                  </div>
                </div>
                
                <div className="border-l-4 border-primary-DEFAULT pl-6">
                  <h3 className="text-2xl font-bold mb-4">Relaunch & Market Repositioning</h3>
                  <div className="text-gray-700 space-y-4">
                    <p>
                      With the acoustic transformation complete, Metro Theater needed to overcome its previous reputation for poor sound quality. 
                      Elemental Sound worked with the venue's management to develop a strategic relaunch campaign that would showcase the theater's 
                      new capabilities and reposition it in the market.
                    </p>
                    <p>
                      "Even with the incredible improvements, we knew we had to actively change perceptions," explains Reeves. "Many performers and 
                      promoters had written us off based on past experiences. We needed to demonstrate that Metro Theater was now a premier acoustic venue."
                    </p>
                    <p>The relaunch strategy included:</p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>A series of showcase events featuring diverse performance types to demonstrate versatility</li>
                      <li>Targeted outreach to artists, booking agents, and promoters with technical specifications and testimonials</li>
                      <li>Special listening sessions for music industry professionals and critics</li>
                      <li>Documentation of before-and-after acoustic measurements and performer experiences</li>
                      <li>Marketing campaign highlighting the venue's historic beauty and new acoustic excellence</li>
                    </ul>
                    <p>
                      The centerpiece of the relaunch was a weekend festival featuring performances ranging from a chamber orchestra to acoustic 
                      singer-songwriters to a jazz ensemble and culminating with an amplified rock concert. Each performance was recorded and streamed, 
                      showcasing the venue's versatility and acoustic quality across genres.
                    </p>
                    <p>
                      "The response was beyond our expectations," says Reeves. "We had skeptical sound engineers come in with their artists, ready to 
                      fight with our space, and watch them gradually relax as they realized they could achieve the sound they wanted without compromise. 
                      Word spread quickly within the performance community."
                    </p>
                    <p>
                      Within months of the relaunch, Metro Theater was receiving booking inquiries from artists and promoters who had previously avoided 
                      the venue. The theater's calendar began filling with a diverse range of performances, and audience attendance showed significant growth.
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
                  <h3 className="text-2xl font-bold mb-4">Performance Metrics</h3>
                  <p className="text-gray-700 mb-4">
                    The acoustic transformation produced measurable improvements in key performance metrics:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li><strong>Acoustic consistency:</strong> 92% reduction in problematic reflection points and dead zones</li>
                    <li><strong>Sound clarity rating:</strong> Improved from 2.8/5 to 4.7/5 in blind listening tests</li>
                    <li><strong>Technical rider fulfillment:</strong> Now able to meet 98% of artist technical requirements (up from 64%)</li>
                    <li><strong>Sound engineer satisfaction:</strong> 94% rating venue acoustics as "excellent" (up from 23%)</li>
                    <li><strong>Versatility assessment:</strong> Suitable for 8 different performance types (up from 3)</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold mb-4">Business Growth</h3>
                  <p className="text-gray-700 mb-4">
                    The venue has experienced significant business improvement since the transformation:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li><strong>Booking volume:</strong> 78% increase in annual performance bookings</li>
                    <li><strong>Premium artist bookings:</strong> 215% increase in nationally recognized performers</li>
                    <li><strong>Venue rental requests:</strong> 94% increase for private and corporate events</li>
                    <li><strong>Calendar utilization:</strong> Performance days increased from 124 to 218 annually</li>
                    <li><strong>Revenue growth:</strong> 52% increase in annual operating revenue</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold mb-4">Audience Development</h3>
                  <p className="text-gray-700 mb-4">
                    Improved acoustics have transformed the audience experience and attendance patterns:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li><strong>Attendance growth:</strong> 65% increase in average attendance per event</li>
                    <li><strong>Satisfaction rating:</strong> 94% of audiences rating acoustic experience as "excellent"</li>
                    <li><strong>Repeat attendance:</strong> 43% increase in multiple-show attendance by individual patrons</li>
                    <li><strong>Demographic expansion:</strong> 38% broader age range in audience composition</li>
                    <li><strong>Premium seating:</strong> 82% increase in willingness to purchase higher-tier seating options</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold mb-4">Reputation & Recognition</h3>
                  <p className="text-gray-700 mb-4">
                    The theater has achieved significant recognition following its transformation:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Featured in two national publications as an exemplar of historic venue modernization</li>
                    <li>Recipient of Urban Heritage Preservation Award for sensitive technical integration</li>
                    <li>Designated as a preferred recording venue for three independent record labels</li>
                    <li>Selected to host the regional music awards ceremony based on acoustic quality</li>
                    <li>Recognized by the Theater Historical Society for "innovation in preservation"</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold mb-4">Ongoing Relationship</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-light-DEFAULT p-6 rounded-lg">
                      <h4 className="text-xl font-bold mb-4">Continued Support</h4>
                      <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        <li>Quarterly acoustic assessment and system optimization</li>
                        <li>Technical staff training and development program</li>
                        <li>Consultation for special events with unique acoustic requirements</li>
                        <li>System updates and enhancements as technologies evolve</li>
                        <li>Collaborative problem-solving for new performance types</li>
                      </ul>
                    </div>
                    
                    <div className="bg-primary-DEFAULT/10 p-6 rounded-lg">
                      <h4 className="text-xl font-bold mb-4">Future Development</h4>
                      <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        <li>Planning for immersive audio capabilities for emerging performance formats</li>
                        <li>Development of acoustic recording program to leverage venue sound</li>
                        <li>Exploration of subtle acoustic variability for specialized musical genres</li>
                        <li>Integration of subtle theatrical acoustic effects capabilities</li>
                        <li>Enhanced monitoring solutions for performers on stage</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-light-DEFAULT p-8 rounded-lg">
                  <h3 className="text-2xl font-bold mb-4">Featured Performance: Metro Symphony Orchestra Residency</h3>
                  <p className="text-gray-700 mb-6">
                    A showcase of the venue's acoustic transformation and its impact on live performance:
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-xl font-bold mb-4">Project Details</h4>
                      <p className="text-gray-700 mb-3">
                        Prior to the acoustic renovation, the Metro Symphony Orchestra had stopped performing at the theater due to acoustic 
                        limitations. Following the transformation, the orchestra established a seasonal residency that has become a centerpiece 
                        of the venue's programming:
                      </p>
                      <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        <li>Eight-concert seasonal residency featuring diverse orchestral repertoire</li>
                        <li>Special acoustic configuration developed specifically for orchestral performance</li>
                        <li>Live recording capability integrated for archival and commercial releases</li>
                        <li>Educational component including open rehearsals and youth concerts</li>
                        <li>Collaborative programming with visiting soloists and composers</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-xl font-bold mb-4">Results & Recognition</h4>
                      <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        <li>Consistently sold-out performances with waiting lists</li>
                        <li>Critical acclaim for acoustic quality in classical music publications</li>
                        <li>Two live recordings released commercially with positive reviews for sound quality</li>
                        <li>42% increase in orchestra's subscription base attributed to venue quality</li>
                        <li>Regional cultural award for excellence in classical music presentation</li>
                        <li>Orchestra musicians voting unanimously to continue and expand the residency</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <p className="text-gray-700 italic">
                      "After decades of compromising our sound in various venues, performing in the renovated Metro Theater is a revelation. 
                      For the first time, we can hear each other clearly on stage while knowing our most delicate passages are reaching the 
                      audience exactly as intended. The acoustic environment supports rather than fights our performance, allowing us to focus 
                      entirely on musical expression." — Dr. Robert Chen, Metro Symphony Orchestra Music Director
                    </p>
                  </div>
                </div>
              </div>
            </section>
            
            {/* CTA Section */}
            <div className="bg-primary-DEFAULT text-white p-8 rounded-lg mt-16 text-center">
              <h3 className="text-2xl font-bold mb-4">Venue Acoustic Solutions</h3>
              <p className="text-lg mb-6">
                Transform your performance space with Elemental Sound's custom acoustic solutions. From historic venues to modern facilities, 
                we create exceptional sound environments that honor architectural integrity while delivering world-class acoustic performance.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/services/acoustics" className="btn bg-white text-primary-DEFAULT hover:bg-gray-100">
                  Explore Acoustic Services
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