'use client';

import React from 'react';
import Link from 'next/link';

export default function ImplementationPage() {
  const implementationPrinciples = [
    {
      title: 'Phased Approach',
      description: 'Carefully sequenced rollout of services to ensure quality, manage resources, and build on successes'
    },
    {
      title: 'Scalable Infrastructure',
      description: 'Systems and processes designed to accommodate growth without complete restructuring'
    },
    {
      title: 'Continuous Feedback',
      description: 'Regular evaluation with stakeholders to refine offerings and address market needs'
    },
    {
      title: 'Resource Optimization',
      description: 'Strategic allocation of capital, talent, and technology to maximize impact'
    }
  ];

  const timelinePhases = [
    {
      title: 'Phase 1: Foundation Building',
      period: 'Q1-Q2 2023',
      status: 'completed',
      milestones: [
        {
          title: 'Studio Membership Program Launch',
          items: [
            'Finalize membership tier structure and pricing',
            'Develop member management system',
            'Convert existing clients to membership model',
            'Begin targeted marketing campaign'
          ],
          status: 'Completed: March 2023'
        },
        {
          title: 'Equipment Inventory Expansion',
          items: [
            'Audit current equipment inventory',
            'Acquire additional premium and vintage equipment',
            'Implement equipment management system',
            'Develop maintenance protocols'
          ],
          status: 'Completed: April 2023'
        },
        {
          title: 'Digital Infrastructure Development',
          items: [
            'Launch new website with integrated booking system',
            'Implement CRM and member portal',
            'Develop equipment reservation system',
            'Create internal knowledge base'
          ],
          status: 'Completed: June 2023'
        }
      ]
    },
    {
      title: 'Phase 2: Service Expansion',
      period: 'Q3-Q4 2023',
      status: 'active',
      milestones: [
        {
          title: 'Equipment Rental Program Launch',
          items: [
            'Finalize rental terms and rates',
            'Develop rental agreement documentation',
            'Train staff on rental procedures',
            'Create equipment delivery logistics'
          ],
          status: 'Completed: August 2023'
        },
        {
          title: 'Education Platform Initial Offerings',
          items: [
            'Develop core curriculum for first four courses',
            'Recruit and onboard instructor team',
            'Build online learning management system',
            'Launch pilot courses with beta pricing'
          ],
          status: 'Completed: October 2023'
        },
        {
          title: 'Mobile Recording Service Development',
          items: [
            'Acquire and configure mobile recording equipment',
            'Develop standardized mobile workflows',
            'Conduct test recordings in diverse environments',
            'Build mobile technical documentation'
          ],
          status: 'In Progress: Target completion December 2023'
        }
      ]
    },
    {
      title: 'Phase 3: Scaling Operations',
      period: 'Q1-Q2 2024',
      status: 'planned',
      milestones: [
        {
          title: 'Mobile Recording Service Launch',
          items: [
            'Official service launch with case studies',
            'Develop partnerships with event venues',
            'Implement booking and logistics optimization',
            'Begin specialized marketing campaign'
          ],
          status: 'Planned: January 2024'
        },
        {
          title: 'Education Platform Expansion',
          items: [
            'Launch certification programs',
            'Expand curriculum to 12+ courses',
            'Develop institutional partnerships',
            'Implement advanced learning analytics'
          ],
          status: 'Planned: March 2024'
        },
        {
          title: 'Community Building Initiatives',
          items: [
            'Launch member networking events',
            'Develop industry showcase program',
            'Establish mentor matching program',
            'Create collaborative project platform'
          ],
          status: 'Planned: April 2024'
        }
      ]
    },
    {
      title: 'Phase 4: Market Expansion',
      period: 'Q3-Q4 2024',
      status: 'planned',
      milestones: [
        {
          title: 'Digital Content Distribution Platform',
          items: [
            'Develop member showcase platform',
            'Build industry connection network',
            'Implement content licensing framework',
            'Create distribution channel partnerships'
          ],
          status: 'Planned: July 2024'
        },
        {
          title: 'Geographic Market Expansion',
          items: [
            'Open satellite location in secondary market',
            'Develop equipment sharing between locations',
            'Expand mobile recording service radius',
            'Implement multi-location membership benefits'
          ],
          status: 'Planned: September 2024'
        },
        {
          title: 'Strategic Partnership Program',
          items: [
            'Formalize industry partner program',
            'Develop educational institution partnerships',
            'Create corporate client services packages',
            'Establish artist development collaborations'
          ],
          status: 'Planned: November 2024'
        }
      ]
    }
  ];

  const resourceAllocation = [
    {
      category: 'Financial Resources',
      description: 'Strategic allocation of capital across implementation phases',
      items: [
        { name: 'Infrastructure Development', percentage: 35, description: 'Physical and digital systems' },
        { name: 'Equipment Acquisition', percentage: 25, description: 'Recording, production, and mobile gear' },
        { name: 'Marketing & Customer Acquisition', percentage: 20, description: 'Campaigns and outreach' },
        { name: 'Personnel & Training', percentage: 15, description: 'Team expansion and development' },
        { name: 'Contingency Reserve', percentage: 5, description: 'Unforeseen opportunities and challenges' }
      ]
    },
    {
      category: 'Human Resources',
      description: 'Talent allocation across service areas',
      items: [
        { name: 'Core Studio Operations', percentage: 40, description: 'In-studio recording and production' },
        { name: 'Education & Community', percentage: 25, description: 'Course development and delivery' },
        { name: 'Mobile & Special Projects', percentage: 20, description: 'On-location services' },
        { name: 'Technology & Support', percentage: 10, description: 'Digital platforms and assistance' },
        { name: 'Administration', percentage: 5, description: 'Business operations' }
      ]
    },
    {
      category: 'Technology Resources',
      description: 'Digital and technical infrastructure investment',
      items: [
        { name: 'Core Studio Equipment', percentage: 45, description: 'In-house recording gear' },
        { name: 'Mobile Recording Systems', percentage: 20, description: 'Portable professional setups' },
        { name: 'Digital Platforms', percentage: 20, description: 'Website, booking, and educational systems' },
        { name: 'Rental Inventory', percentage: 10, description: 'Equipment for client use' },
        { name: 'Internal Systems', percentage: 5, description: 'Operations and management tools' }
      ]
    }
  ];

  const staffingPlan = [
    {
      phase: 'Current Team',
      roles: [
        {
          title: 'Studio Director',
          count: 1,
          responsibilities: [
            'Overall business leadership',
            'Strategic direction',
            'Key client relationships',
            'Financial oversight'
          ]
        },
        {
          title: 'Lead Engineers',
          count: 2,
          responsibilities: [
            'Session engineering and production',
            'Equipment maintenance and selection',
            'Technical documentation',
            'Client technical consultation'
          ]
        },
        {
          title: 'Studio Coordinators',
          count: 2,
          responsibilities: [
            'Booking management',
            'Client communication',
            'Session preparation',
            'Basic administrative tasks'
          ]
        },
        {
          title: 'Educational Consultant',
          count: 1,
          responsibilities: [
            'Course development (contract)',
            'Instructor coordination',
            'Curriculum planning',
            'Educational partnerships'
          ]
        }
      ]
    },
    {
      phase: 'Phase 2 Expansion (Current)',
      roles: [
        {
          title: 'Mobile Recording Specialist',
          count: 1,
          responsibilities: [
            'Mobile recording workflow development',
            'On-location session engineering',
            'Mobile equipment management',
            'Venue relationship development'
          ]
        },
        {
          title: 'Marketing Coordinator',
          count: 1,
          responsibilities: [
            'Marketing campaign execution',
            'Content creation',
            'Social media management',
            'Event coordination'
          ]
        },
        {
          title: 'Equipment Manager',
          count: 1,
          responsibilities: [
            'Inventory management',
            'Maintenance scheduling',
            'Rental program management',
            'Equipment acquisition research'
          ]
        }
      ]
    },
    {
      phase: 'Phase 3 Additions (Planned)',
      roles: [
        {
          title: 'Education Director',
          count: 1,
          responsibilities: [
            'Education platform leadership',
            'Instructor recruitment and management',
            'Curriculum expansion',
            'Educational partnerships'
          ]
        },
        {
          title: 'Community Manager',
          count: 1,
          responsibilities: [
            'Member community development',
            'Events and networking programs',
            'Collaboration facilitation',
            'Membership growth initiatives'
          ]
        },
        {
          title: 'Additional Engineers',
          count: 2,
          responsibilities: [
            'Expanded session coverage',
            'Specialized technical expertise',
            'Education content development',
            'Technical consultation services'
          ]
        }
      ]
    },
    {
      phase: 'Phase 4 Additions (Planned)',
      roles: [
        {
          title: 'Business Development Manager',
          count: 1,
          responsibilities: [
            'Partnership development',
            'New location planning',
            'Service expansion strategy',
            'Corporate client acquisition'
          ]
        },
        {
          title: 'Content Distribution Specialist',
          count: 1,
          responsibilities: [
            'Distribution platform management',
            'Artist promotion coordination',
            'Licensing opportunities',
            'Industry partnership development'
          ]
        },
        {
          title: 'Satellite Location Staff',
          count: 4,
          responsibilities: [
            'New location operations',
            'Local market development',
            'Regional client management',
            'Cross-location coordination'
          ]
        }
      ]
    }
  ];

  const performanceMetrics = [
    {
      category: 'Financial Metrics',
      metrics: [
        {
          name: 'Revenue Growth',
          target: '25% year-over-year',
          measurement: 'Monthly revenue tracking vs. previous year',
          review: 'Monthly with quarterly deep analysis'
        },
        {
          name: 'Service Mix Balance',
          target: 'No single service exceeding 40% of revenue',
          measurement: 'Revenue breakdown by service category',
          review: 'Quarterly assessment'
        },
        {
          name: 'Membership Revenue Ratio',
          target: '60% of revenue from recurring membership by end of Phase 3',
          measurement: 'Membership vs. a la carte revenue tracking',
          review: 'Monthly with quarterly targets'
        },
        {
          name: 'Profitability',
          target: '20% overall margin by end of Phase 3',
          measurement: 'Profit and loss by service line',
          review: 'Quarterly review with annual targets'
        }
      ]
    },
    {
      category: 'Operational Metrics',
      metrics: [
        {
          name: 'Studio Utilization',
          target: '75% of available hours (peak), 50% (off-peak)',
          measurement: 'Booking system analytics',
          review: 'Weekly tracking with monthly optimization'
        },
        {
          name: 'Equipment Utilization',
          target: '85% utilization rate for rental inventory',
          measurement: 'Rental tracking system',
          review: 'Monthly with quarterly inventory adjustments'
        },
        {
          name: 'Course Completion Rate',
          target: '80% completion rate for paid courses',
          measurement: 'Learning management system analytics',
          review: 'Per-course with monthly summary'
        },
        {
          name: 'Service Delivery Efficiency',
          target: '90% of projects delivered on schedule',
          measurement: 'Project management tracking',
          review: 'Weekly operations review'
        }
      ]
    },
    {
      category: 'Client Metrics',
      metrics: [
        {
          name: 'Membership Growth',
          target: '15% quarter-over-quarter growth in Phase 2-3',
          measurement: 'New membership tracking',
          review: 'Monthly with quarterly targets'
        },
        {
          name: 'Client Retention',
          target: '85% annual renewal rate for memberships',
          measurement: 'Membership renewal tracking',
          review: 'Monthly monitoring with annual review'
        },
        {
          name: 'Cross-Service Utilization',
          target: '50% of clients using multiple services',
          measurement: 'Client service usage analytics',
          review: 'Quarterly assessment'
        },
        {
          name: 'Net Promoter Score',
          target: 'Maintain 70+ NPS across all services',
          measurement: 'Post-service surveys and periodic assessments',
          review: 'Continuous collection with monthly review'
        }
      ]
    }
  ];

  const riskManagement = [
    {
      category: 'Market Risks',
      risks: [
        {
          risk: 'Slower than projected membership adoption',
          impact: 'High',
          probability: 'Medium',
          mitigation: 'Flexible pricing strategies, enhanced onboarding process, targeted incentive programs for early adopters, increased marketing emphasis on ROI for potential members.'
        },
        {
          risk: 'Increased competition in key service areas',
          impact: 'Medium',
          probability: 'High',
          mitigation: 'Continuous service differentiation, accelerated implementation of unique ecosystem benefits, strengthened community elements that create loyalty beyond price, strategic partnerships to enhance offerings.'
        },
        {
          risk: 'Shift in market demand away from projected service mix',
          impact: 'Medium',
          probability: 'Medium',
          mitigation: 'Regular market analysis with quarterly service offering adjustments, maintaining flexible resource allocation to pivot quickly, development of contingency service options.'
        }
      ]
    },
    {
      category: 'Operational Risks',
      risks: [
        {
          risk: 'Equipment reliability and maintenance issues',
          impact: 'High',
          probability: 'Medium',
          mitigation: 'Comprehensive preventative maintenance program, redundant systems for critical components, service contracts for rapid repairs, backup inventory for rental program items.'
        },
        {
          risk: 'Staffing challenges and knowledge gaps',
          impact: 'High',
          probability: 'Medium',
          mitigation: 'Proactive recruitment pipeline, cross-training program for key positions, documented procedures and knowledge base, contractor relationships for specialized expertise.'
        },
        {
          risk: 'Technology platform limitations or failures',
          impact: 'High',
          probability: 'Low',
          mitigation: 'Rigorous testing protocols, phased implementation of digital systems, redundant data storage, regular backup procedures, support contracts with technology vendors.'
        }
      ]
    },
    {
      category: 'Financial Risks',
      risks: [
        {
          risk: 'Higher than projected implementation costs',
          impact: 'High',
          probability: 'Medium',
          mitigation: 'Phased approach with clear go/no-go decision points, 15% contingency budget for each phase, flexible scaling of non-essential elements, alternative financing options prepared.'
        },
        {
          risk: 'Cash flow constraints during rapid expansion',
          impact: 'High',
          probability: 'Medium',
          mitigation: 'Detailed cash flow projections with monthly monitoring, pre-arranged credit line, strategic phasing of capital-intensive elements, deposit-based pre-sales for new offerings.'
        },
        {
          risk: 'Lower than projected margins on new services',
          impact: 'Medium',
          probability: 'Medium',
          mitigation: 'Comprehensive pre-launch cost analysis, small-scale pilots before full deployment, pricing structure flexibility, efficiency improvements identified in advance.'
        }
      ]
    }
  ];

  const nextSteps = [
    {
      title: 'Mobile Recording Service Launch',
      timeline: 'January 2024',
      details: 'Complete final equipment testing, finalize service packages, train additional staff, and develop marketing materials for official launch.'
    },
    {
      title: 'Education Platform Phase 2',
      timeline: 'Q1 2024',
      details: 'Expand course offerings, implement certification framework, develop advanced instructor training, and establish educational partnership agreements.'
    },
    {
      title: 'Community Program Development',
      timeline: 'Q1-Q2 2024',
      details: 'Design member event series, establish online collaboration platform, create networking framework, and develop industry showcase program structure.'
    },
    {
      title: 'Mid-Year Strategic Review',
      timeline: 'June 2024',
      details: 'Comprehensive assessment of Phase 1-3 implementation, market response analysis, performance metrics evaluation, and refinement of Phase 4 plans.'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="relative h-96 bg-gradient-to-r from-primary-dark to-primary-DEFAULT overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/wiki-images/page-banners/implementation-banner.jpg"
            alt="Implementation Roadmap"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="container mx-auto px-4 h-full flex flex-col justify-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Implementation Roadmap</h1>
          <p className="text-xl md:text-2xl max-w-3xl">
            Transforming vision into reality with clear execution strategy
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Implementation Nav */}
        <div className="mb-12 border-b border-gray-200">
          <nav className="flex space-x-6 overflow-x-auto pb-4">
            <a href="#overview" className="text-primary-DEFAULT font-medium whitespace-nowrap">Strategic Overview</a>
            <a href="#timeline" className="text-gray-600 hover:text-primary-DEFAULT font-medium whitespace-nowrap">Implementation Timeline</a>
            <a href="#resource-allocation" className="text-gray-600 hover:text-primary-DEFAULT font-medium whitespace-nowrap">Resource Allocation</a>
            <a href="#staffing" className="text-gray-600 hover:text-primary-DEFAULT font-medium whitespace-nowrap">Staffing Plan</a>
            <a href="#metrics" className="text-gray-600 hover:text-primary-DEFAULT font-medium whitespace-nowrap">Performance Metrics</a>
            <a href="#risk-management" className="text-gray-600 hover:text-primary-DEFAULT font-medium whitespace-nowrap">Risk Management</a>
            <a href="#next-steps" className="text-gray-600 hover:text-primary-DEFAULT font-medium whitespace-nowrap">Next Steps</a>
            <Link href="/implementation/marketing" className="text-gray-600 hover:text-primary-DEFAULT font-medium whitespace-nowrap">Marketing Implementation</Link>
          </nav>
        </div>

        {/* Overview Section */}
        <section id="overview" className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Strategic Implementation Overview</h2>
          <p className="text-lg mb-8 max-w-4xl">
            Our implementation plan transforms the Elemental Sound business strategy into actionable steps with clear timelines, 
            responsibilities, and resource allocation. This roadmap provides the framework for our systematic expansion from 
            traditional recording studio to comprehensive audio ecosystem.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {implementationPrinciples.map((principle, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-semibold mb-2 text-primary-DEFAULT">{principle.title}</h3>
                <p>{principle.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Timeline Section */}
        <section id="timeline" className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Implementation Timeline</h2>
          
          <div className="space-y-12">
            {timelinePhases.map((phase, phaseIndex) => (
              <div key={phaseIndex} className={`border-l-4 pl-6 ${
                phase.status === 'completed' ? 'border-green-500' : 
                phase.status === 'active' ? 'border-blue-500' : 'border-gray-300'
              }`}>
                <div className="mb-4">
                  <div className="text-sm font-medium text-gray-500 mb-1">{phase.period}</div>
                  <h3 className="text-2xl font-bold">{phase.title}</h3>
                </div>
                
                <div className="space-y-6">
                  {phase.milestones.map((milestone, milestoneIndex) => (
                    <div key={milestoneIndex} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                      <h4 className="text-xl font-semibold mb-3">{milestone.title}</h4>
                      <ul className="list-disc pl-5 mb-4 space-y-1">
                        {milestone.items.map((item, itemIndex) => (
                          <li key={itemIndex}>{item}</li>
                        ))}
                      </ul>
                      <div className={`text-sm font-medium ${
                        milestone.status.includes('Completed') ? 'text-green-600' : 
                        milestone.status.includes('Progress') ? 'text-blue-600' : 'text-gray-600'
                      }`}>
                        {milestone.status}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Resource Allocation */}
        <section id="resource-allocation" className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Resource Allocation</h2>
          
          <div className="space-y-10">
            {resourceAllocation.map((resource, resourceIndex) => (
              <div key={resourceIndex} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-2xl font-bold mb-2">{resource.category}</h3>
                <p className="text-lg mb-6">{resource.description}</p>
                
                <div className="space-y-4">
                  {resource.items.map((item, itemIndex) => (
                    <div key={itemIndex}>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium">{item.name}</span>
                        <span className="text-gray-600">{item.percentage}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div 
                          className="bg-primary-DEFAULT h-2.5 rounded-full" 
                          style={{ width: `${item.percentage}%` }}
                        ></div>
                      </div>
                      <div className="text-sm text-gray-500 mt-1">{item.description}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Staffing Plan */}
        <section id="staffing" className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Staffing Plan</h2>
          
          <div className="space-y-10">
            {staffingPlan.map((phase, phaseIndex) => (
              <div key={phaseIndex} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-2xl font-bold mb-6">{phase.phase}</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {phase.roles.map((role, roleIndex) => (
                    <div key={roleIndex} className="border border-gray-100 rounded-lg p-4">
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="text-xl font-semibold">{role.title}</h4>
                        <span className="bg-gray-100 text-gray-800 text-sm font-medium px-2.5 py-0.5 rounded">
                          {role.count > 1 ? `${role.count} positions` : '1 position'}
                        </span>
                      </div>
                      <ul className="list-disc pl-5 space-y-1">
                        {role.responsibilities.map((responsibility, respIndex) => (
                          <li key={respIndex} className="text-gray-700">{responsibility}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Performance Metrics */}
        <section id="metrics" className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Key Performance Metrics</h2>
          
          <div className="space-y-10">
            {performanceMetrics.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-2xl font-bold mb-6">{category.category}</h3>
                
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Metric</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Target</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Measurement</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Review Cadence</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {category.metrics.map((metric, metricIndex) => (
                        <tr key={metricIndex}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{metric.name}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{metric.target}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{metric.measurement}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{metric.review}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Risk Management */}
        <section id="risk-management" className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Risk Management</h2>
          
          <div className="space-y-10">
            {riskManagement.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-2xl font-bold mb-6">{category.category}</h3>
                
                <div className="space-y-6">
                  {category.risks.map((risk, riskIndex) => (
                    <div key={riskIndex} className="border border-gray-100 rounded-lg p-5">
                      <h4 className="text-xl font-semibold mb-3">{risk.risk}</h4>
                      
                      <div className="flex mb-4">
                        <div className="mr-6">
                          <span className="block text-sm text-gray-500 mb-1">Impact</span>
                          <span className={`
                            px-2.5 py-0.5 rounded-full text-xs font-medium
                            ${risk.impact === 'High' ? 'bg-red-100 text-red-800' : 
                              risk.impact === 'Medium' ? 'bg-yellow-100 text-yellow-800' : 
                              'bg-green-100 text-green-800'}
                          `}>
                            {risk.impact}
                          </span>
                        </div>
                        
                        <div>
                          <span className="block text-sm text-gray-500 mb-1">Probability</span>
                          <span className={`
                            px-2.5 py-0.5 rounded-full text-xs font-medium
                            ${risk.probability === 'High' ? 'bg-red-100 text-red-800' : 
                              risk.probability === 'Medium' ? 'bg-yellow-100 text-yellow-800' : 
                              'bg-green-100 text-green-800'}
                          `}>
                            {risk.probability}
                          </span>
                        </div>
                      </div>
                      
                      <div>
                        <h5 className="text-sm font-medium text-gray-700 mb-2">Mitigation Strategy</h5>
                        <p className="text-gray-600">{risk.mitigation}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Next Steps */}
        <section id="next-steps" className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Next Steps</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {nextSteps.map((step, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <div className="mb-3">
                  <span className="text-sm font-medium text-primary-DEFAULT">{step.timeline}</span>
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.details}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Related Pages */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Related Resources</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/implementation/marketing" className="group">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 transition duration-300 group-hover:border-primary-DEFAULT group-hover:shadow-md">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary-DEFAULT">Marketing Implementation</h3>
                <p className="text-gray-600">Detailed marketing strategy and execution plan</p>
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