'use client';

import React from 'react';
import Link from 'next/link';

export default function MarketingImplementationPage() {
  const strategyPhases = [
    {
      title: 'Phase 1: Awareness & Positioning',
      description: 'Focus on establishing brand awareness and clearly communicating our unique positioning in the market.',
      items: [
        'Develop comprehensive brand identity system',
        'Launch targeted awareness campaigns for primary segments',
        'Implement industry thought leadership program',
        'Establish baseline performance metrics'
      ]
    },
    {
      title: 'Phase 2: Acquisition & Adoption',
      description: 'Drive initial service adoption and incentivize cross-service utilization.',
      items: [
        'Execute service-specific conversion campaigns',
        'Implement client onboarding automation',
        'Launch referral programs for each segment',
        'Develop case studies from early adopters'
      ]
    },
    {
      title: 'Phase 3: Retention & Expansion',
      description: 'Focus on deepening engagement and expanding service utilization among existing clients.',
      items: [
        'Implement personalized communication streams',
        'Launch cross-service promotion campaigns',
        'Develop content highlighting advanced use cases',
        'Optimize retention programs based on usage patterns'
      ]
    },
    {
      title: 'Phase 4: Community & Advocacy',
      description: 'Leverage established client base to drive organic growth and market influence.',
      items: [
        'Launch ambassador program for power users',
        'Develop industry event and partnership strategy',
        'Implement user-generated content campaigns',
        'Establish formal testimonial and case study program'
      ]
    }
  ];

  const targetSegments = [
    {
      name: 'Emerging Artists',
      demographics: {
        age: '18-35',
        income: '$30K-$60K',
        geographic: 'Urban centers, music hubs',
        technicalLevel: 'Beginner to intermediate'
      },
      painPoints: [
        'Limited budget for professional equipment',
        'Restricted access to quality recording spaces',
        'Knowledge gaps in production techniques',
        'Difficulty establishing industry connections'
      ],
      valueProposition: [
        'Affordable access to professional-quality resources',
        'Skills development and career progression',
        'Community connections and collaboration opportunities',
        'Portfolio development support'
      ],
      services: [
        'Creator Pass Membership',
        'Education Platform (Foundations)',
        'Basic Equipment Rental'
      ]
    },
    {
      name: 'Professional Producers',
      demographics: {
        age: '25-45',
        income: '$60K-$120K',
        geographic: 'Diverse, including remote workers',
        technicalLevel: 'Intermediate to advanced'
      },
      painPoints: [
        'Capital costs for specialized equipment',
        'Limited flexibility in production environments',
        'Project bottlenecks due to resource constraints',
        'Client expectation management'
      ],
      valueProposition: [
        'Business scaling without proportional cost increases',
        'Access to specialized and premium equipment',
        'Project flexibility and workflow optimization',
        'Professional network expansion'
      ],
      services: [
        'Professional Pass Membership',
        'Advanced Equipment Rental',
        'Mobile Recording Service',
        'Education Platform (Specialized Techniques)'
      ]
    },
    {
      name: 'Content Creators',
      demographics: {
        age: '20-40',
        income: '$40K-$100K',
        geographic: 'Widely distributed',
        technicalLevel: 'Beginner to intermediate'
      },
      painPoints: [
        'Audio quality impacting content performance',
        'Inefficient production workflows',
        'Limited technical audio knowledge',
        'Balancing quality with production speed'
      ],
      valueProposition: [
        'Audio quality as competitive advantage',
        'Streamlined production processes',
        'Technical education focused on practical application',
        'Scalable solutions for growing channels'
      ],
      services: [
        'Creator Pass Membership',
        'Education Platform (Content Creator Track)',
        'Specialized Equipment Rental'
      ]
    }
  ];

  const channelStrategy = [
    {
      channel: 'Website & SEO',
      primaryObjectives: [
        'Educational content hub',
        'Service discovery',
        'Lead generation',
        'Client onboarding'
      ],
      targetSegments: ['All segments'],
      contentFocus: [
        'Service documentation',
        'Educational resources',
        'Client success stories',
        'Industry insights'
      ],
      keyMetrics: [
        'Organic traffic growth',
        'Page engagement metrics',
        'Conversion rates',
        'Content consumption patterns'
      ]
    },
    {
      channel: 'Email Marketing',
      primaryObjectives: [
        'Nurture relationships',
        'Drive service adoption',
        'Educational delivery',
        'Retention marketing'
      ],
      targetSegments: ['All segments'],
      contentFocus: [
        'Personalized service recommendations',
        'Educational sequences',
        'Event invitations',
        'Member-exclusive content'
      ],
      keyMetrics: [
        'Open & click rates',
        'Segmentation effectiveness',
        'Conversion attribution',
        'List growth & health'
      ]
    },
    {
      channel: 'Social Media',
      primaryObjectives: [
        'Brand awareness',
        'Community building',
        'Content distribution',
        'Social proof'
      ],
      targetSegments: [
        'Emerging Artists (Instagram/TikTok)',
        'Professional Producers (LinkedIn/Twitter)',
        'Content Creators (YouTube/Instagram)'
      ],
      contentFocus: [
        'Behind-the-scenes content',
        'Technical showcases',
        'Client spotlights',
        'Industry trends commentary'
      ],
      keyMetrics: [
        'Audience growth',
        'Engagement rate',
        'Referral traffic',
        'Community interaction'
      ]
    },
    {
      channel: 'Industry Partnerships',
      primaryObjectives: [
        'Credibility building',
        'Audience expansion',
        'Value-added services',
        'Thought leadership'
      ],
      targetSegments: [
        'Professional Producers',
        'Organizations & Institutions'
      ],
      contentFocus: [
        'Co-created educational content',
        'Joint events and webinars',
        'Technical demonstrations',
        'Industry research'
      ],
      keyMetrics: [
        'Partnership-attributed leads',
        'Co-marketing performance',
        'Partnership revenue',
        'Relationship longevity'
      ]
    }
  ];

  const messagingFramework = [
    {
      element: 'Core Brand Messaging',
      description: 'The foundational messages that define our value proposition and position in the market.',
      content: [
        {
          title: 'Brand Promise',
          text: 'Providing the tools, space, and community for creators to achieve studio-quality audio anywhere.'
        },
        {
          title: 'Brand Personality',
          text: 'Professional yet approachable, technically expert without being intimidating, passionate about both quality and innovation.'
        },
        {
          title: 'Mission Statement',
          text: 'To democratize access to professional audio production by removing traditional barriers of cost, knowledge, and location.'
        },
        {
          title: 'Value Proposition',
          text: 'An integrated ecosystem of audio services that scales flexibly with your needs, providing professional-quality results at any level.'
        }
      ]
    },
    {
      element: 'Segment-Specific Messaging',
      description: 'Tailored communication approaches for each target audience segment.',
      content: [
        {
          title: 'Emerging Artists',
          text: 'Focus: Accessibility & Growth. Messaging emphasizes affordable access to professional tools, skill development, and the path to professional-quality results.'
        },
        {
          title: 'Professional Producers',
          text: 'Focus: Flexibility & Optimization. Messaging emphasizes business scalability, workflow efficiency, and access to specialized resources without capital investment.'
        },
        {
          title: 'Content Creators',
          text: 'Focus: Differentiation & Simplicity. Messaging emphasizes audio quality as a competitive advantage and streamlined processes that integrate with existing workflows.'
        },
        {
          title: 'Organizations & Institutions',
          text: 'Focus: Reliability & Scalability. Messaging emphasizes consistent quality, resource optimization, and customized solutions for organizational needs.'
        }
      ]
    },
    {
      element: 'Service-Specific Messaging',
      description: 'Consistent frameworks for communicating the value of each service offering.',
      content: [
        {
          title: 'Studio Services',
          text: 'Professional environments and expertise to capture perfect audio without the complexity of self-recording.'
        },
        {
          title: 'Equipment Rental',
          text: 'Professional tools in your hands, when and where you need them, without the capital investment.'
        },
        {
          title: 'Education Platform',
          text: 'Practical knowledge and skill development focused on real-world application and professional results.'
        },
        {
          title: 'Mobile Recording',
          text: 'Studio-quality recording capabilities in any environment, with professional technical support included.'
        }
      ]
    }
  ];

  const serviceLaunchPlans = [
    {
      service: 'Mobile Recording Service',
      status: 'Planned Launch: Q1 2024',
      marketingPhases: [
        {
          phase: 'Pre-Launch (Current)',
          activities: [
            'Development of service positioning and messaging framework',
            'Creation of initial marketing collateral and service documentation',
            'Identification of beta clients for initial testimonials',
            'Preparation of sales enablement materials'
          ]
        },
        {
          phase: 'Soft Launch (January 2024)',
          activities: [
            'Limited promotion to existing Professional and Partner members',
            'Targeted outreach to high-value potential clients',
            'Documentation of initial case studies',
            'Sales team training and service integration'
          ]
        },
        {
          phase: 'Full Launch (February 2024)',
          activities: [
            'Comprehensive promotional campaign across all channels',
            'Promotional pricing for early adopters',
            'Content marketing featuring case studies and workflow spotlights',
            'Partnership announcements with venues and event producers'
          ]
        },
        {
          phase: 'Expansion (Q2 2024)',
          activities: [
            'Launch of specialized packages for different event types',
            'Geographic expansion marketing for secondary markets',
            'Development of integration marketing with other services',
            'Member referral program for mobile recording clients'
          ]
        }
      ],
      keyMessaging: [
        'Studio-quality recording, anywhere',
        'Technical expertise included - focus on your performance',
        'Flexible setups for any environment',
        'Seamless integration with other Elemental Sound services'
      ],
      primaryAudiences: [
        'Professional musicians and performers',
        'Event producers and venues',
        'Content creators with field recording needs',
        'Educational institutions and conferences'
      ]
    },
    {
      service: 'Education Platform Expansion',
      status: 'Planned Launch: Q1-Q2 2024',
      marketingPhases: [
        {
          phase: 'Content Development (Current)',
          activities: [
            'Curriculum mapping and content planning',
            'Instructor recruitment and content production',
            'Development of certification framework',
            'Platform enhancement for advanced features'
          ]
        },
        {
          phase: 'Member Preview (February 2024)',
          activities: [
            'Early access to new courses for existing members',
            'Feedback gathering and course refinement',
            'Member-exclusive pricing for certification programs',
            'Cross-promotion to service clients'
          ]
        },
        {
          phase: 'Full Launch (March 2024)',
          activities: [
            'Comprehensive promotional campaign across all channels',
            'Industry partnership announcements for certification validation',
            'Launch events and webinars featuring lead instructors',
            'Content marketing highlighting advanced learning paths'
          ]
        },
        {
          phase: 'Expansion (Q2 2024)',
          activities: [
            'B2B marketing to educational institutions and studios',
            'Launch of instructor development program',
            'Promotion of community features and collaborative learning',
            'Integration marketing with service packages'
          ]
        }
      ],
      keyMessaging: [
        'Industry-validated certification programs',
        'Learn from active professionals in real-world environments',
        'Practical skills with immediate application',
        'Community-enhanced learning experience'
      ],
      primaryAudiences: [
        'Career-focused audio professionals',
        'Emerging artists seeking skill development',
        'Content creators looking to improve audio quality',
        'Educational institutions seeking resources'
      ]
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="relative h-96 bg-gradient-to-r from-primary-dark to-primary-DEFAULT overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/wiki-images/page-banners/marketing-implementation-banner.jpg"
            alt="Marketing Implementation"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="container mx-auto px-4 h-full flex flex-col justify-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Marketing Implementation</h1>
          <p className="text-xl md:text-2xl max-w-3xl">
            Strategic approach to communicating our value to target audiences
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Implementation Nav */}
        <div className="mb-12 border-b border-gray-200">
          <nav className="flex space-x-6 overflow-x-auto pb-4">
            <Link href="/implementation" className="text-gray-600 hover:text-primary-DEFAULT font-medium whitespace-nowrap">Implementation Overview</Link>
            <a href="#strategy-overview" className="text-primary-DEFAULT font-medium whitespace-nowrap">Strategy Overview</a>
            <a href="#target-segments" className="text-gray-600 hover:text-primary-DEFAULT font-medium whitespace-nowrap">Target Segments</a>
            <a href="#channel-strategy" className="text-gray-600 hover:text-primary-DEFAULT font-medium whitespace-nowrap">Channel Strategy</a>
            <a href="#messaging" className="text-gray-600 hover:text-primary-DEFAULT font-medium whitespace-nowrap">Messaging Framework</a>
            <a href="#launch-plan" className="text-gray-600 hover:text-primary-DEFAULT font-medium whitespace-nowrap">Service Launch Plans</a>
          </nav>
        </div>

        {/* Strategy Overview Section */}
        <section id="strategy-overview" className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Marketing Strategy Overview</h2>
          <p className="text-lg mb-8 max-w-4xl">
            The Elemental Sound marketing strategy focuses on clearly communicating our unique ecosystem value proposition 
            to distinct market segments. Our approach balances brand awareness, service education, and community building 
            to drive adoption across our integrated service offerings.
          </p>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-10">
            <h3 className="text-xl font-bold mb-4">Marketing Strategy Principles</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-primary-DEFAULT font-bold mr-2">•</span>
                <div>
                  <span className="font-semibold">Ecosystem-First Messaging</span> - Emphasize the interconnected nature and cumulative value of our services
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-primary-DEFAULT font-bold mr-2">•</span>
                <div>
                  <span className="font-semibold">Segment-Specific Communication</span> - Tailor messaging to address unique pain points and opportunities for each audience
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-primary-DEFAULT font-bold mr-2">•</span>
                <div>
                  <span className="font-semibold">Content-Driven Education</span> - Build authority and trust through valuable educational content
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-primary-DEFAULT font-bold mr-2">•</span>
                <div>
                  <span className="font-semibold">Community Amplification</span> - Leverage satisfied members to drive organic growth and referrals
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-primary-DEFAULT font-bold mr-2">•</span>
                <div>
                  <span className="font-semibold">Data-Informed Optimization</span> - Continuously refine approach based on performance metrics
                </div>
              </li>
            </ul>
          </div>
          
          <h3 className="text-2xl font-bold mb-6">Strategic Phases</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {strategyPhases.map((phase, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h4 className="text-xl font-semibold mb-3 text-primary-DEFAULT">{phase.title}</h4>
                <p className="mb-4">{phase.description}</p>
                <ul className="list-disc pl-5 space-y-1">
                  {phase.items.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Target Segments Section */}
        <section id="target-segments" className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Target Market Segments</h2>
          <p className="text-lg mb-8 max-w-4xl">
            Our marketing strategy addresses distinct audience segments with tailored messaging 
            and channel approaches based on their unique needs, behaviors, and value perceptions.
          </p>
          
          <div className="space-y-8">
            {targetSegments.map((segment, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-2xl font-bold mb-4 text-primary-DEFAULT">{segment.name}</h3>
                
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-6">
                  <div>
                    <h4 className="text-lg font-semibold mb-3">Key Demographics</h4>
                    <ul className="space-y-2">
                      <li><span className="font-medium">Age:</span> {segment.demographics.age}</li>
                      <li><span className="font-medium">Income:</span> {segment.demographics.income}</li>
                      <li><span className="font-medium">Geographic:</span> {segment.demographics.geographic}</li>
                      <li><span className="font-medium">Technical level:</span> {segment.demographics.technicalLevel}</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold mb-3">Primary Pain Points</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {segment.painPoints.map((point, pointIndex) => (
                        <li key={pointIndex}>{point}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold mb-3">Value Proposition Focus</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {segment.valueProposition.map((value, valueIndex) => (
                        <li key={valueIndex}>{value}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold mb-3">Primary Service Offerings</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {segment.services.map((service, serviceIndex) => (
                        <li key={serviceIndex}>{service}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Channel Strategy Section */}
        <section id="channel-strategy" className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Channel Strategy</h2>
          <p className="text-lg mb-8 max-w-4xl">
            Our multi-channel approach ensures consistent messaging across touchpoints while 
            optimizing each channel for its unique strengths and audience behavior.
          </p>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 border border-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Channel</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Primary Objectives</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Target Segments</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Content Focus</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Key Metrics</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {channelStrategy.map((channel, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r">{channel.channel}</td>
                    <td className="px-6 py-4 text-sm text-gray-500 border-r">
                      <ul className="list-disc pl-5 space-y-1">
                        {channel.primaryObjectives.map((objective, objIndex) => (
                          <li key={objIndex}>{objective}</li>
                        ))}
                      </ul>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500 border-r">
                      <ul className="list-disc pl-5 space-y-1">
                        {channel.targetSegments.map((segment, segIndex) => (
                          <li key={segIndex}>{segment}</li>
                        ))}
                      </ul>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500 border-r">
                      <ul className="list-disc pl-5 space-y-1">
                        {channel.contentFocus.map((focus, focusIndex) => (
                          <li key={focusIndex}>{focus}</li>
                        ))}
                      </ul>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      <ul className="list-disc pl-5 space-y-1">
                        {channel.keyMetrics.map((metric, metricIndex) => (
                          <li key={metricIndex}>{metric}</li>
                        ))}
                      </ul>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Messaging Framework */}
        <section id="messaging" className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Messaging Framework</h2>
          <p className="text-lg mb-8 max-w-4xl">
            Our messaging framework ensures consistency across all communications while allowing for 
            contextual adaptation to different audiences and channels.
          </p>
          
          <div className="space-y-10">
            {messagingFramework.map((element, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-2xl font-bold mb-3">{element.element}</h3>
                <p className="mb-6 text-gray-600">{element.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {element.content.map((item, itemIndex) => (
                    <div key={itemIndex} className="border border-gray-100 rounded-lg p-4">
                      <h4 className="text-lg font-semibold mb-2 text-primary-DEFAULT">{item.title}</h4>
                      <p>{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Service Launch Plans */}
        <section id="launch-plan" className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Service Launch Plans</h2>
          <p className="text-lg mb-8 max-w-4xl">
            Structured marketing approaches for upcoming service launches, ensuring coordinated 
            promotional activities and clear communication of value propositions.
          </p>
          
          <div className="space-y-12">
            {serviceLaunchPlans.map((service, serviceIndex) => (
              <div key={serviceIndex} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6">
                  <h3 className="text-2xl font-bold text-primary-DEFAULT">{service.service}</h3>
                  <div className="mt-2 md:mt-0 px-4 py-1 bg-primary-light text-primary-dark rounded-full text-sm font-medium">
                    {service.status}
                  </div>
                </div>
                
                <div className="mb-8">
                  <h4 className="text-lg font-semibold mb-4">Launch Timeline</h4>
                  <div className="space-y-6">
                    {service.marketingPhases.map((phase, phaseIndex) => (
                      <div key={phaseIndex} className="pl-4 border-l-4 border-primary-light">
                        <h5 className="text-lg font-medium mb-2">{phase.phase}</h5>
                        <ul className="list-disc pl-5 space-y-1">
                          {phase.activities.map((activity, activityIndex) => (
                            <li key={activityIndex} className="text-gray-700">{activity}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold mb-3">Key Messaging</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {service.keyMessaging.map((message, messageIndex) => (
                        <li key={messageIndex}>{message}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold mb-3">Primary Audiences</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {service.primaryAudiences.map((audience, audienceIndex) => (
                        <li key={audienceIndex}>{audience}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Related Pages */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Related Resources</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/implementation" className="group">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 transition duration-300 group-hover:border-primary-DEFAULT group-hover:shadow-md">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary-DEFAULT">Implementation Overview</h3>
                <p className="text-gray-600">Main implementation plan and roadmap</p>
              </div>
            </Link>
            
            <Link href="/services" className="group">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 transition duration-300 group-hover:border-primary-DEFAULT group-hover:shadow-md">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary-DEFAULT">Service Ecosystem</h3>
                <p className="text-gray-600">Learn about our integrated service offerings</p>
              </div>
            </Link>
            
            <Link href="/client-stories" className="group">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 transition duration-300 group-hover:border-primary-DEFAULT group-hover:shadow-md">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary-DEFAULT">Client Stories</h3>
                <p className="text-gray-600">Case studies and success stories</p>
              </div>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
} 