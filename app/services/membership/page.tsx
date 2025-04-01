'use client';

import React from 'react';
import Link from 'next/link';

export default function MembershipPage() {
  const membershipTiers = [
    {
      name: 'Creator Pass',
      price: '$99',
      period: 'month',
      color: 'bg-blue-500',
      description: 'For emerging creators looking for basic studio access and educational resources.',
      bestFor: ['Hobbyists', 'Beginners', 'Content creators', 'Students'],
      features: [
        '8 hours of Studio C access per month',
        'Community platform access',
        'Basic educational resources',
        '10% discount on equipment rentals',
        'Access to monthly workshops',
        'Booking up to 14 days in advance'
      ],
      cta: 'Start with Creator Pass'
    },
    {
      name: 'Producer Pass',
      price: '$249',
      period: 'month',
      color: 'bg-indigo-600',
      description: 'For active creators needing regular access to professional-grade facilities.',
      bestFor: ['Independent producers', 'Podcasters', 'YouTubers', 'Semi-professionals'],
      features: [
        '20 hours split between Studio B & C per month',
        'Full community platform features',
        'Complete education platform access',
        '15% discount on equipment rentals',
        'Priority booking for workshops',
        'Booking up to 30 days in advance',
        '2 guest passes per month',
        'Basic project storage (50GB)'
      ],
      cta: 'Upgrade to Producer Pass',
      highlight: true
    },
    {
      name: 'Professional Pass',
      price: '$699',
      period: 'month',
      color: 'bg-purple-700',
      description: 'For established professionals who need premium facilities and maximum flexibility.',
      bestFor: ['Professional producers', 'Studio engineers', 'Commercial artists', 'Production companies'],
      features: [
        '40 hours across all studios per month',
        'Priority studio booking status',
        'Expert-level educational content',
        '25% discount on equipment rentals',
        'Priority booking and free attendance to events',
        'Booking up to 60 days in advance',
        '5 guest passes per month',
        'Advanced project storage (250GB)',
        'Dedicated locker space',
        'Equipment overnight privileges',
        'After-hours studio access',
        'Mobile recording credits'
      ],
      cta: 'Go Professional'
    },
    {
      name: 'Studio Partner',
      price: '$1,499',
      period: 'month',
      color: 'bg-gray-800',
      description: 'Elite membership for businesses and full-time creators who require dedicated resources.',
      bestFor: ['Production houses', 'Commercial studios', 'Labels', 'Full-time professionals'],
      features: [
        'Unlimited access to all studios (subject to availability)',
        'Reserved time blocks (10hr/week in Studio A)',
        'Complete platform access for up to 3 users',
        '50% discount on equipment rentals',
        'Dedicated storage space (1TB)',
        'Engineer assistance (10hr/month)',
        'Private entrance and lounge access',
        'Business profile on website',
        'Premium support with dedicated account manager',
        'Strategic business consulting services',
        'Client referral program benefits',
        'Custom equipment arrangements'
      ],
      cta: 'Become a Partner',
      isEnterprise: true
    }
  ];

  const membershipBenefits = [
    {
      icon: '🎚️',
      title: 'Studio Access',
      description: 'Professional recording spaces equipped with industry-standard gear and acoustically treated environments'
    },
    {
      icon: '🔊',
      title: 'Equipment Access',
      description: 'Access to an extensive inventory of microphones, instruments, and audio equipment'
    },
    {
      icon: '👥',
      title: 'Community Access',
      description: 'Connect with like-minded creators, collaborators, and industry professionals'
    },
    {
      icon: '🎓',
      title: 'Educational Resources',
      description: 'Comprehensive learning materials, workshops, and personalized guidance'
    },
    {
      icon: '📅',
      title: 'Priority Booking',
      description: 'Advanced reservation privileges with priority status for higher-tier members'
    },
    {
      icon: '🏆',
      title: 'Cross-Service Benefits',
      description: 'Exclusive discounts and privileges across all Elemental Sound services'
    }
  ];

  const studioSpaces = [
    {
      name: "Studio A - The Professional Suite",
      description: "Our flagship recording space with premium analog equipment and spacious acoustics.",
      details: [
        "1,200 sq ft tracking room with 18ft ceilings",
        "SSL console with 48 channels",
        "Extensive collection of vintage microphones and outboard gear",
        "Isolated drum room and vocal booth",
        "5.1 surround sound monitoring environment"
      ],
      image: '/images/studio-a.jpg',
      memberAccess: {
        producer: "Unlimited access with priority booking",
        creator: "10 hours per month included",
        basic: "Available at discounted hourly rate",
        partner: "Unlimited priority access"
      }
    },
    {
      name: "Studio B - Project Studio",
      description: "Mid-sized production and recording space ideal for bands and small ensembles.",
      details: [
        "600 sq ft main tracking room",
        "API console with 32 channels",
        "Pro Tools HDX and UAD Apollo system",
        "Isolated vocal booth",
        "Dedicated amp room for guitar/bass recording"
      ],
      image: '/images/studio-b.jpg',
      memberAccess: {
        producer: "Unlimited access",
        creator: "20 hours per month included",
        basic: "8 hours per month included",
        partner: "Unlimited access"
      }
    },
    {
      name: "Studio C - Creator Space",
      description: "Compact but comprehensive production room for individual creators.",
      details: [
        "300 sq ft control room with vocal recording area",
        "Avid S1 control surface",
        "Pro Tools and Ableton Live workstation",
        "Reference monitoring by Genelec",
        "MIDI production setup with keyboards and controllers"
      ],
      image: '/images/studio-c.jpg',
      memberAccess: {
        producer: "Unlimited access",
        creator: "40 hours per month included",
        basic: "16 hours per month included",
        partner: "Unlimited access"
      }
    }
  ];

  const membershipFAQs = [
    {
      question: 'How do I book studio time?',
      answer: 'Members can book studio time through our online portal or mobile app. You\'ll see real-time availability and can reserve your sessions based on your membership tier\'s booking window.'
    },
    {
      question: 'Can I upgrade or downgrade my membership?',
      answer: 'Yes, you can change your membership tier at any time. Upgrades take effect immediately, while downgrades will apply at the start of your next billing cycle.'
    },
    {
      question: 'Are there any additional fees beyond membership?',
      answer: 'Your membership covers the studio time included in your tier. Additional studio hours, engineer assistance (for certain tiers), and specialized equipment may incur additional fees.'
    },
    {
      question: 'Can I bring guests to my sessions?',
      answer: 'Yes, all membership tiers include some guest privileges. The number of guests allowed depends on your tier and the studio being used.'
    },
    {
      question: 'What equipment is available in the studios?',
      answer: 'Each studio has a different configuration of equipment. All studios include industry-standard DAWs, monitoring, and basic recording equipment. Higher-tier studios include more specialized gear and instruments.'
    },
    {
      question: 'Do you offer discounts for students or educational institutions?',
      answer: 'Yes, we offer special rates for students and educational partnerships. Contact our membership team for details on educational programs.'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="relative h-96 bg-gradient-to-r from-primary-dark to-primary-DEFAULT overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/page-banners/membership-banner.jpg"
            alt="Studio Membership"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="container mx-auto px-4 h-full flex flex-col justify-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Studio Membership Program</h1>
          <p className="text-xl md:text-2xl max-w-3xl">Access professional-grade studios, equipment, and resources with flexible membership options designed for every career stage</p>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Sidebar */}
          <aside className="lg:w-1/4">
            <div className="bg-light-DEFAULT p-6 rounded-lg shadow-md mb-8 sticky top-6">
              <h3 className="text-xl font-bold border-b border-gray-200 pb-3 mb-4">Membership Options</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#tiers" className="text-primary-DEFAULT hover:text-primary-dark">
                    Membership Tiers
                  </a>
                </li>
                <li>
                  <a href="#studios" className="text-primary-DEFAULT hover:text-primary-dark">
                    Studio Facilities
                  </a>
                </li>
                <li>
                  <a href="#benefits" className="text-primary-DEFAULT hover:text-primary-dark">
                    Membership Benefits
                  </a>
                </li>
                <li>
                  <a href="#faqs" className="text-primary-DEFAULT hover:text-primary-dark">
                    Frequently Asked Questions
                  </a>
                </li>
              </ul>

              <h3 className="text-xl font-bold border-b border-gray-200 pb-3 mb-4 mt-8">Related Services</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/services/equipment" className="text-primary-DEFAULT hover:text-primary-dark">
                    Equipment Rental
                  </Link>
                </li>
                <li>
                  <Link href="/services/education" className="text-primary-DEFAULT hover:text-primary-dark">
                    Education Platform
                  </Link>
                </li>
                <li>
                  <Link href="/services/community" className="text-primary-DEFAULT hover:text-primary-dark">
                    Community Platform
                  </Link>
                </li>
              </ul>

              <h3 className="text-xl font-bold border-b border-gray-200 pb-3 mb-4 mt-8">Member Success Stories</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/client-stories/maya-rodriguez" className="text-primary-DEFAULT hover:text-primary-dark">
                    Maya Rodriguez - Creator Pass
                  </Link>
                </li>
                <li>
                  <Link href="/client-stories/devon-williams" className="text-primary-DEFAULT hover:text-primary-dark">
                    Devon Williams - Producer Pass
                  </Link>
                </li>
                <li>
                  <Link href="/client-stories/alex-johnson" className="text-primary-DEFAULT hover:text-primary-dark">
                    Alex Johnson - Professional Pass
                  </Link>
                </li>
              </ul>

              <div className="mt-8 p-4 bg-primary-DEFAULT text-white rounded-lg">
                <h4 className="font-bold text-lg mb-2">Ready to join?</h4>
                <p className="mb-4">Schedule a tour and consultation to find the right membership for your needs.</p>
                <Link 
                  href="/contact" 
                  className="block text-center bg-white text-primary-DEFAULT hover:bg-gray-100 py-2 px-4 rounded-lg transition-colors font-medium"
                >
                  Schedule a Tour
                </Link>
              </div>
            </div>
          </aside>

          {/* Content Area */}
          <div className="lg:w-3/4">
            {/* Introduction Section */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-6">Transforming Studio Access Through Membership</h2>
              
              <div className="prose max-w-none text-gray-700">
                <p className="mb-4">
                  Elemental Sound's Studio Membership Program reimagines how creators access professional audio facilities. 
                  Instead of the traditional pay-per-session model, our membership approach builds ongoing relationships that 
                  benefit both creators and our business.
                </p>
                <p className="mb-4">
                  Each membership tier is designed to meet creators at their current career stage, providing the right balance 
                  of access, education, and community resources to support their growth. As members advance in their careers, 
                  our tiered structure grows with them, offering increasingly powerful tools and resources.
                </p>
                <p className="mb-6">
                  Beyond just studio time, membership integrates with our entire service ecosystem, creating a comprehensive 
                  support system that addresses all aspects of the audio production process.
                </p>
              </div>

              <div className="bg-light-DEFAULT p-6 rounded-lg mt-8">
                <h3 className="text-xl font-bold mb-4">The Membership Advantage</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold mb-2">For Creators:</h4>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>Predictable monthly cost for studio access</li>
                      <li>Access to professional-grade facilities without major investment</li>
                      <li>Community of peers for collaboration and learning</li>
                      <li>Integrated educational resources to develop skills</li>
                      <li>Technical support from experienced professionals</li>
                      <li>Clear pathway for growth as career develops</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">For Elemental Sound:</h4>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>Predictable monthly revenue stream</li>
                      <li>Increased facility utilization across all hours</li>
                      <li>Build ongoing relationships with creators</li>
                      <li>Natural pathway for cross-service utilization</li>
                      <li>Community that attracts new members through word-of-mouth</li>
                      <li>Recurring revenue model with growth potential</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Membership Tiers Section */}
            <section id="tiers" className="scroll-mt-6 mb-16">
              <h2 className="text-3xl font-bold mb-8">Membership Tiers</h2>
              
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                {membershipTiers.map((tier, index) => (
                  <div 
                    key={index} 
                    className={`rounded-lg shadow-lg overflow-hidden ${tier.highlight ? 'border-2 border-primary-DEFAULT ring-4 ring-primary-DEFAULT/20' : ''}`}
                  >
                    <div className={`${tier.color} px-6 py-4 text-white`}>
                      <h3 className="text-2xl font-bold">{tier.name}</h3>
                      <div className="flex items-baseline mt-1">
                        <span className="text-3xl font-bold">{tier.price}</span>
                        <span className="ml-1 text-white/80">/{tier.period}</span>
                      </div>
                    </div>
                    
                    <div className="p-6 bg-white">
                      <p className="text-gray-700 mb-4">{tier.description}</p>
                      
                      <div className="mb-4">
                        <h4 className="font-semibold mb-2">Best for:</h4>
                        <div className="flex flex-wrap gap-2">
                          {tier.bestFor.map((type, i) => (
                            <span 
                              key={i} 
                              className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                            >
                              {type}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="font-semibold mb-2">Includes:</h4>
                        <ul className="space-y-2">
                          {tier.features.map((feature, i) => (
                            <li key={i} className="flex items-start">
                              <span className="text-green-500 mr-2">✓</span>
                              <span className="text-gray-700">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <Link 
                        href={tier.isEnterprise ? "/contact?subject=Studio Partner Inquiry" : "/contact?subject=Membership Inquiry"}
                        className={`block text-center py-3 px-4 rounded-lg transition-colors font-medium ${
                          tier.highlight 
                            ? 'bg-primary-DEFAULT hover:bg-primary-dark text-white' 
                            : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                        }`}
                      >
                        {tier.cta}
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-6 bg-gray-100 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Custom Enterprise Solutions</h3>
                <p className="text-gray-700 mb-4">
                  For businesses, educational institutions, and organizations with specialized needs, we offer custom 
                  membership solutions with tailored access, resources, and pricing. Our enterprise solutions can include 
                  multi-user access, dedicated facilities, and integration with your existing workflows.
                </p>
                <Link 
                  href="/contact?subject=Enterprise Membership Inquiry"
                  className="inline-block bg-gray-800 hover:bg-gray-900 text-white py-2 px-6 rounded-lg transition-colors font-medium"
                >
                  Inquire About Enterprise Solutions
                </Link>
              </div>
            </section>

            {/* Studio Facilities Section */}
            <section id="studios" className="scroll-mt-6 mb-16">
              <h2 className="text-3xl font-bold mb-8">Studio Facilities</h2>
              
              <div className="space-y-8">
                {studioSpaces.map((studio, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="aspect-video overflow-hidden">
                      <img 
                        src={studio.image} 
                        alt={studio.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-2xl font-bold mb-2">{studio.name}</h3>
                      <p className="text-gray-700 mb-6">{studio.description}</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <h4 className="text-lg font-semibold mb-3">Specifications</h4>
                          <ul className="space-y-2">
                            {studio.details.map((spec, i) => (
                              <li key={i} className="flex items-start">
                                <span className="text-primary-DEFAULT mr-2">•</span>
                                <span className="text-gray-700">{spec}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="text-lg font-semibold mb-3">Access by Membership Tier</h4>
                          <table className="w-full text-sm">
                            <tbody>
                              <tr className="border-b">
                                <td className="py-2 font-medium">Creator Pass</td>
                                <td className="py-2 text-right">{studio.memberAccess.creator}</td>
                              </tr>
                              <tr className="border-b">
                                <td className="py-2 font-medium">Producer Pass</td>
                                <td className="py-2 text-right">{studio.memberAccess.producer}</td>
                              </tr>
                              <tr className="border-b">
                                <td className="py-2 font-medium">Professional Pass</td>
                                <td className="py-2 text-right">{studio.memberAccess.basic}</td>
                              </tr>
                              <tr>
                                <td className="py-2 font-medium">Studio Partner</td>
                                <td className="py-2 text-right">{studio.memberAccess.partner}</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex justify-center">
                <Link 
                  href="/contact?subject=Studio Tour Request"
                  className="px-6 py-3 bg-primary-DEFAULT hover:bg-primary-dark text-white rounded-lg transition-colors font-medium shadow-md"
                >
                  Schedule a Studio Tour
                </Link>
              </div>
            </section>

            {/* Membership Benefits Section */}
            <section id="benefits" className="scroll-mt-6 mb-16">
              <h2 className="text-3xl font-bold mb-8">Membership Benefits</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {membershipBenefits.map((benefit, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                    <div className="text-4xl mb-4">{benefit.icon}</div>
                    <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                    <p className="text-gray-700">{benefit.description}</p>
                  </div>
                ))}
              </div>

              <div className="mt-10 bg-light-DEFAULT rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Cross-Service Integration</h3>
                <p className="text-gray-700 mb-6">
                  Membership seamlessly integrates with our other services, creating a comprehensive ecosystem to support 
                  your creative journey. Each tier includes specific benefits that extend across multiple service offerings.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 bg-white rounded-lg shadow-sm">
                    <h4 className="font-bold text-lg mb-2 text-primary-DEFAULT">Equipment Rental</h4>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>• Membership-based discounts on all rentals</li>
                      <li>• Priority access to popular equipment</li>
                      <li>• Extended rental durations for higher tiers</li>
                      <li>• Overnight privileges (Professional & above)</li>
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-white rounded-lg shadow-sm">
                    <h4 className="font-bold text-lg mb-2 text-primary-DEFAULT">Education Platform</h4>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>• Tier-based access to educational content</li>
                      <li>• Discounted or free workshop attendance</li>
                      <li>• Priority registration for limited events</li>
                      <li>• 1-on-1 sessions (higher tiers only)</li>
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-white rounded-lg shadow-sm">
                    <h4 className="font-bold text-lg mb-2 text-primary-DEFAULT">Mobile Recording</h4>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>• Membership discounts on all packages</li>
                      <li>• Credits included with Professional Pass</li>
                      <li>• Priority scheduling for members</li>
                      <li>• Custom solutions for Studio Partners</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* FAQ Section */}
            <section id="faqs" className="scroll-mt-6 mb-16">
              <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
              
              <div className="space-y-4">
                {membershipFAQs.map((faq, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-xl font-bold mb-2">{faq.question}</h3>
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* CTA Section */}
            <section className="bg-primary-DEFAULT text-white p-8 rounded-lg text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Join Our Creative Community?</h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Take the next step in your audio journey with a membership plan tailored to your needs.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  href="/contact?subject=Membership Inquiry" 
                  className="px-6 py-3 bg-white text-primary-DEFAULT hover:bg-gray-100 rounded-lg transition-colors font-medium"
                >
                  Schedule a Consultation
                </Link>
                <Link 
                  href="/client-stories" 
                  className="px-6 py-3 bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-DEFAULT rounded-lg transition-colors font-medium"
                >
                  Read Member Success Stories
                </Link>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
} 